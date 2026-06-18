import type { Metadata } from "next";

import { PageHeader } from "@/components/PageHeader";
import { SectionTitle } from "@/components/SectionTitle";
import { FeatureCard } from "@/components/FeatureCard";
import { StepCard } from "@/components/StepCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CTASection } from "@/components/CTASection";
import { methodSteps, methodPillars } from "@/data/training";

export const metadata: Metadata = {
  title: "Méthode pédagogique",
  description:
    "La méthode d'accompagnement d'Attitude RH : diagnostic du niveau, objectifs personnalisés, formation progressive, pratique orale et suivi régulier.",
  alternates: { canonical: "/methode-pedagogique" },
};

export default function MethodePedagogiquePage() {
  return (
    <>
      <PageHeader
        eyebrow="Notre méthode"
        title="Méthode pédagogique"
        description="Un accompagnement progressif et structuré, qui place vos objectifs au centre. À chaque étape, le parcours s'ajuste pour favoriser une progression concrète et durable."
      />

      {/* Les étapes du parcours */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            eyebrow="Le parcours"
            title="Les étapes de votre formation"
            subtitle="Du premier diagnostic au bilan final, un cheminement clair et sécurisant."
          />
          <div className="mx-auto mt-12 max-w-2xl">
            {methodSteps.map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 0.05}>
                <StepCard
                  step={index + 1}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  isLast={index === methodSteps.length - 1}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Les piliers de la méthode */}
      <section className="section-padding bg-secondary/40">
        <div className="container">
          <SectionTitle
            eyebrow="Nos principes"
            title="Une méthode au service de votre progression"
            subtitle="Les piliers qui structurent chaque accompagnement Attitude RH."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {methodPillars.map((pillar, index) => (
              <AnimatedSection key={pillar.title} delay={index * 0.06}>
                <FeatureCard {...pillar} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Envie d'en savoir plus sur notre approche ?"
        description="Contactez-nous pour découvrir comment cette méthode s'appliquerait à votre projet."
        primary={{ label: "Demander des informations", href: "/contact" }}
        secondary={{ label: "Découvrir la formation", href: "/formation-anglais" }}
      />
    </>
  );
}
