/**
 * =====================================================================
 *  CONTENUS DE CONFIANCE & PREUVES — ATTITUDE RH
 * ---------------------------------------------------------------------
 *  Preuves de sérieux, indicateurs de résultats, témoignages et
 *  partenaires. Les valeurs « à compléter » doivent être renseignées
 *  avec les données réelles fournies par Attitude RH.
 *  ⚠ Ne pas inventer de chiffres, de témoignages ou de partenaires.
 * =====================================================================
 */

import type { LucideIcon } from "lucide-react";
import {
  Award,
  BadgeCheck,
  Building2,
  FileCheck2,
  Hash,
  Languages,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

import { siteConfig } from "./site";

/* ------------------------------------------------------------------ */
/*  PREUVES DE CONFIANCE (page d'accueil)                              */
/* ------------------------------------------------------------------ */

export type TrustItem = {
  icon: LucideIcon;
  title: string;
  value: string;
};

export const trustItems: TrustItem[] = [
  {
    icon: FileCheck2,
    title: "Organisme de formation déclaré",
    value: `Numéro de déclaration d'activité : ${siteConfig.legal.nda}`,
  },
  {
    icon: Hash,
    title: "SIRET",
    value: siteConfig.legal.siret,
  },
  {
    icon: ShieldCheck,
    title: "Certification Qualiopi",
    value: siteConfig.legal.qualiopiConfirmed
      ? siteConfig.legal.qualiopi
      : "À compléter si applicable",
  },
  {
    icon: BadgeCheck,
    title: "Certification VTest Business English",
    value: `Certification d'anglais professionnel – ${siteConfig.certifications.vtest.rsCode}`,
  },
  {
    icon: Languages,
    title: "Orientée anglais professionnel",
    value: "Une formation centrée sur vos usages réels de l'anglais au travail.",
  },
  {
    icon: UserCheck,
    title: "Accompagnement personnalisé",
    value: "Un parcours adapté à votre niveau et à vos objectifs.",
  },
];

/* ------------------------------------------------------------------ */
/*  INDICATEURS DE RÉSULTATS                                           */
/* ------------------------------------------------------------------ */

export type ResultIndicator = {
  label: string;
  /** Valeur à compléter avec les données réelles (ex : "92 %"). */
  value: string;
};

export const resultIndicators: ResultIndicator[] = [
  { label: "Taux de satisfaction", value: "À compléter" },
  { label: "Taux de réussite", value: "À compléter" },
  { label: "Stagiaires formés", value: "À compléter" },
  { label: "Taux de recommandation", value: "À compléter" },
];

export const resultsNote =
  "Indicateurs à compléter selon les données réelles d'Attitude RH.";

/* ------------------------------------------------------------------ */
/*  TÉMOIGNAGES (placeholders)                                         */
/* ------------------------------------------------------------------ */

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  /** Chemin d'une photo optionnelle (ex : /images/temoignage-1.jpg). */
  photo?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Prénom à compléter",
    role: "Fonction à compléter",
    company: "Entreprise à compléter",
    quote: "Témoignage à compléter.",
  },
  {
    name: "Prénom à compléter",
    role: "Fonction à compléter",
    company: "Entreprise à compléter",
    quote: "Témoignage à compléter.",
  },
  {
    name: "Prénom à compléter",
    role: "Fonction à compléter",
    company: "Entreprise à compléter",
    quote: "Témoignage à compléter.",
  },
];

export const testimonialsNote =
  "Les témoignages seront ajoutés après validation par Attitude RH.";

/* ------------------------------------------------------------------ */
/*  PARTENAIRES                                                        */
/* ------------------------------------------------------------------ */

export type Partner = {
  icon: LucideIcon;
  name: string;
  /** true = relation confirmée + logo disponible ; false = à compléter. */
  confirmed: boolean;
  /** Chemin du logo si disponible (sinon placeholder textuel). */
  logo?: string;
};

export const partners: Partner[] = [
  {
    icon: BadgeCheck,
    name: "VTest Business English",
    confirmed: true,
    logo: "/logo/vtestlogo.png",
  },
  { icon: Building2, name: "OPCO (à compléter)", confirmed: false },
  { icon: Building2, name: "Entreprises partenaires (à compléter)", confirmed: false },
  { icon: Award, name: "Financeurs (à compléter)", confirmed: false },
];

export const partnersNote =
  "Les logos des partenaires seront ajoutés après confirmation des relations par Attitude RH.";
