"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const otherLocale = locale === "es" ? "en" : "es";

  return (
    <button
      onClick={() => router.replace(pathname, { locale: otherLocale })}
      className="rounded-full border border-crema/40 px-3 py-1 text-xs font-display tracking-wider text-crema hover:bg-crema/10 transition-colors"
      aria-label={`Switch to ${otherLocale === "es" ? "Español" : "English"}`}
    >
      {otherLocale.toUpperCase()}
    </button>
  );
}
