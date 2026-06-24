import Link from "next/link";

const features = [
  {
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    label: "Maison ossature bois",
    desc: "Structure légère, isolation supérieure, délais réduits.",
  },
  {
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: "Un seul interlocuteur",
    desc: "Du permis à la réception, vous avez un maître d'œuvre dédié.",
  },
  {
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    label: "Artisans vérifiés",
    desc: "Réseau local sélectionné, décennale contrôlée.",
  },
  {
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="1.5">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
    label: "RE 2020 & décennale",
    desc: "Conformité totale, garanties légales en vigueur.",
  },
];

export function FeaturesGrid() {
  return (
    <section className="bg-white py-14 px-5">
      <div className="max-w-[1100px] mx-auto text-center">
        <h2 className="text-[35px] md:text-[40px] font-bold text-[#2C2C2A] mb-4">
          Votre projet maison bois, de A à Z
        </h2>
        <p className="text-[18px] text-[#888780] leading-[1.7] max-w-[700px] mx-auto mb-10">
          En tant que maître d&apos;œuvre spécialisé, nous pilotons votre chantier bois du début à la fin.
          Vous gardez la maîtrise du budget et du planning, sans jamais courir après les artisans.
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-10">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center gap-3 min-w-[130px] max-w-[160px]">
              {f.icon}
              <span className="text-[15px] font-bold text-[#2C2C2A] text-center leading-tight">
                {f.label}
              </span>
              <span className="text-[13px] text-[#888780] text-center leading-tight">
                {f.desc}
              </span>
            </div>
          ))}
        </div>

        <Link
          href="/notre-methode/"
          className="inline-block bg-[#BA7517] text-white text-[17px] font-bold px-8 py-3 no-underline hover:bg-[#9E6312] transition-colors"
        >
          Découvrir notre méthode
        </Link>
      </div>
    </section>
  );
}
