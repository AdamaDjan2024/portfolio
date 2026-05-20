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
      "Mansa Digital aide les entreprises à moderniser leur présence en ligne avec des expériences web plus claires et plus efficaces.",
    technologies: ["Next.js", "React", "Tailwind CSS", "API REST", "UI Integration", "Responsive"],
    year: "2025",
    link: "https://mansa.digital/",
    category: "Site vitrine agence",
    filterKey: "web",
    impact: {
      text: "Impact: la marque gagne en crédibilité, les services sont mieux compris et le parcours utilisateur plus fluide améliore la conversion des visiteurs en prospects.",
    },
  },
  {
    id: 2,
    title: "Mansa Talents",
    img: "/images/projects/mansatalents.jpg",
    summary:
      "Mansa Talent connecte les talents aux opportunités professionnelles avec un parcours simple et orienté emploi.",
    technologies: ["Next.js", "React", "Tailwind CSS", "API REST", "UX Writing", "Responsive"],
    year: "2025",
    link: "https://mansatalents.com/",
    category: "Plateforme emploi",
    filterKey: "career",
    impact: {
      text: "Impact: les candidats identifient plus vite les opportunités adaptées à leur profil, tandis que les recruteurs accèdent à des talents plus visibles et mieux qualifiés.",
    },
  },
  {
    id: 3,
    title: "Guinée Data",
    img: "/images/projects/guineedata.png",
    summary:
      "Guinée Data valorise les données pour les rendre lisibles, utiles et exploitables par un public plus large.",
    technologies: ["UI/UX", "Figma", "Design Thinking", "Architecture de l'information"],
    year: "2023",
    link: "https://guineedata.org/",
    category: "Plateforme data",
    filterKey: "data",
    impact: {
      text: "Impact: des données plus lisibles renforcent la transparence et facilitent des décisions plus pertinentes dans des domaines clés comme l'éducation, la santé ou l'économie.",
    },
  },
  {
    id: 4,
    title: "BilletFacile",
    img: "/images/projects/billetfacile-official.png",
    summary:
      "BilletFacile fluidifie le parcours de billetterie en rendant la recherche, la sélection et l'achat plus simples pour l'utilisateur.",
    technologies: ["Next.js", "React", "Tailwind CSS", "API REST", "Design System", "Mobile UI"],
    year: "2024",
    link: "https://billetfacile.com/",
    category: "Billetterie en ligne",
    filterKey: "event",
    impact: {
      text: "Impact: un parcours d'achat plus clair réduit les frictions et aide les utilisateurs à réserver leurs billets plus rapidement et avec plus de confiance.",
    },
  },
  {
    id: 5,
    title: "AfriBooks",
    img: "/images/projects/afribooks.png",
    summary:
      "AfriBook est une maquette en conception pour faciliter l'accès au livre et à l'apprentissage digital.",
    technologies: ["Figma", "UI/UX", "Design Thinking", "MVP"],
    year: "2024",
    link: "",
    category: "Bibliothèque numérique",
    filterKey: "library",
    isInProgress: true,
    impact: {
      text: "Impact futur: rendre l'apprentissage plus accessible via le digital, encourager la lecture régulière et mieux valoriser les contenus éducatifs africains.",
    },
  },
];
