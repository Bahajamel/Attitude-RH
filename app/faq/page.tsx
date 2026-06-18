import type { Metadata } from "next";

import { PageHeader } from "@/components/PageHeader";
import { FaqAccordion } from "@/components/FaqAccordion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CTASection } from "@/components/CTASection";
import { faqGeneral } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ — questions fréquentes sur la formation d'anglais",
  description:
    "Réponses aux questions fréquentes sur la formation d'anglais professionnel d'Attitude RH : public, niveau, distanciel, durée, certification VTest, financement et inscription.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Questions fréquentes"
        description="Vous trouverez ici les réponses aux questions les plus courantes sur la formation, la certification et le financement. Une question reste sans réponse ? Contactez-nous."
      />

      <section className="section-padding">
        <div className="container">
          <AnimatedSection className="mx-auto max-w-3xl">
            <FaqAccordion items={faqGeneral} idPrefix="faq-general" />
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="Vous avez d'autres questions ?"
        description="Notre équipe vous répond et vous accompagne dans votre projet de formation."
        primary={{ label: "Demander des informations", href: "/contact" }}
        secondary={{ label: "Découvrir la formation", href: "/formation-anglais" }}
      />

      {/* Données structurées (SEO) — FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqGeneral.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
