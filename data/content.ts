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
import { isPlaceholder } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  PREUVES DE CONFIANCE (page d'accueil)                              */
/* ------------------------------------------------------------------ */

export type TrustItem = {
  icon: LucideIcon;
  title: string;
  value: string;
  /** Lien optionnel (ex. consulter le certificat Qualiopi). */
  href?: string;
  linkLabel?: string;
};

/**
 * Liste complète des repères de confiance.
 * Les éléments dont la valeur est encore « à compléter » (ex. NDA, Qualiopi
 * non confirmé) sont automatiquement masqués : ils apparaîtront dès que la
 * vraie donnée sera renseignée dans data/site.ts.
 */
const allTrustItems: TrustItem[] = [
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
      ? `${siteConfig.legal.qualiopi} (${siteConfig.legal.qualiopiDetails.certifier}, valable jusqu'au ${siteConfig.legal.qualiopiDetails.validUntil}).`
      : "À compléter si applicable",
    href: siteConfig.legal.qualiopiConfirmed
      ? siteConfig.legal.qualiopiDetails.certificateUrl
      : undefined,
    linkLabel: "Consulter le certificat",
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

/** Repères réellement renseignés (les placeholders « à compléter » sont exclus). */
export const trustItems: TrustItem[] = allTrustItems.filter(
  (item) => !isPlaceholder(item.value)
);

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

/**
 * Témoignages — REMPLACEZ les entrées ci-dessous par de vrais témoignages
 * validés par Attitude RH (1 à 3). Tant qu'une entrée contient « à compléter »,
 * elle n'est PAS affichée sur le site (la section disparaît si aucun vrai
 * témoignage n'est renseigné).
 *
 * Exemple d'entrée à fournir :
 *   {
 *     name: "Sophie M.",
 *     role: "Responsable commerciale",
 *     company: "Entreprise X",
 *     quote: "Une formation concrète qui m'a permis de gagner en aisance…",
 *     photo: "/images/temoignage-sophie.jpg", // optionnel
 *   }
 */
export const testimonials: Testimonial[] = [
  {
    name: "Prénom à compléter",
    role: "Fonction à compléter",
    company: "Entreprise à compléter",
    quote: "Témoignage à compléter.",
  },
];

/** Témoignages réellement renseignés (les placeholders sont exclus). */
export const visibleTestimonials: Testimonial[] = testimonials.filter(
  (t) => !isPlaceholder(t.quote) && !isPlaceholder(t.name)
);

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
