import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "M&M CONSTRUCTION — Maître d'œuvre maison ossature bois, Genevois français",
  description:
    "Après 20 ans à accompagner des projets de construction, Mahmoud Ben Ahmed a créé M&M CONSTRUCTION : maîtrise d'œuvre spécialisée maison bois, ossature bois et rénovation en Haute-Savoie, Genevois français et Ain.",
};

export const viewport = {
  themeColor: "#2C2C2A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
