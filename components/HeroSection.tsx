"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, CheckCircle2, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const highlights = [
  "Test de niveau",
  "Objectifs personnalisés",
  "Présentiel ou distanciel",
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.08 },
  }),
};

/**
 * Section d'ouverture de la page d'accueil.
 * Contient le <h1> du site et les appels à l'action principaux.
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b bg-gradient-to-b from-secondary via-secondary/40 to-background">
      {/* Décors discrets cohérents avec le logo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-coral/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-royal/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />

      <div className="container relative grid items-center gap-12 py-20 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        {/* Colonne texte */}
        <div className="max-w-2xl">
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-coral/30 bg-coral-soft px-4 py-1.5 text-sm font-medium text-coral"
          >
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Centre de formation • Certification VTest Business English
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Développez votre <span className="text-coral">anglais</span> avec une
            formation adaptée à vos objectifs
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Attitude RH vous accompagne dans votre progression en anglais grâce à
            une formation structurée, pratique et adaptée à votre niveau.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg" variant="accent">
              <Link href="/contact">
                Demander des informations
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/formation-anglais">Découvrir la formation</Link>
            </Button>
          </motion.div>

          <motion.ul
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
          >
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-coral" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Colonne visuelle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative overflow-hidden rounded-3xl border border-border/70 shadow-xl shadow-primary/10">
            <Image
              src="/images/BEP-68c-English-Meetings-Interruptions-featured.jpg"
              alt="Professionnels échangeant en anglais lors d'une réunion de travail"
              width={850}
              height={700}
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="aspect-[5/4] h-full w-full object-cover"
            />
          </div>

          {/* Badges flottants (masqués sur très petits écrans) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -left-4 top-8 hidden items-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 shadow-lg sm:flex"
          >
            <BadgeCheck className="h-5 w-5 text-coral" />
            <span className="text-sm font-semibold text-foreground">
              Certification 4 skills
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="absolute -right-4 bottom-8 hidden items-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 shadow-lg sm:flex"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-royal/10 text-xs font-bold text-royal">
              A1
            </span>
            <span className="text-sm font-semibold text-foreground">
              Niveaux CECR à C2
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
