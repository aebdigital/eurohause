"use client";

import { useEffect } from "react";

export default function SectionTitleObserver() {
  useEffect(() => {
    const titles = document.querySelectorAll(".section-title, .services-title, .about-title");
    const animateObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("animate");
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -100px 0px" }
    );
    const fillObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("fill-animate");
        });
      },
      { threshold: 0.5 }
    );
    titles.forEach((t) => {
      animateObs.observe(t);
      fillObs.observe(t);
    });
    return () => {
      animateObs.disconnect();
      fillObs.disconnect();
    };
  }, []);

  return null;
}
