import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";

import { HeroSection } from "@/components/HeroSection";
import { SectionTitle } from "@/components/SectionTitle";
import { FeatureCard } from "@/components/FeatureCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { whyChooseUs, trainingHighlights, vtestSkills } from "@/data/training";

export const metadata: Metadata = {
  title: "Formation d'anglais adaptée à vos objectifs",
  description:
    "Attitude RH, centre de formation en anglais : une formation structurée, pratique et personnalisée pour progresser à l'oral et à l'écrit dans un cadre professionnel.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Pourquoi choisir Attitude RH ? */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            eyebrow="Pourquoi nous choisir"
            title="Pourquoi choisir Attitude RH ?"
            subtitle="Un accompagnement humain et exigeant, pensé pour vous faire progresser durablement."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.08}>
                <FeatureCard {...feature} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Une formation pensée pour progresser */}
      <section className="section-padding bg-secondary/40">
        <div className="container">
          <SectionTitle
            eyebrow="Notre approche"
            title="Une formation pensée pour progresser"
            subtitle="Chaque parcours suit une logique claire, du diagnostic initial au suivi de vos progrès."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trainingHighlights.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.08}>
                <FeatureCard {...feature} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certification VTest */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection className="overflow-hidden rounded-3xl border border-border/70 bg-secondary/50">
            <div className="grid items-center gap-8 p-8 md:grid-cols-2 md:p-12">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-coral/30 bg-coral-soft px-3.5 py-1 text-sm font-semibold text-coral">
                  <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                  Certification
                </span>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Préparez la certification VTest Business English
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Une certification d&apos;anglais professionnel reconnue
                  (RS6905), qui évalue les 4 compétences et situe votre niveau
                  sur l&apos;échelle du CECR.
                </p>
                <Button asChild className="mt-6">
                  <Link href="/certification-vtest">
                    Découvrir la certification
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <ul className="grid grid-cols-2 gap-3">
                {vtestSkills.map((skill) => (
                  <li
                    key={skill.title}
                    className="flex items-center gap-3 rounded-xl border border-border/70 bg-background p-4"
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-coral-soft text-coral">
                      <skill.icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {skill.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="Vous souhaitez améliorer votre anglais ?"
        description="Contactez-nous pour échanger sur votre projet et construire ensemble un parcours adapté."
        primary={{ label: "Demander des informations", href: "/contact" }}
        secondary={{ label: "Découvrir la formation", href: "/formation-anglais" }}
      />
    </>
  );
}
