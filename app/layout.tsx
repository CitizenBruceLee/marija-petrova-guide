import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { siteContent } from "@/data/siteContent";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  keywords: [...siteContent.seo.keywords],
  openGraph: {
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    type: "website",
    locale: "en_US",
    siteName: "Marija Petrova Travel",
    images: [
      {
        url: "/images/galicica-panorama.jpg",
        width: 1200,
        height: 900,
        alt: "Panoramic view from Galicica toward Ohrid and Prespa lakes in North Macedonia.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    images: ["/images/galicica-panorama.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${cormorant.variable} bg-[color:var(--color-canvas)] text-[color:var(--color-ink)] antialiased`}>
        {children}
      </body>
    </html>
  );
}