import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/Logo";
import { siteConfig } from "@/data/site";
import { footerNav, legalNav } from "@/data/navigation";
import { isPlaceholder } from "@/lib/utils";

export function Footer() {
  const year = 2026; // Année à mettre à jour si besoin (date dynamique évitée pour le rendu statique).

  return (
    <footer className="bg-brand-gradient text-white/80">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Marque */}
          <div className="lg:col-span-1">
            <Logo variant="blanc" height={48} />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              {siteConfig.tagline}. Une formation d&apos;anglais structurée,
              pratique et adaptée à vos objectifs professionnels.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Liens du site">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
              Navigation
            </h2>
            <ul className="mt-5 space-y-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-coral"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Coordonnées */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
              Coordonnées
            </h2>
            <ul className="mt-5 space-y-3.5 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
                <a
                  href={`tel:${siteConfig.contact.phoneHref}`}
                  className="transition-colors hover:text-coral"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-coral"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
                <span>{siteConfig.contact.hours}</span>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <nav aria-label="Informations légales">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
              Informations légales
            </h2>
            <ul className="mt-5 space-y-3">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-coral"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Références organisme & certification */}
        <div className="mt-14 border-t border-white/15 pt-6">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/60 sm:justify-start">
            <li>SIRET : {siteConfig.legal.siret}</li>
            {!isPlaceholder(siteConfig.legal.nda) && (
              <li>Déclaration d&apos;activité : {siteConfig.legal.nda}</li>
            )}
            {siteConfig.legal.qualiopiConfirmed && (
              <li>Qualiopi : {siteConfig.legal.qualiopi}</li>
            )}
            <li>
              Certification VTest Business English –{" "}
              {siteConfig.certifications.vtest.rsCode}
            </li>
          </ul>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-center text-sm text-white/60 sm:flex-row sm:text-left">
          <p>
            © {year} {siteConfig.name}. Tous droits réservés.
          </p>
          <nav aria-label="Liens légaux">
            <ul className="flex gap-5">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-coral"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
