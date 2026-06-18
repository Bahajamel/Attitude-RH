"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/data/faq";

type FaqAccordionProps = {
  items: FaqItem[];
  /** Identifiant unique pour différencier plusieurs accordéons sur une page. */
  idPrefix?: string;
};

/**
 * Accordéon de FAQ accessible (clavier + ARIA gérés par Radix).
 * Réutilisable sur la page FAQ et la page Financement.
 */
export function FaqAccordion({ items, idPrefix = "faq" }: FaqAccordionProps) {
  return (
    <Accordion type="single" collapsible className="space-y-3">
      {items.map((item, index) => (
        <AccordionItem key={`${idPrefix}-${index}`} value={`${idPrefix}-${index}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
