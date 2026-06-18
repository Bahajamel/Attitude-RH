import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

type CTAAction = {
  label: string;
  href: string;
};

type CTASectionProps = {
  title: ReactNode;
  description?: ReactNode;
  primary?: CTAAction;
  secondary?: CTAAction;
};

/**
 * Bandeau d'appel à l'action affiché en bas des pages.
 * Fond bleu foncé pour ressortir tout en restant sobre.
 */
export function CTASection({
  title,
  description,
  primary = { label: "Demander des informations", href: "/contact" },
  secondary,
}: CTASectionProps) {
  return (
    <section className="section-padding">
      <div className="container">
        <AnimatedSection className="relative overflow-hidden rounded-3xl bg-brand-gradient px-6 py-16 text-center text-white sm:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-coral/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-royal/20 blur-3xl"
          />
          <h2 className="relative mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/80">
              {description}
            </p>
          )}
          <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="accent">
              <Link href={primary.href}>
                {primary.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            {secondary && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
