export interface Amenidad {
  nombre: { es: string; en: string };
  descripcion?: { es: string; en: string };
}

export const AMENIDADES_PROPIEDAD: Amenidad[] = [
  {
    nombre: { es: "13 cabañas privadas de madera de parota", en: "13 private parota-wood cabins" },
    descripcion: {
      es: "Diseño contemporáneo, construidas en armonía con la selva tropical.",
      en: "Contemporary design, built in harmony with the tropical jungle.",
    },
  },
  {
    nombre: { es: "Piscina rodeada de vegetación", en: "Pool surrounded by vegetation" },
    descripcion: {
      es: "Horario hasta las 10:00 PM. No se permiten bebidas alcohólicas ni envases de vidrio en el área.",
      en: "Open until 10:00 PM. Alcoholic beverages and glass containers are not allowed in the area.",
    },
  },
  {
    nombre: { es: "Desayuno incluido", en: "Breakfast included" },
    descripcion: {
      es: "Servido en el comedor de la propiedad; por las tardes es un espacio ideal para leer o hacer home office.",
      en: "Served in the property's dining area; in the afternoons it's a great spot to read or work remotely.",
    },
  },
  {
    nombre: { es: "Entorno de selva con arroyo natural", en: "Jungle setting with a natural stream" },
  },
  {
    nombre: { es: "Estacionamiento gratuito", en: "Free parking" },
    descripcion: {
      es: "Para autos, y espacio para hasta 4 carritos de golf con toma de corriente para carga eléctrica.",
      en: "For cars, plus space for up to 4 golf carts with electric charging outlets.",
    },
  },
  {
    nombre: { es: "Equipo de playa gratuito", en: "Free beach gear" },
    descripcion: {
      es: "Tablas de surf, sombrillas y sillas de playa disponibles para todos los huéspedes.",
      en: "Surfboards, umbrellas and beach chairs available to all guests.",
    },
  },
];

export const AMENIDADES_CABANA: Amenidad[] = [
  { nombre: { es: "Aire acondicionado y ventiladores", en: "Air conditioning and fans" } },
  { nombre: { es: "WiFi de alta velocidad", en: "High-speed WiFi" } },
  {
    nombre: { es: "Cocineta totalmente equipada", en: "Fully equipped kitchenette" },
    descripcion: {
      es: "Parrilla, utensilios de cocina, cubiertos, sacacorchos y más.",
      en: "Grill, cookware, cutlery, corkscrew and more.",
    },
  },
  { nombre: { es: "Baño privado con regadera", en: "Private bathroom with shower" } },
  { nombre: { es: "Sala o terraza con sillas cómodas", en: "Living room or terrace with comfortable seating" } },
  {
    nombre: { es: "Servicio de limpieza diario", en: "Daily housekeeping" },
    descripcion: {
      es: "Código de acceso que el huésped controla: decide si permite el ingreso cada día.",
      en: "Guest-controlled access code: you decide whether to allow entry each day.",
    },
  },
];
