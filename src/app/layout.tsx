import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import SectionTitleObserver from "@/components/SectionTitleObserver";
import SmoothScroll from "@/components/SmoothScroll";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eurohause s.r.o. - Výroba a montáž drevených konštrukcií | Piešťany",
  description:
    "Eurohause s.r.o. - profesionálna výroba a montáž drevených konštrukcií, väzníkov MITEK, drevostavieb a klampiarskych prác v Piešťanoch a okolí. 15+ rokov skúseností, 200+ realizovaných projektov.",
  keywords:
    "drevené konštrukcie, väzníky MITEK, výroba drevostavieb, klampiarstvo, pokrývačstvo, stavebné rezivo, KVH profily, Piešťany, montáž striech",
  authors: [{ name: "Eurohause s.r.o." }],
  robots: "index, follow",
  alternates: { canonical: "https://www.eurohause.eu/" },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "https://www.eurohause.eu/",
    title: "Eurohause s.r.o. - Výroba a montáž drevených konštrukcií",
    description:
      "Profesionálna výroba a montáž drevených konštrukcií, väzníkov MITEK, drevostavieb a klampiarskych prác. 15+ rokov skúseností, 200+ realizovaných projektov.",
    siteName: "Eurohause s.r.o.",
    images: ["https://www.eurohause.eu/sources/new-photo/IMG-20250801-WA0002.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eurohause s.r.o. - Výroba a montáž drevených konštrukcií",
    description:
      "Profesionálna výroba a montáž drevených konštrukcií, väzníkov MITEK, drevostavieb a klampiarskych prác.",
    images: ["https://www.eurohause.eu/sources/new-photo/IMG-20250801-WA0002.jpg"],
  },
  metadataBase: new URL("https://www.eurohause.eu"),
  icons: { icon: "/logo.png" },
};

import CookieConsent from "@/components/CookieConsent";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk" className={montserrat.className}>
      <body>
        <SmoothScroll />
        <ScrollProgress />
        <Navbar />
        <SectionTitleObserver />
        {children}
        <Footer />
        <BackToTop />
        <CookieConsent />
      </body>
    </html>
  );
}
