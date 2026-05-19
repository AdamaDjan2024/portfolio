# Portfolio Personnel - Adama Djan

Portfolio moderne, responsive et orienté recrutement, développé avec **Next.js 15 (App Router)**, **Tailwind CSS** et **Docker**.

## Aperçu

- Site: [mon-portfolio.vercel.app](https://mon-portfolio.vercel.app)
- Code source: [github.com/AdamaDjan2024/portfolio](https://github.com/AdamaDjan2024/portfolio)
- LinkedIn: [linkedin.com/in/adama-djan-diallo](https://www.linkedin.com/in/adama-djan-diallo/)
- GitHub: [github.com/AdamaDjan2024](https://github.com/AdamaDjan2024)

## Table des matières

- [Technologies](#technologies)
- [Fonctionnalités](#fonctionnalités)
- [Structure du projet](#structure-du-projet)
- [Démarrage rapide](#démarrage-rapide)
- [Utilisation avec Docker](#utilisation-avec-docker)
- [Scripts NPM](#scripts-npm)
- [Pages disponibles](#pages-disponibles)
- [Données et personnalisation](#données-et-personnalisation)
- [SEO](#seo)
- [Déploiement](#déploiement)
- [Contact](#contact)
- [Licence](#licence)
  je veux ca soit sur le githuj

## Technologies

- Next.js 15+ (App Router)
- React 18
- Tailwind CSS
- Docker & Docker Compose
- SEO technique (metadata, Open Graph, sitemap, robots)

## Fonctionnalités

- Design responsive (mobile-first)
- Sections portfolio claires: profil, parcours, projets, certifications
- Contenu centralisé dans des fichiers de données (`src/data/*`)
- Optimisation SEO de base pour un meilleur référencement

## Structure du projet

```text
mansa-portfolio/
├── public/
│   ├── documents/
│   │   ├── cv.pdf
│   │   └── certifications/
│   ├── images/
│   └── robots.txt
├── src/
│   ├── app/                # Pages et layout (App Router)
│   ├── components/         # Composants réutilisables
│   ├── data/               # Données (site, projets, parcours...)
│   ├── sections/           # Sections spécifiques
│   ├── styles/             # Styles globaux
│   └── utils/              # Fonctions utilitaires
├── Dockerfile
├── Dockerfile.dev
├── docker-compose.yml
└── README.md
```

## Démarrage rapide

### Prérequis

- Node.js 20+
- npm

### Installation et lancement (sans Docker)

```bash
npm install
npm run dev
```

Application accessible sur `http://localhost:3000`.

### Build production local

```bash
npm run build
npm run start
```

## Utilisation avec Docker

### Développement

```bash
docker compose build --no-cache
docker compose up
```

### Production

```bash
docker compose -f docker-compose.yml build --no-cache
docker compose -f docker-compose.yml up
```

## Scripts NPM

- `npm run dev` : lance le serveur de développement
- `npm run build` : génère le build de production
- `npm run start` : démarre l'application en mode production
- `npm run lint` : lance ESLint
- `npm run export` : export statique (si compatible avec la configuration active)

## Pages disponibles

- `/` : Accueil
- `/about` : À propos
- `/formation` : Formation
- `/parcours` : Parcours académique
- `/certifications` : Certifications
- `/experience` : Expérience professionnelle
- `/projects` : Projets
- `/contact` : Contact

## Données et personnalisation

Modifier les contenus dans `src/data` :

- `site.json` : informations globales (profil, liens, SEO)
- `projects.js` : liste des projets
- `education.json` : parcours académique
- `certifications.json` : certifications

Mettre à jour les assets :

- CV: `public/documents/cv.pdf`
- Images: `public/images/*`
- Certifications: `public/documents/certifications/*`

Personnaliser le thème :

- Couleurs et design system: `tailwind.config.js`
- Styles globaux: `src/app/globals.css`

## SEO

Le projet inclut une base SEO:

- Metadata via le layout App Router
- Open Graph
- `sitemap.xml` via route dédiée
- `robots.txt` dans `public/`

## Déploiement

### Vercel

1. Connecter le dépôt GitHub à Vercel.
2. Importer le projet.
3. Déployer la branche principale.
4. Chaque `git push` relance automatiquement un déploiement.

### Docker

```bash
docker build -t mansa-portfolio .
docker run -p 3000:3000 mansa-portfolio
```

## Contact

- Email: `adamadiandiallo9999@gmail.com`
- LinkedIn: [linkedin.com/in/adama-djan-diallo](https://www.linkedin.com/in/adama-djan-diallo/)
- GitHub: [github.com/AdamaDjan2024](https://github.com/AdamaDjan2024)

## Licence

Projet sous licence MIT.
