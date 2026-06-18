/**
 * =====================================================================
 *  CONTENU DE LA FORMATION D'ANGLAIS — ATTITUDE RH
 * ---------------------------------------------------------------------
 *  Centralise les textes des pages Formation, Méthode, Financement
 *  et Accueil. Modifiez librement les valeurs ci-dessous.
 *  ⚠ Les champs « à personnaliser » (durée, niveau, certification,
 *  prix) ne doivent contenir aucune information non confirmée.
 * =====================================================================
 */

import type { LucideIcon } from "lucide-react";
import { siteConfig } from "./site";
import {
  Accessibility,
  Award,
  BadgeCheck,
  BookOpen,
  Briefcase,
  CalendarClock,
  Camera,
  ClipboardCheck,
  Compass,
  Globe,
  GraduationCap,
  Headphones,
  Laptop,
  Mail,
  MessageSquare,
  Mic,
  Monitor,
  PenLine,
  Receipt,
  Repeat,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  Wallet,
  Volume2,
  Wifi,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  PAGE ACCUEIL                                                       */
/* ------------------------------------------------------------------ */

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

/** Section « Pourquoi choisir Attitude RH ? » */
export const whyChooseUs: Feature[] = [
  {
    icon: UserCheck,
    title: "Accompagnement personnalisé",
    description:
      "Un suivi attentif à chaque étape : vos objectifs et votre rythme guident le déroulé de la formation.",
  },
  {
    icon: Target,
    title: "Formation adaptée à votre niveau",
    description:
      "Un parcours construit après un test de niveau, pour travailler ce qui compte vraiment pour vous.",
  },
  {
    icon: TrendingUp,
    title: "Progression à l'oral et à l'écrit",
    description:
      "Des séances équilibrées entre expression orale, compréhension et rédaction professionnelle.",
  },
  {
    icon: GraduationCap,
    title: "Approche professionnelle",
    description:
      "Des mises en situation concrètes, orientées vers vos usages réels de l'anglais au travail.",
  },
];

/** Section « Une formation pensée pour progresser » */
export const trainingHighlights: Feature[] = [
  {
    icon: ClipboardCheck,
    title: "Test de niveau",
    description:
      "Un point de départ clair pour mesurer votre niveau et définir des priorités utiles.",
  },
  {
    icon: Target,
    title: "Objectifs personnalisés",
    description:
      "Des objectifs concrets, fixés ensemble selon votre projet professionnel.",
  },
  {
    icon: Mic,
    title: "Séances pratiques",
    description:
      "Une large place à la pratique orale et aux échanges pour gagner en aisance.",
  },
  {
    icon: TrendingUp,
    title: "Suivi de progression",
    description:
      "Des points réguliers pour mesurer vos avancées et ajuster le parcours.",
  },
];

/* ------------------------------------------------------------------ */
/*  PAGE FORMATION D'ANGLAIS                                           */
/* ------------------------------------------------------------------ */

/** Blocs d'information clés de la formation. */
export type TrainingInfo = {
  icon: LucideIcon;
  label: string;
  value: string;
};

export const trainingInfos: TrainingInfo[] = [
  {
    icon: Target,
    label: "Objectifs de la formation",
    value:
      "Gagner en aisance à l'oral comme à l'écrit et utiliser l'anglais avec confiance dans un cadre professionnel.",
  },
  {
    icon: Users,
    label: "Public visé",
    value:
      "Salariés, demandeurs d'emploi et particuliers souhaitant progresser en anglais, quel que soit leur point de départ.",
  },
  {
    icon: CalendarClock,
    label: "Durée",
    value: "Durée à personnaliser (définie selon votre niveau et vos objectifs).",
  },
  {
    icon: Compass,
    label: "Niveau requis",
    value:
      "Accessible à tous les niveaux : un test initial permet d'adapter le parcours, du débutant au perfectionnement.",
  },
  {
    icon: BookOpen,
    label: "Modalités",
    value:
      "Présentiel, distanciel ou format mixte selon vos contraintes (modalités à confirmer avec Attitude RH).",
  },
  {
    icon: TrendingUp,
    label: "Résultats attendus",
    value:
      "Une progression mesurable et une plus grande autonomie dans vos échanges professionnels en anglais.",
  },
];

/** Compétences travaillées pendant la formation. */
export const skills: Feature[] = [
  {
    icon: Headphones,
    title: "Compréhension orale",
    description:
      "Comprendre des échanges, des réunions et des contenus audio dans un contexte professionnel.",
  },
  {
    icon: Mic,
    title: "Expression orale",
    description:
      "S'exprimer avec aisance, prendre la parole et soutenir une conversation.",
  },
  {
    icon: BookOpen,
    title: "Vocabulaire professionnel",
    description:
      "Acquérir le lexique adapté à votre secteur et à vos situations de travail.",
  },
  {
    icon: PenLine,
    title: "Grammaire",
    description:
      "Consolider les structures essentielles pour gagner en clarté et en justesse.",
  },
  {
    icon: Mail,
    title: "Rédaction d'emails",
    description:
      "Rédiger des messages professionnels clairs, courtois et efficaces.",
  },
  {
    icon: MessageSquare,
    title: "Préparation à un entretien",
    description:
      "Se préparer à un entretien en anglais et valoriser son parcours avec assurance.",
  },
  {
    icon: GraduationCap,
    title: "Anglais professionnel",
    description:
      "Maîtriser les codes de la communication professionnelle en anglais.",
  },
  {
    icon: Repeat,
    title: "Mise en situation",
    description:
      "S'entraîner sur des scénarios concrets proches de votre quotidien professionnel.",
  },
];

/** Texte neutre concernant la certification (à personnaliser). */
export const certificationNote =
  "Une certification peut être préparée selon le parcours retenu et les modalités définies avec Attitude RH.";

/**
 * Programme détaillé de la formation (affiché en accordéon).
 * ⚠ Les valeurs « à personnaliser / à compléter » doivent être renseignées
 *   par Attitude RH avant la mise en ligne (durée, tarif, délais…).
 */
export type ProgramItem = {
  icon: LucideIcon;
  title: string;
  /** Contenu sous forme de paragraphe ou de liste de points. */
  content: string;
  points?: string[];
};

export const formationProgram: ProgramItem[] = [
  {
    icon: Target,
    title: "Objectifs pédagogiques",
    content:
      "À l'issue de la formation, l'apprenant est capable de communiquer en anglais dans des situations professionnelles courantes :",
    points: [
      "Comprendre des échanges et des documents professionnels",
      "S'exprimer à l'oral avec plus d'aisance et de confiance",
      "Rédiger des messages professionnels clairs (emails, comptes rendus)",
      "Mobiliser un vocabulaire adapté à son secteur d'activité",
    ],
  },
  {
    icon: Users,
    title: "Public visé",
    content:
      "Salariés, demandeurs d'emploi, indépendants et particuliers souhaitant développer leur anglais professionnel, quel que soit leur point de départ.",
  },
  {
    icon: Compass,
    title: "Prérequis",
    content:
      "Aucun prérequis particulier. Un test de positionnement est réalisé en amont afin d'adapter le parcours au niveau de chaque apprenant.",
  },
  {
    icon: CalendarClock,
    title: "Durée",
    content:
      "Durée à personnaliser : elle est définie après le test de positionnement, en fonction du niveau de départ et des objectifs visés.",
  },
  {
    icon: BookOpen,
    title: "Modalités",
    content:
      "Formation proposée en présentiel, en distanciel ou en format mixte (les modalités précises sont confirmées avec Attitude RH).",
  },
  {
    icon: Repeat,
    title: "Méthode pédagogique",
    content:
      "Une approche progressive et orientée vers la pratique : exercices ciblés, mises en situation et suivi régulier de la progression.",
  },
  {
    icon: ClipboardCheck,
    title: "Modalités d'évaluation",
    content:
      "Évaluation continue tout au long du parcours et bilan en fin de formation. La progression peut être validée par le passage de la certification VTest Business English – 4 skills.",
  },
  {
    icon: BadgeCheck,
    title: "Certification préparée",
    content:
      "La formation prépare à la certification VTest Business English – 4 skills, qui évalue la compréhension orale et écrite ainsi que l'expression orale et écrite (certification RS6905).",
  },
  {
    icon: CalendarClock,
    title: "Délais d'accès",
    content:
      "Délai d'accès à personnaliser : l'entrée en formation est planifiée avec Attitude RH après étude de votre demande et validation du financement.",
  },
  {
    icon: Accessibility,
    title: "Accessibilité handicap",
    content:
      "Attitude RH étudie les conditions d'accueil des personnes en situation de handicap. Pour tout besoin d'adaptation, contactez notre référent handicap (coordonnées à personnaliser).",
  },
  {
    icon: Receipt,
    title: "Tarif",
    content:
      "Tarif sur devis : le coût de la formation dépend du parcours retenu et de la durée. Demandez un devis personnalisé auprès d'Attitude RH.",
  },
  {
    icon: Wallet,
    title: "Financement possible",
    content:
      "Selon votre situation, plusieurs solutions de financement peuvent être étudiées : financement personnel, employeur, OPCO, France Travail ou CPF si applicable. Attitude RH vous accompagne dans l'étude des possibilités adaptées à votre profil.",
  },
];

/* ------------------------------------------------------------------ */
/*  PAGE MÉTHODE PÉDAGOGIQUE                                           */
/* ------------------------------------------------------------------ */

export type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

/** Les grandes étapes du parcours pédagogique. */
export const methodSteps: Step[] = [
  {
    icon: ClipboardCheck,
    title: "Diagnostic du niveau",
    description:
      "Un test initial évalue votre niveau à l'oral et à l'écrit pour partir sur des bases claires.",
  },
  {
    icon: Target,
    title: "Définition des objectifs",
    description:
      "Nous fixons ensemble des objectifs précis, alignés sur votre projet et vos échéances.",
  },
  {
    icon: BookOpen,
    title: "Formation progressive",
    description:
      "Un parcours construit pas à pas, qui s'adapte à votre rythme et à vos priorités.",
  },
  {
    icon: Mic,
    title: "Exercices et pratique orale",
    description:
      "Des exercices ciblés et des mises en situation pour ancrer durablement les acquis.",
  },
  {
    icon: TrendingUp,
    title: "Suivi et bilan",
    description:
      "Des points réguliers et un bilan de fin de parcours pour mesurer le chemin parcouru.",
  },
];

/** Détail des piliers de la méthode (affichés en cartes). */
export const methodPillars: Feature[] = [
  {
    icon: ClipboardCheck,
    title: "Évaluation du niveau initial",
    description:
      "Un point de départ objectif pour cibler les compétences à renforcer en priorité.",
  },
  {
    icon: Target,
    title: "Définition des objectifs",
    description:
      "Des objectifs réalistes et motivants, définis selon votre contexte professionnel.",
  },
  {
    icon: Compass,
    title: "Parcours adapté",
    description:
      "Un programme sur mesure, ajusté tout au long de la formation.",
  },
  {
    icon: PenLine,
    title: "Exercices pratiques",
    description:
      "Des activités variées pour travailler la compréhension, l'oral et l'écrit.",
  },
  {
    icon: Repeat,
    title: "Mises en situation",
    description:
      "Des scénarios concrets pour pratiquer l'anglais comme dans la vie professionnelle.",
  },
  {
    icon: Award,
    title: "Bilan en fin de parcours",
    description:
      "Une synthèse des progrès réalisés et des pistes pour continuer à progresser.",
  },
];

/* ------------------------------------------------------------------ */
/*  PAGE FINANCEMENT                                                   */
/* ------------------------------------------------------------------ */

export const fundingOptions: Feature[] = [
  {
    icon: UserCheck,
    title: "Financement personnel",
    description:
      "Vous pouvez financer votre formation directement. Contactez-nous pour un devis adapté.",
  },
  {
    icon: Users,
    title: "Financement par l'employeur",
    description:
      "Votre entreprise peut prendre en charge la formation dans le cadre de son plan de développement des compétences.",
  },
  {
    icon: BookOpen,
    title: "Financement OPCO",
    description:
      "Selon votre situation, un OPCO peut participer au financement. Nous vous orientons dans vos démarches.",
  },
  {
    icon: Briefcase,
    title: "France Travail",
    description:
      "Si vous êtes demandeur d'emploi, un financement via France Travail peut être étudié selon votre situation.",
  },
  {
    icon: Award,
    title: "CPF",
    description:
      "Une prise en charge via le CPF peut être mobilisable uniquement si les conditions d'éligibilité sont réunies et confirmées par Attitude RH.",
  },
  {
    icon: Receipt,
    title: "Devis sur demande",
    description:
      "Recevez un devis personnalisé en fonction de votre parcours, de la durée et de vos objectifs.",
  },
  {
    icon: UserCheck,
    title: "Accompagnement dans le choix",
    description:
      "Attitude RH vous aide à identifier la solution de financement la plus adaptée et à constituer votre dossier.",
  },
];

export const fundingNote =
  "Les possibilités de financement peuvent varier selon votre situation. Contactez Attitude RH afin d'étudier les solutions adaptées à votre profil.";

/** FAQ courte affichée sur la page Financement. */
export const fundingFaq = [
  {
    question: "La formation est-elle finançable ?",
    answer:
      "Oui, plusieurs solutions peuvent être étudiées selon votre situation : financement personnel, employeur, OPCO, France Travail ou CPF si applicable. Attitude RH vous accompagne dans le choix de la solution adaptée.",
  },
  {
    question: "Puis-je demander un devis ?",
    answer:
      "Bien sûr. Un devis personnalisé peut vous être adressé selon le parcours retenu, la durée et vos objectifs. Contactez Attitude RH pour en faire la demande.",
  },
  {
    question: "Puis-je être accompagné dans mes démarches ?",
    answer:
      "Oui. Attitude RH vous oriente dans le montage de votre dossier de financement et dans les démarches auprès des organismes concernés.",
  },
  {
    question: "Le CPF est-il possible ?",
    answer:
      "Le CPF peut être mobilisable uniquement si les conditions d'éligibilité sont réunies et confirmées par Attitude RH.",
  },
];

/* ------------------------------------------------------------------ */
/*  PAGE CANDIDATURE — étapes « après votre demande »                  */
/* ------------------------------------------------------------------ */

export const candidatureSteps: Step[] = [
  {
    icon: Mail,
    title: "Réception de votre demande",
    description:
      "Nous accusons réception de votre demande et la transmettons à l'équipe pédagogique.",
  },
  {
    icon: MessageSquare,
    title: "Prise de contact",
    description:
      "Un échange est organisé pour mieux comprendre votre projet et répondre à vos questions.",
  },
  {
    icon: Compass,
    title: "Analyse de votre besoin",
    description:
      "Nous évaluons votre niveau et vos objectifs afin d'identifier le parcours le plus pertinent.",
  },
  {
    icon: Target,
    title: "Proposition d'un parcours adapté",
    description:
      "Vous recevez une proposition détaillée : contenu, modalités et conditions de financement.",
  },
  {
    icon: GraduationCap,
    title: "Démarrage de la formation",
    description:
      "Une fois le parcours validé, votre formation peut commencer dans les meilleures conditions.",
  },
];

/* ------------------------------------------------------------------ */
/*  OPTIONS DE FORMULAIRES                                             */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/*  PAGE CERTIFICATION VTEST BUSINESS ENGLISH                          */
/* ------------------------------------------------------------------ */

/**
 * Informations factuelles sur la certification VTest Business English.
 * ⚠ Vérifiez et personnalisez ces éléments avant la mise en ligne.
 */
export const vtest = {
  name: siteConfig.certifications.vtest.name,
  rsCode: siteConfig.certifications.vtest.rsCode,
  intro:
    "VTest Business English est une certification d'anglais professionnel qui évalue les quatre compétences linguistiques selon le Cadre européen commun de référence pour les langues (CECR).",
  /** Liens officiels VTest (s'ouvrent dans un nouvel onglet) — centralisés dans data/site.ts. */
  officialUrl: siteConfig.certifications.vtest.officialUrl,
  demoUrl: siteConfig.certifications.vtest.demoUrl,
  franceCompetencesUrl:
    siteConfig.certifications.vtest.franceCompetencesUrl,
};

/** Les 4 compétences évaluées par la certification. */
export const vtestSkills: Feature[] = [
  {
    icon: Headphones,
    title: "Compréhension orale",
    description:
      "Listening — comprendre des échanges et des documents audio en contexte professionnel.",
  },
  {
    icon: BookOpen,
    title: "Compréhension écrite",
    description:
      "Reading — lire et comprendre des documents écrits professionnels.",
  },
  {
    icon: Mic,
    title: "Expression orale",
    description:
      "Speaking — s'exprimer à l'oral de manière claire et adaptée à la situation.",
  },
  {
    icon: PenLine,
    title: "Expression écrite",
    description:
      "Writing — rédiger des messages professionnels structurés et corrects.",
  },
];

/** Points clés / atouts de la certification. */
export const vtestFeatures: Feature[] = [
  {
    icon: Globe,
    title: "Alignée sur le CECR",
    description:
      "Le résultat positionne votre niveau sur l'échelle du CECR, de A1 à C2.",
  },
  {
    icon: BadgeCheck,
    title: "Certification reconnue",
    description:
      "Enregistrée au Répertoire spécifique de France Compétences sous le code RS6905.",
  },
  {
    icon: Laptop,
    title: "Passage en ligne",
    description:
      "Le test se déroule en ligne, dans des conditions encadrées (modalités à confirmer avec Attitude RH).",
  },
  {
    icon: TrendingUp,
    title: "Valorisation professionnelle",
    description:
      "Un résultat concret pour attester de votre niveau d'anglais auprès d'un employeur.",
  },
];

/** Équipement recommandé pour passer la certification en ligne. */
export const vtestEquipment: Feature[] = [
  {
    icon: Monitor,
    title: "Un ordinateur",
    description:
      "Un ordinateur récent (et non une tablette ou un smartphone) avec un navigateur à jour.",
  },
  {
    icon: Wifi,
    title: "Une connexion stable",
    description:
      "Une connexion internet fiable pour assurer le bon déroulement du test.",
  },
  {
    icon: Camera,
    title: "Une webcam",
    description:
      "Une webcam fonctionnelle si la surveillance à distance est requise.",
  },
  {
    icon: Volume2,
    title: "Casque et micro",
    description:
      "Un casque et un microphone pour les épreuves de compréhension et d'expression orales.",
  },
];

/** Note de prudence affichée sur la page certification. */
export const vtestNote =
  "Les conditions de passage, les niveaux visés et l'éligibilité au financement sont précisés avec Attitude RH selon votre parcours.";

/* ------------------------------------------------------------------ */
/*  OPTIONS DE FORMULAIRES                                             */
/* ------------------------------------------------------------------ */

export const englishLevels = [
  "Débutant",
  "Élémentaire",
  "Intermédiaire",
  "Avancé",
  "Je ne sais pas",
] as const;

export const trainingModes = [
  "Présentiel",
  "Distanciel",
  "Mixte",
] as const;
