"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import RollText from "./RollText";
import { services } from "@/lib/services";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function update() {
      const nav = navRef.current;
      if (!nav) return;
      const isHome = pathname === "/";
      const trigger = window.innerHeight * (isHome ? 0.3 : 0.1);
      if (window.scrollY > trigger) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    }
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    if (open) nav.classList.add("mobile-menu-open");
    else nav.classList.remove("mobile-menu-open");
  }, [open]);

  return (
    <nav ref={navRef} className="navbar navbar-transparent">
      <div className="nav-container">
        <div className="nav-logo">
          <Link href="/" className="logo-link">
            <Image src="/logo.png" alt="Eurohause" width={180} height={40} className="logo-image" priority />
          </Link>
        </div>
        <ul className={`nav-menu${open ? " active" : ""}`}>
          <li>
            <Link href="/" className="nav-link" onClick={() => setOpen(false)}>
              <RollText text="Domov" />
            </Link>
          </li>
          <li 
            className={`nav-item-dropdown ${dropdownOpen ? 'open' : ''}`}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span 
              className="nav-link dropdown-trigger"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <RollText text="Služby" />
              <svg className="dropdown-icon" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <ul className="dropdown-menu">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/sluzby/${s.slug}`} onClick={() => { setOpen(false); setDropdownOpen(false); }}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link href="/realizacie" className="nav-link" onClick={() => setOpen(false)}>
              <RollText text="Realizácie" />
            </Link>
          </li>
          <li>
            <Link href="/kontakt" className="nav-link" onClick={() => setOpen(false)}>
              <RollText text="Kontakt" />
            </Link>
          </li>
        </ul>
        <div
          className={`hamburger${open ? " active" : ""}`}
          onClick={() => setOpen((v) => !v)}
          role="button"
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
}
