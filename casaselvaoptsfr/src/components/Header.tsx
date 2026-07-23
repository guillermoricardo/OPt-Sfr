import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { SITE } from "@/data/site";

export default function Header() {
  const t = useTranslations("nav");

  const links = [
    { href: "/", label: t("home") },
    { href: "/habitaciones", label: t("habitaciones") },
    { href: "/amenidades", label: t("amenidades") },
    { href: "/galeria", label: t("galeria") },
    { href: "/nosotros", label: t("nosotros") },
    { href: "/testimonios", label: t("testimonios") },
    { href: "/contacto", label: t("contacto") },
  ];

  return (
    <header className="sticky top-0 z-40 bg-azul-noche text-crema">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="font-display text-lg tracking-widest">
          Casa Selva
        </Link>

        <nav className="hidden gap-6 text-sm font-display tracking-wider lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-terracota transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SITE.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-terracota px-4 py-2 text-xs font-display tracking-wider text-crema hover:opacity-90 transition-opacity sm:inline-block"
          >
            {t("whatsapp")}
          </a>
          <LanguageSwitcher />
        </div>
      </div>

      <nav className="flex gap-4 overflow-x-auto border-t border-crema/10 px-4 py-2 text-xs font-display tracking-wider lg:hidden">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="whitespace-nowrap hover:text-terracota">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
