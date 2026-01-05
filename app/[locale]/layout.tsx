import type { Metadata } from "next";
import { League_Spartan, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const poppins = Poppins({
  variable: "--text-font",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const leagueSpartan = League_Spartan({
  variable: "--heading-font",
  weight: ["400", "700", "800", "900", "300"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PhysioCare - Fizjoterapia i Rehabilitacja",
  description:
    "Profesjonalny gabinet fizjoterapeutyczny i rehabilitacyjny w Szczecinie",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "en" | "pl" | "de")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${poppins.variable} ${leagueSpartan.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
