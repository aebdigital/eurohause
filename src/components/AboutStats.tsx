"use client";

import { useEffect, useRef } from "react";

export default function AboutStats() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function animate(el: HTMLElement, target: number, duration = 2000) {
      let start = 0;
      const inc = target / (duration / 16);
      function tick() {
        start += inc;
        if (start < target) {
          el.textContent = String(Math.floor(start));
          requestAnimationFrame(tick);
        } else {
          el.textContent = `${target}+`;
        }
      }
      tick();
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const nums = entry.target.querySelectorAll<HTMLElement>(".stat-number");
            nums.forEach((el) => {
              const target = parseInt(el.textContent?.replace("+", "") || "0", 10);
              if (!isNaN(target)) animate(el, target);
            });
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="about-stats" ref={sectionRef}>
      <div className="stat-box stat-black">
        <div className="stat-icon">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path
              d="M12 36h24V16L24 8 12 16v20zM16 32v-6h4v6h-4zM28 32v-6h4v6h-4z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="stat-content">
          <div className="stat-number">2500+</div>
          <div className="stat-label">realizovaných konštrukcií</div>
        </div>
      </div>
      <div className="stat-box stat-yellow">
        <div className="stat-icon">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path
              d="M24 4L28 16h12l-10 8 4 12-10-8-10 8 4-12-10-8h12l4-12z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="stat-content">
          <div className="stat-number">19+</div>
          <div className="stat-label">rokov skúseností</div>
        </div>
      </div>
    </div>
  );
}
