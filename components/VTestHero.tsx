"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import { vtest } from "@/data/training";

const facts = [
  { icon: BadgeCheck, label: `Code ${vtest.rsCode}` },
  { icon: Globe, label: "Niveaux CECR A1 à C2" },
];

/**
 * En-tête spécifique de la page Certification VTest Business English.
 * Met en avant la certification et son logo officiel.
 */
export function VTestHero() {
  return (
    <section className="relative overflow-hidden border-b bg-gradient-to-b from-secondary via-secondary/40 to-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-coral/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />

      <div className="container relative grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-coral/30 bg-coral-soft px-4 py-1.5 text-sm font-semibold text-coral"
          >
            <BadgeCheck className="h-4 w-4" aria-hidden="true" />
            Certification d&apos;anglais professionnel
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl"
          >
            Certification VTest Business English – 4 skills
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            {vtest.intro} Une certification qui valorise votre niveau d&apos;anglais
            sur les quatre compétences, alignée sur le Cadre européen commun de
            référence (CECR).
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            {facts.map((fact) => (
              <span
                key={fact.label}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3.5 py-2 text-sm font-medium text-foreground"
              >
                <fact.icon className="h-4 w-4 text-coral" aria-hidden="true" />
                {fact.label}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg" variant="accent">
              <a
                href={vtest.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Découvrir VTest sur le site officiel (ouverture dans un nouvel onglet)"
              >
                Découvrir VTest
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href={vtest.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Essayer le test de découverte VTest (ouverture dans un nouvel onglet)"
              >
                Essayer le test de découverte
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Visuel : logo officiel VTest */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto w-full max-w-sm"
        >
          <div className="rounded-3xl border border-border/70 bg-white p-10 shadow-xl shadow-primary/5">
            <Image
              src="/logo/vtestlogo.png"
              alt="Logo de la certification VTest Business English"
              width={320}
              height={180}
              priority
              className="mx-auto h-auto w-full max-w-[260px] object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
