import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type StepCardProps = {
  /** Numéro d'étape (1, 2, 3…). */
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
  /** Masque le trait de liaison vertical (dernière étape). */
  isLast?: boolean;
  className?: string;
};

/**
 * Étape numérotée d'un parcours (méthode pédagogique, candidature…).
 * Affichée verticalement avec un trait de liaison entre les étapes.
 */
export function StepCard({
  step,
  icon: Icon,
  title,
  description,
  isLast = false,
  className,
}: StepCardProps) {
  return (
    <div className={cn("relative flex gap-5", className)}>
      {/* Colonne de gauche : numéro + trait de liaison */}
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-base font-semibold text-primary-foreground shadow-sm">
          {step}
        </div>
        {!isLast && (
          <div className="mt-2 w-px flex-1 bg-border" aria-hidden="true" />
        )}
      </div>

      {/* Contenu */}
      <div className={cn("pb-10", isLast && "pb-0")}>
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-coral" aria-hidden="true" />
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        </div>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
