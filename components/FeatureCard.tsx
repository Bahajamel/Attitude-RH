import type { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
};

/**
 * Carte de mise en avant (avantage, compétence, option de financement…).
 * Léger effet de survol pour rester sobre.
 */
export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <Card
      className={cn(
        "group h-full border-border/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5",
        className
      )}
    >
      <CardContent className="p-6">
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/[0.06] text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
