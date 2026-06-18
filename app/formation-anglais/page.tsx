import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CheckCircle2, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";
import { SectionTitle } from "@/components/SectionTitle";
import { FeatureCard } from "@/components/FeatureCard";
import { TrainingInfoCard } from "@/components/TrainingInfoCard";
import { ProgramAccordion } from "@/components/ProgramAccordion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CTASection } from "@/components/CTASection";
import {
  trainingInfos,
  skills,
  certificationNote,
  formationProgram,
  vtest,
} from "@/data/training";

export const metadata: Metadata = {
  title: "Formation d'anglais professionnel",
  description:
    "Découvrez la formation d'anglais d'Attitude RH : objectifs, public visé, compétences travaillées, modalités, durée et préparation à la certification VTest Business English.",
  alternates: { canonical: "/formation-anglais" },
};

const introHighlights = [
  "Anglais professionnel",
  "Progression à l'oral et à l'écrit",
  "Présentiel ou distanciel",
];

export default function FormationAnglaisPage() {
  return (
    <>
      <PageHeader
        eyebrow="La formation"
        title="Formation d'anglais"
        description="Une formation complète pour gagner en aisance à l'oral comme à l'écrit et utiliser l'anglais avec confiance dans votre vie professionnelle. Le contenu s'adapte à votre niveau et à vos objectifs."
      />

      {/* Bloc d'introduction visuel (images d'anglais) */}
      <section className="section-padding">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection>
              <p className="text-sm font-semibold uppercase tracking-wide text-coral">
                Anglais professionnel
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Un anglais utile, ancré dans votre quotidien professionnel
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Que vous soyez débutant ou que vous souhaitiez vous
                perfectionner, la formation s&apos;appuie sur des situations
                concrètes pour vous faire progresser durablement, à votre
                rythme.
              </p>
              <ul className="mt-6 space-y-3">
                {introHighlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-coral" />
                    <span className="font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8">
                <Link href="/candidature">
                  Candidater à la formation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="space-y-5">
              <div className="overflow-hidden rounded-3xl border border-border/70 bg-white p-6 shadow-lg shadow-primary/5">
                <Image
                  src="/images/formationanglais.png"
                  alt="Illustration d'une formation en cours d'anglais"
                  width={640}
                  height={360}
                  className="mx-auto h-auto w-full max-w-md object-contain"
                />
              </div>
              <div className="overflow-hidden rounded-3xl border border-border/70 bg-white p-6 shadow-lg shadow-primary/5">
                <Image
                  src="/images/englishcourse.png"
                  alt="Cours d'anglais des affaires (Business English)"
                  width={640}
                  height={336}
                  className="mx-auto h-auto w-full max-w-md object-contain"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Blocs d'information clés */}
      <section className="section-padding bg-secondary/40">
        <div className="container">
          <SectionTitle
            eyebrow="L'essentiel"
            title="Une formation claire et structurée"
            subtitle="Les informations clés pour comprendre rapidement le déroulé et le cadre de la formation."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trainingInfos.map((info, index) => (
              <AnimatedSection key={info.label} delay={index * 0.06}>
                <TrainingInfoCard {...info} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences travaillées */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            eyebrow="Compétences"
            title="Les compétences travaillées"
            subtitle="Un programme équilibré qui couvre l'ensemble des compétences utiles en contexte professionnel."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <AnimatedSection key={skill.title} delay={index * 0.05}>
                <FeatureCard {...skill} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Programme & informations pratiques */}
      <section className="section-padding bg-secondary/40">
        <div className="container">
          <SectionTitle
            eyebrow="Programme"
            title="Programme & informations pratiques"
            subtitle="Toutes les informations essentielles sur le déroulé, les modalités et les conditions de la formation."
          />
          <AnimatedSection className="mx-auto mt-12 max-w-3xl">
            <ProgramAccordion items={formationProgram} />
          </AnimatedSection>
        </div>
      </section>

      {/* Certification VTest Business English */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection className="overflow-hidden rounded-3xl border border-coral/25 bg-background shadow-sm">
            <div className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-12">
              {/* Contenu */}
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-coral-soft text-coral">
                  <BadgeCheck className="h-6 w-6" aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Certification VTest Business English
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Attitude RH peut accompagner les apprenants dans la
                  préparation de la certification VTest Business English, une
                  certification permettant d&apos;évaluer les compétences en
                  anglais professionnel à travers plusieurs compétences :
                  compréhension orale, compréhension écrite, expression orale et
                  expression écrite.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Un test de découverte est disponible afin de mieux comprendre
                  le format des questions et le déroulement de
                  l&apos;évaluation.
                </p>

                {/*
                  Informations complémentaires VTest à compléter selon le
                  document client.
                  (Emplacement réservé : ajoutez ici les précisions fournies
                  par Attitude RH — modalités, niveaux, durée, financement…)
                */}

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button asChild variant="accent">
                    <a
                      href={vtest.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Découvrir VTest sur le site officiel (ouverture dans un nouvel onglet)"
                    >
                      Découvrir VTest
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a
                      href={vtest.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Essayer le test de découverte VTest (ouverture dans un nouvel onglet)"
                    >
                      Essayer le test de découverte
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>

                <p className="mt-5 text-sm text-muted-foreground">
                  {certificationNote}{" "}
                  <Link
                    href="/certification-vtest"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    En savoir plus sur la certification VTest
                  </Link>
                  .
                </p>
              </div>

              {/* Logo VTest */}
              <div className="flex justify-center">
                <div className="w-full max-w-xs rounded-2xl border border-border/70 bg-white p-8 shadow-lg shadow-primary/5">
                  <Image
                    src="/logo/vtestlogo.png"
                    alt="Logo de la certification VTest Business English"
                    width={320}
                    height={180}
                    className="mx-auto h-auto w-full max-w-[220px] object-contain"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="Prêt à progresser en anglais ?"
        description="Échangeons sur votre niveau et vos objectifs pour définir le parcours qui vous correspond."
        primary={{ label: "Candidater à la formation", href: "/candidature" }}
        secondary={{ label: "Voir la méthode pédagogique", href: "/methode-pedagogique" }}
      />
    </>
  );
}
