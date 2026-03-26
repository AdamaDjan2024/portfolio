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
    img: "/mansadigital-empereur.png",
    summary:
      "Agence de communication digitale spécialisée dans la création de sites web, le marketing et la transformation numérique.",
    details:
      "Site vitrine conçu lors de mon stage pour valoriser l'expertise de l'agence en développement web et en UX/UI, avec un design moderne, responsive et une navigation fluide.",
    technologies: ["Next.js", "Tailwind", "CSS", "Docker", "Git"],
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
    img: "/mansatalents.jpg",
    summary:
      "Plateforme d'emploi et de recrutement qui connecte les talents aux entreprises en Guinée et en Afrique, avec création de CV, recherche d'offres et mise en relation.",
    details:
      "Mansa Talents permet aux candidats de créer un CV moderne, de postuler rapidement et d'explorer des entreprises, tandis que les recruteurs disposent d'un espace dédié pour publier des offres et recruter plus efficacement. Le site met l'accent sur une expérience claire, responsive et orientée conversion.",
    technologies: ["Symfony", "Twig", "Webpack Encore", "UI/UX"],
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
    img: "/guineedata.png",
    summary:
      "Plateforme qui centralise et valorise les données publiques et économiques de Guinée pour plus de transparence et d'accès à l'information.",
    details:
      "Valorise les informations publiques et économiques pour faciliter la recherche, la lecture des données et la prise de décision grâce à une interface claire et accessible.",
    technologies: ["Next.js", "Tailwind", "Django", "UI/UX", "Git"],
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
    img: "/billetfacile-official.png",
    summary:
      "Plateforme moderne qui facilite la création, la gestion et le partage de billets d'événements, de cagnottes et d'invitations.",
    details:
      "La plateforme digitalise l'événementiel, simplifie la création et la gestion de billets et de cagnottes, et propose une expérience fluide, claire et fiable.",
    technologies: ["Next.js", "Tailwind", "Docker", "Git"],
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
    img: "/afribook.png",
    summary:
      "Bibliothèque numérique dédiée aux auteurs africains souvent méconnus.",
    details:
      "Mise en avant des auteurs africains, organisation de sessions de lecture et de book clubs, initiation des jeunes à la lecture et animation d'une communauté active autour du livre africain.",
    technologies: ["Next.js", "Tailwind", "Docker", "Git"],
    link: "",
    buttonText: "Voir le projet",
    iconKey: "book",
    category: "Bibliothèque numérique",
    filterKey: "library",
    featured: false,
    showInCarousel: false,
  },
];
