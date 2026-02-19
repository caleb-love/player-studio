import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ThemeInitScript } from "@/components/theme-init-script";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    title: site.name,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Player Studio" }],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.tagline,
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <ThemeInitScript />
      </head>
      <body>
        <div className="noise" aria-hidden="true" />
        <div className="grid-overlay" aria-hidden="true" />
        <Nav />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
