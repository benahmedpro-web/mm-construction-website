export type Statut = "Disponible" | "En cours" | "Livré";

export interface Annonce {
  slug: string;
  commune: string;
  departement: string;
  type: string;
  surfaceTerrain: number;
  surfaceHabitable: number;
  pieces: number;
  budget: number;
  statut: Statut;
  image: string;
  images: string[];
  accroche: string;
  description: string[];
  points: string[];
  zone: string;
}

export const annonces: Annonce[] = [
  {
    slug: "maison-ossature-bois-annemasse-74",
    commune: "Annemasse",
    departement: "Haute-Savoie (74)",
    zone: "Genevois français",
    type: "Maison ossature bois",
    surfaceTerrain: 800,
    surfaceHabitable: 120,
    pieces: 5,
    budget: 385000,
    statut: "Disponible",
    image: "/images/hero-maison-bois-alpine.jpg",
    images: [
      "/images/hero-maison-bois-alpine.jpg",
      "/images/hero-maison-bois-montagne-1.jpg",
      "/images/hero-extension-bois-golden.jpg",
    ],
    accroche: "Terrain plat 800 m² — Maison plain-pied 120 m² — Exposition plein sud",
    description: [
      "Terrain viabilisé de 800 m² situé dans un secteur résidentiel calme d'Annemasse, à 5 minutes du centre-ville et 15 minutes de Genève. Exposition plein sud, terrain plat, clôture sur 3 côtés.",
      "Le projet porte sur une maison de plain-pied en ossature bois de 120 m² habitables, avec garage intégré de 25 m². Architecture contemporaine, bardage douglas naturel, toiture à faible pente zinc prépatiné.",
      "Conception RE2020 intégrée dès le départ : isolation renforcée (R = 7 en toiture, R = 5 en murs), menuiseries triple vitrage, VMC double flux. Chauffage par pompe à chaleur air/eau avec plancher chauffant.",
    ],
    points: [
      "Raccordements eau, électricité, gaz, fibre en limite de propriété",
      "PLU vérifié — CES 0,25 — zone UA",
      "Bureau d'études structure intégré au budget",
      "Délai estimé : 14 à 16 mois permis compris",
      "Garanties décennales artisans vérifiées",
    ],
  },
  {
    slug: "maison-ossature-bois-saint-julien-en-genevois-74",
    commune: "Saint-Julien-en-Genevois",
    departement: "Haute-Savoie (74)",
    zone: "Genevois français",
    type: "Maison ossature bois",
    surfaceTerrain: 650,
    surfaceHabitable: 95,
    pieces: 4,
    budget: 295000,
    statut: "En cours",
    image: "/images/hero-maison-bois-montagne-1.jpg",
    images: [
      "/images/hero-maison-bois-montagne-1.jpg",
      "/images/hero-maison-bois-alpine.jpg",
      "/images/hero-maison-bois-montagne-2.jpg",
    ],
    accroche: "Terrain 650 m² vue Salève — Permis obtenu — Chantier démarrage T3 2025",
    description: [
      "Terrain de 650 m² en légère pente (8 %), vue dégagée côté Salève, quartier prisé de Saint-Julien-en-Genevois. Le permis de construire a été obtenu en mars 2025 — délai d'instruction : 4 mois.",
      "Maison à étage de 95 m² habitables, architecture à deux niveaux adaptée à la déclivité du terrain. Rez-de-chaussée : séjour 38 m², cuisine ouverte, bureau. Étage : 3 chambres, salle de bains, dégagement.",
      "Bardage bois naturel douglas, menuiseries aluminium gris anthracite, toiture bac acier zinc. Le chantier démarre en septembre 2025 — livraison estimée en décembre 2026.",
    ],
    points: [
      "Permis de construire obtenu — purge de recours tiers effectuée",
      "Zone sismique 3 — bureau d'études structure mandaté",
      "Charpentier ossature bois sélectionné, décennale bois vérifiée",
      "Suivi de chantier hebdomadaire inclus dans les honoraires",
      "Livraison estimée décembre 2026",
    ],
  },
  {
    slug: "maison-ossature-bois-cranves-sales-74",
    commune: "Cranves-Sales",
    departement: "Haute-Savoie (74)",
    zone: "Genevois français",
    type: "Maison ossature bois",
    surfaceTerrain: 1200,
    surfaceHabitable: 145,
    pieces: 6,
    budget: 430000,
    statut: "Disponible",
    image: "/images/hero-maison-bois-montagne-2.jpg",
    images: [
      "/images/hero-maison-bois-montagne-2.jpg",
      "/images/hero-maison-bois-alpine.jpg",
      "/images/hero-extension-bois-jardin.jpg",
    ],
    accroche: "Grande parcelle 1 200 m² — Maison 145 m² R+1 — Commune calme du Genevois",
    description: [
      "Grande parcelle de 1 200 m² dans un secteur résidentiel de Cranves-Sales, commune recherchée du Genevois français pour son calme et sa proximité avec Annemasse (10 min) et Genève (20 min). Terrain plat, entièrement viabilisé.",
      "Projet maison R+1 de 145 m² habitables, 6 pièces, terrasse bois 35 m², jardin paysagé. Architecture bioclimatique : séjour-cuisine en double hauteur côté sud, 4 chambres à l'étage, suite parentale avec dressing.",
      "Étude de faisabilité complète disponible sur demande : plans de masse, coupes, budget détaillé corps de métier par corps de métier. Financement simulé sur 25 ans inclus dans le dossier de présentation.",
    ],
    points: [
      "Étude de faisabilité complète disponible sur demande",
      "PLU vérifié — zone UC — CES 0,30",
      "Terrain plat entièrement viabilisé",
      "Budget détaillé par corps de métier",
      "Délai estimé : 16 à 18 mois permis compris",
    ],
  },
  {
    slug: "maison-ossature-bois-archamps-74",
    commune: "Archamps",
    departement: "Haute-Savoie (74)",
    zone: "Genevois français",
    type: "Maison ossature bois",
    surfaceTerrain: 750,
    surfaceHabitable: 115,
    pieces: 5,
    budget: 365000,
    statut: "Disponible",
    image: "/images/hero-extension-bois-golden.jpg",
    images: [
      "/images/hero-extension-bois-golden.jpg",
      "/images/hero-maison-bois-alpine.jpg",
      "/images/hero-maison-bois-montagne-1.jpg",
    ],
    accroche: "Secteur technopôle — Maison bioclimatique 115 m² — RE2020 intégré",
    description: [
      "Terrain de 750 m² dans le secteur résidentiel d'Archamps, commune en développement à 10 minutes de Genève via l'A40. Environnement calme, commerces et écoles à 5 minutes, technopôle à 2 minutes.",
      "Maison de plain-pied de 115 m² en ossature bois, orientation optimisée nord-sud pour maximiser les apports solaires passifs. Concept bioclimatique : débord de toiture calculé pour le confort estival, grandes baies vitrées sur terrasse sud.",
      "Projet intègre la RE2020 dès la conception : Bbio < 50, Cep < 70 kWh/m²/an. Toiture végétalisée partielle possible selon PLU. Chauffage PAC air/eau — ballon thermodynamique — VMC double flux.",
    ],
    points: [
      "Orientation bioclimatique optimisée",
      "RE2020 intégré — Bbio et Cep conformes",
      "Zone sismique 3 — renforts ossature prévus",
      "Commerces, écoles, médecins à 5 min",
      "Délai estimé : 14 à 16 mois",
    ],
  },
  {
    slug: "maison-ossature-bois-gex-01",
    commune: "Gex",
    departement: "Ain (01)",
    zone: "Pays de Gex",
    type: "Maison ossature bois",
    surfaceTerrain: 1000,
    surfaceHabitable: 130,
    pieces: 5,
    budget: 400000,
    statut: "Livré",
    image: "/images/hero-extension-bois-jardin.jpg",
    images: [
      "/images/hero-extension-bois-jardin.jpg",
      "/images/hero-extension-bois-golden.jpg",
      "/images/hero-maison-bois-montagne-2.jpg",
    ],
    accroche: "Projet réalisé 2024 — 130 m² ossature bois — Délai tenu : 14 mois",
    description: [
      "Projet livré en octobre 2024 à Gex, Pays de Gex (Ain). Maison ossature bois de 130 m² sur terrain de 1 000 m², 5 pièces, garage double. Client : couple avec 3 enfants, budget initial 400 000 € — budget final respecté à 2 % près.",
      "Bardage mélèze naturel non traité, toiture zinc double-pli, menuiseries aluminium gris 7016. Plancher chauffant basse température alimenté par PAC air/eau Daikin. Ballon thermodynamique, VMC double flux Zehnder.",
      "Chantier coordonné de A à Z par M&M CONSTRUCTION : dépôt et suivi du permis, consultation et sélection des artisans, 14 mois de réunions de chantier hebdomadaires, réception avec levée des réserves. Zéro réserve non soldée à la livraison.",
    ],
    points: [
      "Livré octobre 2024 — budget respecté",
      "14 mois de chantier permis compris",
      "Zéro réserve non soldée à la réception",
      "Artisans locaux 01/74 — décennales vérifiées",
      "Visite de référence possible sur demande",
    ],
  },
  {
    slug: "extension-ossature-bois-thonon-les-bains-74",
    commune: "Thonon-les-Bains",
    departement: "Haute-Savoie (74)",
    zone: "Chablais",
    type: "Extension ossature bois",
    surfaceTerrain: 900,
    surfaceHabitable: 45,
    pieces: 2,
    budget: 135000,
    statut: "En cours",
    image: "/images/hero-maison-bois-alpine.jpg",
    images: [
      "/images/hero-maison-bois-alpine.jpg",
      "/images/hero-extension-bois-jardin.jpg",
      "/images/hero-extension-bois-golden.jpg",
    ],
    accroche: "Extension 45 m² sur maison existante — Chantier démarré — Livraison T1 2026",
    description: [
      "Extension ossature bois de 45 m² sur une maison individuelle des années 1990 à Thonon-les-Bains. Projet : cuisine ouverte 25 m² avec baie coulissante sur terrasse + chambre parentale 20 m² avec dressing.",
      "Démarche de déclaration préalable validée (< 40 m² en zone urbaine). Jonction entre l'existant et l'extension soigneusement traitée : isolation par l'extérieur côté ancien, pare-vapeur continu, bardage douglas aligné sur les matériaux existants.",
      "Chantier en cours depuis juillet 2025. Charpentier ossature bois Haute-Savoie, couvreur-étancheur local, menuisier aluminium. Livraison prévue février 2026.",
    ],
    points: [
      "Déclaration préalable obtenue",
      "Jonction existant/extension traitée par le bureau d'études",
      "Bardage douglas harmonisé avec l'existant",
      "Livraison estimée février 2026",
      "Client suivi depuis la conception — budget tenu",
    ],
  },
];

export function getAnnonce(slug: string): Annonce | undefined {
  return annonces.find((a) => a.slug === slug);
}

export function getAutresAnnonces(slug: string): Annonce[] {
  return annonces.filter((a) => a.slug !== slug).slice(0, 3);
}
