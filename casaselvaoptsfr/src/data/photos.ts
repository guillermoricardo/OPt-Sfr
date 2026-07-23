export interface Foto {
  src: string;
  alt: { es: string; en: string };
}

export const FOTOS_ALBERCA: Foto[] = [
  { src: "/images/property/alberca-01.jpg", alt: { es: "Alberca rodeada de selva y linternas colgantes", en: "Pool surrounded by jungle and hanging lanterns" } },
  { src: "/images/property/alberca-02.jpg", alt: { es: "Huésped nadando en la alberca entre la vegetación", en: "Guest swimming in the pool surrounded by vegetation" } },
  { src: "/images/property/alberca-03.jpg", alt: { es: "Vista amplia de la alberca con camastros y cabaña", en: "Wide view of the pool with loungers and a cabin" } },
  { src: "/images/property/alberca-04-noche.jpg", alt: { es: "Alberca de noche iluminada", en: "Pool illuminated at night" } },
  { src: "/images/property/alberca-05-atardecer.jpg", alt: { es: "Alberca al atardecer con luces cálidas", en: "Pool at dusk with warm lights" } },
];

export const FOTOS_JARDINES: Foto[] = [
  { src: "/images/property/jardines-01-puente.jpg", alt: { es: "Puente de madera entre la vegetación de la propiedad", en: "Wooden bridge through the property's vegetation" } },
  { src: "/images/property/jardines-02-hamaca.jpg", alt: { es: "Huésped descansando en hamaca entre la selva", en: "Guest resting in a hammock surrounded by jungle" } },
  { src: "/images/property/jardines-03-ventana-atardecer.jpg", alt: { es: "Vista al atardecer desde la ventana de una cabaña", en: "Sunset view from a cabin window" } },
  { src: "/images/property/jardines-04-puente-palmas.jpg", alt: { es: "Puente de madera bajo palmeras", en: "Wooden bridge under palm trees" } },
  { src: "/images/property/jardines-05-hamaca.jpg", alt: { es: "Hamaca entre árboles de la propiedad", en: "Hammock among the property's trees" } },
];

export const FOTOS_INTERIORES: Foto[] = [
  { src: "/images/property/interior-01-sala-cocineta.jpg", alt: { es: "Sala y cocineta de una cabaña con sillones de mimbre", en: "Living room and kitchenette of a cabin with wicker chairs" } },
  { src: "/images/property/interior-02-sala.jpg", alt: { es: "Sala de una cabaña con vista a la vegetación", en: "Cabin living room overlooking the vegetation" } },
  { src: "/images/property/interior-03-recamara-mosquitero.jpg", alt: { es: "Recámara con mosquitero y vista a la selva", en: "Bedroom with mosquito net and jungle view" } },
  { src: "/images/property/interior-04-sala-terraza.jpg", alt: { es: "Sala con acceso a terraza privada", en: "Living room with access to a private terrace" } },
  { src: "/images/property/interior-05-recamara.jpg", alt: { es: "Recámara con textiles artesanales", en: "Bedroom with handcrafted textiles" } },
];

export const FOTOS_NATURALEZA: Foto[] = [
  { src: "/images/property/natura-01-pajaro-carpintero.jpg", alt: { es: "Pájaro carpintero en la propiedad", en: "Woodpecker on the property" } },
  { src: "/images/property/natura-02-garza.jpg", alt: { es: "Garza nocturna entre el follaje", en: "Night heron among the foliage" } },
  { src: "/images/property/natura-03-hojas.jpg", alt: { es: "Detalle de hojas de monstera", en: "Detail of monstera leaves" } },
  { src: "/images/property/natura-04-atardecer-mar.jpg", alt: { es: "Atardecer sobre el mar enmarcado por palmeras", en: "Sunset over the ocean framed by palm trees" } },
  { src: "/images/property/natura-05-playa.jpg", alt: { es: "Playa Norte de Sayulita cerca de Casa Selva", en: "Sayulita's Playa Norte near Casa Selva" } },
];

export const FOTOS_TODAS: Foto[] = [
  ...FOTOS_ALBERCA,
  ...FOTOS_JARDINES,
  ...FOTOS_INTERIORES,
  ...FOTOS_NATURALEZA,
];

export const FOTOS_HERO: Foto[] = [
  FOTOS_ALBERCA[2],
  FOTOS_JARDINES[3],
  FOTOS_INTERIORES[2],
  FOTOS_NATURALEZA[3],
  FOTOS_ALBERCA[4],
];
