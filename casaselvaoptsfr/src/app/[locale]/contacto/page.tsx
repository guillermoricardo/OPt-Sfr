import { useTranslations } from "next-intl";
import { SITE } from "@/data/site";

export default function ContactoPage() {
  const t = useTranslations("contacto");

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl tracking-wider text-azul-noche">{t("titulo")}</h1>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div className="space-y-6">
          <div>
            <p className="font-display text-xs tracking-wider text-terracota">{t("direccion")}</p>
            <p className="mt-1 text-sm text-azul-noche/80">{SITE.direccion}</p>
          </div>

          <div>
            <p className="font-display text-xs tracking-wider text-terracota">{t("comoLlegar")}</p>
            <p className="mt-1 text-sm leading-relaxed text-azul-noche/80">{t("comoLlegarTexto")}</p>
          </div>

          <div>
            <p className="font-display text-xs tracking-wider text-terracota">{t("checkInOut")}</p>
            <p className="mt-1 text-sm text-azul-noche/80">
              {SITE.checkIn} / {SITE.checkOut}
            </p>
          </div>

          <div>
            <p className="font-display text-xs tracking-wider text-terracota">{t("escribenos")}</p>
            <div className="mt-1 flex flex-col gap-1 text-sm text-azul-noche/80">
              <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-terracota">
                WhatsApp: {SITE.whatsapp}
              </a>
              <a href={`mailto:${SITE.email}`} className="hover:text-terracota">
                {SITE.email}
              </a>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-terracota">
                Instagram: @casaselva.sayulita
              </a>
            </div>
          </div>
        </div>

        <div className="aspect-square w-full overflow-hidden rounded-2xl border border-azul-noche/10">
          <iframe
            title="Ubicación Casa Selva Sayulita"
            src={SITE.mapaEmbedSrc}
            className="h-full w-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
