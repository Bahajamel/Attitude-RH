import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/site";

// Police principale unique : Poppins (graisses limitées à 3).
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Formation d'anglais professionnel`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Formation d'anglais professionnel`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Formation d'anglais professionnel`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={poppins.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Données structurées (SEO) — organisme de formation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: siteConfig.name,
              description: siteConfig.description,
              url: siteConfig.url,
              email: siteConfig.contact.email,
              telephone: siteConfig.contact.phoneHref,
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.contact.address,
                addressCountry: "FR",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
