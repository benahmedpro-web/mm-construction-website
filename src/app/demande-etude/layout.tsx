import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.constructiondemaisons.com/demande-etude/",
  },
};

export default function DemandeEtudeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
