import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CABANAS } from "@/data/cabanas";
import { AMENIDADES_PROPIEDAD } from "@/data/amenidades";
import { SITE } from "@/data/site";
import { FOTOS_HERO } from "@/data/photos";
import Carousel from "@/components/Carousel";
import Image from "next/image";

export default function HomePage() {
  const t = useTranslations("home");
  const locale = useLocale() as "es" | "en";

  return (
    <>
      <section className="relative">
        <Carousel
          images={FOTOS_HERO.map((foto) => ({ src: foto.src, alt: foto.alt[locale] }))}
          autoAdvanceMs={6000}
          heightClassName="h-[85vh] min-h-[560px]"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-azul-noche/70 via-azul-noche/40 to-azul-noche/80" />
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-crema sm:px-6">
          <p className="font-display text-xs tracking-[0.3em] text-arena">
            {t("heroTagline")}
          </p>
          <h1 className="mt-4 font-display text-4xl tracking-widest sm:text-6xl">
            {t("heroTitulo")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-crema/90">
            {t("heroDescripcion")}
          </p>
          <div className="pointer-events-auto mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/habitaciones"
              className="rounded-full bg-terracota px-6 py-3 font-display text-xs tracking-wider text-crema hover:opacity-90 transition-opacity"
            >
              {t("ctaHabitaciones")}
            </Link>
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-crema/60 px-6 py-3 font-display text-xs tracking-wider text-crema hover:bg-crema/10 transition-colors"
            >
              {t("ctaWhatsapp")}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-crema px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl tracking-wider text-azul-noche">
            {t("introTitulo")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-azul-noche/80">
            {t("introTexto")}
          </p>
        </div>
      </section>

      <section className="bg-arena/40 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl tracking-wider text-azul-noche">
                {t("seccionCabanasTitulo")}
              </h2>
              <p className="mt-2 max-w-xl text-sm text-azul-noche/70">
                {t("seccionCabanasTexto")}
              </p>
            </div>
            <Link
              href="/habitaciones"
              className="font-display text-xs tracking-wider text-terracota hover:underline"
            >
              {t("verTodas")} →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CABANAS.map((cabana) => (
              <Link
                key={cabana.slug}
                href={`/habitaciones/${cabana.slug}`}
                className="group rounded-2xl border border-azul-noche/10 bg-crema p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-azul-acero/20">
                  <Image
                    src={cabana.foto}
                    alt={cabana.nombre}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg tracking-wider text-azul-noche">
                  {cabana.nombre}
                </h3>
                <p className="mt-1 text-sm text-azul-noche/70">
                  {cabana.capacidad[locale]} · {cabana.superficie}
                </p>
                <span className="mt-3 inline-block font-display text-xs tracking-wider text-terracota group-hover:underline">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-verde-selva px-4 py-16 text-crema sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-2xl tracking-wider">
              {t("seccionAmenidadesTitulo")}
            </h2>
            <Link
              href="/amenidades"
              className="font-display text-xs tracking-wider text-terracota hover:underline"
            >
              {t("verAmenidades")} →
            </Link>
          </div>
          <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {AMENIDADES_PROPIEDAD.map((amenidad) => (
              <li key={amenidad.nombre.es} className="flex gap-3 text-sm">
                <span className="text-terracota">＋</span>
                <span>{amenidad.nombre[locale]}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-azul-noche px-4 py-16 text-center text-crema sm:px-6">
        <div className="mx-auto max-w-xl">
          <h2 className="font-display text-2xl tracking-wider">{t("chatTitulo")}</h2>
          <p className="mt-4 text-sm leading-relaxed text-crema/80">{t("chatTexto")}</p>
        </div>
      </section>
    </>
  );
}
