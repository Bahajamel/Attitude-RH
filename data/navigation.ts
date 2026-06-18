/**
 * Navigation principale du site.
 * L'ordre des éléments correspond à l'ordre d'affichage dans le header.
 */

export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Formation d'anglais", href: "/formation-anglais" },
  { label: "Méthode", href: "/methode-pedagogique" },
  { label: "Certification VTest", href: "/certification-vtest" },
  { label: "Financement", href: "/financement" },
  { label: "Candidature", href: "/candidature" },
  { label: "Contact", href: "/contact" },
];

/** Liens affichés dans le footer (section légale). */
export const legalNav: NavItem[] = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
];

/** Destination du bouton d'appel à l'action principal du header. */
export const primaryCta: NavItem = {
  label: "Demander des informations",
  href: "/contact",
};
