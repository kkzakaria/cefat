# 1. DESCRIPTION DU PROJET
**CEFAT BUSINESS SCHOOL** est une école supérieure privée. Ce projet vise à développer son site web institutionnel et sa plateforme numérique.

# 2. OBJECTIFS
Développer une plateforme web moderne, performante et évolutive comprenant :
- **Site Vitrine** : Présentation de l'école, des formations, et informations pratiques.
- **Fonctionnalités Clés** :
  - Pré-inscription en ligne.
  - Espace Étudiants sécurisé.
  - Intégration / Passerelle vers Moodle (LMS).

# 3. STACK TECHNIQUE
- **Framework** : Next.js 16 (App Router, TypeScript Strict Mode).
- **Styling** : Tailwind CSS v4.
- **UI Components** : Shadcn UI, Lucide React (Icônes), `class-variance-authority`, `clsx`, `tailwind-merge`.
- **Backend / BaaS** : Supabase (Auth, Database, Storage) - *Version Locale*.
- **Déploiement** : Vercel.
- **Outils** : Git, pnpm.

# 4. ARCHITECTURE DU PROJET (Convention)

```
/app            # Routes et Pages (App Router)
  /api          # Routes API (Backend)
  /(public)     # Pages publiques (Site vitrine)
  /(auth)       # Pages d'authentification (Login, Register)
  /(dashboard)  # Espace Étudiant / Admin
/components     # Composants React réutilisables
  /ui           # Composants de base (Boutons, Inputs...)
  /sections     # Sections de page (Hero, Features...)
/lib            # Utilitaires, Helpers, Configuration Supabase
/public         # Assets statiques (Images, Fonts)
```

# 5. ROADMAP DE DÉVELOPPEMENT

## Phase 1 : Initialisation & Design System [TERMINÉ]
- [x] Initialisation du projet Next.js & Tailwind.
- [x] Configuration de la charte graphique (Couleurs, Typographie).
- [x] Création des composants UI de base (Header, Footer, Boutons).

## Phase 2 : Pages Publiques (Site Vitrine)
- [ ] Page d'Accueil (Hero, Présentation, Témoignages).
- [ ] Page "À propos" (Histoire, Équipe).
- [ ] Page "Formations" (Liste, Détails des cursus).
- [ ] Page "Contact" (Formulaire, Map).

## Phase 3 : Fonctionnalités Dynamiques
- [ ] Formulaire de pré-inscription (Multi-step form).
- [ ] Stockage des demandes dans Supabase.
- [ ] Emails de confirmation (Resend ou autre).

## Phase 4 : Espace Étudiant & Authentification
- [ ] Configuration Supabase Auth (Local & Prod).
- [ ] Pages Login / Inscription / Mot de passe oublié.
- [ ] Dashboard Étudiant (Vue d'ensemble, Documents).

## Phase 5 : Intégration Moodle
- [ ] Étude de l'intégration (SSO ou Liens directs).
- [ ] Mise en place des connecteurs.

# 6. JOURNAL DE BORD
*Ce fichier sera mis à jour à chaque étape majeure.*

- **[Date]** : Création du fichier de structure et définition de la roadmap.
