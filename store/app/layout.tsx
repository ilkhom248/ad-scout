import type { Metadata, Viewport } from "next";
import "./globals.css";
import Pixels from "./components/Pixels";
import { brand, hero } from "./lib/copy";

export const metadata: Metadata = {
  title: `${brand.line} — ${hero.headline} | ${brand.umbrella}`,
  description: hero.sub,
  robots: { index: true, follow: true },
  openGraph: {
    title: `${brand.line} — ${hero.headline}`,
    description: hero.sub,
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2E5D57",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Pixels />
        {children}
      </body>
    </html>
  );
}
