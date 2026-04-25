import Link from "next/link";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import ServicesCarousel from "@/components/ServicesCarousel";
import AboutStats from "@/components/AboutStats";
import RollText from "@/components/RollText";
import { services, SITE_URL } from "@/lib/services";

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Eurohause s.r.o.",
  description:
    "Profesionálna výroba a montáž drevených konštrukcií, väzníkov MITEK, drevostavieb a klampiarskych prác v Piešťanoch a okolí.",
  url: SITE_URL,
  telephone: "+421902940600",
  email: "konatel@eurohause.eu",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Orviská cesta 7137",
    addressLocality: "Piešťany",
    postalCode: "92101",
    addressCountry: "SK",
  },
  geo: { "@type": "GeoCoordinates", latitude: "48.5921", longitude: "17.8260" },
  openingHours: "Mo-Fr 08:00-17:00",
  priceRange: "€€€",
  image: `${SITE_URL}/logo.png`,
  logo: `${SITE_URL}/logo.png`,
  areaServed: { "@type": "Place", name: "Piešťany a okolie, Trnavský kraj" },
  serviceType: "Výroba a montáž drevených konštrukcií",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Služby Eurohause",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.metaDescription,
        url: `${SITE_URL}/sluzby/${s.slug}`,
      },
    })),
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "5",
    bestRating: "5",
    worstRating: "5",
  },
  sameAs: ["https://share.google.com/UarZt9AmDqTVaFKsT"],
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Eurohause s.r.o.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+421902940600",
    contactType: "customer service",
    availableLanguage: "Slovak",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Orviská cesta 7137",
    addressLocality: "Piešťany",
    postalCode: "92101",
    addressCountry: "SK",
  },
  foundingDate: "2006",
  numberOfEmployees: "10-50",
  sameAs: ["https://share.google.com/UarZt9AmDqTVaFKsT"],
};

const galleryImages = [
  { src: "/sources/new-photo/002118e6-1399-4f5d-a260-73c08823d02a.JPG", alt: "Eurohause - drevené konštrukcie" },
  { src: "/sources/new-photo/14a8fc15-feed-4a9b-801b-005429ce901e.JPG", alt: "Eurohause - výroba konštrukcií" },
  { src: "/sources/new-photo/1bfd3020-ddbc-44b6-9f92-44b737a6dbe0.JPG", alt: "Eurohause - montáž a preprava" },
  { src: "/sources/new-photo/1e0bef74-af84-4640-8d4e-7a1851b64363.JPG", alt: "Eurohause - obkladačské práce" },
  { src: "/sources/new-photo/2ff18abd-e19c-4837-9770-43fd13cfa115.JPG", alt: "Eurohause - drevostavby" },
  { src: "/sources/new-photo/33cc9fd9-d8d0-4b98-ad3c-f8a02e40e871.JPG", alt: "Eurohause - drevosklad" },
  { src: "/sources/new-photo/45c5b270-9160-47fd-9ddc-f0c6d4de132e.JPG", alt: "Eurohause - špeciálne práce" },
];

