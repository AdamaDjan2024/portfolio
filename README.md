# Portfolio Front-End — Adama Dian Amadou Diallo

Portfolio personnel orienté recrutement tech (France), développé avec Next.js et Tailwind CSS.  
Direction visuelle inspirée de la logique de structure de Brittany Chiang, adaptée avec une identité propre: moderne, sobre, premium et ATS-friendly.

## Liens

- Site: [mon-portfolio.vercel.app](https://mon-portfolio.vercel.app)
- Code source: [github.com/AdamaDjan2024/portfolio](https://github.com/AdamaDjan2024/portfolio)
- LinkedIn: [linkedin.com/in/adama-djan-diallo](https://www.linkedin.com/in/adama-djan-diallo/)
- GitHub: [github.com/AdamaDjan2024](https://github.com/AdamaDjan2024)

## Positionnement

- Développeuse Front-End
- Stack principale: React, Next.js, Tailwind CSS
- Focus: intégration UI, responsive design, accessibilité, intégration API REST

## Stack Technique

- Next.js 15
- React 18
- JavaScript
- Tailwind CSS
- Docker / Docker Compose
- SEO: metadata, Open Graph, sitemap, robots.txt

## Fonctionnalités du Portfolio

- Hero section structurée et aérée (layout gauche/droite premium)
- Sections: À propos, Expérience, Projets
- Page archive des projets
- Page certifications avec modal de consultation
- Contenu éditable via `src/data/*`

## Exécution Locale

```bash
npm install
npm run dev
```

Application disponible sur `http://localhost:3000`.

## Build Production

```bash
npm run build
npm run start
```

## Docker

```bash
docker compose up --build
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Structure du Projet

```text
src/
  app/          Pages + layout
  components/   Composants réutilisables
  sections/     Sections de la home
  data/         Données (site, projets, certifs, etc.)
  utils/        SEO et helpers
public/
  documents/    CV + certifications
  images/       Assets visuels
```

## Modifier le Contenu

- Titre, description, liens: `src/data/site.json`
- Projets: `src/data/projects.js`
- Certifications: `src/data/certifications.json`
- Expériences: `src/sections/Experience.jsx`
- CV: `public/documents/cv.pdf`

## Déploiement Vercel (modifications continues)

1. Connecter le repo GitHub à Vercel.
2. Créer un projet Vercel dédié (ex: `adama-dian-amadou-portfolio`).
3. Déployer la branche `main`.
4. Chaque `git push` sur `main` déclenche un nouveau déploiement.

## Contact

- Email: `adamadiandiallo9999@gmail.com`
- LinkedIn: [linkedin.com/in/adama-djan-diallo](https://www.linkedin.com/in/adama-djan-diallo/)
