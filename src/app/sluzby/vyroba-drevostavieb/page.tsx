import type { Metadata } from "next";
import PhotoGallery from "@/components/PhotoGallery";
import ServiceDetailShell from "@/components/ServiceDetailShell";
import { getService, SITE_URL } from "@/lib/services";

const SLUG = "vyroba-drevostavieb";
const service = getService(SLUG)!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: `${SITE_URL}/sluzby/${SLUG}` },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/sluzby/${SLUG}`,
    title: service.metaTitle,
    description: service.metaDescription,
    images: [`${SITE_URL}${service.ogImage}`],
  },
};

const photos = [
  { src: "/sources/drevostavby/2012-04-03-190.jpg", alt: "Drevená stavba - výstavba" },
  { src: "/sources/drevostavby/2012-04-03-194-large.jpg", alt: "Moderná drevostava" },
  { src: "/sources/drevostavby/2012-09-28-213-2-large.jpg", alt: "Drevostava v procese výstavby" },
  { src: "/sources/drevostavby/IMG-20170330-WA0039-large.jpg", alt: "Kompletná drevostava" },
  { src: "/sources/drevostavby/IMG_0525-large-2.jpg", alt: "Drevené konštrukcie" },
  { src: "/sources/drevostavby/e5-large.jpg", alt: "Výroba drevostavieb" },
  { src: "/sources/drevostavby/200.JPG", alt: "Výroba drevostavieb" },
  { src: "/sources/drevostavby/201.JPG", alt: "Výroba drevostavieb" },
  { src: "/sources/drevostavby/202.JPG", alt: "Výroba drevostavieb" },
  { src: "/sources/drevostavby/203.JPG", alt: "Výroba drevostavieb" },
  { src: "/sources/drevostavby/204.jpg", alt: "Výroba drevostavieb" },
  { src: "/sources/drevostavby/205.jpg", alt: "Výroba drevostavieb" },
  { src: "/sources/drevostavby/206.jpg", alt: "Výroba drevostavieb" },
];

export default function VyrobaDrevostavebPage() {
  return (
    <ServiceDetailShell
      service={service}
      intro="Moderné drevené stavby navrhnuté podľa európskych štandardov kvality s optimalizáciou investičných nákladov."
    >
      <div className="service-photo-gallery">
        <PhotoGallery photos={photos} />
      </div>
    </ServiceDetailShell>
  );
}
