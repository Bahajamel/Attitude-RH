import type { Metadata } from "next";

import { PageHeader } from "@/components/PageHeader";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité du site Attitude RH : données collectées, finalités, durée de conservation et droits des utilisateurs (RGPD).",
  alternates: { canonical: "/politique-confidentialite" },
  robots: { index: false, follow: true },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <PageHeader
        eyebrow="Confidentialité"
        title="Politique de confidentialité"
        description="Ce texte est fourni à titre générique. Il doit être adapté au fonctionnement réel de l'organisme et validé avant la mise en ligne."
      />

      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-10">
            <article className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Préambule</h2>
              <p className="leading-relaxed text-muted-foreground">
                {siteConfig.name} accorde une grande importance à la protection
                de vos données personnelles. La présente politique explique
                quelles données sont collectées, à quelles fins et quels sont vos
                droits, conformément au Règlement Général sur la Protection des
                Données (RGPD).
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">
                Données collectées
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Dans le cadre des formulaires de contact et de candidature, nous
                pouvons collecter : nom, prénom, adresse email, numéro de
                téléphone, niveau d&apos;anglais estimé, objectif de formation,
                modalité souhaitée et le contenu de votre message. Aucune donnée
                n&apos;est collectée à votre insu.
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">
                Finalités du traitement
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Les données sont utilisées uniquement pour répondre à vos
                demandes, étudier votre projet de formation et assurer le suivi
                de la relation. Elles ne sont ni vendues ni cédées à des tiers à
                des fins commerciales.
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">
                Durée de conservation
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Les données sont conservées pendant la durée nécessaire au
                traitement de votre demande, puis archivées ou supprimées selon
                les durées légales applicables (durée précise à personnaliser).
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Vos droits</h2>
              <p className="leading-relaxed text-muted-foreground">
                Conformément à la réglementation, vous disposez d&apos;un droit
                d&apos;accès, de rectification, d&apos;effacement, de limitation
                et d&apos;opposition au traitement de vos données. Vous pouvez
                exercer ces droits en nous écrivant à l&apos;adresse{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
                . Vous disposez également du droit d&apos;introduire une
                réclamation auprès de la CNIL.
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Cookies</h2>
              <p className="leading-relaxed text-muted-foreground">
                Ce site n&apos;utilise pas de cookies de suivi à des fins
                publicitaires. Si des outils de mesure d&apos;audience sont
                ajoutés ultérieurement, cette section devra être complétée et un
                bandeau de consentement mis en place (à personnaliser).
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
