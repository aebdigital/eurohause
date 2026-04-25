import type { Metadata } from "next";
import PhotoGallery from "@/components/PhotoGallery";
import ServiceDetailShell from "@/components/ServiceDetailShell";
import { getService, SITE_URL } from "@/lib/services";

const SLUG = "drevosklad-obchod";
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
  { src: "/sources/drevosklad/20191213_090800.jpg", alt: "Drevosklad - sortiment materiálov" },
  { src: "/sources/drevosklad/20191213_090813.jpg", alt: "Stavebné rezivo" },
  { src: "/sources/drevosklad/20191213_090826.jpg", alt: "KVH profily" },
  { src: "/sources/drevosklad/IMG-20191213-WA0005.jpg", alt: "OSB dosky" },
  { src: "/sources/drevosklad/IMG-20191213-WA0008.jpg", alt: "Drevené materiály" },
  { src: "/sources/drevosklad/IMG-20191213-WA0011.jpg", alt: "Sklad materiálov" },
];

export default function DreveskladObchodPage() {
  return (
    <ServiceDetailShell
      service={service}
      intro="Komplexný sortiment stavebného reziva a spojovacích prvkov pre profesionálnych stavbárov aj individuálnych zákazníkov."
    >
      <div className="service-photo-gallery">
        <PhotoGallery photos={photos} />
      </div>
    </ServiceDetailShell>
  );
}
