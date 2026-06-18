/**
 * =====================================================================
 *  CONFIGURATION GÉNÉRALE DU SITE — ATTITUDE RH
 * ---------------------------------------------------------------------
 *  Modifiez ce fichier pour mettre à jour les coordonnées, l'URL du
 *  site, les réseaux sociaux et les textes communs.
 *  Les valeurs marquées « à personnaliser » doivent être remplacées
 *  par les informations réelles avant la mise en ligne.
 * =====================================================================
 */

export const siteConfig = {
  name: "Attitude RH",
  /** Phrase courte affichée à côté du logo / dans le footer. */
  tagline: "Centre de formation en anglais",
  /** Utilisé pour les métadonnées SEO et les liens canoniques. */
  url: "https://www.attitude-rh.fr", // à personnaliser
  description:
    "Attitude RH est un centre de formation en anglais qui accompagne chaque apprenant grâce à une formation structurée, pratique et adaptée à son niveau et à ses objectifs professionnels.",

  /** Coordonnées de l'organisme. */
  contact: {
    address: "110 rue de Fontenay, CS 20010, 94303 Vincennes Cedex",
    phone: "07 62 34 22 34",
    phoneHref: "+33762342234",
    email: "contact@attitude-rh.fr", // à personnaliser
    hours: "Du lundi au vendredi, 9h - 18h", // à personnaliser
  },

  /** Informations légales de l'entreprise (source : certificat Qualiopi DEKRA). */
  legal: {
    siret: "945 301 489 00015",
    siren: "945 301 489",
    // Numéro de déclaration d'activité de formation.
    nda: "11941353894",
    // Certification Qualiopi confirmée (certificat DEKRA Certification).
    qualiopiConfirmed: true,
    qualiopi: "Certifié Qualiopi au titre des actions de formation",
    qualiopiDetails: {
      certifier: "DEKRA Certification",
      certificateNumber: "25-12-1260",
      validFrom: "08/12/2025",
      validUntil: "07/12/2028",
      // Certificat consultable (fichier dans public/pdf).
      certificateUrl: "/pdf/certificat-qualiopi-attitude-rh.pdf",
    },
  },

  /** Certifications préparées et liens officiels. */
  certifications: {
    vtest: {
      name: "VTest Business English – 4 skills",
      rsCode: "RS6905",
      officialUrl: "https://vtest-france.exassess.com/",
      demoUrl:
        "https://app.vtest.com/candidate/demo/VTestBusinessEnglishSampleItems-BESampleItemsLRWS",
      // URL exacte de la fiche France Compétences — à compléter.
      franceCompetencesUrl: "", // ex : https://www.francecompetences.fr/recherche/rs/6905/
    },
  },

  /** Liens réseaux sociaux — laisser vide si non utilisé. */
  social: {
    linkedin: "", // à personnaliser
    facebook: "", // à personnaliser
  },

  /** Mots-clés SEO globaux. */
  keywords: [
    "formation anglais",
    "formation anglais professionnel",
    "centre de formation anglais",
    "Attitude RH",
    "anglais professionnel",
    "cours d'anglais",
    "VTest Business English",
    "certification anglais professionnel",
    "certification anglais 4 skills",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
