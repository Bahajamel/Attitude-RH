"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  /** Décalage de l'animation en secondes (utile pour des apparitions en cascade). */
  delay?: number;
  /** Balise HTML rendue (par défaut une <div>). */
  as?: "div" | "section" | "li" | "article";
};

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay },
  }),
};

/**
 * Enveloppe un contenu pour le faire apparaître en douceur lors du défilement.
 * Respecte automatiquement « prefers-reduced-motion » (géré par Framer Motion).
 */
export function AnimatedSection({
  children,
  className,
  delay = 0,
  as = "div",
}: AnimatedSectionProps) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={cn(className)}
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </MotionTag>
  );
}
