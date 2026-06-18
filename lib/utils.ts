import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Fusionne des classes Tailwind de manière sûre (évite les conflits).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Indique si une valeur est encore un placeholder « à compléter / à personnaliser ».
 * Utilisé pour n'afficher un contenu que lorsqu'une vraie donnée est renseignée.
 */
export function isPlaceholder(value?: string | null): boolean {
  if (!value) return true;
  return /à\s*compl[ée]ter|à\s*personnaliser/i.test(value);
}
