"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    function check() {
      setMobile(window.innerWidth <= 768);
    }
    function onScroll() {
      setShow(window.scrollY > 300);
    }
    check();
    window.addEventListener("resize", check);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("resize", check);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!mobile) return null;

  return (
    <button
      className={`back-to-top${show ? " show" : ""}`}
      aria-label="Späť na vrch"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </button>
  );
}
