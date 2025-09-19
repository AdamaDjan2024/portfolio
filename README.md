Portfolio Personnel - Adama Djan

Portfolio moderne et responsive développé avec Next.js 15+, Tailwind CSS et Docker.

🚀 Technologies

Next.js 15+ (App Router)

Tailwind CSS

Docker & Docker Compose

SEO optimisé : metadata, sitemap.xml, robots.txt, OpenGraph

📁 Structure du projet
mansa-portfolio/
├── public/           # Images, favicon, CV
│   └── cv.pdf
├── src/
│   ├── app/          # Pages et layout
│   ├── components/   # Composants réutilisables
│   ├── sections/     # Sections spécifiques
│   ├── styles/       # Tailwind global
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

/education - Détails parcours éducatif

/certifications - Certifications

/experience - Expérience pro

/skills - Compétences techniques

/projects - Portfolio projets

/contact - Formulaire de contact

🎨 Fonctionnalités

SEO optimisé : metadata dynamique, sitemap, robots.txt, OpenGraph

Composants réutilisables : Navbar, Footer, Card, ProjectCard, SkillBar, DownloadCvButton

Design responsive : mobile-first, grilles adaptatives, hamburger menu

📊 Données JSON

site.json, projects.json, skills.json, experience.json, education.json, certifications.json

🔧 Personnalisation

Modifier src/data/* pour vos contenus

Remplacer public/cv.pdf par votre CV

Personnaliser les couleurs dans tailwind.config.js

🚀 Déploiement

Vercel : connecter le repo et déployer

Docker :

docker build -t mansa-portfolio .
docker run -p 3000:3000 mansa-portfolio

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
**Adama Djan**
- Email: adama.djan@example.com
- LinkedIn: [linkedin.com/in/adama-djan](https://linkedin.com/in/adama-djan)
- GitHub: [github.com/AdamaDjan2024](https://github.com/AdamaDjan2024)
