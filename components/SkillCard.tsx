import type { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type SkillCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Variante de couleur de l'icône : "coral" (par défaut) ou "royal". */
  tone?: "coral" | "royal";
  className?: string;
};

/**
 * Carte de compétence (formation ou certification VTest).
 * Pastille d'icône colorée + titre + description courte, avec un
 * léger effet de survol pour rester sobre et moderne.
 */
export function SkillCard({
  icon: Icon,
  title,
  description,
  tone = "coral",
  className,
}: SkillCardProps) {
  return (
    <Card
      className={cn(
        "group h-full border-border/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5",
        tone === "coral"
          ? "hover:border-coral/40"
          : "hover:border-royal/40",
        className
      )}
    >
      <CardContent className="p-6">
        <div
          className={cn(
            "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110",
            tone === "coral"
              ? "bg-coral-soft text-coral"
              : "bg-royal/10 text-royal"
          )}
        >
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
