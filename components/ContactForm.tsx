"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

type Status = "idle" | "loading" | "success" | "error";

/**
 * Formulaire de contact.
 *
 * ⚙️ POUR CONNECTER LE FORMULAIRE :
 *   Remplacez le bloc « simulation » dans handleSubmit par un appel réel,
 *   par exemple :
 *     await fetch("/api/contact", {
 *       method: "POST",
 *       headers: { "Content-Type": "application/json" },
 *       body: JSON.stringify(data),
 *     });
 *   (ou un service email type Resend, Formspree, EmailJS…).
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // --- SIMULATION (à remplacer par un appel API/email réel) ---
      // eslint-disable-next-line no-console
      console.log("Demande de contact :", data);
      await new Promise((resolve) => setTimeout(resolve, 800));
      // -------------------------------------------------------------
      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-coral/30 bg-coral-soft/50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-coral" />
        <h3 className="mt-4 text-xl font-semibold text-foreground">
          Message envoyé
        </h3>
        <p className="mt-2 text-muted-foreground">
          Merci pour votre message. L&apos;équipe Attitude RH vous répondra dans
          les meilleurs délais.
        </p>
        <Button
          className="mt-6"
          variant="outline"
          onClick={() => setStatus("idle")}
        >
          Envoyer un autre message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">
            Nom et prénom <span className="text-destructive">*</span>
          </Label>
          <Input id="name" name="name" autoComplete="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Téléphone</Label>
        <Input id="phone" name="phone" type="tel" autoComplete="tel" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          Votre message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Décrivez votre projet ou votre question…"
        />
      </div>

      <div className="flex items-start gap-3">
        <Checkbox id="consent" name="consent" required className="mt-0.5" />
        <Label
          htmlFor="consent"
          className="text-sm font-normal leading-relaxed text-muted-foreground"
        >
          J&apos;accepte que mes données soient utilisées pour traiter ma
          demande, conformément à la politique de confidentialité.{" "}
          <span className="text-destructive">*</span>
        </Label>
      </div>

      {status === "error" && (
        <p className="text-sm text-destructive" role="alert">
          Une erreur est survenue. Merci de réessayer dans un instant.
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Envoi en cours…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Envoyer le message
          </>
        )}
      </Button>
    </form>
  );
}
