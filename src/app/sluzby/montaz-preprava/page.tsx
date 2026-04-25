import type { Metadata } from "next";
import PhotoGallery from "@/components/PhotoGallery";
import ServiceDetailShell from "@/components/ServiceDetailShell";
import { getService, SITE_URL } from "@/lib/services";

const SLUG = "montaz-preprava";
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
  { src: "/sources/montaz_preprava/IMG-20190228-WA0017-2.jpg", alt: "Montáž drevených konštrukcií" },
  { src: "/sources/montaz_preprava/IMG-20190826-WA0010.jpg", alt: "Preprava nadrozmerných konštrukcií" },
  { src: "/sources/montaz_preprava/IMG-20191002-WA0015.jpg", alt: "Montáž pomocou žeriavu" },
  { src: "/sources/montaz_preprava/IMG-20191023-WA0000.jpg", alt: "Montáž strešných konštrukcií" },
  { src: "/sources/montaz_preprava/IMG-20200219-WA0014.jpg", alt: "Preprava materiálov" },
  { src: "/sources/montaz_preprava/IMG-20210319-WA0000.jpg", alt: "Vykládka a nakládka materiálu" },
  { src: "/sources/montaz_preprava/100.jpg", alt: "Montáž drevených konštrukcií" },
  { src: "/sources/montaz_preprava/101.jpg", alt: "Preprava materiálov" },
  { src: "/sources/montaz_preprava/102.jpg", alt: "Vykládka a nakládka" },
];

export default function MontazPrepravaPage() {
  return (
    <ServiceDetailShell
      service={service}
      intro="Montáž a prepravu konštrukcií zabezpečuje firma Eurohause s.r.o. EUROHAUSE s.r.o. Piešťany ma vlastnú dopravu na prepravu väzníkov a tak isto aj na prepravu nadrozmerných konštrukcií. Taktiež zabezpečuje aj vykládku a nakládku materiálu 20 t žeriavom. Menšie materiály krytiny zabezpečuje firma vlastnou prepravou autom s hydraulickou rukou. Pri montáži firma dodáva kompletnú kotviacu techniku."
    >
      <div className="service-photo-gallery">
        <PhotoGallery photos={photos} />
      </div>
    </ServiceDetailShell>
  );
}
