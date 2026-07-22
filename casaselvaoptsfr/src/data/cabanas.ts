export type Temporada = "baja" | "media" | "alta";

export interface TarifaTemporada {
  temporada: Temporada;
  precioMXN: number;
}

export interface Cabana {
  slug: string;
  nombre: string;
  capacidad: { es: string; en: string };
  superficie: string;
  distribucion: { es: string; en: string };
  vista: { es: string; en: string };
  destacado: { es: string; en: string };
  tarifas: TarifaTemporada[];
}

export const TEMPORADAS: {
  id: Temporada;
  label: { es: string; en: string };
  rango: { es: string; en: string };
}[] = [
  {
    id: "baja",
    label: { es: "Temporada baja", en: "Low season" },
    rango: { es: "Junio a septiembre", en: "June to September" },
  },
  {
    id: "media",
    label: { es: "Temporada media", en: "Mid season" },
    rango: { es: "Mayo, octubre y noviembre", en: "May, October and November" },
  },
  {
    id: "alta",
    label: { es: "Temporada alta", en: "High season" },
    rango: { es: "Diciembre a abril", en: "December to April" },
  },
];

export const CABANAS: Cabana[] = [
  {
    slug: "canopy-cabin",
    nombre: "Canopy Cabin",
    capacidad: { es: "2 personas (pareja)", en: "2 guests (couple)" },
    superficie: "~40 m²",
    distribucion: {
      es: "Recámara, baño con regadera, cocineta totalmente equipada y terraza amplia.",
      en: "Bedroom, bathroom with shower, fully equipped kitchenette and a spacious terrace.",
    },
    vista: { es: "Jardines de la propiedad", en: "Property gardens" },
    destacado: {
      es: "Terraza amplia rodeada del dosel de la selva, ideal para descansar al aire libre.",
      en: "Spacious terrace surrounded by the jungle canopy, ideal for resting outdoors.",
    },
    tarifas: [
      { temporada: "baja", precioMXN: 3000 },
      { temporada: "media", precioMXN: 4000 },
      { temporada: "alta", precioMXN: 5000 },
    ],
  },
  {
    slug: "jungle-nest",
    nombre: "Jungle Nest",
    capacidad: { es: "2 personas (pareja)", en: "2 guests (couple)" },
    superficie: "~50 m²",
    distribucion: {
      es: "Recámara independiente, sala, cocineta totalmente equipada y baño con regadera.",
      en: "Separate bedroom, living room, fully equipped kitchenette and bathroom with shower.",
    },
    vista: { es: "Jardines de la propiedad", en: "Property gardens" },
    destacado: {
      es: "La recámara está separada de la sala y la cocineta, lo que brinda mayor privacidad y amplitud. Ambiente íntimo en el corazón de la vegetación.",
      en: "The bedroom is separate from the living room and kitchenette, offering more privacy and space. An intimate setting at the heart of the vegetation.",
    },
    tarifas: [
      { temporada: "baja", precioMXN: 3000 },
      { temporada: "media", precioMXN: 4000 },
      { temporada: "alta", precioMXN: 5000 },
    ],
  },
  {
    slug: "treehouse",
    nombre: "Treehouse",
    capacidad: { es: "Hasta 3 personas", en: "Up to 3 guests" },
    superficie: "~60 m²",
    distribucion: {
      es: "Dos niveles con acceso mediante escalera interna (empinada). Planta baja: sala y cocineta totalmente equipada. Planta alta: recámara y baño con regadera.",
      en: "Two levels connected by a steep interior staircase. Ground floor: living room and fully equipped kitchenette. Upper floor: bedroom and bathroom with shower.",
    },
    vista: {
      es: "Jardines de la propiedad y, a lo lejos, el mar",
      en: "Property gardens and, in the distance, the ocean",
    },
    destacado: {
      es: "La cabaña más inmersiva de Casa Selva, con una vista excepcional desde la planta alta. Nota: la escalera interna es empinada, no recomendable para huéspedes con dificultades de movilidad.",
      en: "Casa Selva's most immersive cabin, with an exceptional view from the upper floor. Note: the interior staircase is steep, not recommended for guests with mobility difficulties.",
    },
    tarifas: [
      { temporada: "baja", precioMXN: 3500 },
      { temporada: "media", precioMXN: 4600 },
      { temporada: "alta", precioMXN: 5800 },
    ],
  },
  {
    slug: "casa-selva",
    nombre: "Casa Selva",
    capacidad: { es: "2 personas (pareja)", en: "2 guests (couple)" },
    superficie: "~60 m²",
    distribucion: {
      es: "Recámara y baño independientes; cocineta totalmente equipada en terraza exterior; amplia terraza con hamacas y sillones.",
      en: "Separate bedroom and bathroom; fully equipped kitchenette on the outdoor terrace; spacious terrace with hammocks and lounge chairs.",
    },
    vista: { es: "Jardines de la propiedad", en: "Property gardens" },
    destacado: {
      es: "La cabaña más espaciosa en exterior. La cocineta al aire libre y la terraza con hamacas crean una experiencia de vida al ritmo de la selva.",
      en: "The cabin with the most spacious outdoor area. The open-air kitchenette and hammock terrace create a life-at-the-pace-of-the-jungle experience.",
    },
    tarifas: [
      { temporada: "baja", precioMXN: 3500 },
      { temporada: "media", precioMXN: 4600 },
      { temporada: "alta", precioMXN: 5800 },
    ],
  },
  {
    slug: "jungle-heart",
    nombre: "Jungle Heart",
    capacidad: { es: "2 personas (pareja)", en: "2 guests (couple)" },
    superficie: "~55 m²",
    distribucion: {
      es: "Sala y cocineta totalmente equipada separadas de la recámara y el baño. Terraza con vistas a los jardines.",
      en: "Living room and fully equipped kitchenette separate from the bedroom and bathroom. Terrace overlooking the gardens.",
    },
    vista: { es: "Jardines de la propiedad", en: "Property gardens" },
    destacado: {
      es: "Distribución amplia con zonas bien diferenciadas. Ideal para estadías largas por su comodidad y funcionalidad.",
      en: "Spacious layout with well-defined areas. Ideal for longer stays thanks to its comfort and functionality.",
    },
    tarifas: [
      { temporada: "baja", precioMXN: 4000 },
      { temporada: "media", precioMXN: 5500 },
      { temporada: "alta", precioMXN: 6800 },
    ],
  },
];

export function getCabanaBySlug(slug: string): Cabana | undefined {
  return CABANAS.find((c) => c.slug === slug);
}
