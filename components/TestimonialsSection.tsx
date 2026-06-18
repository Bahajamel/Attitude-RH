import { Quote } from "lucide-react";

import { SectionTitle } from "@/components/SectionTitle";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials, testimonialsNote } from "@/data/content";

type TestimonialsSectionProps = {
  className?: string;
};

/**
 * Section « Témoignages ».
 * Affiche des témoignages (placeholders tant qu'Attitude RH ne les a pas validés).
 */
export function TestimonialsSection({ className }: TestimonialsSectionProps) {
  return (
    <section className={className ?? "section-padding bg-secondary/40"}>
      <div className="container">
        <SectionTitle
          eyebrow="Témoignages"
          title="Ils nous font confiance"
          subtitle="Les retours d'apprenants accompagnés par Attitude RH."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.08}>
              <Card className="flex h-full flex-col border-border/70">
                <CardContent className="flex flex-1 flex-col p-6">
                  <Quote
                    className="h-8 w-8 text-coral/40"
                    aria-hidden="true"
                  />
                  <p className="mt-4 flex-1 leading-relaxed text-foreground">
                    « {item.quote} »
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t pt-4">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-coral-soft text-sm font-bold text-coral"
                      aria-hidden="true"
                    >
                      {item.name.charAt(0)}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {item.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.role} — {item.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <p className="mt-6 text-center text-sm italic text-muted-foreground">
          {testimonialsNote}
        </p>
      </div>
    </section>
  );
}
