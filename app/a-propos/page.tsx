import type { Metadata } from "next";
import {
  Accessibility,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { SectionTitle } from "@/components/SectionTitle";
import { FeatureCard } from "@/components/FeatureCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CTASection } from "@/components/CTASection";
import { whyChooseUs } from "@/data/training";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "À propos — centre de formation en anglais",
  description:
    "Découvrez Attitude RH, centre de formation en anglais professionnel : notre mission, notre vision pédagogique et nos valeurs au service de votre progression.",
  alternates: { canonical: "/a-propos" },
};

const values = [
  {
    icon: HeartHandshake,
    title: "Accompagnement",
    description:
      "Un suivi attentif et personnalisé, à l'écoute de votre projet et de votre rythme.",
  },
  {
    icon: TrendingUp,
    title: "Progression",
    description:
      "Des objectifs concrets et une progression mesurable, étape après étape.",
  },
  {
    icon: ShieldCheck,
    title: "Confiance",
    description:
      "Un cadre clair et transparent pour avancer sereinement.",
  },
  {
    icon: GraduationCap,
    title: "Professionnalisme",
    description:
      "Une approche sérieuse, centrée sur vos usages réels de l'anglais au travail.",
  },
  {
    icon: Accessibility,
    title: "Accessibilité",
    description:
      "Une formation pensée pour s'adapter à différents profils et situations.",
  },
];

export default function AProposPage() {
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title="Qui est Attitude RH ?"
        description={`${siteConfig.name} est un centre de formation dédié au développement des compétences en anglais professionnel.`}
      />

      {/* Présentation + mission */}
      <section className="section-padding">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection>
              <SectionTitle
                as="h2"
                align="left"
                title="Notre mission"
                className="max-w-none"
              />
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Attitude RH accompagne les apprenants dans le développement de
                leurs compétences en anglais professionnel grâce à une approche
                pédagogique personnalisée, progressive et orientée vers la
                pratique. L&apos;objectif est de permettre à chaque apprenant de
                gagner en confiance, d&apos;améliorer sa communication et de
                développer des compétences utiles dans un contexte
                professionnel.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <SectionTitle
                as="h2"
                align="left"
                title="Notre vision pédagogique"
                className="max-w-none"
              />
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Nous croyons qu&apos;une formation efficace part du niveau réel
                de chacun et avance vers des objectifs concrets. La pratique, les
                mises en situation et un suivi régulier sont au cœur de notre
                méthode : apprendre l&apos;anglais, c&apos;est avant tout
                l&apos;utiliser.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section-padding bg-secondary/40">
        <div className="container">
          <SectionTitle
            eyebrow="Nos valeurs"
            title="Ce qui guide notre accompagnement"
            subtitle="Cinq valeurs au service de votre réussite."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.06}>
                <FeatureCard {...value} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Notre approche */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            eyebrow="Notre approche"
            title="Une approche humaine et concrète"
            subtitle="Nous plaçons l'apprenant au centre, avec un parcours qui s'adapte en continu à ses besoins."
          />
          <div className="mx-auto mt-10 max-w-3xl space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Chaque parcours commence par un diagnostic du niveau et la
              définition d&apos;objectifs clairs. La formation se construit
              ensuite progressivement, en alternant apports, exercices et
              mises en situation proches de votre quotidien professionnel.
            </p>
            <p>
              Tout au long du parcours, un suivi régulier permet de mesurer les
              progrès et d&apos;ajuster le contenu. L&apos;objectif reste le
              même : vous rendre autonome et confiant dans vos échanges en
              anglais.
            </p>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir Attitude RH */}
      <section className="section-padding bg-secondary/40">
        <div className="container">
          <SectionTitle
            eyebrow="Pourquoi nous choisir"
            title="Pourquoi choisir Attitude RH ?"
            subtitle="Un accompagnement humain et exigeant, pensé pour vous faire progresser durablement."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.06}>
                <FeatureCard {...feature} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Envie d'échanger sur votre projet ?"
        description="Contactez-nous ou déposez votre candidature : nous construisons ensemble un parcours adapté."
        primary={{ label: "Demander des informations", href: "/contact" }}
        secondary={{ label: "Candidater", href: "/candidature" }}
      />
    </>
  );
}
