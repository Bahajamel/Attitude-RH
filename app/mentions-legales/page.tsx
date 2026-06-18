import type { Metadata } from "next";

import { PageHeader } from "@/components/PageHeader";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site Attitude RH : éditeur, hébergeur, propriété intellectuelle et responsabilité.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Informations légales"
        title="Mentions légales"
        description="Les informations ci-dessous sont fournies à titre générique et doivent être complétées avec les données réelles de l'organisme avant la mise en ligne."
      />

      <section className="section-padding">
        <div className="container">
          <div className="prose-attitude mx-auto max-w-3xl space-y-10">
            <article className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">
                Éditeur du site
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Le présent site est édité par {siteConfig.name}.
                <br />
                Raison sociale : à personnaliser.
                <br />
                Forme juridique et capital social : à personnaliser.
                <br />
                Adresse : {siteConfig.contact.address}.
                <br />
                Téléphone : {siteConfig.contact.phone}.
                <br />
                Email : {siteConfig.contact.email}.
                <br />
                Numéro SIRET : {siteConfig.legal.siret}.
                <br />
                Numéro de déclaration d&apos;activité de formation :{" "}
                {siteConfig.legal.nda} (cet enregistrement ne vaut pas agrément
                de l&apos;État).
                <br />
                Directeur de la publication : à personnaliser.
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">
                Certification Qualiopi
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {siteConfig.name} est certifié Qualiopi au titre de la catégorie
                d&apos;action « actions de formation ». Certification délivrée
                par {siteConfig.legal.qualiopiDetails.certifier} (certificat n°{" "}
                {siteConfig.legal.qualiopiDetails.certificateNumber}), valable du{" "}
                {siteConfig.legal.qualiopiDetails.validFrom} au{" "}
                {siteConfig.legal.qualiopiDetails.validUntil}.{" "}
                <a
                  href={siteConfig.legal.qualiopiDetails.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  Consulter le certificat (PDF)
                </a>
                .
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Hébergement</h2>
              <p className="leading-relaxed text-muted-foreground">
                Le site est hébergé par : nom de l&apos;hébergeur à personnaliser.
                <br />
                Adresse de l&apos;hébergeur : à personnaliser.
                <br />
                Contact de l&apos;hébergeur : à personnaliser.
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">
                Propriété intellectuelle
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                L&apos;ensemble des contenus présents sur ce site (textes,
                images, logos, éléments graphiques) est, sauf mention contraire,
                la propriété de {siteConfig.name} ou de ses partenaires. Toute
                reproduction ou représentation, totale ou partielle, sans
                autorisation préalable, est interdite.
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">
                Responsabilité
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {siteConfig.name} s&apos;efforce d&apos;assurer l&apos;exactitude
                des informations diffusées sur ce site, mais ne saurait être tenu
                responsable des erreurs, omissions ou indisponibilités. Les
                informations relatives aux formations, tarifs et financements
                sont communiquées sous réserve de confirmation.
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">
                Données personnelles
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Le traitement des données personnelles est détaillé dans notre{" "}
                <a
                  href="/politique-confidentialite"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  politique de confidentialité
                </a>
                .
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
