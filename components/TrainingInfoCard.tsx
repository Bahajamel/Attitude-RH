import type { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type TrainingInfoCardProps = {
  icon: LucideIcon;
  label: string;
  value: string;
  className?: string;
};

/**
 * Carte d'information clé de la formation (objectifs, durée, public…).
 * Présente un intitulé en gras et sa valeur descriptive.
 */
export function TrainingInfoCard({
  icon: Icon,
  label,
  value,
  className,
}: TrainingInfoCardProps) {
  return (
    <Card
      className={cn(
        "h-full border-border/70 transition-all duration-300 hover:border-coral/30 hover:shadow-md",
        className
      )}
    >
      <CardContent className="flex gap-4 p-6">
        <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-coral-soft text-coral">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{label}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            {value}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
