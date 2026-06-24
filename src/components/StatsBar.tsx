const stats = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
        <circle cx="12" cy="8" r="5"/>
        <path d="M3 21v-1a9 9 0 0 1 18 0v1"/>
      </svg>
    ),
    value: "20 ans",
    label: "d'expérience terrain",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    value: "74 · 01",
    label: "Haute-Savoie & Ain",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    value: "Artisans",
    label: "vérifiés & locaux",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
    value: "Décennale",
    label: "à jour · RE 2020",
  },
];

export function StatsBar() {
  return (
    <div className="bg-[#2C2C2A] py-6 px-5">
      <div className="max-w-[1100px] mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {stats.map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="flex-shrink-0 opacity-90">{s.icon}</div>
            <div className="flex flex-col">
              <span className="text-[22px] font-bold text-white leading-tight">{s.value}</span>
              <span className="text-[14px] text-white/75 leading-tight">{s.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
