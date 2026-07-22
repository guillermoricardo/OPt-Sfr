import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { FOTOS_JARDINES } from "@/data/photos";

export default function NosotrosPage() {
  const t = useTranslations("nosotros");
  const locale = useLocale() as "es" | "en";
  const foto = FOTOS_JARDINES[0];

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl tracking-wider text-azul-noche">{t("titulo")}</h1>

      <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl">
        <Image
          src={foto.src}
          alt={foto.alt[locale]}
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="mt-8 space-y-6 text-base leading-relaxed text-azul-noche/80">
        <p>{t("texto1")}</p>
        <p>{t("texto2")}</p>
        <p>{t("texto3")}</p>
      </div>
    </div>
  );
}
