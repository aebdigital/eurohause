"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "Domov" },
  { href: "/sluzby", label: "Služby" },
  { href: "/realizacie", label: "Realizácie" },
  { href: "/kontakt", label: "Kontakt" },
];

import Image from "next/image";
import RollText from "./RollText";

export default function Navbar() {
  const [open, setOpen] = useState(false);
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
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="nav-link" onClick={() => setOpen(false)}>
                <RollText text={l.label} />
              </Link>
            </li>
          ))}
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
