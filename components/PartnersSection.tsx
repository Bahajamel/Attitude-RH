import Image from "next/image";

import { SectionTitle } from "@/components/SectionTitle";
import { AnimatedSection } from "@/components/AnimatedSection";
import { partners, partnersNote } from "@/data/content";

type PartnersSectionProps = {
  className?: string;
};

/**
 * Section « Partenaires ».
 * N'affiche un logo que si la relation est confirmée (`confirmed`) et qu'un
 * fichier de logo est fourni. Sinon, un emplacement neutre « à compléter »
 * est affiché — aucun logo de partenaire non confirmé n'est utilisé.
 */
export function PartnersSection({ className }: PartnersSectionProps) {
  return (
    <section className={className ?? "section-padding"}>
      <div className="container">
        <SectionTitle
          eyebrow="Partenaires"
          title="Nos partenaires"
          subtitle="Attitude RH s'appuie sur des partenaires reconnus pour la qualité de ses formations."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {partners.map((partner, index) => (
            <AnimatedSection key={partner.name} delay={index * 0.06}>
              <div className="flex h-28 items-center justify-center rounded-xl border border-border/70 bg-card p-5">
                {partner.confirmed && partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    width={160}
                    height={80}
                    className="h-auto max-h-14 w-auto object-contain"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-center text-muted-foreground">
                    <partner.icon className="h-6 w-6" aria-hidden="true" />
                    <span className="text-xs font-medium">{partner.name}</span>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        <p className="mt-6 text-center text-sm italic text-muted-foreground">
          {partnersNote}
        </p>
      </div>
    </section>
  );
}
