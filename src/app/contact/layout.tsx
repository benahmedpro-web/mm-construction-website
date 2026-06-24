import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.constructiondemaisons.com/contact/",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
