import { SectionTitle } from "@/components/SectionTitle";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { resultIndicators, resultsNote } from "@/data/content";

type ResultsSectionProps = {
  /** Classe optionnelle pour ajuster le fond de la section. */
  className?: string;
};

/**
 * Section « Indicateurs de résultats ».
 * Affiche des indicateurs clés (valeurs à compléter avec les données réelles).
 */
export function ResultsSection({ className }: ResultsSectionProps) {
  return (
    <section className={className ?? "section-padding"}>
      <div className="container">
        <SectionTitle
          eyebrow="Nos résultats"
          title="Des indicateurs au service de la transparence"
          subtitle="Attitude RH suit la qualité de ses formations à travers des indicateurs concrets."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resultIndicators.map((item, index) => (
            <AnimatedSection key={item.label} delay={index * 0.06}>
              <Card className="h-full border-border/70 text-center">
                <CardContent className="p-6">
                  <p className="text-3xl font-bold tracking-tight text-primary">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">
                    {item.label}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <p className="mt-6 text-center text-sm italic text-muted-foreground">
          {resultsNote}
        </p>
      </div>
    </section>
  );
}
