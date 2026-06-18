import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionTitleProps = {
  /** Petit intitulé affiché au-dessus du titre (optionnel). */
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Alignement du bloc. */
  align?: "left" | "center";
  /** Niveau de titre sémantique (par défaut h2). */
  as?: "h2" | "h3";
  className?: string;
};

/**
 * Titre de section réutilisable, avec intitulé et sous-titre optionnels.
 */
export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as: Heading = "h2",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-coral">
          {eyebrow}
        </p>
      )}
      <Heading className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </Heading>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}
