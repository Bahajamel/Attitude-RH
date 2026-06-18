import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone, PhoneCall } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { SectionTitle } from "@/components/SectionTitle";
import { ContactForm } from "@/components/ContactForm";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Attitude RH, centre de formation en anglais. Posez vos questions, demandez des informations ou un rappel : notre équipe vous répond rapidement.",
  alternates: { canonical: "/contact" },
};

const contactItems = [
  { icon: MapPin, label: "Adresse", value: siteConfig.contact.address },
  { icon: Phone, label: "Téléphone", value: siteConfig.contact.phone },
  { icon: Mail, label: "Email", value: siteConfig.contact.email, isEmail: true },
  { icon: Clock, label: "Horaires", value: siteConfig.contact.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Nous contacter"
        description="Une question sur la formation, le financement ou les modalités ? Écrivez-nous : nous serons ravis d'échanger sur votre projet."
      />

      <section className="section-padding">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            {/* Coordonnées */}
            <div>
              <SectionTitle
                as="h2"
                align="left"
                title="Coordonnées"
                subtitle="Retrouvez toutes nos coordonnées ci-dessous."
                className="max-w-none"
              />

              <ul className="mt-8 space-y-4">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label}>
                      <Card className="border-border/70">
                        <CardContent className="flex items-center gap-4 p-5">
                          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/[0.06] text-primary">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-foreground">
                              {item.label}
                            </p>
                            {item.isEmail ? (
                              <a
                                href={`mailto:${item.value}`}
                                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="text-sm text-muted-foreground">
                                {item.value}
                              </p>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </li>
                  );
                })}
              </ul>

              {/* Bouton « Être rappelé » */}
              <div className="mt-6">
                <Button asChild variant="outline" size="lg">
                  {/* À PERSONNALISER : remplacez par le numéro réel ou un lien de prise de rendez-vous. */}
                  <a
                    href={
                      siteConfig.contact.phoneHref
                        ? `tel:${siteConfig.contact.phoneHref}`
                        : "#formulaire-contact"
                    }
                  >
                    <PhoneCall className="h-4 w-4" />
                    Être rappelé
                  </a>
                </Button>
              </div>

              {/* Emplacement / carte — zone à personnaliser */}
              <AnimatedSection className="mt-8">
                <div className="flex h-56 flex-col items-center justify-center rounded-xl border border-dashed border-border bg-secondary/40 text-center">
                  <MapPin className="h-7 w-7 text-coral" />
                  <p className="mt-3 max-w-xs px-4 text-sm text-muted-foreground">
                    {/* À PERSONNALISER : insérez ici une carte Google Maps (iframe) ou une image du lieu. */}
                    Emplacement à personnaliser — insérez ici une carte ou une
                    photo de votre centre de formation.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Formulaire de contact */}
            <div id="formulaire-contact" className="scroll-mt-24">
              <SectionTitle
                as="h2"
                align="left"
                title="Envoyer un message"
                subtitle="Remplissez le formulaire, nous vous répondrons dans les meilleurs délais."
                className="max-w-none"
              />
              <div className="mt-8">
                <Card>
                  <CardContent className="p-6 sm:p-8">
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
