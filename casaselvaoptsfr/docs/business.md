# Modelo de negocio

<!-- Contexto comercial del proyecto. Útil para que el agente entienda las restricciones
     y prioridades de negocio que afectan a las decisiones técnicas.
     Actualizar si cambia el modelo de monetización, el pricing o la estrategia. -->

---

## Propuesta de valor

El nuevo sitio web convierte a los visitantes en reservas directas para Casa Selva Sayulita, mostrando la experiencia real de marca (selva, madera de parota, cercanía al mar) y permitiendo cotizar y solicitar reserva conversando con el agente "Selva", sin depender de las comisiones de plataformas como Airbnb o Booking.com.

---

## Modelo de monetización

El sitio en sí no procesa pagos ni cobra suscripciones: es el canal de ventas directo del hotel.

- **Ingreso del negocio (Casa Selva Sayulita):** tarifas por noche de las 5 cabañas, variables por temporada:
  - Temporada baja (jun–sep): $3,000–$4,000 MXN/noche
  - Temporada media (may, oct, nov): $4,000–$5,500 MXN/noche
  - Temporada alta (dic–abr): $5,000–$6,800 MXN/noche
  - Todas las tarifas incluyen desayuno para dos personas.
  - Ingreso adicional: renta mensual en temporada baja y media (tarifa a consultar directamente con el equipo).
- **Rol del sitio en el ingreso:** cada reserva cerrada por el canal directo (vía Selva o WhatsApp) evita la comisión que cobraría una OTA (típicamente 15–20% en Airbnb/Booking.com). El sitio no cobra el pago en línea; el flujo termina con el equipo de Casa Selva validando disponibilidad y enviando el link de pago manualmente (ver `docs/prd.md`, proceso de reserva).
- **Pasarela de pago:** no aplica en esta versión del sitio (fuera de alcance, ver PRD).

---

## Competidores y diferenciación

| Competidor / canal | Qué hace | Diferencia de Casa Selva |
|---------------------|----------|---------------------------|
| Airbnb / Booking.com (como canal de Casa Selva) | Traen reservas pero cobran comisión (~15-20%) y limitan la relación directa con el huésped | El sitio propio + agente Selva capturan la reserva sin comisión y con marca propia |
| Otros hoteles boutique / cabañas en Sayulita y San Pancho | Alojamiento similar en la misma zona turística | Ubicación a 150 m de Playa Norte, cabañas de madera de parota en selva con arroyo natural, desayuno incluido, equipo de playa gratuito, y un agente de reservas conversacional propio (diferenciador tecnológico poco común en alojamientos boutique de la zona) |
| Listados genéricos / directorios turísticos | Presencia pasiva, sin guía de reserva | Sitio propio con experiencia de marca completa y asistencia conversacional en tiempo real |

---

## Métricas de éxito

<!-- Objetivos iniciales propuestos; ajustar con datos reales del negocio si se dispone de ellos (tráfico actual, tasa de conversión actual, etc.) -->
- Aumento de la proporción de reservas directas (sitio + Selva) frente a reservas por OTA.
- Tasa de conversión de visitas al sitio → conversaciones iniciadas con Selva.
- Tasa de conversión de conversaciones con Selva → solicitudes de reserva completas (con datos de contacto capturados).
- Reducción de consultas repetitivas atendidas manualmente por WhatsApp (FAQ resueltas por Selva).
- Tiempo de carga del sitio en mobile y tasa de rebote.

---

## Riesgos identificados

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| El agente Selva queda desactualizado si cambian tarifas/políticas y no se sincroniza su base de conocimiento en Relevance AI | Media | Alto | Mantener `assets/agent/Antecedentes_CSS.md` como fuente de verdad y actualizar tanto el sitio como la base de conocimiento del agente cuando cambien tarifas o políticas |
| Dependencia de un tercero (Relevance AI) para el widget de chat: caídas o cambios de API rompen la reserva conversacional | Baja-Media | Alto | Fallback siempre visible: enlace directo a WhatsApp/email en todas las páginas, no solo el chat |
| El sitio bilingüe queda con contenido desincronizado entre español e inglés | Media | Medio | Revisar ambos idiomas en cada cambio de contenido antes de publicar |
| Fotos pendientes de subir retrasan el lanzamiento del rediseño visual | Media | Medio | Avanzar con maquetación y estructura usando placeholders del estilo del brand book mientras llegan las fotos finales |

---

## Restricciones

- El dominio actual `www.casaselvasayulita.com` debe mantenerse — el rediseño reemplaza el sitio existente, no crea uno nuevo en otro dominio.
- El sitio actual corre sobre un builder tipo Squarespace/Wix; se debe decidir en `docs/architecture.md` si el rediseño se hace dentro de esa misma plataforma o se migra a un stack a medida.
- El agente "Selva" ya está construido en Relevance AI; este proyecto no modifica su lógica, solo lo embebe.
- Presupuesto y plazo objetivo: sin definir por ahora, se documentará aquí si surge una fecha objetivo (por ejemplo, antes de temporada alta dic-abr).
