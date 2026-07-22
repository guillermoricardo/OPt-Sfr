import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CABANAS, TEMPORADAS } from "@/data/cabanas";

export default function HabitacionesPage() {
  const t = useTranslations("habitaciones");
  const locale = useLocale() as "es" | "en";

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl tracking-wider text-azul-noche">{t("titulo")}</h1>
      <p className="mt-3 max-w-2xl text-sm text-azul-noche/70">{t("subtitulo")}</p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {CABANAS.map((cabana) => (
          <Link
            key={cabana.slug}
            href={`/habitaciones/${cabana.slug}`}
            className="group rounded-2xl border border-azul-noche/10 bg-crema p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="aspect-[4/3] w-full rounded-xl bg-azul-acero/20" />
            <h2 className="mt-4 font-display text-lg tracking-wider text-azul-noche">
              {cabana.nombre}
            </h2>
            <p className="mt-1 text-sm text-azul-noche/70">
              {cabana.capacidad[locale]} · {cabana.superficie}
            </p>
            <p className="mt-2 text-sm text-azul-noche/60 line-clamp-2">
              {cabana.destacado[locale]}
            </p>
            <p className="mt-3 font-display text-xs tracking-wider text-terracota">
              {t("verDetalle")} →
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-arena/40 p-6 text-sm text-azul-noche/80">
        <p className="font-display text-xs tracking-wider text-terracota">{t("tarifas")}</p>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {TEMPORADAS.map((temporada) => (
            <div key={temporada.id}>
              <p className="font-medium">{temporada.label[locale]}</p>
              <p className="text-azul-noche/60">{temporada.rango[locale]}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-azul-noche/60">{t("notaTarifas")}</p>
      </div>
    </div>
  );
}
