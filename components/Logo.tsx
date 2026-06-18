import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** Variante de couleur : "couleur" (par défaut) ou "blanc" (fond sombre). */
  variant?: "couleur" | "blanc";
  /** Hauteur du logo en pixels (la largeur s'ajuste automatiquement). */
  height?: number;
  /** Si true, le logo est un lien vers l'accueil. */
  asLink?: boolean;
  /** Précharge l'image (à activer pour le logo du header uniquement). */
  priority?: boolean;
  className?: string;
  onClick?: () => void;
};

const LOGOS = {
  couleur: "/logo/attitude_rh_horizontal_couleur.png",
  blanc: "/logo/attitude_rh_horizontal_blanc.png",
} as const;

// Ratio du logo horizontal (largeur / hauteur) pour conserver les proportions.
const RATIO = 4;

/**
 * Logo Attitude RH (image officielle du dossier public/logo).
 * Utilisé dans le header, le footer et certaines sections.
 */
export function Logo({
  variant = "couleur",
  height = 44,
  asLink = true,
  priority = false,
  className,
  onClick,
}: LogoProps) {
  const image = (
    <Image
      src={LOGOS[variant]}
      alt={`${siteConfig.name} — ${siteConfig.tagline}`}
      width={Math.round(height * RATIO)}
      height={height}
      priority={priority}
      className="w-auto object-contain"
      style={{ height }}
    />
  );

  if (!asLink) {
    return <span className={cn("inline-flex", className)}>{image}</span>;
  }

  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${siteConfig.name} — Accueil`}
      className={cn("inline-flex items-center", className)}
    >
      {image}
    </Link>
  );
}
