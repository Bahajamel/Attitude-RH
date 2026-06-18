import type { Metadata } from "next";

import { PageHeader } from "@/components/PageHeader";
import { SectionTitle } from "@/components/SectionTitle";
import { StepCard } from "@/components/StepCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CandidatureForm } from "@/components/CandidatureForm";
import { Card, CardContent } from "@/components/ui/card";
import { candidatureSteps } from "@/data/training";

export const metadata: Metadata = {
  title: "Candidature à la formation d'anglais",
  description:
    "Déposez votre candidature à la formation d'anglais d'Attitude RH. Renseignez votre niveau, vos objectifs et la modalité souhaitée : nous revenons vers vous rapidement.",
  alternates: { canonical: "/candidature" },
};

export default function CandidaturePage() {
  return (
    <>
      <PageHeader
        eyebrow="Candidature"
        title="Candidater à la formation"
        description="Complétez le formulaire ci-dessous pour nous présenter votre projet. Ces informations nous permettent de préparer un échange utile et de vous proposer un parcours adapté."
      />

      <section className="section-padding">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            {/* Formulaire */}
            <div>
              <SectionTitle
                as="h2"
                align="left"
                title="Votre demande"
                subtitle="Les champs marqués d'un astérisque (*) sont obligatoires."
                className="max-w-none"
              />
              <div className="mt-8">
                <Card>
                  <CardContent className="p-6 sm:p-8">
                    <CandidatureForm />
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Étapes après la demande */}
            <aside>
              <SectionTitle
                as="h2"
                align="left"
                title="Que se passe-t-il après votre demande ?"
                className="max-w-none"
              />
              <div className="mt-8">
                {candidatureSteps.map((step, index) => (
                  <AnimatedSection key={step.title} delay={index * 0.05}>
                    <StepCard
                      step={index + 1}
                      icon={step.icon}
                      title={step.title}
                      description={step.description}
                      isLast={index === candidatureSteps.length - 1}
                    />
                  </AnimatedSection>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
