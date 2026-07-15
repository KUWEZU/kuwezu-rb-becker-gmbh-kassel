import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import { CookieBanner } from "@/components/CookieBanner";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Garten- & Landschaftsbau Kassel | RB-BECKER GmbH",
  description: "Professioneller Garten- und Landschaftsbau in Kassel. Von Gartengestaltung bis Pflege – alles aus einer Hand. Jetzt unverbindlich beraten lassen!",
  openGraph: {
    title: "Garten- & Landschaftsbau Kassel | RB-BECKER GmbH",
    description: "Professioneller Garten- und Landschaftsbau in Kassel. Von Gartengestaltung bis Pflege – alles aus einer Hand. Jetzt unverbindlich beraten lassen!",
    type: "website",
    locale: "de_DE",
  },
  icons: {
    icon: [{ url: "https://r2.kuwezu.de/kunden/238/logo.png" }],
    apple: [{ url: "https://r2.kuwezu.de/kunden/238/logo.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${geistSans.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-brand-bg text-brand-text antialiased">
        <a href="#main-content" className="skip-link">
          Zum Hauptinhalt springen
        </a>
        {children}
        <AccessibilityWidget />
        <CookieBanner />
        <WhatsAppButton />
      </body>
    </html>
  );
}
