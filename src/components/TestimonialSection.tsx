import Image from "next/image";

const guarantees = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "Planning tenu",
    body: "Chaque chantier démarre avec un planning détaillé par corps de métier. Nous suivons l'avancement et anticipons les décalages avant qu'ils ne bloquent la suite.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="1.5">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: "Budget maîtrisé",
    body: "Nos honoraires sont définis à la signature. Le budget travaux est chiffré avec précision avant le démarrage — pas de surprise en cours de chantier.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Qualité contrôlée",
    body: "Visite de chantier à chaque étape clé. Grille de contrôle qualité à la réception. Les réserves sont levées avant remise des clés.",
  },
];

export function TestimonialSection() {
  return (
    <section className="bg-white py-14 px-5">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-start">
          {/* Left: About Mahmoud */}
          <div>
            <div className="relative bg-[#2C2C2A] aspect-[4/3] flex flex-col items-center justify-center text-center p-6 overflow-hidden">
              <Image
                src="/images/5.jpg"
                alt="Mahmoud Ben Ahmed — M&M CONSTRUCTION"
                fill
                className="object-cover opacity-40"
              />
              <div className="relative z-10">
                <div className="w-12 h-1 bg-[#BA7517] mx-auto mb-4" />
                <p className="text-white text-[15px] font-bold leading-tight">
                  Mahmoud Ben Ahmed
                </p>
                <p className="text-white/70 text-[13px] mt-1">
                  Maître d&apos;œuvre fondateur
                </p>
              </div>
            </div>
            <p className="text-[14px] text-[#888780] leading-[1.6] mt-4">
              20 ans de terrain en accompagnement de projets de construction.
              Fondateur de M&amp;M CONSTRUCTION, spécialisé maison ossature bois
              en Genevois français depuis 2020.
            </p>
          </div>

          {/* Right: Engagement + guarantees */}
          <div>
            <h4 className="text-[22px] font-bold text-[#2C2C2A] mb-3">
              Un engagement sur le résultat, pas juste sur l&apos;intention
            </h4>
            <p className="text-[15px] text-[#888780] leading-[1.7] mb-8">
              Chaque projet est différent. Ce qui ne change pas, c&apos;est la méthode :
              un chiffrage précis, des artisans qualifiés bois, un suivi de chantier systématique,
              et une réception rigoureuse. Voilà la réalité de ce qu&apos;on vous propose.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {guarantees.map((g, i) => (
                <div key={i} className="flex-1 bg-[#F2EDE6] p-5 flex flex-col items-center text-center">
                  <div className="mb-3">{g.icon}</div>
                  <h5 className="text-[16px] font-bold text-[#2C2C2A] mb-2">{g.title}</h5>
                  <p className="text-[13px] text-[#888780] leading-[1.5]">{g.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
