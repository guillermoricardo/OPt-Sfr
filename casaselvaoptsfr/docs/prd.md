# Product Requirements Document (PRD)

<!-- Fuente de verdad sobre qué construimos y por qué.
     Actualizar este archivo cuando cambie el alcance, las funcionalidades o el usuario objetivo.
     Si algo se mueve a "fuera de alcance", no borrar: mover a la sección correspondiente. -->

---

## Resumen ejecutivo

Casa Selva Sayulita es un hotel boutique de 13 cabañas privadas de madera de parota, construidas en armonía con la selva tropical de Riviera Nayarit, a 150 metros de la Playa Norte de Sayulita. Este proyecto consiste en rediseñar por completo el sitio web actual (www.casaselvasayulita.com) aplicando el nuevo brand book (paleta, tipografía, estilo fotográfico) y mejorando la conversión de visitantes a reservas directas.

El sitio actual necesita modernizarse visualmente y funcionalmente. Como parte del rediseño, se embeberá "Selva", un agente de reservas conversacional ya construido en Relevance AI, como widget de chat flotante disponible en todo el sitio, para guiar al visitante en el proceso de cotización y reserva directa (reduciendo la dependencia de plataformas como Airbnb o Booking.com).

El proyecto lo impulsa uno de los propietarios del hotel, quien aporta el brand book oficial, banco de fotos (pendiente de subir) y una base de conocimiento completa del alojamiento (cabañas, tarifas, políticas, FAQ) ya preparada para alimentar al agente de IA.

---

## Problema que resuelve

- El sitio actual no refleja la identidad de marca reciente de Casa Selva (paleta, tipografía y estilo fotográfico definidos en el brand book no están aplicados).
- Los visitantes que llegan al sitio no tienen una forma directa y guiada de cotizar/reservar sin salir a WhatsApp o a plataformas de terceros (OTAs), lo que reduce las reservas directas y aumenta comisiones a intermediarios.
- La información del alojamiento (cabañas, tarifas por temporada, políticas, FAQ) vive dispersa; el sitio debe presentarla de forma clara y el agente de IA debe poder resolver dudas sin intervención humana constante.
- El sitio debe funcionar bien en la experiencia de descubrimiento típica de un huésped que busca alojamiento boutique/experiencial (mobile-first, fuerte peso visual, confianza a través de fotografía y reseñas).

---

## Usuario objetivo

**Perfil principal: viajero en pareja buscando desconexión boutique**
- Turista nacional o internacional (Sayulita es destino con fuerte demanda de EE. UU./Canadá/Europa además de México) que busca una experiencia íntima de naturaleza, no un hotel corporativo.
- Motivación principal: desconectar, estar cerca de la playa y la selva, con comodidades (A/C, cocineta, WiFi) pero ambiente natural/rústico-contemporáneo.
- Frustración que resuelve el sitio: no saber con certeza qué cabaña le conviene, qué incluye, cuánto cuesta según temporada, y no tener una forma rápida de cotizar sin escribir por WhatsApp y esperar respuesta humana.
- Navega mayoritariamente desde celular, decide en gran parte por las fotos y la claridad de la información.

**Perfil secundario: huésped potencial explorando Sayulita**
- Aún no decidido, compara alojamientos y quiere entender la zona (distancia a playa/centro, actividades disponibles) antes de comprometerse.

---

## Funcionalidades core (MoSCoW)

### MUST
- Rediseño completo de Home aplicando el nuevo brand book (colores, tipografías Athelas/Mouse Deco, logo, elementos gráficos, estilo fotográfico).
- Página/sección de Habitaciones con el detalle de las 5 cabañas (Canopy Cabin, Jungle Nest, Treehouse, Casa Selva, Jungle Heart): fotos, capacidad, superficie, distribución, destacados.
- Página/sección de Amenidades (piscina, desayuno incluido, WiFi, estacionamiento, tablas de surf/equipo de playa, etc.).
- Galería de fotos siguiendo el criterio de orden del brand book (foto de detalle seguida de imagen más ocupada).
- Contacto/Ubicación con mapa, dirección, WhatsApp, email y redes sociales.
- Sitio bilingüe (español/inglés) con selector de idioma.
- Widget de chat flotante con el agente "Selva" (Relevance AI) embebido en todas las páginas.
- Enlace directo a WhatsApp (+52 322 244 1794) visible en todo momento.
- Diseño mobile-first, totalmente responsive.

