import { useTranslations, useLocale } from "next-intl";
import { AMENIDADES_PROPIEDAD, AMENIDADES_CABANA } from "@/data/amenidades";

export default function AmenidadesPage() {
  const t = useTranslations("amenidades");
  const locale = useLocale() as "es" | "en";

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl tracking-wider text-azul-noche">{t("titulo")}</h1>

      <section className="mt-10">
        <h2 className="font-display text-lg tracking-wider text-terracota">{t("propiedad")}</h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {AMENIDADES_PROPIEDAD.map((amenidad) => (
            <li key={amenidad.nombre.es} className="rounded-xl bg-arena/30 p-4">
              <p className="font-medium text-azul-noche">{amenidad.nombre[locale]}</p>
              {amenidad.descripcion && (
                <p className="mt-1 text-sm text-azul-noche/70">{amenidad.descripcion[locale]}</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-lg tracking-wider text-terracota">{t("cabana")}</h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {AMENIDADES_CABANA.map((amenidad) => (
            <li key={amenidad.nombre.es} className="rounded-xl bg-arena/30 p-4">
              <p className="font-medium text-azul-noche">{amenidad.nombre[locale]}</p>
              {amenidad.descripcion && (
                <p className="mt-1 text-sm text-azul-noche/70">{amenidad.descripcion[locale]}</p>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
