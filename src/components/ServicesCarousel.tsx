"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Service = {
  num: string;
  title: string;
  text: string;
  href: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    num: "01.",
    title: "Návrh konštrukcií",
    text: "Konštrukčný systém MITEK na výrobu drevených konštrukcií so styčníkovými doskami má  neobmedzenú variabilitu tvaru, jednodn. riešenie, rýchlosť výroby a montáže",
    href: "/sluzby/navrh-konstrukcii",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path
          d="M5 45h50v-5H5v5zm47.5-15H50v-5h2.5v5zm-45 0H10v-5H7.5v5zM10 25h40v-5H10v5zm0-10h40v-5H10v5z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    num: "02.",
    title: "Výroba konštrukcií",
    text: "Výroba konštrukcii pozostáva z narezania KVH profilov  na plne automatiizovanej pile EASY CUT 828 PLUS a lisovaní konštrukcie na lise plochom  lise MARK VI.",
    href: "/sluzby/vyroba-konstrukcii",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path
          d="M42 30c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12zm-24 0c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12zm12 6c-8.2 0-15 6.8-15 15v9h30v-9c0-8.2-6.8-15-15-15z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    num: "03.",
    title: "Montáž a preprava",
    text: "Montáž, prepravu konštrukcií  zabezpečuje .Eurohause s.r.o.  EUROHAUSE s.r.o. Piešťany ma vlastnú dopravu na prepravu vazníkov.",
    href: "/sluzby/montaz-preprava",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M30 5L5 20v25h50V20L30 5zM15 40V25l15-10 15 10v15H15z" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: "04.",
    title: "Klampiarske a pokrývačské práce",
    text: "Pokrývačské a klampiarské práce, ploché aj šikmé strechy. Realizácia novostavieb aj rekonštrukcií s dôrazom na kvalitu a dlhotrvanlivosť.",
    href: "/sluzby/klampiar-pokryvac",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path
          d="M20 10h20v5H20v-5zm-5 10h30v5H15v-5zm5 10h20v5H20v-5zm-5 10h30v5H15v-5zm5 10h20v5H20v-5z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    num: "05.",
    title: "Výroba drevostavieb",
    text: "V súvislosti so vstupom  do EÚ sme reagovali na  požiadavky kvality stavby, ako i na optimalizáciu vynaložených investičných nákladov potrebných na výstavbu. ",
    href: "/sluzby/vyroba-drevostavieb",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M10 10h40v40H10V10zm5 5v30h30V15H15z" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: "06.",
    title: "Drevosklad - obchod",
    text: "Zaoberáme sa predajom stavebného reziva,OSB dosiek , profilov KVH,profilov BSH.Taktiež sa zaoberáme predajom kompletných spojovacích prvkov pri výrobe klasických ako priehradových striech.",
    href: "/sluzby/drevosklad-obchod",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M5 5h50v50H5V5zm5 5v40h40V10H10z" fill="currentColor" />
      </svg>
    ),
  },
];

import RollText from "./RollText";

export default function ServicesCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [slide, setSlide] = useState(0);
  const max = Math.max(0, services.length - 3);

  function update(next: number) {
    const c = carouselRef.current;
    if (!c) return;
    const card = c.querySelector(".service-card") as HTMLElement | null;
    if (!card) return;
    const w = card.offsetWidth + 40;
    c.style.transform = `translateX(${-(next * w)}px)`;
    setSlide(next);
  }

  useEffect(() => {
    update(slide);
    function onResize() {
      update(slide);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slide]);

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title" data-text="Naše služby">
            Naše služby
          </h2>
          <div className="services-navigation">
            <div className="services-btn-controls">
              <Link href="/sluzby" className="services-all-btn">
                <RollText text="VŠETKY SLUŽBY" />
              </Link>
              <div className="carousel-controls">
                <button
                  className="carousel-btn carousel-prev"
                  aria-label="Previous"
                  disabled={slide === 0}
                  onClick={() => update(Math.max(0, slide - 1))}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  className="carousel-btn carousel-next"
                  aria-label="Next"
                  disabled={slide >= max}
                  onClick={() => update(Math.min(max, slide + 1))}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="services-carousel-container">
          <div className="services-carousel" ref={carouselRef}>
            {services.map((s) => (
              <div key={s.num} className="service-card">
                <div className="service-arrow">↗</div>
                <div className="service-number">{s.num}</div>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <Link href={s.href} className="service-btn">
                  <RollText text="Zobraziť viac" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
