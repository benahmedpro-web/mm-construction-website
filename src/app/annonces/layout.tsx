import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.constructiondemaisons.com/annonces/",
  },
};

export default function AnnoncesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
