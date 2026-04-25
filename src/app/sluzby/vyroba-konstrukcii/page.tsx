import type { Metadata } from "next";
import PhotoGallery from "@/components/PhotoGallery";
import ServiceDetailShell from "@/components/ServiceDetailShell";
import { getService, SITE_URL } from "@/lib/services";

const SLUG = "vyroba-konstrukcii";
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

const vazniky = [110, 111, 112].map((n) => ({
  src: `/sources/Vyroba/${n}.JPG`,
  alt: `Priehradové väzníky MITEK ${n}`,
}));
const kvh = [1, 2, 3, 4, 5, 6].map((n) => ({
  src: `/sources/Vyroba/KVH${n}.jpg`,
  alt: `KVH profily - masívne konštrukčné drevo ${n}`,
}));
const pila = [1, 2, 3, 4, 5, 6].map((n) => ({
  src: `/sources/Vyroba/PILA${n}.jpg`,
  alt: `Automatizovaná píla EASY CUT 828 PLUS - ${n}`,
}));
const ochrana = [1, 2, 3].map((n) => ({
  src: `/sources/Vyroba/OCHRANA${n}.jpg`,
  alt: `Ochrana dreva - impregnácia ${n}`,
}));
const dosky = [1, 2, 3].map((n) => ({
  src: `/sources/Vyroba/DOSKY${n}.jpg`,
  alt: `Styčníkové dosky MITEK ${n}`,
}));
const lisovanie = [1, 2, 3, 4, 5, 6].map((n) => ({
  src: `/sources/Vyroba/LISOVANIE${n}.jpg`,
  alt: `Lisovanie konštrukcií ${n}`,
}));

export default function VyrobaKonstrukciiPage() {
  return (
    <ServiceDetailShell
      service={service}
      intro="Drevené priehradové väzníky so styčníkovými doskami od firmy Mitek sú vo svete veľmi rozšírené a obľúbené. V našich končinách voči nim ale panuje istá nedôvera prameniaca z nevedomosti."
    >
      <div className="service-description plain-description">
        <h4>Priehradové väzníky MITEK:</h4>
        <p>
          Väčšina ľudí má povedomie o tom, že väzníky sú akási prútová konštrukcia, ktorá má síce
          ľubovoľný tvar, ale žiadny využiteľný priestor. Opak je však pravdou. Okrem takmer
          neobmedzeného tvaru možno výplet väzníka v drvivej väčšine prispôsobiť tak, aby priestor
          strechy mohol byť využívaný ako podkrovie alebo ako pôda (úložný priestor).
        </p>
        <div className="service-photo-gallery">
          <PhotoGallery photos={vazniky} variant="grid-3x1" />
        </div>
      </div>

      <div className="service-description plain-description">
        <h4>Masívne Konštrukčné drevo KVH:</h4>
        <p>
          Masívne Konštrukčné drevo KVH je sortiment spoločnosti Eurohause s.r.o. Piešťany. KVH sú
          profily z ihličnatého dreva (prevažne smreka) pre použitie v moderných drevených
          stavbách. KVH profily sú štvorstranne hobľované a majú zrazené hrany. Profily sú
          technicky vysušené na vlhkosť 15 ± 2 %.
        </p>
        <p>
          Podľa účelu použitia rozlišujeme KVH-Si pre pohľadové konštrukcie a KVH-NSi pre
          nepohľadové konštrukcie. Pri vlhkosti 15 ± 3 % je drevo prirodzene chránené proti
          napadnutiu drevokaznými škodcami.
        </p>
        <p>
          Použitím zubovitého spoja je možné vyrábať profily až do max. dĺžky 13 m. Kvalita
          prevedenia a pevnostné vlastnosti zubovitých spojov sú miestom trvalého sledovania pri
          výrobe (STN EN 385: 2002).
        </p>
        <p>
          <strong>Používané lepidlá:</strong> Lepenie zubovitých spojov sa vykonáva
          polyuretánovými lepidlami bez použitia rozpúšťadiel (STN EN 301: 2007).
        </p>
        <div className="service-photo-gallery">
          <PhotoGallery photos={kvh} />
        </div>
      </div>

      <div className="service-description plain-description">
        <h4>Automatizovaná píla EASY CUT 828 PLUS:</h4>
        <p>
          Jedna z najmodernejších a najpresnejších píl na svete so štyrmi osami a laserovým
          presným meraním. Presné rezanie podľa projektu, ktorý je načítaný zo statického
          softvéru. Píla si načíta všetky prvky, ktoré idú na zákazku.
        </p>
        <p>
          Tlačiareň zapíše na každý prvok jeho číslo a kód väzníka, do ktorého daný prvok ide.
          Dĺžky, uhly a náklopy kontroluje laser.
        </p>
        <div className="service-photo-gallery">
          <PhotoGallery photos={pila} />
        </div>
      </div>

      <div className="service-description plain-description">
        <h4>Ochrana dreva - Impregnácia:</h4>
        <p>
          Ochrana dreva je dnes už nevyhnutnou súčasťou drevárskej výroby. Naša spoločnosť
          používa plne automatickú impregnačnú linku od firmy „Vyvos Cz“. Zariadenie naimpregnuje
          rezivo do hmotnosti 5000 kg pri max. dĺžke 8000 mm.
        </p>
        <p>
          Ako impregnačná látka sa používa „Bochemit QB Profi“. Účinné látky chránia drevo proti
          plesniam, hubám a drevokaznému hmyzu.
        </p>
        <div className="service-photo-gallery">
          <PhotoGallery photos={ochrana} variant="grid-3x1" />
        </div>
      </div>

      <div className="service-description plain-description">
        <h4>Styčníkové dosky MITEK:</h4>
        <p>
          Styčníkové dosky s prelisovanými tŕňmi slúžia k efektívnemu spájaniu drevených väzníkov.
          Dosky sú vyrobené z oceľového plechu akosti S 250 GD žiarovo pozinkovaného v prevedení Z
          275 podľa EN 10326.
        </p>
        <div className="service-photo-gallery">
          <PhotoGallery photos={dosky} variant="grid-3x1" />
        </div>
      </div>

      <div className="service-description plain-description">
        <h4>Lisovanie konštrukcií:</h4>
        <p>
          Vlastné lisovanie sa prevádza pomocou portálového lisu, ktorý sa dá nastaviť na štyri
          stupne lisovacieho tlaku. Maximálny tlak je 500 kN.
        </p>
        <p>
          Systém „MITEK“ umožňuje vyrábať konštrukcie s maximálnym rozpätím 30 m. Väzník je
          zložený z jednotlivých prírezov na oceľových lisovacích stoloch s pohyblivou platňou.
        </p>
        <div className="service-photo-gallery">
          <PhotoGallery photos={lisovanie} />
        </div>
      </div>
    </ServiceDetailShell>
  );
}
