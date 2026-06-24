import Link from "next/link";

const cards = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: "Maison ossature bois",
    subtitle: "Construction neuve",
    href: "/maison-ossature-bois/",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: "Extension & rénovation",
    subtitle: "Agrandissement bois",
    href: "/extension-bois/",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <line x1="8" y1="14" x2="8" y2="14"/>
        <line x1="12" y1="14" x2="12" y2="14"/>
      </svg>
    ),
    title: "Demande d'étude",
    subtitle: "Gratuite · Sans engagement",
    href: "/demande-etude/",
  },
];

export function QuickLinks() {
  return (
    <div className="flex flex-col md:flex-row border-t-0 bg-white shadow-sm">
      {cards.map((card, i) => (
        <Link
          key={i}
          href={card.href}
          className={`flex flex-1 items-center gap-4 px-6 py-5 no-underline text-inherit hover:bg-[#F2EDE6] transition-colors ${
            i < cards.length - 1 ? "border-b md:border-b-0 md:border-r border-[#D9D4CC]" : ""
          }`}
        >
          <div className="flex-shrink-0 text-[#BA7517]">
            {card.icon}
          </div>
          <div className="flex flex-col">
            <span className="text-[20px] font-bold text-[#2C2C2A] leading-tight">{card.title}</span>
            <span className="text-[17px] text-[#888780] flex items-center gap-1">
              {card.subtitle}
              <span className="text-[#BA7517] text-[18px] font-bold">›</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
