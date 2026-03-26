Portfolio Personnel - Adama Dian

Portfolio moderne et responsive développé avec Next.js 15+, Tailwind CSS et Docker.

🚀 Technologies

Next.js 15+ (App Router)

Tailwind CSS

Docker & Docker Compose

SEO optimisé : metadata, sitemap.xml, robots.txt, OpenGraph

📁 Structure du projet
mon-portfolio/
├── public/
│   ├── documents/    # CV et certifications
│   ├── images/       # Photos et visuels de projets
│   └── favicon.ico
├── src/
│   ├── app/          # Pages et layout
│   ├── components/   # Composants réutilisables
│   ├── sections/     # Sections et blocs de page
│   ├── data/         # Données JSON
│   └── utils/        # Fonctions utilitaires
├── Dockerfile
├── Dockerfile.dev
├── docker-compose.yml
└── README.md

🐳 Docker
Développement
docker compose build --no-cache
docker compose up
# Accessible sur http://localhost:3000

Production
docker compose -f docker-compose.yml build --no-cache
docker compose -f docker-compose.yml up

🧪 Local (sans Docker)
npm install
npm run dev       # Développement
npm run build     # Build prod
npm start         # Lancer prod

📄 Pages

/ - Accueil : hero, à propos, projets récents

/about - À propos

/formation - Formation académique

/certifications - Certifications

/experience - Expérience pro

/parcours - Parcours complet

/projects - Portfolio projets

/contact - Formulaire de contact

🎨 Fonctionnalités

SEO optimisé : metadata dynamique, sitemap, robots.txt, OpenGraph

Composants réutilisables : Navbar, Footer, Card, DownloadCvButton

Design responsive : mobile-first, grilles adaptatives, hamburger menu

📊 Données JSON

site.json, projects.js, education.json, certifications.json

🔧 Personnalisation

Modifier src/data/* pour vos contenus

Remplacer public/documents/cv.pdf par votre CV

Personnaliser les couleurs dans tailwind.config.js

🚀 Déploiement

Vercel : le dossier est déjà lié au projet existant, un déploiement sur ce projet conserve donc la même URL

URL actuelle du portfolio déployé : https://mon-portfolio-ada3.vercel.app

Ancienne URL figée à ne pas réutiliser : https://mon-portfolio-h7bnxt9cs-ada3.vercel.app

Docker :

docker build -t mon-portfolio .
docker run -p 3000:3000 mon-portfolio

📝 Scripts

npm run dev : développement

npm run build : build production

npm run start : serveur prod

npm run lint : ESLint

🤝 Contribution

Fork du projet

Créer une branche feature

Commit & push

Pull request

📄 Licence

Licence MIT

📞 Contact
**Adama Dian**
- Email: adamadiandiallo9999@gmail.com
- LinkedIn: [linkedin.com/in/adama-djan-diallo](https://www.linkedin.com/in/adama-djan-diallo/)
- GitHub: [github.com/AdamaDjan2024](https://github.com/AdamaDjan2024)