const reviews = [
  { initials: "RŽ", name: "Roman Žažo", text: "Maximálna spokojnosť a profesionalita s dodávkou aj montážou." },
  { initials: "MB", name: "Martin Beko", text: "Profesionálny prístup, rýchle dodanie a kvalitné spracovanie rovnej väzníkovej strechy." },
  {
    initials: "TB",
    name: "Tibor Barborik",
    text: "Firma eurohause príjemný kolektív veľmi pružná reaguje promptne čo sa týka materiálov hodnotím vysoká kvalita spokojnosť. Príjemne som prekvapený.",
  },
  {
    initials: "RB",
    name: "Robert Brezovský",
    text: "Od začiatku komunikácie až po montáž..čistá profesionalita...montáž to bol jeden zladený orchester.",
  },
  { initials: "MK", name: "Mária Kvočkuliaková", text: "Všetko super termín aj kvalita odporúčam." },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />

      <HeroSlider />

      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-left">
              <div className="about-header">
                <span className="about-label">— Kto sme</span>
                <h2 className="about-title" data-text="O nás">
                  O nás
                </h2>
              </div>
              <div className="about-text">
                <p>
                  Spoločnosť Eurohause s.r.o. sa s dlhoročnými skúsenosťami a dôrazom na kvalitu
                  práce venuje výrobe a montži drevených konštrukcií. Používame pokročilý
                  konštrukčný systém MITEK na výrobu drevených konštrukcií so styčníkovými
                  doskami, ktorý zaručuje neobmedzenú variabilitu tvaru, jednoduché riešenie,
                  rýchlosť výroby a montáže.
                  <br />
                  <br />
                  Výroba konštrukcií pozostáva z narezania KVH profilov na plne automatizovanej
                  píle EASY CUT 828 PLUS a lisovania konštrukcie na plochom lise MARK VI. Montáž
                  a prepravu konštrukcií zabezpečujeme vlastnou dopravou na prepravu vazníkov.
                  Zaoberáme sa aj predajom stavebného reziva, OSB dosiek, profilov KVH a BSH.
                  <br />
                  <br />
                  V súvislosti so vstupom do EÚ sme reagovali na požiadavky kvality stavby, ako i
                  na optimalizáciu vyložených investičných nákladov potrebných na výstavbu.{" "}
                  <strong>Kvalita a spokojnosť zákazníkov sú pre nás prvoradé</strong> - každý
                  projekt realizujeme s maximálnou starostlivosťou a pozornosťou k detailom.
                </p>

                <Link href="/kontakt" className="about-btn">
                  <RollText text="Kontaktovať nás" />
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="about-right">
              <div className="about-image-wrapper">
                <Image
                  src="/sources/new-photo/IMG-20250801-WA0008.jpg"
                  alt="Eurohause drevené konštrukcie"
                  width={600}
                  height={800}
                  className="about-image"
                />
              </div>
              <AboutStats />
            </div>
          </div>
        </div>
      </section>

      <div id="services-wrapper">
        <ServicesCarousel />
      </div>

      <section id="gallery" className="gallery">
        <div className="container">
          <h2 className="section-title" data-text="Realizácie">
            Realizácie
          </h2>
          <div className="gallery-grid">
            {galleryImages.map((g) => (
              <div key={g.src} className="gallery-item">
                <Link href="/realizacie" className="gallery-link">
                  <div className="gallery-image-container">
                    <Image src={g.src} alt={g.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                </Link>
              </div>
            ))}
            <div className="gallery-item gallery-all-projects">
              <Link href="/realizacie" className="gallery-all-link">
                <div className="gallery-all-content">
                  <h3>Všetky projekty</h3>
                  <div className="gallery-all-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="reviews">
        <div className="container">
          <div className="reviews-header">
            <h2 className="section-title" data-text="Recenzie">
              Recenzie
            </h2>
          </div>
          <div className="reviews-grid">
            {reviews.map((r) => (
              <div key={r.name} className="review-card">
                <div className="review-author">
                  <div className="author-avatar">
                    <div className="avatar-initials">{r.initials}</div>
                  </div>
                  <div className="author-info">
                    <div className="review-rating">
                      <span className="rating-stars">★★★★★</span>
                    </div>
                    <span className="author-name">{r.name}</span>
                  </div>
                </div>
                <p className="review-text">&ldquo;{r.text}&rdquo;</p>
              </div>
            ))}
          </div>
          <div className="reviews-cta">
            <a
              href="https://www.google.com/maps/place/?q=place_id:ChIJyTb_5dlUa0cRtHnECrIcy_k"
              className="reviews-btn"
              target="_blank"
              rel="noopener"
            >
              <RollText text="Všetky recenzie" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
