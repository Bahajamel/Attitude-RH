import type { Metadata } from "next";
import Link from "next/link";
import { Info } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { SectionTitle } from "@/components/SectionTitle";
import { FeatureCard } from "@/components/FeatureCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { fundingOptions, fundingNote } from "@/data/training";

export const metadata: Metadata = {
  title: "Financement de la formation",
  description:
    "Financement personnel, prise en charge par l'employeur, OPCO ou CPF selon votre situation : Attitude RH vous accompagne pour trouver la solution adaptée.",
  alternates: { canonical: "/financement" },
};

export default function FinancementPage() {
  return (
    <>
      <PageHeader
        eyebrow="Financement"
        title="Financer votre formation"
        description="Plusieurs solutions peuvent permettre de financer votre formation d'anglais. Nous vous aidons à identifier celle qui correspond le mieux à votre situation."
      />

      {/* Possibilités de financement */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            eyebrow="Les solutions"
            title="Les possibilités de financement"
            subtitle="Selon votre statut et votre projet, différentes prises en charge sont envisageables."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {fundingOptions.map((option, index) => (
              <AnimatedSection key={option.title} delay={index * 0.07}>
                <FeatureCard {...option} />
              </AnimatedSection>
            ))}
          </div>

          {/* Note de prudence */}
          <AnimatedSection className="mx-auto mt-10 flex max-w-3xl items-start gap-4 rounded-xl border border-border bg-secondary/50 p-6">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-coral" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {fundingNote}
            </p>
          </AnimatedSection>

          {/* Tarifs — zone à personnaliser */}
          <AnimatedSection className="mx-auto mt-6 max-w-3xl rounded-xl border border-dashed border-border p-6 text-center">
            <p className="text-sm text-muted-foreground">
              {/* À PERSONNALISER : indiquez ici une grille tarifaire ou un tarif horaire une fois confirmé. */}
              Tarifs communiqués sur demande, en fonction du parcours et des
              modalités retenues <span className="italic">(à personnaliser)</span>.
            </p>
            <Button asChild className="mt-5" size="lg">
              <Link href="/contact">Demander un devis</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="Étudions ensemble votre financement"
        description="Contactez Attitude RH pour examiner les solutions adaptées à votre profil et obtenir un devis personnalisé."
        primary={{ label: "Demander un devis", href: "/contact" }}
        secondary={{ label: "Candidater", href: "/candidature" }}
      />
    </>
  );
}
