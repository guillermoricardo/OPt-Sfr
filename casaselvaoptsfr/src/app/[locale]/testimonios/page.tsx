import { useTranslations } from "next-intl";

export default function TestimoniosPage() {
  const t = useTranslations("testimonios");

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
      <h1 className="font-display text-3xl tracking-wider text-azul-noche">{t("titulo")}</h1>
      <p className="mt-4 text-sm text-azul-noche/70">{t("pendiente")}</p>
    </div>
  );
}
