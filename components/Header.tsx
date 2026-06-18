"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { mainNav, primaryCta } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effet de fond/ombre au défilement.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Empêche le défilement de l'arrière-plan quand le menu mobile est ouvert.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/85 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-background/70"
          : "border-transparent bg-background"
      )}
    >
      <div
        className={cn(
          "container flex items-center justify-between gap-4 transition-all duration-300",
          scrolled ? "h-16" : "h-20"
        )}
      >
        <Logo
          height={scrolled ? 38 : 46}
          priority
          className="transition-all duration-300"
          onClick={() => setOpen(false)}
        />

        {/* Navigation bureau */}
        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Navigation principale"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                isActive(item.href) ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.label}
              {isActive(item.href) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-coral"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild>
            <Link href={primaryCta.href}>
              {primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Bouton menu mobile */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground transition-colors hover:bg-secondary lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t bg-background lg:hidden"
          >
            <nav
              className="container flex flex-col gap-1 py-4"
              aria-label="Navigation mobile"
            >
              {mainNav.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-colors",
                      isActive(item.href)
                        ? "bg-coral-soft text-primary"
                        : "text-muted-foreground hover:bg-secondary"
                    )}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <span className="h-2 w-2 rounded-full bg-coral" />
                    )}
                  </Link>
                </motion.div>
              ))}
              <Button asChild size="lg" className="mt-3">
                <Link href={primaryCta.href} onClick={() => setOpen(false)}>
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
