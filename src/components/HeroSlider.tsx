"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const heroImages = [
  { src: "/sources/new-photo/33cc9fd9-d8d0-4b98-ad3c-f8a02e40e871.JPG", alt: "Eurohause drevené konštrukcie 1" },
  { src: "/sources/new-photo/14a8fc15-feed-4a9b-801b-005429ce901e.JPG", alt: "Eurohause drevené konštrukcie 2" },
  { src: "/sources/new-photo/IMG-20250801-WA0014.jpg", alt: "Eurohause drevené konštrukcie 3" },
];

const testimonials = [
  {
    text: "Maximálna spokojnosť a profesionalita s dodávkou aj montážou.",
    initials: "RŽ",
    name: "Roman Žažo",
  },
  {
    text: "Profesionálny prístup, rýchle dodanie a kvalitné spracovanie rovnej väzníkovej strechy.",
    initials: "MB",
    name: "Martin Beko",
  },
  {
    text: "Firma eurohause príjemný kolektív veľmi pružná reaguje promptne čo sa týka materiálov hodnotím vysoká kvalita spokojnosť. Príjemne som prekvapený.",
    initials: "TB",
    name: "Tibor Barborik",
  },
  {
    text: "Od začiatku komunikácie až po montáž..čistá profesionalita...montáž to bol jeden zladený orchester.",
    initials: "RB",
    name: "Robert Brezovský",
  },
  {
    text: "Všetko super termín aj kvalita odporúčam.",
    initials: "MK",
    name: "Mária Kvočkuliaková",
  },
];

import RollText from "./RollText";

export default function HeroSlider() {
  const [imgIdx, setImgIdx] = useState(0);
  const [tIdx, setTIdx] = useState(0);
  const stat1Ref = useRef<HTMLDivElement>(null);
  const stat2Ref = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const a = setInterval(() => setImgIdx((i) => (i + 1) % heroImages.length), 5000);
    const b = setInterval(() => setTIdx((i) => (i + 1) % testimonials.length), 6000);
    return () => {
      clearInterval(a);
      clearInterval(b);
    };
  }, []);

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
          el.textContent = String(target);
        }
      }
      tick();
    }
    const stats = [
      { ref: stat1Ref, target: 2500 },
      { ref: stat2Ref, target: 19 },
    ];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = stats.find((s) => s.ref.current === entry.target);
            if (match && match.ref.current) {
              const el = match.ref.current.querySelector(".stat-number-text") as HTMLElement | null;
              if (el) animate(el, match.target);
            }
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    stats.forEach((s) => s.ref.current && obs.observe(s.ref.current));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background" ref={bgRef}>
        {heroImages.map((img, i) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            priority={i === 0}
            className={`hero-bg-image${i === imgIdx ? " active" : ""}`}
            style={{ objectFit: "cover" }}
          />
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Eurohause s.r.o.</h1>
          <p className="hero-subtitle">
            Dlhoročné skúsenosti v oblasti výroby a montáže drevených konštrukcií. Používame
            moderný konštručný systém MITEK s neobmedzenou variabilitou tvaru, rýchlou výrobou a
            montážou.
          </p>
          <div className="hero-actions">
            <Link href="/realizacie" className="cta-btn primary">
              <RollText text="PROJEKTY" />
            </Link>
            <Link href="/sluzby" className="cta-btn secondary">
              <RollText text="NAŠE SLUŽBY" />
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-stats">
            <div className="stat-item" ref={stat1Ref}>
              <div className="stat-number">
                <span className="stat-number-text">2500</span>
                <span className="stat-plus">+</span>
              </div>
              <div className="stat-label">realizovaných konštrukcií</div>
            </div>
            <div className="stat-item" ref={stat2Ref}>
              <div className="stat-number">
                <span className="stat-number-text">19</span>
                <span className="stat-plus">+</span>
              </div>
              <div className="stat-label">rokov skúseností</div>
            </div>
          </div>

          <div className="hero-testimonial">
            {testimonials.map((t, i) => (
              <div key={i} className={`testimonial-slide${i === tIdx ? " active" : ""}`}>
                <blockquote>&ldquo;{t.text}&rdquo;</blockquote>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <div className="avatar-initials">{t.initials}</div>
                  </div>
                  <div className="author-info">
                    <span className="author-name">{t.name}</span>
                    <div className="author-rating">
                      <span className="rating-stars">★★★★★</span>
                      <span className="rating-score">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a href="#reviews" className="more-testimonials">
            VIAC REFERENCIÍ
          </a>
        </div>
      </div>
    </section>
  );
}
