/**
 * =====================================================================
 *  FOIRE AUX QUESTIONS — ATTITUDE RH
 * ---------------------------------------------------------------------
 *  Questions / réponses affichées sur la page FAQ.
 *  Réponses prudentes : aucune durée, tarif ou financement n'est
 *  affirmé sans confirmation d'Attitude RH.
 * =====================================================================
 */

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqGeneral: FaqItem[] = [
  {
    question: "À qui s'adresse la formation d'anglais ?",
    answer:
      "La formation s'adresse aux salariés, demandeurs d'emploi, indépendants et particuliers qui souhaitent développer leur anglais professionnel, quel que soit leur niveau de départ.",
  },
  {
    question: "Quel niveau faut-il avoir pour commencer ?",
    answer:
      "Aucun niveau minimum n'est exigé. Un test de positionnement est réalisé en amont afin d'adapter le parcours à votre niveau réel.",
  },
  {
    question: "La formation est-elle adaptée aux débutants ?",
    answer:
      "Oui. Le parcours est personnalisé : les débutants comme les personnes plus avancées progressent à partir d'objectifs définis avec eux.",
  },
  {
    question: "Peut-on suivre la formation à distance ?",
    answer:
      "Oui, la formation peut être proposée en présentiel, en distanciel ou en format mixte. Les modalités sont confirmées avec Attitude RH selon votre situation.",
  },
  {
    question: "Combien de temps dure la formation ?",
    answer:
      "La durée est définie après le test de positionnement, en fonction de votre niveau et de vos objectifs (durée à personnaliser).",
  },
  {
    question: "Comment se déroule l'accompagnement ?",
    answer:
      "L'accompagnement suit une logique claire : diagnostic du niveau, définition des objectifs, formation progressive, exercices pratiques, puis suivi et bilan.",
  },
  {
    question: "La formation prépare-t-elle à une certification ?",
    answer:
      "Oui, la formation peut préparer à la certification VTest Business English – 4 skills, selon le parcours retenu avec Attitude RH.",
  },
  {
    question: "Qu'est-ce que le VTest Business English – 4 skills ?",
    answer:
      "C'est une certification d'anglais professionnel qui évalue quatre compétences (compréhension orale et écrite, expression orale et écrite) selon le CECR. Elle est enregistrée au Répertoire spécifique de France Compétences sous le code RS6905.",
  },
  {
    question: "Comment demander un devis ?",
    answer:
      "Il vous suffit de nous contacter via le formulaire de contact ou de candidature. Un devis personnalisé vous sera adressé en fonction de votre parcours.",
  },
  {
    question: "Quels financements sont possibles ?",
    answer:
      "Selon votre situation : financement personnel, employeur, OPCO, France Travail ou CPF si applicable. Attitude RH vous accompagne dans l'étude des solutions adaptées.",
  },
  {
    question: "Comment se déroule l'inscription ?",
    answer:
      "Après réception de votre demande, nous échangeons sur votre projet, analysons votre besoin, vous proposons un parcours adapté, puis planifions le démarrage de la formation.",
  },
  {
    question:
      "Les personnes en situation de handicap peuvent-elles être accompagnées ?",
    answer:
      "Attitude RH étudie les conditions d'accueil et d'adaptation pour les personnes en situation de handicap. Pour tout besoin spécifique, contactez notre référent handicap (coordonnées à personnaliser).",
  },
];
