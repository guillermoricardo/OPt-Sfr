import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import {
  FOTOS_HERO,
  FOTOS_ALBERCA,
  FOTOS_JARDINES,
  FOTOS_INTERIORES,
  FOTOS_NATURALEZA,
} from "@/data/photos";

const CATEGORIAS = [
  { key: "alberca", titulo: { es: "Alberca", en: "Pool" }, fotos: FOTOS_ALBERCA },
  { key: "jardines", titulo: { es: "Selva y jardines", en: "Jungle & gardens" }, fotos: FOTOS_JARDINES },
  { key: "interiores", titulo: { es: "Interiores de cabaña", en: "Cabin interiors" }, fotos: FOTOS_INTERIORES },
  { key: "naturaleza", titulo: { es: "Naturaleza y playa", en: "Nature & beach" }, fotos: FOTOS_NATURALEZA },
];

export default function GaleriaPage() {
  const t = useTranslations("galeria");
  const locale = useLocale() as "es" | "en";

  return (
    <div className="pb-16">
      <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <h1 className="font-display text-3xl tracking-wider text-azul-noche">{t("titulo")}</h1>
      </div>

      <div className="mt-8">
        <Carousel
          images={FOTOS_HERO.map((foto) => ({ src: foto.src, alt: foto.alt[locale] }))}
          autoAdvanceMs={5000}
          heightClassName="h-[60vh] min-h-[360px]"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {CATEGORIAS.map((categoria) => (
          <section key={categoria.key} className="mt-14">
            <h2 className="font-display text-lg tracking-wider text-terracota">
              {categoria.titulo[locale]}
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categoria.fotos.map((foto) => (
                <div key={foto.src} className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={foto.src}
                    alt={foto.alt[locale]}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
