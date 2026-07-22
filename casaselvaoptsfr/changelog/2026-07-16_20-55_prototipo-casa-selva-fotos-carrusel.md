# Prototipo del sitio de Casa Selva Sayulita: estructura completa, fotos reales y carrusel

**Fecha:** 2026-07-16 20:55
**Tipo:** Feature

## Qué se hizo
- Se definió el alcance del proyecto en `docs/` (PRD, modelo de negocio, design system extraído del brand book, arquitectura técnica) siguiendo el protocolo de arranque de este repo.
- Se construyó un prototipo funcional del sitio en Next.js (App Router, TypeScript, Tailwind v4) bilingüe (es/en) con next-intl: Home, Habitaciones (5 cabañas con tarifas reales por temporada), Amenidades, Galería, Nosotros, Contacto y Testimonios.
- Se integraron las 20 fotos reales de la propiedad proporcionadas por el propietario (alberca, selva/jardines, interiores de cabaña, naturaleza/playa) en `assets/photos/original/` y `public/images/property/`.
- Se construyó un componente `Carousel` reutilizable (sin dependencias externas) y se aplicó como hero de Home (con overlay oscuro) y en la página de Galería (carrusel destacado + grid por categoría).
- Se agregó un placeholder visual (sin lógica real) para el futuro widget de chat del agente "Selva" (Relevance AI).
- Prototipo únicamente: no se tocó el dominio real ni se hizo ningún despliegue a producción, por instrucción explícita del propietario.

## Qué se modificó
- `docs/prd.md`, `docs/business.md`, `docs/design-system.md`, `docs/architecture.md` (nuevo contenido, antes plantillas vacías).
- Proyecto Next.js completo en la raíz del repo (`src/`, `public/`, configuración).
- `assets/brand/Branding_CSS.pdf`, `assets/agent/Antecedentes_CSS.md` (material fuente del propietario).
- `assets/photos/original/` y `public/images/property/` (20 fotos reales de la propiedad).

## Por qué
El propietario de Casa Selva Sayulita pidió modernizar el sitio web actual (construido en un builder tipo Squarespace/Wix) y preparar la integración futura de su agente de reservas conversacional ya construido en Relevance AI. Se optó por migrar a un stack a medida (Next.js + Tailwind, con Sanity CMS planeado para la fase de contenido editable) para tener control total del diseño y de dónde se embebe el widget del agente, manteniendo por ahora todo en fase de prototipo hasta que el propietario decida publicarlo.