### SHOULD
- Página "Nosotros/Historia": historia de Casa Selva, filosofía del lugar, los propietarios.
- Sección de Testimonios/Reseñas de huéspedes.
- SEO on-page básico (Sayulita, hotel boutique, cabañas, Riviera Nayarit) para posicionamiento orgánico.
- Optimización de rendimiento (carga rápida en mobile, imágenes optimizadas).
- Integración visible de redes sociales (Instagram @casaselva.sayulita, Facebook).

### COULD
- Sección de Blog/Noticias (Sayulita, eventos, novedades del hotel).
- Mostrar tarifas también en USD como referencia (además de MXN).
- Newsletter / captura de email para futuras promociones.

### WON'T (esta versión)
- Pasarela de pago en línea dentro del sitio: el flujo de reserva termina con el equipo de Casa Selva contactando al huésped para validar disponibilidad y enviar el link de pago (según el proceso ya definido en la base de conocimiento del agente).
- Sistema de gestión de reservas / channel manager propio (sincronización de disponibilidad en tiempo real con Airbnb/Booking.com).
- App móvil nativa.
- Panel de administración de contenido (CMS) — a evaluar en `architecture.md` según el stack elegido; si no se incluye, los cambios de contenido se hacen vía código.

---

## Flujos de usuario principales

**Flujo de reserva vía agente de IA:**
El visitante entra a Home, explora Habitaciones/Amenidades/Galería, y abre el widget de chat "Selva" (visible en todas las páginas). El agente detecta el idioma, lo guía por selección de cabaña, fechas, número de noches (con cotización automática según temporada), número de huéspedes, y captura nombre/email/WhatsApp. Selva presenta un resumen y aclara que el equipo de Casa Selva confirmará disponibilidad final por WhatsApp o email antes de considerarse garantizada la reserva.

**Flujo de exploración informativa sin agente:**
El visitante navega Habitaciones, Amenidades, Galería y Nosotros para evaluar si el lugar le conviene, revisa la ubicación respecto a la playa/centro de Sayulita y las actividades disponibles en la zona, y decide contactar directamente por WhatsApp o iniciar el chat con Selva.

**Flujo de consulta de dudas (FAQ vía agente):**
Un visitante con dudas puntuales (mascotas, accesibilidad de la Treehouse, aire acondicionado, estacionamiento, política de cancelación) las resuelve conversando con Selva en vez de buscar en el sitio o escribir por WhatsApp, gracias a la base de conocimiento ya preparada.

---

## Requisitos no funcionales

- **Rendimiento:** carga rápida en conexiones móviles (público mayoritariamente en celular); imágenes optimizadas/responsive dado el fuerte peso visual del sitio.
- **Internacionalización:** contenido completo en español e inglés, con detección/selector de idioma persistente.
- **SEO:** metadatos, estructura semántica y contenido optimizado para búsquedas relacionadas con "Sayulita", "hotel boutique", "cabañas Nayarit".
- **Accesibilidad:** contraste adecuado entre la paleta oscura (#142532, #223634) y el texto crema (#ECE4D7) definida en el brand book; navegación usable en mobile.
- **Consistencia de marca:** toda página nueva debe respetar el brand book (colores, tipografías, logos, elementos gráficos) documentado en `docs/design-system.md`.

---

## Fuera de alcance (explícito)

- Procesamiento de pagos en línea dentro del sitio (ver sección WON'T).
- Sincronización automática de disponibilidad con OTAs (Airbnb, Booking.com).
- Desarrollo o modificación del agente "Selva" en Relevance AI — este proyecto solo lo embebe en el sitio; la lógica del agente vive en Relevance AI.
- App móvil nativa.
