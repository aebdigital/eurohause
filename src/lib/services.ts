export type Photo = { src: string; alt: string };

export type ServiceSummary = {
  slug: string;
  num: string;
  title: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  ogImage: string;
};

export const services: ServiceSummary[] = [
  {
    slug: "navrh-konstrukcii",
    num: "01.",
    title: "Návrh konštrukcií",
    shortDescription:
      "Konštrukčný systém MITEK na výrobu drevených konštrukcií so styčníkovými doskami má neobmedzenú variabilitu tvaru, jednoduché riešenie, rýchlosť výroby a montáže.",
    metaTitle: "Návrh drevených konštrukcií MITEK | Eurohause s.r.o. Piešťany",
    metaDescription:
      "Profesionálny návrh drevených konštrukcií so styčníkovými doskami MITEK. Licenčný softvér, statický prepočet, optimálna spotreba reziva podľa STN a EN.",
    ogImage: "/sources/Navrh/navrh.png",
  },
  {
    slug: "vyroba-konstrukcii",
    num: "02.",
    title: "Výroba konštrukcií",
    shortDescription:
      "Výroba konštrukcií pozostáva z narezania KVH profilov na plne automatizovanej píle EASY CUT 828 PLUS a lisovania konštrukcie na lise plochom MARK VI.",
    metaTitle: "Výroba drevených konštrukcií a väzníkov MITEK | Eurohause s.r.o.",
    metaDescription:
      "Výroba priehradových väzníkov MITEK, KVH profilov, automatizovaná píla EASY CUT 828 PLUS, impregnácia a lisovanie konštrukcií. Eurohause Piešťany.",
    ogImage: "/sources/Vyroba/KVH1.jpg",
  },
  {
    slug: "montaz-preprava",
    num: "03.",
    title: "Montáž a preprava",
    shortDescription:
      "Montáž a prepravu drevených konštrukcií zabezpečujeme vlastnou dopravou na prepravu väzníkov a nadrozmerných konštrukcií, vrátane vykládky 20 t žeriavom.",
    metaTitle: "Montáž a preprava drevených konštrukcií | Eurohause s.r.o.",
    metaDescription:
      "Montáž a preprava drevených konštrukcií vlastnou dopravou. Vykládka a nakládka 20 t žeriavom. Hydraulická ruka pre menšie materiály a krytiny.",
    ogImage: "/sources/montaz_preprava/IMG-20190228-WA0017-2.jpg",
  },
  {
    slug: "klampiar-pokryvac",
    num: "04.",
    title: "Klampiarske a pokrývačské práce",
    shortDescription:
      "Pokrývačské a klampiarské práce, ploché aj šikmé strechy. Realizácia novostavieb aj rekonštrukcií s dôrazom na kvalitu a dlhú životnosť.",
    metaTitle: "Klampiarske a pokrývačské práce | Eurohause s.r.o. Piešťany",
    metaDescription:
      "Pokrývačské a klampiarske práce, predaj strešných krytín (plechové, škridlové, PVC fólie, odkvapové systémy). Štítové, valbové, pultové a ploché strechy.",
    ogImage: "/sources/klampiar/IMG-20241216-WA0037.jpg",
  },
  {
    slug: "vyroba-drevostavieb",
    num: "05.",
    title: "Výroba drevostavieb",
    shortDescription:
      "Moderné drevené stavby navrhnuté podľa európskych štandardov kvality s optimalizáciou investičných nákladov potrebných na výstavbu.",
    metaTitle: "Výroba drevostavieb na kľúč | Eurohause s.r.o. Piešťany",
    metaDescription:
      "Výroba moderných drevostavieb podľa európskych štandardov kvality. Optimalizácia investičných nákladov, profesionálna realizácia rodinných domov.",
    ogImage: "/sources/drevostavby/IMG-20170330-WA0039-large.jpg",
  },
  {
    slug: "drevosklad-obchod",
    num: "06.",
    title: "Drevosklad - obchod",
    shortDescription:
      "Predaj stavebného reziva, OSB dosiek, profilov KVH a BSH a kompletných spojovacích prvkov pre klasické aj priehradové strechy.",
    metaTitle: "Drevosklad - predaj stavebného reziva, KVH a BSH | Eurohause",
    metaDescription:
      "Drevosklad Eurohause Piešťany - predaj stavebného reziva, OSB dosiek, profilov KVH a BSH a spojovacích prvkov pre strechy. Komplexný sortiment.",
    ogImage: "/sources/drevosklad/20191213_090800.jpg",
  },
];

export function getService(slug: string): ServiceSummary | undefined {
  return services.find((s) => s.slug === slug);
}

export const SITE_URL = "https://www.eurohause.eu";
