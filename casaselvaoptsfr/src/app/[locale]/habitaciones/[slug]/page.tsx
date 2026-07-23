import { useTranslations, useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { CABANAS, TEMPORADAS, getCabanaBySlug } from "@/data/cabanas";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    CABANAS.map((cabana) => ({ locale, slug: cabana.slug }))
  );
}

export default async function CabanaDetallePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cabana = getCabanaBySlug(slug);

  if (!cabana) {
    notFound();
  }

  return <CabanaDetalle cabana={cabana} />;
}

function CabanaDetalle({ cabana }: { cabana: NonNullable<ReturnType<typeof getCabanaBySlug>> }) {
  const t = useTranslations("habitaciones");
  const locale = useLocale() as "es" | "en";

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Link href="/habitaciones" className="font-display text-xs tracking-wider text-terracota hover:underline">
        ← {t("volver")}
      </Link>

      <h1 className="mt-4 font-display text-3xl tracking-wider text-azul-noche">
        {cabana.nombre}
      </h1>

      <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-azul-acero/20">
        <Image
          src={cabana.foto}
          alt={cabana.nombre}
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
        />
      </div>

      <dl className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <dt className="font-display text-xs tracking-wider text-terracota">{t("capacidad")}</dt>
          <dd className="mt-1 text-sm text-azul-noche/80">{cabana.capacidad[locale]}</dd>
        </div>
        <div>
          <dt className="font-display text-xs tracking-wider text-terracota">{t("superficie")}</dt>
          <dd className="mt-1 text-sm text-azul-noche/80">{cabana.superficie}</dd>
        </div>
        <div>
          <dt className="font-display text-xs tracking-wider text-terracota">{t("vista")}</dt>
          <dd className="mt-1 text-sm text-azul-noche/80">{cabana.vista[locale]}</dd>
        </div>
      </dl>

      <div className="mt-6">
        <p className="font-display text-xs tracking-wider text-terracota">{t("distribucion")}</p>
        <p className="mt-1 text-sm leading-relaxed text-azul-noche/80">{cabana.distribucion[locale]}</p>
      </div>

      <div className="mt-6">
        <p className="font-display text-xs tracking-wider text-terracota">{t("destacado")}</p>
        <p className="mt-1 text-sm leading-relaxed text-azul-noche/80">{cabana.destacado[locale]}</p>
      </div>

      <div className="mt-10 rounded-2xl bg-arena/40 p-6">
        <p className="font-display text-xs tracking-wider text-terracota">{t("tarifas")}</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {cabana.tarifas.map((tarifa) => {
            const temporada = TEMPORADAS.find((s) => s.id === tarifa.temporada)!;
            return (
              <div key={tarifa.temporada} className="rounded-xl bg-crema p-4">
                <p className="text-xs font-medium text-azul-noche/60">{temporada.label[locale]}</p>
                <p className="mt-1 font-display text-xl tracking-wider text-azul-noche">
                  ${tarifa.precioMXN.toLocaleString(locale === "es" ? "es-MX" : "en-US")} MXN
                </p>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-xs text-azul-noche/60">{t("notaTarifas")}</p>
      </div>
    </div>
  );
}
