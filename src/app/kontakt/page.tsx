import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { SITE_URL } from "@/lib/services";

export const metadata: Metadata = {
  title: "Kontakt - Eurohause s.r.o. | Piešťany, Orviská cesta 7137",
  description:
    "Kontaktujte Eurohause s.r.o. pre drevené konštrukcie a väzníky MITEK. Sídlo: Orviská cesta 7137, Piešťany. Tel: +421 902 940 600, Email: konatel@eurohause.eu",
  alternates: { canonical: `${SITE_URL}/kontakt` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/kontakt`,
    title: "Kontakt - Eurohause s.r.o. | Piešťany",
    description:
      "Kontaktujte Eurohause s.r.o. pre drevené konštrukcie a väzníky MITEK. Sídlo: Orviská cesta 7137, Piešťany.",
    images: [`${SITE_URL}/logo.png`],
  },
};

const contactLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Kontakt - Eurohause s.r.o.",
  url: `${SITE_URL}/kontakt`,
  description:
    "Kontaktné informácie pre Eurohause s.r.o. - výroba a montáž drevených konštrukcií",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Eurohause s.r.o.",
    telephone: "+421902940600",
    email: "konatel@eurohause.eu",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Orviská cesta 7137",
      addressLocality: "Piešťany",
      postalCode: "92101",
      addressCountry: "SK",
    },
    openingHours: "Mo-Fr 08:00-17:00",
  },
};

const breadcrumbsLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Domov", item: SITE_URL + "/" },
    { "@type": "ListItem", position: 2, name: "Kontakt", item: SITE_URL + "/kontakt" },
  ],
};

import FadeInUp from "@/components/FadeInUp";

export default function KontaktPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }}
      />
      <section className="contact-hero">
        <div className="contact-hero-bg">
          <Image
            src="/sources/new-photo/IMG-20250801-WA0003.jpg"
            alt="Kontakt pozadie"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="contact-hero-content">
          <div className="container">
            <FadeInUp keyId="kontakt-title">
              <h1 className="contact-hero-title">Kontakt</h1>
            </FadeInUp>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <FadeInUp keyId="kontakt-grid" delay={0.2}>
            <div className="contact-grid">
              <div className="contact-form-wrapper">
                <h2>Napíšte nám</h2>
                <ContactForm />
              </div>

              <div className="contact-info-wrapper">
                <div className="contact-info-item">
                <div className="contact-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div className="contact-details">
                  <h3>Adresa</h3>
                  <p>
                    <a
                      href="https://goo.gl/maps/3SL2KSs7xCSn8Evp7"
                      target="_blank"
                      rel="noopener"
                      style={{ textDecoration: "underline" }}
                    >
                      Orviská cesta 7137
                      <br />
                      921 01 Piešťany
                      <br />
                      Slovenská republika
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="contact-details">
                  <h3>Telefón</h3>
                  <p>
                    <a href="tel:+421902940600">+421 902 940 600</a>
                  </p>
                  <p>
                    <a href="tel:+421902940601">+421 902 940 601</a>
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:konatel@eurohause.eu">konatel@eurohause.eu</a>
                  </p>
                  <p>
                    <a href="mailto:asistent@eurohause.eu">asistent@eurohause.eu</a>
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div className="contact-details">
                  <h3>Pracovné hodiny</h3>
                  <p>
                    Pondelok – Piatok
                    <br />
                    08:00 – 16:00
                  </p>
                </div>
              </div>

              <div className="contact-business-info">
                <h3>Eurohause s.r.o.</h3>
                <div className="business-details">
                  <p>
                    <strong>IČO:</strong> 36286087
                  </p>
                  <p>
                    <strong>DIČ:</strong> 2022162461
                  </p>
                  <p>
                    <strong>IČ DPH:</strong> SK2022162461
                  </p>
                  <p>
                    <strong>Špecializácia:</strong> Výroba a montáž drevených konštrukcií,
                    pokrývačské práce
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>

      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5309.6469135780!2d17.8260!3d48.5921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f11.5!3m3!1m2!1s0x476b59d654ff33c9%3A0xf9cb0cab02c879b4!2sOrvisk%C3%A1%20cesta%207137%2C%20921%2001%20Pie%C5%A1%C5%A5any%2C%20Slovakia!5e0!3m2!1sen!2s!4v1672345567890!5m2!1sen!2s"
          width="100%"
          height={400}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Eurohause s.r.o. - Orviská cesta 7137, Piešťany"
        />
      </section>
    </>
  );
}
