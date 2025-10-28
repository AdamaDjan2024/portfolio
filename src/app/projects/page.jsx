"use client";
import { useState } from "react";
import { FaExternalLinkAlt, FaCode, FaDatabase, FaTicketAlt, FaBook } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "Mansa Digital",
    description:
      "Site vitrine conçu lors de mon stage pour une agence de communication digitale.",
    details:
      "Le site met en valeur l'expertise de l'agence en développement web et UX/UI. Design moderne et responsive, navigation fluide et agréable.",
    technologies: ["Next.js", "Tailwind", "CSS", "Docker", "Git"],
    link: "https://mansa.digital/",
    icon: FaCode,
    category: "Web Development",
    featured: true,
  },
  {
    id: 2,
    title: "Guinée Data",
    description:
      "Plateforme centralisée de données publiques et économiques pour plus de transparence.",
    details:
      "Valorise les informations économiques et améliore la prise de décision grâce à un design clair et accessible à tous.",
    technologies: ["Next.js", "Tailwind", "Django", "UI/UX", "Git"],
    link: "https://www.guineedata.org/",
    icon: FaDatabase,
    category: "Data Platform",
    featured: false,
  },
  {
    id: 3,
    title: "Billet Facile",
    description:
      "Application de gestion complète d'événements et de cagnottes très populaire en Guinée.",
    details:
      "La plateforme digitalise l'événementiel, simplifie la création et la gestion de billets et cagnottes, offrant une expérience fluide et fiable.",
    technologies: ["Next.js", "Tailwind", "Docker", "Git"],
    link: "https://billetfacile.com/",
    icon: FaTicketAlt,
    category: "Event Management",
    featured: false,
  },
  {
    id: 4,
    title: "AfriBook",
    description:
      "Bibliothèque numérique dédiée aux auteurs africains souvent méconnus.",
    details:
      "Mise en avant des auteurs africains, organisation de sessions de lecture et book clubs, initiation des jeunes à la lecture et création d'une communauté active autour du livre africain.",
    technologies: ["Next.js", "Tailwind", "Docker", "Git"],
    link: "",
    icon: FaBook,
    category: "Digital Library",
    featured: false,
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#001B4B] mb-6 tracking-tight">
            Mes Projets
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Découvrez mes réalisations qui combinent créativité, innovation et expertise technique
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center gap-4 flex-wrap">
          {["all", "web", "data", "event", "library"].map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`px-6 py-3 rounded-full font-medium ${
                filter === filterType
                  ? "bg-[#001B4B] text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {filterType === "all" ? "Tous" : filterType.charAt(0).toUpperCase() + filterType.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-xl ${
                  project.featured 
                    ? "bg-[#001B4B] shadow-lg" 
                    : "bg-white border border-gray-200"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >

                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon and Category */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-lg ${
                      project.featured 
                        ? "bg-white/20" 
                        : "bg-[#2AE8A8]/20"
                    }`}>
                      <IconComponent className={`text-xl ${
                        project.featured ? "text-white" : "text-[#2AE8A8]"
                      }`} />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.featured 
                        ? "bg-white/20 text-white" 
                        : "bg-[#2AE8A8]/20 text-[#2AE8A8]"
                    }`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-semibold mb-4 ${
                    project.featured ? "text-white" : "text-gray-900"
                  }`}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className={`flex-grow mb-6 leading-relaxed ${
                    project.featured ? "text-white/80" : "text-gray-600"
                  }`}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.featured 
                            ? "bg-white/20 text-white" 
                            : "bg-[#2AE8A8]/20 text-[#2AE8A8]"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.featured 
                          ? "bg-white/20 text-white" 
                          : "bg-[#2AE8A8]/20 text-[#2AE8A8]"
                      }`}>
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className={`flex-1 py-3 px-4 rounded-lg font-medium ${
                        project.featured
                          ? "bg-white text-[#2AE8A8]"
                          : "bg-[#2AE8A8] text-white"
                      }`}
                    >
                      Voir détails
                    </button>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-lg ${
                          project.featured
                            ? "bg-white/20 text-white"
                            : "bg-[#2AE8A8]/20 text-[#2AE8A8]"
                        }`}
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-800 rounded-3xl p-8 max-w-2xl w-full mx-4 relative border border-slate-700/50 shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white text-3xl font-bold transition-colors duration-300"
            >
              &times;
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-xl">
                <selectedProject.icon className="text-3xl text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  {selectedProject.title}
                </h2>
                <p className="text-blue-400 font-medium">{selectedProject.category}</p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                {selectedProject.description}
              </p>
              
              {selectedProject.details && (
                <p className="text-gray-400 leading-relaxed">
                  {selectedProject.details}
                </p>
              )}

              <div>
                <h3 className="text-white font-semibold mb-3">Technologies utilisées</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-full text-sm font-medium border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.link && (
                <div className="pt-4 border-t border-slate-700/50">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-lg font-semibold"
                  >
                    <FaExternalLinkAlt />
                    Voir le projet en ligne
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
