"use client";

import Image from "next/image";
import { useState } from "react";

const steps = [
  {
    number: "1",
    title: "Évaluation du projet",
    image: "/images/step-1.jpeg",
    description:
      "Premier échange gratuit pour analyser votre terrain, votre programme et votre budget. Nous identifions les contraintes PLU, la faisabilité technique et les marges de manœuvre avant toute contractualisation. C'est à ce stade qu'on vérifie si votre projet tient — pas après signature.",
  },
  {
    number: "2",
    title: "Conception & permis",
    image: "/images/step-2.jpeg",
    description:
      "Nous coordonnons la conception architecturale avec des plans ossature bois adaptés à votre terrain et à votre budget RE2020. Nous constituons et déposons le dossier de permis de construire, gérons les échanges avec l'instruction, et anticipons les modifications éventuelles.",
  },
  {
    number: "3",
    title: "Coordination de chantier",
    image: "/images/step-3.jpeg",
    description:
      "Nous sélectionnons les artisans locaux vérifiés (décennale, compétences bois), établissons le planning d'intervention, et assurons la coordination sur site. Vous avez un interlocuteur unique : pas de gestion de 8 corps de métier en parallèle de votre côté.",
  },
  {
    number: "4",
    title: "Réception des travaux",
    image: "/images/step-4.jpeg",
    description:
      "Visite de réception avec grille de contrôle qualité. Nous relevons les réserves, assurons leur levée avant la remise des clés, et vous accompagnons dans l'activation des garanties (décennale, parfait achèvement). Votre maison bois est prête à vivre.",
  },
];

export function StepsSection() {
  const [activeStep, setActiveStep] = useState(0);

  const step = steps[activeStep];

  return (
    <section className="bg-white py-14 px-5">
      <div className="max-w-[1100px] mx-auto">
        <h3 className="text-[30px] md:text-[35px] font-bold text-[#2C2C2A] text-center mb-4">
          Votre projet maison bois avec M&amp;M CONSTRUCTION, c&apos;est…
        </h3>
        <p className="text-[18px] text-[#888780] text-center leading-[1.7] max-w-[800px] mx-auto mb-10">
          …un maître d&apos;œuvre qui prend en charge la coordination de bout en bout.
          Vous décidez, nous exécutons. Voilà la réalité du métier.
        </p>

        {/* Tab buttons — desktop */}
        <div className="hidden md:flex border-b border-[#D9D4CC] mb-8">
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`flex-1 py-3 text-[17px] font-medium border-none cursor-pointer transition-colors ${
                activeStep === i
                  ? "text-[#BA7517] font-bold border-b-[3px] border-[#BA7517] -mb-px"
                  : "text-[#888780] bg-white hover:text-[#BA7517]"
              } bg-transparent`}
            >
              {s.number} — {s.title}
            </button>
          ))}
        </div>

        {/* Step content — desktop */}
        <div className="hidden md:grid grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src={step.image}
              alt={step.title}
              width={540}
              height={360}
              className="w-full object-cover rounded"
            />
          </div>
          <div>
            <h4 className="text-[22px] font-bold text-[#2C2C2A] mb-3">{step.title}</h4>
            <p className="text-[17px] text-[#888780] leading-[1.8]">{step.description}</p>
          </div>
        </div>

        {/* Mobile accordion */}
        <div className="md:hidden flex flex-col gap-0">
          {steps.map((s, i) => (
            <div key={i} className="border-b border-[#D9D4CC]">
              <button
                onClick={() => setActiveStep(activeStep === i ? -1 : i)}
                className={`w-full text-left py-4 text-[17px] font-medium flex items-center justify-between bg-transparent border-none cursor-pointer ${
                  activeStep === i ? "text-[#BA7517] font-bold" : "text-[#2C2C2A]"
                }`}
              >
                <span>{s.number} — {s.title}</span>
                <span className="text-[#BA7517] text-[20px]">{activeStep === i ? "−" : "+"}</span>
              </button>
              {activeStep === i && (
                <div className="pb-4">
                  <Image src={s.image} alt={s.title} width={400} height={267} className="w-full object-cover rounded mb-4" />
                  <p className="text-[15px] text-[#888780] leading-[1.7]">{s.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
