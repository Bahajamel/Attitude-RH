# Attitude RH — Site vitrine

Site vitrine professionnel pour **Attitude RH**, centre de formation en anglais.

## Stack technique

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** + composants **shadcn/ui** (style « new-york »)
- **Lucide React** (icônes)
- **Framer Motion** (animations sobres au scroll)
- Aucune base de données, aucune authentification (site vitrine)
- Déploiement cible : **Vercel**

## Démarrage

```bash
npm install      # installer les dépendances
npm run dev      # serveur de développement -> http://localhost:3000
npm run build    # build de production
npm run start    # lancer le build de production en local
npm run lint     # vérifier le code
```

## Structure du projet

```
app/
  layout.tsx                       # layout global (header, footer, SEO)
  globals.css                      # styles + variables de couleurs (palette)
  page.tsx                         # Accueil
  formation-anglais/page.tsx       # Formation d'anglais
  methode-pedagogique/page.tsx     # Méthode pédagogique
  certification-vtest/page.tsx     # Certification VTest Business English
  financement/page.tsx             # Financement
  candidature/page.tsx             # Candidature (formulaire)
  contact/page.tsx                 # Contact (formulaire + coordonnées)
  mentions-legales/page.tsx        # Mentions légales
  politique-confidentialite/page.tsx
  sitemap.ts / robots.ts           # SEO
components/
  Logo.tsx                         # logo officiel (public/logo)
  Header.tsx, Footer.tsx
  HeroSection.tsx, VTestHero.tsx, PageHeader.tsx, SectionTitle.tsx
  FeatureCard.tsx, SkillCard.tsx, TrainingInfoCard.tsx, StepCard.tsx
  CTASection.tsx, AnimatedSection.tsx
  ContactForm.tsx, CandidatureForm.tsx
  ui/                              # composants shadcn/ui (button, card, input…)
data/
  site.ts                          # coordonnées, URL, SEO global
  training.ts                      # contenu des formations / méthode / financement
  navigation.ts                    # menus header & footer
lib/
  utils.ts                         # helper cn()
public/
  images/  logo/                   # placez ici vos visuels et votre logo
```

## Éléments à personnaliser

Tout le contenu modifiable est regroupé dans le dossier `data/` et dans
`app/globals.css`. Recherchez la mention **« à personnaliser »** dans le code.

| Élément | Où le modifier |
|---|---|
| **Logo** | fichiers dans `public/logo/` (rendus via `components/Logo.tsx`) |
| **Couleurs** | `app/globals.css` (variables `--primary`, `--coral`, `--royal`, `--brand…`) — palette dérivée du logo |
| **Images** | `public/images/` (puis utiliser `next/image`) |
| **Adresse / téléphone / email / horaires** | `data/site.ts` (`contact`) |
| **Réseaux sociaux** | `data/site.ts` (`social`) |
| **Durée de la formation** | `data/training.ts` (`trainingInfos`) |
| **Niveau requis / modalités** | `data/training.ts` |
| **Certification** | `data/training.ts` (`certificationNote`) |
| **Financement (CPF, OPCO…)** | `data/training.ts` (`fundingOptions`, `fundingNote`) |
| **Prix / devis** | `app/financement/page.tsx` (zone tarifaire en pointillés) |
| **Carte / emplacement** | `app/contact/page.tsx` (bloc emplacement) |
| **Mentions légales** | `app/mentions-legales/page.tsx` |
| **Politique de confidentialité** | `app/politique-confidentialite/page.tsx` |

> ⚠️ Aucune information sensible (adresse, téléphone, prix, certification, CPF,
> Qualiopi) n'a été inventée. Les valeurs temporaires sont marquées
> « à personnaliser » et doivent être confirmées avant la mise en ligne.

## Connecter les formulaires

Les formulaires (`ContactForm.tsx`, `CandidatureForm.tsx`) sont fonctionnels
côté interface mais **non connectés** : la soumission est simulée (`console.log`
+ délai). Pour les activer, remplacez le bloc « SIMULATION » par un appel à une
route API (`/app/api/...`) ou à un service email (Resend, Formspree, EmailJS…).

## Déploiement sur Vercel

```bash
npm install -g vercel   # si nécessaire
vercel                  # déploiement de préversion
vercel --prod           # déploiement en production
```

Ou via l'interface Vercel : importez le dépôt Git, Vercel détecte Next.js
automatiquement (aucune configuration requise).
