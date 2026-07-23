"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ChatWidgetPlaceholder() {
  const t = useTranslations("chat");
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 rounded-2xl border border-arena bg-crema p-4 text-azul-noche shadow-xl">
          <p className="font-display text-sm tracking-wider text-terracota">{t("nombre")}</p>
          <p className="mt-2 text-sm leading-relaxed">{t("placeholder")}</p>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-terracota text-crema shadow-lg hover:opacity-90 transition-opacity"
        aria-label={t("nombre")}
      >
        <span className="font-display text-sm">{open ? "×" : "S"}</span>
      </button>
    </div>
  );
}
