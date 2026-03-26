export const projectFilters = [
  { value: "all", label: "Tous" },
  { value: "web", label: "Web" },
  { value: "career", label: "Emploi" },
  { value: "data", label: "Data" },
  { value: "event", label: "Événement" },
  { value: "library", label: "Bibliothèque" },
];

export const portfolioProjects = [
  {
    id: 1,
    title: "Mansa Digital",
    img: "/images/projects/mansadigital-empereur.png",
    summary:
      "J'ai travaillé côté front sur un site professionnel pensé pour rendre l'offre de l'agence plus lisible, plus crédible et plus engageante.",
    details:
      "Mon travail s'est concentré sur l'intégration front, la hiérarchie visuelle, le responsive et la fluidité du parcours utilisateur en lien avec la structure back déjà en place.",
    focusTag: "Acquisition de leads",
    highlight:
      "Objectif : rendre l'offre de l'agence plus lisible et plus convaincante pour transformer les visites en opportunités.",
    contribution:
      "Je suis intervenue principalement sur la partie front-end : intégration des interfaces, lisibilité des contenus, responsive et cohérence de l'expérience utilisateur.",
    problem:
      "Une agence digitale a besoin d'une présence en ligne claire et crédible pour présenter ses services, rassurer les prospects et faciliter la prise de contact.",
    solution:
      "J'ai participé à l'intégration d'un site vitrine moderne et responsive qui structure l'offre, valorise l'expertise de l'agence et simplifie le parcours de découverte.",
    mainFeatures: [
      "Présentation structurée des services et expertises",
      "Navigation fluide avec une hiérarchie claire des contenus",
      "Mise en avant des points de contact et de la proposition de valeur",
      "Expérience responsive adaptée au desktop comme au mobile",
    ],
    backOffice: {
      summary:
        "Le back-office permet de gérer les contenus visibles côté front sans repasser par une modification complète de l'interface.",
      features: [
        "Mise à jour des services, contenus et blocs de présentation",
        "Gestion des prises de contact et des informations affichées",
        "Organisation des contenus mis en avant sur le site",
      ],
    },
    backendPerspective: {
      level: "Intégré",
      summary:
        "Le backend Symfony est déjà intégré pour structurer la partie serveur et alimenter correctement les contenus exploités côté front.",
      useCases: [
        "Stockage des formulaires de contact et suivi des leads",
        "CRUD simple pour les études de cas, témoignages et services",
        "Authentification admin pour la mise à jour du contenu",
      ],
      note:
        "Backend déjà intégré avec Symfony pour la logique serveur et l'évolution du site.",
    },
    backendDocs: {
      summary:
        "Pour avancer côté front, je me suis appuyée sur les besoins métier et sur la structure fournie par le back pour intégrer les contenus de manière cohérente.",
      items: [
        "Compréhension des champs à afficher et de leur organisation",
        "Alignement du front avec la logique de gestion des contenus",
        "Prise en compte des retours liés à la structure serveur",
      ],
    },
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "CSS",
      "Docker",
      "Git",
      "Symfony",
    ],
    link: "https://mansa.digital/",
    buttonText: "Découvrir",
    iconKey: "code",
    category: "Développement web",
    filterKey: "web",
    featured: true,
    showInCarousel: true,
  },
  {
    id: 2,
    title: "Mansa Talents",
    img: "/images/projects/mansatalents.jpg",
    summary:
      "J'ai travaillé côté front sur une plateforme emploi qui rend les parcours candidat et recruteur plus clairs, plus lisibles et plus simples à utiliser.",
    details:
      "Mon intervention a porté sur l'expérience front, l'organisation des écrans et l'intégration des éléments utiles aux parcours de recherche d'emploi et de recrutement.",
    focusTag: "Recrutement",
    highlight:
      "Objectif : simplifier la recherche d'emploi et la gestion du recrutement sur une même plateforme.",
    contribution:
      "Je me suis concentrée sur le front-end des interfaces utiles aux candidats et aux recruteurs, avec un vrai travail d'intégration, de lisibilité et de cohérence entre les parcours.",
    problem:
      "Les candidats manquent souvent d'outils clairs pour valoriser leur profil, tandis que les recruteurs ont besoin d'un espace simple pour publier, trier et suivre les candidatures.",
    solution:
      "La plateforme réunit les deux parcours dans une interface unique, avec des actions rapides pour créer un CV, consulter des offres et gérer le recrutement.",
    mainFeatures: [
      "Création et mise à jour de CV en ligne",
      "Recherche d'offres et exploration d'entreprises",
      "Espace recruteur pour publier et administrer les annonces",
      "Parcours pensé pour accélérer la mise en relation",
    ],
    backOffice: {
      summary:
        "Le back-office sert à administrer la plateforme côté recruteur et à piloter les contenus et données métiers affichés dans le front.",
      features: [
        "Gestion des offres d'emploi et de leur publication",
        "Suivi des candidatures et des statuts de traitement",
        "Administration des comptes et des rôles utilisateurs",
      ],
    },
    backendPerspective: {
      level: "Intégré",
      summary:
        "Le backend Symfony est déjà intégré pour gérer les comptes, les rôles, les offres, les candidatures et le suivi des statuts exploités dans les écrans front.",
      useCases: [
        "Authentification distincte pour candidats et recruteurs",
        "CRUD des profils, offres et candidatures",
        "Stockage structuré des CV, pièces jointes et statuts",
        "Règles d'accès selon les rôles et tableaux de suivi",
      ],
      note:
        "Backend déjà intégré avec Symfony pour piloter toute la logique métier recrutement.",
    },
    backendDocs: {
      summary:
        "Mon travail front était lié aux informations et comportements définis côté back, en particulier pour les profils, les offres et les candidatures.",
      items: [
        "Compréhension des rôles candidat et recruteur",
        "Utilisation de la structure des données pour afficher les offres et profils",
        "Respect des statuts et informations remontés par le back-end",
      ],
    },
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "CSS",
      "Docker",
      "Git",
      "Symfony",
    ],
    link: "https://mansatalents.com/",
    buttonText: "Découvrir",
    iconKey: "briefcase",
    category: "Plateforme emploi",
    filterKey: "career",
    featured: false,
    showInCarousel: true,
  },
  {
    id: 3,
    title: "Guinée Data",
    img: "/images/projects/guineedata.png",
    summary:
      "J'ai surtout accompagné le projet sur la partie UI/UX pour rendre la consultation des données plus claire, plus lisible et plus accessible.",
    details:
      "Je n'ai pas porté tout le projet. Mon intervention s'est surtout concentrée sur l'expérience utilisateur, l'habillage visuel et la réflexion design autour de la présentation des données.",
    focusTag: "UI/UX & Design Thinking",
    highlight:
      "Ma contribution a surtout porté sur l'expérience visuelle, la clarté de lecture et la réflexion design autour des parcours, pas sur l'ensemble de la plateforme.",
    contribution:
      "J'ai principalement assisté sur la partie UI/UX, la hiérarchie visuelle et le design thinking appliqué aux parcours de lecture et de consultation, en accompagnement du projet plutôt qu'en prise en charge complète.",
    problem:
      "Une plateforme de données doit rendre des informations parfois denses plus lisibles pour faciliter leur consultation et leur compréhension.",
    solution:
      "J'ai contribué à améliorer la clarté de l'interface, la hiérarchie visuelle et l'expérience de lecture afin de rendre les données plus accessibles et plus simples à parcourir.",
    mainFeatures: [
      "Amélioration de la lisibilité des écrans de consultation",
      "Travail sur la hiérarchie visuelle et l'organisation des blocs",
      "Réflexion design thinking autour des parcours utilisateurs",
      "Support UI/UX pour une interface plus claire et plus accessible",
    ],
    backOffice: {
      summary:
        "Sur la partie back-office, mon regard a surtout porté sur l'expérience utilisateur, l'organisation des informations et la clarté des écrans de gestion.",
      features: [
        "Réflexion UI/UX sur l'organisation des informations administrées",
        "Travail sur la lisibilité des contenus avant affichage côté interface",
        "Approche design thinking pour clarifier certains parcours de gestion",
      ],
    },
    backendPerspective: {
      level: "Support",
      summary:
        "Le backend existait déjà pour alimenter la plateforme en données. Mon travail était surtout lié à la façon de les présenter côté front.",
      useCases: [
        "Compréhension des données à afficher dans l'interface",
        "Prise en compte de la structure des contenus fournis par le back",
        "Adaptation de l'UI aux informations réellement disponibles",
      ],
      note:
        "Contribution surtout UI/UX et front, avec appui sur l'existant côté back-end.",
    },
    stackTitle: "Approche et outils",
    technologies: [
      "UI/UX",
      "Design Thinking",
      "Hiérarchie visuelle",
      "Parcours utilisateur",
      "Architecture de l'information",
    ],
    link: "https://guineedata.org/",
    buttonText: "Explorer",
    iconKey: "database",
    category: "Plateforme data",
    filterKey: "data",
    featured: false,
    showInCarousel: true,
  },
  {
    id: 4,
    title: "Billet Facile",
    img: "/images/projects/billetfacile-official.png",
    summary:
      "J'ai travaillé côté front sur une solution de billetterie pensée pour rendre la création d'événements et le suivi des participants plus fluides.",
    details:
      "Mon rôle a porté sur l'intégration front des parcours utiles aux organisateurs et aux utilisateurs, avec une attention particulière à la clarté des actions et à la fluidité d'usage.",
    focusTag: "Événementiel",
    highlight:
      "Objectif : centraliser la création d'événements, la billetterie et la gestion des participations dans une interface simple.",
    contribution:
      "Je me suis concentrée sur le front-end, l'intégration des interfaces et la restitution claire des informations liées à la billetterie et aux événements.",
    problem:
      "La gestion manuelle des billets, invitations et participations génère des frictions, des erreurs et un manque de visibilité pour les organisateurs.",
    solution:
      "L'application centralise la création d'événements et la gestion des billets afin d'offrir un parcours plus fluide, plus rapide et plus fiable.",
    mainFeatures: [
      "Création et gestion de billets d'événements",
      "Partage d'invitations et de cagnottes",
      "Suivi des participants et de la diffusion",
      "Interface pensée pour des actions rapides et claires",
    ],
    backOffice: {
      summary:
        "Le back-office permet aux organisateurs d'administrer les événements et les informations visibles dans les interfaces front.",
      features: [
        "Gestion des événements, billets et paramètres associés",
        "Suivi des participants et des réservations",
        "Administration des comptes organisateurs et des informations métier",
      ],
    },
    backendPerspective: {
      level: "Intégré",
      summary:
        "Le backend Symfony est déjà intégré pour gérer les événements, les billets, les utilisateurs et l'état des réservations exploités côté front.",
      useCases: [
        "CRUD des événements, billets et organisateurs",
        "Stockage des participants et statut des réservations",
        "Authentification organisateur et participant",
        "Synchronisation des réservations et historique des actions",
      ],
      note:
        "Backend déjà intégré avec Symfony pour la gestion métier de la billetterie.",
    },
    backendDocs: {
      summary:
        "Pour avancer sur le front, je me suis appuyée sur les besoins fonctionnels et sur les informations exposées par le back autour des événements et des réservations.",
      items: [
        "Compréhension des données liées aux billets et événements",
        "Prise en compte des statuts de réservation dans l'interface",
        "Alignement du front avec les parcours organisateur et participant",
      ],
    },
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "CSS",
      "Docker",
      "Git",
      "Symfony",
    ],
    link: "https://billetfacile.com/",
    buttonText: "Visiter le site",
    iconKey: "ticket",
    category: "Gestion d'événements",
    filterKey: "event",
    featured: false,
    showInCarousel: true,
  },
  {
    id: 5,
    title: "AfriBook",
    summary:
      "Plateforme culturelle pensée pour rendre la littérature africaine francophone plus accessible, plus visible et plus vivante.",
    details:
      "Le projet démarre avec un focus sur la Guinée et l'Afrique de l'Ouest, avec l'ambition de réunir lecteurs, auteurs et passionnés de culture dans un même espace numérique et communautaire.",
    focusTag: "Culture & communauté",
    highlight:
      "Le MVP vise à centraliser la découverte de livres africains, les profils d'auteurs et les échanges autour de la lecture dans une expérience simple et engageante.",
    problem:
      "Les œuvres d'auteurs africains restent peu visibles, dispersées et difficiles à découvrir, tandis que les lecteurs disposent de peu d'espaces pour échanger et construire une communauté autour de la lecture.",
    solution:
      "AfriBook réunit dans une même plateforme la découverte de livres, la valorisation des auteurs et des formats communautaires comme les Book Clubs pour créer un vrai point d'entrée culturel.",
    targetAudience: [
      "Lecteurs passionnés de 18 à 45 ans, notamment en Guinée",
      "Auteurs africains francophones en recherche de visibilité",
      "Relais culturels capables d'amplifier naturellement le projet",
    ],
    mainFeatures: [
      "Page d'accueil orientée découverte",
      "Filtrage des livres par auteur, pays ou thématique",
      "Présentation claire des livres et des auteurs",
      "Avis, commentaires et vues pour engager la communauté",
      "Page dédiée au Book Club et aux rencontres littéraires",
    ],
    stackTitle: "Cadrage & design",
    technologies: [
      "Figma",
      "UI/UX",
      "Design Thinking",
      "Cadrage MVP",
      "Architecture de contenu",
    ],
    link: "",
    buttonText: "Voir le projet",
    iconKey: "book",
    category: "Bibliothèque numérique",
    filterKey: "library",
    featured: false,
    showInCarousel: false,
  },
];
