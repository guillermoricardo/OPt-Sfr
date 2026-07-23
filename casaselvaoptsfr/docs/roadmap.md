# Roadmap

<!-- Planificación de fases de desarrollo. No es un calendario con fechas exactas,
     sino una guía de prioridades.
     Actualizar cuando algo pase de una fase a otra, o cuando se redefinan las prioridades. -->

---

## Fase 1 — Prototipo visual (fase actual)

Por instrucción explícita del propietario: **no se toca el sitio en vivo ni el dominio todavía**. Esta fase entrega un prototipo para revisión, con contenido real pero sin depender aún del CMS ni del agente conectado, para validar diseño y estructura antes de invertir en la integración completa.

- [ ] Setup del proyecto Next.js + Tailwind con los tokens de `docs/design-system.md` (paleta, tipografías Athelas/Mouse Deco)
- [ ] Home con el nuevo branding aplicado
- [ ] Página Habitaciones con las 5 cabañas (Canopy Cabin, Jungle Nest, Treehouse, Casa Selva, Jungle Heart) — contenido real de `assets/agent/Antecedentes_CSS.md`, hardcodeado (sin CMS todavía)
- [ ] Página Amenidades
- [ ] Galería (con placeholders si las fotos de `assets/photos/` aún no están subidas)
- [ ] Nosotros/Historia, Contacto/Ubicación, Testimonios (estructura lista, contenido a completar)
- [ ] Sitio bilingüe español/inglés
- [ ] Espacio reservado para el widget de Selva (sin conectar el script real todavía)
- [ ] Entregable: preview local o URL de preview desacoplada del dominio real, para que el propietario la revise

**Objetivo de validación:** que el propietario apruebe el diseño y la estructura antes de conectar el CMS, el agente real y pensar en publicar.

---

## Fase 2 — Contenido dinámico y agente conectado

- [ ] Crear el proyecto de Sanity y los schemas definidos en `docs/data-model.md`
- [ ] Invitar al propietario al Sanity Studio (rol Editor) para que pueda editar contenido sin código
- [ ] Migrar el contenido hardcodeado de la Fase 1 a Sanity
- [ ] Conectar el widget real del agente "Selva" (script de Relevance AI)
- [ ] Cargar las fotos finales del propietario
- [ ] Revisión final del copy bilingüe

---

## Fase 3 — Escalado / lanzamiento

- [ ] Migración de DNS de `www.casaselvasayulita.com` a Vercel — requiere autorización y ejecución del propietario en su proveedor de dominio
- [ ] QA final, SEO on-page, performance en mobile
- [ ] Publicación a producción
- [ ] (COULD, si hay tiempo/interés) Sección de Blog/Noticias, precios también en USD

---

## Descartado (con motivo)

| Funcionalidad | Motivo del descarte |
|---------------|---------------------|
| Rediseñar dentro de Squarespace/Wix (plataforma actual) | El propietario prefirió migrar a un stack a medida para tener control total del diseño y del embed del agente (ver decisión en `docs/architecture.md`) |
| Pasarela de pago en línea en el sitio | El proceso de reserva ya definido termina con confirmación manual del equipo por WhatsApp/email antes de cobrar (ver `docs/prd.md`) |
| Sincronización de disponibilidad con Airbnb/Booking.com | Fuera de alcance de este proyecto; el sitio es el canal de reservas directas, no un channel manager |
| Tocar el dominio/DNS o desplegar a producción en esta fase | El propietario pidió explícitamente quedarse en fase de prototipo y subirlo él mismo cuando lo decida |
