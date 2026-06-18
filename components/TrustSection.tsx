import { SectionTitle } from "@/components/SectionTitle";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { trustItems } from "@/data/content";

type TrustSectionProps = {
  className?: string;
};

/**
 * Section « Preuves de confiance ».
 * Met en avant les repères de sérieux du centre de formation.
 *
 * TODO: afficher le logo Qualiopi uniquement si Attitude RH confirme la
 * certification et fournit le certificat (placer le fichier dans
 * public/logo ou public/images, puis passer `qualiopiConfirmed` à true
 * dans data/site.ts).
 */
export function TrustSection({ className }: TrustSectionProps) {
  return (
    <section className={className ?? "section-padding bg-secondary/40"}>
      <div className="container">
        <SectionTitle
          eyebrow="Confiance"
          title="Des repères clairs pour choisir votre formation en toute confiance"
          subtitle="Des informations transparentes sur notre organisme et nos certifications."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustItems.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.06}>
              <Card className="h-full border-border/70 transition-all duration-300 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5">
                <CardContent className="flex gap-4 p-6">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/[0.06] text-primary">
                    <item.icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {item.value}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
