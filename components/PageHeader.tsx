import type { ReactNode } from "react";

import { AnimatedSection } from "@/components/AnimatedSection";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
};

/**
 * En-tête de page interne (bandeau d'introduction sous le header).
 * Contient le <h1> de la page.
 */
export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b bg-secondary/60">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-coral/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
      />
      <div className="container relative py-16 md:py-20">
        <AnimatedSection className="max-w-3xl">
          {eyebrow && (
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-coral/30 bg-coral-soft px-3.5 py-1 text-sm font-semibold text-coral">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </AnimatedSection>
      </div>
    </section>
  );
}
