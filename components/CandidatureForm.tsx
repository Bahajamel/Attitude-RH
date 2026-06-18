"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { englishLevels, trainingModes } from "@/data/training";

type Status = "idle" | "loading" | "success" | "error";

/**
 * Formulaire de candidature à la formation d'anglais.
 *
 * ⚙️ POUR CONNECTER LE FORMULAIRE :
 *   Remplacez le bloc « simulation » dans handleSubmit par un appel réel
 *   vers une route API (/api/candidature) ou un service email.
 *   Les champs <Select> utilisent un <input hidden> pour être inclus
 *   dans le FormData natif.
 */
export function CandidatureForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [level, setLevel] = useState("");
  const [mode, setMode] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // --- SIMULATION (à remplacer par un appel API/email réel) ---
      // eslint-disable-next-line no-console
      console.log("Candidature reçue :", data);
      await new Promise((resolve) => setTimeout(resolve, 900));
      // -------------------------------------------------------------
      setStatus("success");
      event.currentTarget.reset();
      setLevel("");
      setMode("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-coral/30 bg-coral-soft/50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-coral" />
        <h3 className="mt-4 text-xl font-semibold text-foreground">
          Candidature envoyée
        </h3>
        <p className="mt-2 text-muted-foreground">
          Merci pour votre candidature. Nous revenons vers vous rapidement pour
          échanger sur votre projet de formation.
        </p>
        <Button
          className="mt-6"
          variant="outline"
          onClick={() => setStatus("idle")}
        >
          Déposer une autre candidature
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="lastName">
            Nom <span className="text-destructive">*</span>
          </Label>
          <Input id="lastName" name="lastName" autoComplete="family-name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="firstName">
            Prénom <span className="text-destructive">*</span>
          </Label>
          <Input
            id="firstName"
            name="firstName"
            autoComplete="given-name"
            required
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
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
        <div className="space-y-2">
          <Label htmlFor="phone">
            Téléphone <span className="text-destructive">*</span>
          </Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" required />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="level">Niveau d&apos;anglais estimé</Label>
          <Select value={level} onValueChange={setLevel}>
            <SelectTrigger id="level" aria-label="Niveau d'anglais estimé">
              <SelectValue placeholder="Sélectionnez votre niveau" />
            </SelectTrigger>
            <SelectContent>
              {englishLevels.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <input type="hidden" name="level" value={level} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="mode">Modalité souhaitée</Label>
          <Select value={mode} onValueChange={setMode}>
            <SelectTrigger id="mode" aria-label="Modalité souhaitée">
              <SelectValue placeholder="Présentiel, distanciel ou mixte" />
            </SelectTrigger>
            <SelectContent>
              {trainingModes.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <input type="hidden" name="mode" value={mode} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="objective">Objectif de la formation</Label>
        <Input
          id="objective"
          name="objective"
          placeholder="Ex : préparer un entretien, gagner en aisance à l'oral…"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Votre message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Précisez votre projet, vos disponibilités ou toute information utile…"
        />
      </div>

      <div className="flex items-start gap-3">
        <Checkbox id="consent" name="consent" required className="mt-0.5" />
        <Label
          htmlFor="consent"
          className="text-sm font-normal leading-relaxed text-muted-foreground"
        >
          J&apos;accepte que mes données soient utilisées pour traiter ma
          candidature, conformément à la politique de confidentialité.{" "}
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
            Envoyer ma candidature
          </>
        )}
      </Button>
    </form>
  );
}
