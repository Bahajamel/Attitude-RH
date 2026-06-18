import type { Metadata } from "next";
import { Info } from "lucide-react";

import { VTestHero } from "@/components/VTestHero";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillCard } from "@/components/SkillCard";
import { FeatureCard } from "@/components/FeatureCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CTASection } from "@/components/CTASection";
import {
  vtest,
  vtestSkills,
  vtestFeatures,
  vtestEquipment,
  vtestNote,
} from "@/data/training";

export const metadata: Metadata = {
  title: "Certification VTest Business English – 4 skills",
  description:
    "VTest Business English (RS6905) : certification d'anglais professionnel évaluant les 4 compétences (4 skills), alignée sur le CECR. Préparez votre test d'anglais CECR avec Attitude RH.",
  keywords: [
    "VTest Business English",
    "certification anglais professionnel",
    "certification anglais 4 skills",
    "formation anglais Attitude RH",
    "test anglais CECR",
    "RS6905",
  ],
  alternates: { canonical: "/certification-vtest" },
};

export default function CertificationVTestPage() {
  return (
    <>
      <VTestHero />

      {/* Les 4 compétences évaluées */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            eyebrow="4 skills"
            title="Les quatre compétences évaluées"
            subtitle="VTest Business English évalue de manière complète votre maîtrise de l'anglais professionnel."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {vtestSkills.map((skill, index) => (
              <AnimatedSection key={skill.title} delay={index * 0.06}>
                <SkillCard {...skill} tone="coral" />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Points clés de la certification */}
      <section className="section-padding bg-secondary/40">
        <div className="container">
          <SectionTitle
            eyebrow="Pourquoi VTest"
            title="Une certification reconnue et structurante"
            subtitle="Des atouts concrets pour attester de votre niveau d'anglais."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {vtestFeatures.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.06}>
                <FeatureCard {...feature} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Équipement nécessaire */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            eyebrow="Conditions de passage"
            title="L'équipement nécessaire"
            subtitle="Le test se déroule en ligne : prévoyez le matériel adapté pour un passage dans de bonnes conditions."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {vtestEquipment.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.06}>
                <SkillCard {...item} tone="royal" />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mx-auto mt-10 flex max-w-3xl items-start gap-4 rounded-xl border border-border bg-secondary/50 p-6">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-coral" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {vtestNote} La certification {vtest.name} est enregistrée au
              Répertoire spécifique de France Compétences sous le code{" "}
              {vtest.rsCode}.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="Préparez la certification VTest avec Attitude RH"
        description="Contactez-nous pour construire un parcours adapté à votre niveau et préparer la certification dans les meilleures conditions."
        primary={{ label: "Candidater", href: "/candidature" }}
        secondary={{ label: "Voir la formation", href: "/formation-anglais" }}
      />
    </>
  );
}
