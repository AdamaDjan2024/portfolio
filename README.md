# Portfolio Personnel - Adama Djan

Un portfolio personnel moderne et responsive développé avec Next.js 15+, Tailwind CSS et Docker.

## 🚀 Technologies utilisées

- **Next.js 15+** avec App Router
- **Tailwind CSS** pour le styling
- **Docker & Docker Compose** pour l'environnement de développement et production
- **SEO optimisé** (metadata, sitemap.xml, robots.txt, OpenGraph)

## 📁 Structure du projet

```
mansa-portfolio/
├── public/                    # Images, favicon, robots.txt, cv.pdf
│   ├── cv.pdf                 # CV téléchargeable
│   └── ...
├── src/
│   ├── app/                   # App Router (Next.js)
│   │   ├── layout.jsx         # Layout global
│   │   ├── page.jsx           # Page d'accueil
│   │   ├── about/             # Page À propos
│   │   ├── formation/         # Page Formation
│   │   ├── education/         # Détails parcours académique
│   │   ├── certifications/    # Certifications obtenues
│   │   ├── experience/        # Expérience professionnelle
│   │   ├── skills/            # Page Compétences
│   │   ├── projects/          # Page Projets
│   │   └── contact/           # Page Contact
│   ├── components/            # Composants réutilisables
│   ├── sections/              # Sections spécifiques de la homepage
│   ├── styles/                # CSS Tailwind global
│   ├── data/                  # Données JSON statiques
│   └── utils/                 # Fonctions utilitaires
├── Dockerfile                 # Image Docker pour production
├── Dockerfile.dev            # Image Docker pour développement
├── docker-compose.yml        # Configuration Docker Compose
├── docker-compose.override.yml # Override pour le développement
└── README.md
```

## 🐳 Utilisation avec Docker

### Développement avec hot reload

```bash
# Build l'image de développement
docker compose build --no-cache

# Lancer l'application avec hot reload
docker compose up

# L'application sera accessible sur http://localhost:3000
```

### Production

```bash
# Build l'image de production
docker compose -f docker-compose.yml build --no-cache

# Lancer l'application en production
docker compose -f docker-compose.yml up
```

## 🧪 Mode local (sans Docker)

1. **Installation des dépendances**
   ```bash
   npm install
   ```

2. **Lancement en mode développement**
   ```bash
   npm run dev
   ```

3. **Build pour la production**
   ```bash
   npm run build
   npm start
   ```

## 📄 Pages disponibles

- **/** - Page d'accueil avec hero, à propos et projets récents
- **/about** - Page À propos détaillée
- **/formation** - Formation académique
- **/education** - Détails du parcours éducatif
- **/certifications** - Certifications professionnelles
- **/experience** - Expérience professionnelle
- **/skills** - Compétences techniques avec barres de progression
- **/projects** - Portfolio des projets
- **/contact** - Formulaire de contact et informations

## 🎨 Fonctionnalités

### SEO Optimisé
- ✅ Metadata dynamique pour chaque page
- ✅ Sitemap.xml automatique
- ✅ Robots.txt configuré
- ✅ Balises OpenGraph et Twitter Cards
- ✅ Structure sémantique HTML

### Composants réutilisables
- ✅ **Navbar** - Navigation responsive avec menu mobile
- ✅ **Footer** - Pied de page avec liens sociaux
- ✅ **Card** - Composant de carte réutilisable
- ✅ **ProjectCard** - Carte de projet avec technologies
- ✅ **SkillBar** - Barre de progression pour les compétences
- ✅ **DownloadCvButton** - Bouton de téléchargement du CV

### Design responsive
- ✅ Mobile-first design
- ✅ Navigation mobile avec hamburger menu
- ✅ Grilles adaptatives
- ✅ Typographie responsive

## 📊 Données JSON

Le projet utilise des fichiers JSON pour stocker les données :

- `src/data/site.json` - Informations générales du site
- `src/data/projects.json` - Liste des projets
- `src/data/skills.json` - Compétences organisées par catégorie
- `src/data/experience.json` - Expérience professionnelle
- `src/data/education.json` - Formation académique
- `src/data/certifications.json` - Certifications

## 🔧 Configuration

### Variables d'environnement
Créez un fichier `.env.local` si nécessaire :

```env
NEXT_PUBLIC_SITE_URL=https://mansa-portfolio.vercel.app
```

### Personnalisation
1. Modifiez les données dans `src/data/site.json`
2. Ajoutez vos projets dans `src/data/projects.json`
3. Mettez à jour vos compétences dans `src/data/skills.json`
4. Remplacez `public/cv.pdf` par votre CV
5. Personnalisez les couleurs dans `tailwind.config.js`

## 🚀 Déploiement

### Vercel (recommandé)
1. Connectez votre repository GitHub à Vercel
2. Configurez les variables d'environnement si nécessaire
3. Déployez automatiquement

### Docker
```bash
# Build pour production
docker build -t mansa-portfolio .

# Run le container
docker run -p 3000:3000 mansa-portfolio
```

## 📝 Scripts disponibles

- `npm run dev` - Mode développement
- `npm run build` - Build de production
- `npm run start` - Serveur de production
- `npm run lint` - Linter ESLint

## 🤝 Contribution

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

**Adama Djan**
- Email: adama.djan@example.com
- LinkedIn: [linkedin.com/in/adama-djan](https://linkedin.com/in/adama-djan)
- GitHub: [github.com/AdamaDjan2024](https://github.com/AdamaDjan2024)

---

⭐ N'hésitez pas à donner une étoile si ce projet vous a aidé !