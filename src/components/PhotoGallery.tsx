"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export type Photo = { src: string; alt: string };

export default function PhotoGallery({
  photos,
  variant = "grid",
}: {
  photos: Photo[];
  variant?: "grid" | "grid-3x1" | "grid-klampiar" | "portfolio";
}) {
  const [idx, setIdx] = useState<number | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (idx === null) return;
      if (e.key === "Escape") setIdx(null);
      else if (e.key === "ArrowRight") setIdx((i) => (i === null ? null : (i + 1) % photos.length));
      else if (e.key === "ArrowLeft")
        setIdx((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
    }
    if (idx !== null) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "auto";
    };
  }, [idx, photos.length]);

  let gridClass = "photo-grid";
  if (variant === "grid-3x1") gridClass = "photo-grid-3x1";
  else if (variant === "grid-klampiar") gridClass = "photo-grid-klampiar";
  else if (variant === "portfolio") gridClass = "portfolio-grid";

  return (
    <>
      <div className={gridClass}>
        {photos.map((p, i) =>
          variant === "portfolio" ? (
            <div key={i} className="portfolio-item visible" onClick={() => setIdx(i)}>
              <div className="portfolio-image-container" style={{ position: "relative", width: "100%", height: "100%", aspectRatio: "4/3" }}>
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ) : (
            <div key={i} className="photo-item" onClick={() => setIdx(i)}>
              <div className="photo-image-container" style={{ position: "relative", width: "100%", height: "100%", aspectRatio: "3/2" }}>
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>
          )
        )}
      </div>

      <div
        className={`lightbox${idx !== null ? " active" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setIdx(null);
        }}
      >
        <div className="lightbox-content">
          <button className="lightbox-close" onClick={() => setIdx(null)} aria-label="Zavrieť">
            &times;
          </button>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={() =>
              setIdx((i) => (i === null ? null : (i - 1 + photos.length) % photos.length))
            }
            aria-label="Predchádzajúce"
          >
            ‹
          </button>
          {idx !== null && (
            <div className="lightbox-image-wrapper" style={{ position: "relative", width: "100%", height: "80vh" }}>
              <Image
                id="lightbox-image"
                className="lightbox-image"
                src={photos[idx].src}
                alt={photos[idx].alt}
                fill
                style={{ objectFit: "contain" }}
                onClick={() => setIdx((i) => (i === null ? null : (i + 1) % photos.length))}
              />
            </div>
          )}
          <button
            className="lightbox-nav lightbox-next"
            onClick={() => setIdx((i) => (i === null ? null : (i + 1) % photos.length))}
            aria-label="Ďalšie"
          >
            ›
          </button>
        </div>
      </div>
    </>
  );
}
