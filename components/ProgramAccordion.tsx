import { Check } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ProgramItem } from "@/data/training";

// Composant serveur : il compose les primitives Accordion (client) et rend
// les icônes sous forme d'éléments React. Ainsi, aucune fonction (composant
// d'icône) n'est passée directement comme prop à un Client Component.

type ProgramAccordionProps = {
  items: ProgramItem[];
};

/**
 * Accordéon du programme détaillé de la formation.
 * Chaque item affiche une icône, un titre et un contenu (paragraphe + points).
 */
export function ProgramAccordion({ items }: ProgramAccordionProps) {
  return (
    <Accordion type="single" collapsible className="space-y-3">
      {items.map((item, index) => (
        <AccordionItem key={item.title} value={`program-${index}`}>
          <AccordionTrigger>
            <span className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-coral-soft text-coral">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              {item.title}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p>{item.content}</p>
            {item.points && (
              <ul className="mt-3 space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
