import type { Metadata } from "next";
import { Oswald, Lora } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidgetPlaceholder from "@/components/ChatWidgetPlaceholder";
import "../globals.css";

// Athelas y Mouse Deco (brand book) no están disponibles como webfonts libres.
// Se usan Oswald (display) y Lora (serif) como reemplazo temporal para el prototipo.
const heading = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
});

const body = Lora({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Casa Selva Sayulita",
  description:
    "Cabañas privadas de madera de parota en la selva de Sayulita, a 150 metros de la playa. Conecta con la naturaleza.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${heading.variable} ${body.variable} antialiased`}>
        <NextIntlClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <ChatWidgetPlaceholder />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
