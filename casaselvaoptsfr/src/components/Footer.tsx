import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SITE } from "@/data/site";

export default function Footer() {
  const tNav = useTranslations("nav");
  const tFooter = useTranslations("footer");

  return (
    <footer className="bg-verde-selva text-crema">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-lg tracking-widest">Casa Selva</p>
          <p className="mt-2 text-sm text-crema/80">{SITE.direccion}</p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <Link href="/habitaciones" className="hover:text-terracota">
            {tNav("habitaciones")}
          </Link>
          <Link href="/amenidades" className="hover:text-terracota">
            {tNav("amenidades")}
          </Link>
          <Link href="/contacto" className="hover:text-terracota">
            {tNav("contacto")}
          </Link>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-terracota">
            WhatsApp: {SITE.whatsapp}
          </a>
          <a href={`mailto:${SITE.email}`} className="hover:text-terracota">
            {SITE.email}
          </a>
          <div className="flex gap-4">
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-terracota">
              Instagram
            </a>
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-terracota">
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-crema/10 px-4 py-4 text-center text-xs text-crema/60">
        © {new Date().getFullYear()} Casa Selva Sayulita. {tFooter("derechos")}
      </div>
    </footer>
  );
}
