"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { annonces } from "@/lib/annonces";

const filtres = ["Tous", "Disponible", "En cours", "Livré"] as const;
type Filtre = typeof filtres[number];

const statutColors: Record<string, string> = {
  "Disponible": "bg-emerald-100 text-emerald-800",
  "En cours":   "bg-amber-100 text-amber-800",
  "Livré":      "bg-[#F2EDE6] text-[#888780]",
};

function formatBudget(n: number) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
}

export default function AnnoncesPage() {
  const [actif, setActif] = useState<Filtre>("Tous");
  const visibles = actif === "Tous" ? annonces : annonces.filter((a) => a.statut === actif);

  return (
    <main>
      <div className="bg-[#2C2C2A] py-14 px-5">
        <div className="max-w-[1100px] mx-auto">
          <Link href="/" className="text-white/50 text-[13px] no-underline hover:text-white transition-colors">← Accueil</Link>
          <h1 className="text-white text-[34px] md:text-[46px] font-black mt-4 mb-3 leading-tight">
            Annonces — Projets disponibles
          </h1>
          <p className="text-white/60 text-[17px] max-w-[600px] leading-[1.6]">
            Terrains sélectionnés et projets de construction en Haute-Savoie, Ain et Genevois français. Coordonnés par M&amp;M CONSTRUCTION.
          </p>
        </div>
      </div>

      {/* Filtres */}
      <div className="bg-white border-b border-[#D9D4CC] px-5 sticky top-0 z-30">
        <div className="max-w-[1100px] mx-auto flex items-center gap-1 py-3">
          <span className="text-[12px] text-[#888780] uppercase tracking-widest mr-3 hidden sm:block">Filtrer :</span>
          {filtres.map((f) => (
            <button
              key={f}
              onClick={() => setActif(f)}
              className={`px-4 py-1.5 text-[13px] font-medium border transition-colors cursor-pointer ${
                actif === f
                  ? "bg-[#2C2C2A] text-white border-[#2C2C2A]"
                  : "bg-white text-[#888780] border-[#D9D4CC] hover:border-[#BA7517] hover:text-[#BA7517]"
              }`}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto text-[13px] text-[#888780]">{visibles.length} annonce{visibles.length > 1 ? "s" : ""}</span>
        </div>
      </div>

      {/* Grille */}
      <section className="bg-[#F2EDE6] py-10 px-5">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibles.map((a) => (
            <Link key={a.slug} href={`/annonces/${a.slug}/`} className="no-underline group">
              <div className="bg-white flex flex-col overflow-hidden h-full transition-shadow group-hover:shadow-lg">
                {/* Photo */}
                <div className="relative h-[200px] overflow-hidden bg-[#2C2C2A]">
                  <Image
                    src={a.image}
                    alt={`${a.type} — ${a.commune}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 ${statutColors[a.statut]}`}>
                      {a.statut}
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="text-[11px] text-[#888780] uppercase tracking-widest mb-1">{a.departement}</div>
                  <h2 className="text-[18px] font-black text-[#2C2C2A] mb-1 group-hover:text-[#BA7517] transition-colors">{a.commune}</h2>
                  <div className="text-[13px] text-[#BA7517] font-bold mb-3">{a.type}</div>

                  {/* Specs */}
                  {a.type === "Terrain à bâtir" ? (
                    <div className="grid grid-cols-1 gap-2 mb-4 py-3 border-y border-[#D9D4CC]">
                      <div className="text-center">
                        <div className="text-[15px] font-black text-[#2C2C2A]">{a.surfaceTerrain > 0 ? a.surfaceTerrain : "—"}</div>
                        <div className="text-[10px] text-[#888780]">m² terrain</div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 gap-2 mb-4 py-3 border-y border-[#D9D4CC]">
                      <div className="text-center">
                        <div className="text-[15px] font-black text-[#2C2C2A]">{a.surfaceTerrain}</div>
                        <div className="text-[10px] text-[#888780]">m² terrain</div>
                      </div>
                      <div className="text-center border-x border-[#D9D4CC]">
                        <div className="text-[15px] font-black text-[#2C2C2A]">{a.surfaceHabitable}</div>
                        <div className="text-[10px] text-[#888780]">m² habitables</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[15px] font-black text-[#2C2C2A]">{a.pieces}</div>
                        <div className="text-[10px] text-[#888780]">pièces</div>
                      </div>
                    </div>
                  )}

                  <p className="text-[13px] text-[#888780] leading-[1.6] mb-4 flex-1">{a.accroche}</p>

                  {/* Prix */}
                  <div className="flex items-end justify-between mt-auto">
                    <div>
                      <div className="text-[11px] text-[#888780]">{a.type === "Terrain à bâtir" ? "Prix du terrain" : "Budget estimé"}</div>
                      <div className="text-[20px] font-black text-[#BA7517]">{formatBudget(a.budget)}</div>
                    </div>
                    <span className="inline-block bg-[#2C2C2A] text-white text-[13px] font-bold px-4 py-2.5 group-hover:bg-[#BA7517] transition-colors">
                      Voir le détail →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2C2C2A] py-12 px-5 text-center">
        <div className="max-w-[580px] mx-auto">
          <h2 className="text-white text-[22px] font-bold mb-3">Vous avez un terrain ou un projet ?</h2>
          <p className="text-white/60 text-[15px] leading-[1.7] mb-6">
            M&amp;M CONSTRUCTION peut analyser la faisabilité de votre projet et coordonner l&apos;ensemble du chantier. Premier échange gratuit.
          </p>
          <Link href="/demande-etude/" className="inline-block bg-[#BA7517] text-white text-[16px] font-bold px-7 py-3.5 no-underline hover:bg-[#9E6312] transition-colors">
            Demande d&apos;étude gratuite →
          </Link>
        </div>
      </section>
    </main>
  );
}
