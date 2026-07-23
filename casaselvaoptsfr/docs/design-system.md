# Design System

<!-- Fuente de verdad visual del proyecto.
     Consultar antes de crear cualquier componente nuevo.
     Actualizar cuando se añadan nuevos patrones, componentes o se modifique la identidad visual. -->

**Fuente:** extraído del brand book oficial `assets/brand/Branding_CSS.pdf`. Este documento traduce ese brand book (pensado para impreso/social) a un sistema de diseño aplicable al sitio web.

---

## Paleta de colores

| Rol | Nombre | Hex |
|-----|--------|-----|
| Primary (fondo oscuro principal) | Azul Noche | #142532 |
| Secondary (fondo oscuro alterno) | Verde Selva | #223634 |
| Accent (CTAs, acentos, logo secundario) | Terracota | #955D25 |
| Support (iconografía/ilustración secundaria) | Azul Acero | #2F4A5C |
| Background claro / texto sobre oscuro | Crema | #ECE4D7 |
| Surface claro (cards, secciones sutiles) | Arena | #D9C0A2 |

Notas de uso (según el brand book):
- El logo principal (wordmark "CASA SELVA" + tagline "connect with nature") va en texto crema sobre fondo Azul Noche, con ícono de hoja de palma en Azul Acero.
- Los logos secundarios (monograma "C·S" en cápsula, y sello circular "CASA selva") usan trazo en Terracota sobre fondo Crema.
- Contraste verificado: Crema (#ECE4D7) sobre Azul Noche (#142532) y Verde Selva (#223634) es el par principal de texto sobre fondo oscuro — cumple buen contraste para body copy.

---

## Tipografía

- **Display / Headings / logotipo:** Mouse Deco — siempre en MAYÚSCULAS, kerning = 100. Uso: H1, H2, titulares cortos, botones/CTAs.
- **Serif / tagline / acentos:** Athelas — siempre en minúsculas, kerning = 100. Uso en el brand book: tagline del logo ("connect with nature"), etiquetas cortas.

**Nota de implementación web:** forzar minúsculas fijas en Athelas funciona bien para el logotipo, taglines y etiquetas cortas, pero para párrafos largos de cuerpo de texto (descripciones de cabañas, FAQ, blog) se recomienda usar Athelas con capitalización estándar (oraciones normales) por legibilidad, en vez de forzar minúsculas en todo el texto. A confirmar con el propietario si se prefiere respetar la restricción literal del brand book también en el copy largo.

| Nivel | Fuente | Notas |
|-------|--------|-------|
| Logotipo / H1 | Mouse Deco | Mayúsculas, kerning 100 |
| H2 / H3 | Mouse Deco | Mayúsculas, kerning 100 |
| Tagline / labels cortos | Athelas | Minúsculas, kerning 100 |
| Body copy | Athelas | Capitalización estándar (propuesta, ver nota arriba) |

---

## Espaciado y grid

<!-- El brand book no define escala de espaciado ni grid (es un documento de identidad, no de UI web).
     Se propone un sistema estándar a confirmar en la etapa de arquitectura/build. -->
- Escala propuesta (a confirmar en `architecture.md`): base 4px (4, 8, 12, 16, 24, 32, 48, 64, 96).
- Layout mobile-first, ancho máximo de contenido ~1200px en desktop.

---

## Estilo de componentes

Basado en los ejemplos de "stationary" del brand book (tarjetas de señalética tipo "Towels", "Pool Rules", "Do Not Disturb"), el lenguaje visual usa **bloques de color alternados** en vez de un único fondo:

- Secciones con fondo Crema (#ECE4D7) + elementos decorativos (hojas, puntos, ondas) en Terracota o Azul Noche como acento en una esquina — no como fondo pesado.
- Secciones con fondo oscuro (Azul Noche #142532) + texto Crema, usadas para contenido tipo "reglas"/instrucciones o para dar contraste y jerarquía entre secciones del sitio.
- Fotografía a color real combinada con bloques sólidos de color (mitad foto / mitad bloque de color con texto).
- Elementos gráficos (hoja de palma, hoja de monstera, anillos de madera, líneas onduladas, puntos) pueden reutilizarse cambiando color, opacidad y relleno — se usan como acentos decorativos, no como ilustración central.
- Iconografía y bordes: el monograma usa una forma tipo cápsula (rectángulo con extremos completamente redondeados); se propone aplicar esquinas redondeadas suaves en cards e inputs del sitio para mantener coherencia con esa forma. (Propuesta, no está explícito en el brand book — confirmar al maquetar.)

---

## Tono visual

Selva tropical + contemporáneo. Cálido, íntimo, natural — no corporativo ni frío (mismo tono definido para el agente conversacional "Selva" en `assets/agent/Antecedentes_CSS.md`). La fotografía es protagonista: primeros planos de textura natural (hojas, madera) combinados con tomas más amplias del lugar (alberca, terrazas, recámaras), en una secuencia que alterna detalle → imagen más ocupada, evitando que el sitio se vea recargado.

Qué evitar: colores saturados o "tropicales" genéricos (turquesas brillantes, rosas neón), tipografías redondeadas/infantiles, fotografía de stock genérica que no sea del lugar real.

---

## Componentes definidos

<!-- Se documentarán aquí a medida que se construyan (tarjeta de cabaña, selector de fechas,
     widget de chat de Selva, tarjeta de amenidad, etc.) durante la fase de implementación. -->

---

## Referencias visuales

- Brand book oficial: `assets/brand/Branding_CSS.pdf`.
- Estilo fotográfico de referencia: fotos propias de Casa Selva en `assets/photos/` (pendientes de subir).
- Sitio actual a rediseñar: https://www.casaselvasayulita.com/
