"use client";
import { useEffect, useState } from "react";
import {
  FaExternalLinkAlt,
  FaCode,
  FaDatabase,
  FaTicketAlt,
  FaBook,
  FaBriefcase,
  FaBullseye,
  FaLightbulb,
  FaLayerGroup,
  FaServer,
  FaCheckCircle,
  FaUsers,
} from "react-icons/fa";
import { portfolioProjects, projectFilters } from "@/data/projects";

const iconMap = {
  code: FaCode,
  database: FaDatabase,
  ticket: FaTicketAlt,
  book: FaBook,
  briefcase: FaBriefcase,
};

function ProjectDetailPanel({ icon: Icon, title, children }) {
  return (
    <div className="rounded-[1.35rem] border border-white/[0.12] bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.05))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#2AE8A8]/20 bg-[#2AE8A8]/[0.14] text-[#74F0C8] shadow-[0_10px_30px_-18px_rgba(42,232,168,0.75)]">
          <Icon className="text-base" aria-hidden="true" />
        </div>
        <h3 className="text-lg font-semibold tracking-tight text-white">
          {title}
        </h3>
      </div>
      <div className="space-y-3 text-sm leading-relaxed text-slate-100/90">
        {children}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.filterKey === filter);

  const SelectedProjectIcon = selectedProject
    ? iconMap[selectedProject.iconKey] || FaCode
    : FaCode;
  const modalTitleId = selectedProject
    ? `project-modal-title-${selectedProject.id}`
    : undefined;
  const modalDescriptionId = selectedProject
    ? `project-modal-description-${selectedProject.id}`
    : undefined;

  useEffect(() => {
    if (!selectedProject || typeof window === "undefined") {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(42,232,168,0.12),transparent_28%),linear-gradient(180deg,#f8fcfd_0%,#ffffff_34%,#edf5f9_100%)]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-6rem] top-24 h-56 w-56 rounded-full bg-[#2AE8A8]/10 blur-3xl" />
        <div className="absolute right-[-5rem] top-40 h-64 w-64 rounded-full bg-[#001B4B]/[0.08] blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-sky-200/30 blur-3xl" />
      </div>

      {/* Hero Section */}
      <div className="relative page-shell py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#001B4B] mb-6 tracking-tight">
            Mes Projets
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Découvrez des projets concrets pensés pour répondre à des besoins
            métier réels, avec un soin particulier porté à l&apos;UX, à la
            clarté et à la qualité d&apos;exécution.
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="page-shell py-8">
        <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
          {projectFilters.map((filterType) => (
            <button
              key={filterType.value}
              onClick={() => setFilter(filterType.value)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium ${
                filter === filterType.value
                  ? "border border-[#001B4B] bg-[#001B4B] text-white shadow-[0_16px_36px_-20px_rgba(0,27,75,0.85)]"
                  : "border border-[#d7e4eb] bg-white/90 text-slate-600 shadow-sm hover:border-[#cfdbe3] hover:bg-white hover:text-[#001B4B]"
              }`}
              type="button"
            >
              {filterType.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="page-shell pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => {
            const IconComponent = iconMap[project.iconKey] || FaCode;
            return (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 ${
                  project.featured
                    ? "border border-[#113872] bg-[linear-gradient(145deg,#001B4B_0%,#06295C_52%,#0B3B78_100%)] shadow-[0_22px_60px_-28px_rgba(0,27,75,0.88)] hover:shadow-[0_30px_75px_-30px_rgba(0,27,75,0.95)]"
                    : "border border-[#d9e5eb] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(243,249,251,0.98))] shadow-[0_18px_45px_-28px_rgba(0,27,75,0.25)] hover:border-[#c3ddd7] hover:shadow-[0_28px_58px_-28px_rgba(0,27,75,0.34)]"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#2AE8A8]/80 to-transparent" />
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full blur-2xl ${
                    project.featured
                      ? "bg-[#2AE8A8]/[0.18]"
                      : "bg-[#001B4B]/[0.08]"
                  }`}
                />
                <div className="relative p-6 sm:p-8 h-full flex flex-col">
                  {/* Icon and Category */}
                  <div className="flex items-center justify-between mb-6 gap-3">
                    <div
                      className={`p-3 rounded-lg ${
                        project.featured
                          ? "border border-white/10 bg-white/[0.12] text-[#8FF7D4]"
                          : "border border-[#2AE8A8]/[0.15] bg-[#2AE8A8]/10 text-[#0D6A57]"
                      }`}
                    >
                      <IconComponent
                        className={`text-xl ${
                          project.featured ? "text-[#8FF7D4]" : "text-[#0D6A57]"
                        }`}
                      />
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                        project.featured
                          ? "border border-white/10 bg-white/10 text-white/90"
                          : "border border-[#001B4B]/[0.08] bg-[#001B4B]/5 text-[#16345d]"
                      }`}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-semibold mb-4 ${
                    project.featured ? "text-white" : "text-[#0D2145]"
                  }`}>
                    {project.title}
                  </h3>

                  <div className="flex-grow">
                    {project.focusTag && (
                      <span
                        className={`mb-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                          project.featured
                            ? "border border-white/10 bg-white/10 text-white/90"
                            : "border border-[#2AE8A8]/[0.15] bg-[#2AE8A8]/[0.12] text-[#0D6A57]"
                        }`}
                      >
                        {project.focusTag}
                      </span>
                    )}

                    {/* Description */}
                    <p className={`leading-relaxed ${
                      project.featured ? "text-white/[0.78]" : "text-slate-600"
                    }`}>
                      {project.summary}
                    </p>

                    {project.highlight && (
                      <div
                        className={`mt-5 rounded-2xl border px-4 py-3 ${
                          project.featured
                            ? "border-white/[0.12] bg-white/[0.08] text-white/90"
                            : "border-[#d6ebe4] bg-[#f3fffa] text-slate-700"
                        }`}
                      >
                        <p
                          className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${
                            project.featured
                              ? "text-[#A8F7DB]"
                              : "text-[#0F6253]"
                          }`}
                        >
                          Besoin métier
                        </p>
                        <p className="mt-2 text-sm leading-relaxed">
                          {project.highlight}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6 mt-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.featured
                            ? "border border-white/10 bg-white/10 text-white/[0.88]"
                            : "border border-[#d3eee5] bg-[#eff9f5] text-[#0F6253]"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.featured
                            ? "border border-white/10 bg-white/10 text-white/[0.88]"
                            : "border border-[#d3eee5] bg-[#eff9f5] text-[#0F6253]"
                        }`}
                      >
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                        project.featured
                          ? "bg-[#F6FCFF] text-[#001B4B] shadow-[0_16px_34px_-22px_rgba(255,255,255,0.7)] hover:bg-white"
                          : "bg-[#001B4B] text-white shadow-[0_16px_38px_-22px_rgba(0,27,75,0.7)] hover:bg-[#07295A]"
                      }`}
                      type="button"
                    >
                      Voir détails
                    </button>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-lg transition-colors duration-300 ${
                          project.featured
                            ? "border border-white/10 bg-white/10 text-white hover:bg-white/[0.15]"
                            : "border border-[#d8ebe5] bg-[#f3fffa] text-[#0F6253] hover:bg-[#e8fbf3]"
                        }`}
                        aria-label={`Ouvrir ${project.title}`}
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
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-[#041120]/[0.68] p-4 backdrop-blur-[2px] sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div className="flex min-h-full items-start justify-center sm:items-center">
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby={modalTitleId}
              aria-describedby={modalDescriptionId}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/[0.12] bg-[radial-gradient(circle_at_top_left,rgba(42,232,168,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(125,211,252,0.14),transparent_28%),linear-gradient(145deg,#001B4B_0%,#032457_48%,#02162F_100%)] p-6 shadow-[0_40px_120px_-34px_rgba(0,7,22,0.92)] sm:p-8"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="pointer-events-none absolute -left-16 top-10 h-36 w-36 rounded-full bg-[#2AE8A8]/[0.12] blur-3xl" />
              <div className="pointer-events-none absolute -right-12 bottom-12 h-44 w-44 rounded-full bg-sky-300/10 blur-3xl" />

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.08] text-2xl font-bold text-white/70 transition-colors duration-300 hover:bg-white/[0.18] hover:text-white"
                aria-label="Fermer la modale"
                type="button"
              >
                &times;
              </button>

              <div className="relative mb-8 border-b border-white/10 pb-6 pr-10">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#2AE8A8]/20 bg-[#2AE8A8]/[0.14] text-[#74F0C8] shadow-[0_18px_40px_-22px_rgba(42,232,168,0.75)]">
                    <SelectedProjectIcon className="text-3xl" />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
                        {selectedProject.category}
                      </span>
                      {selectedProject.focusTag && (
                        <span className="rounded-full border border-[#2AE8A8]/20 bg-[#2AE8A8]/[0.12] px-3 py-1 text-xs font-semibold text-[#8AF6D4]">
                          {selectedProject.focusTag}
                        </span>
                      )}
                    </div>

                    <div className="space-y-3">
                      <h2
                        id={modalTitleId}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white"
                      >
                        {selectedProject.title}
                      </h2>
                      <p
                        id={modalDescriptionId}
                        className="text-base sm:text-lg leading-relaxed text-slate-100"
                      >
                        {selectedProject.summary}
                      </p>
                      {selectedProject.details && (
                        <p className="leading-relaxed text-slate-200/80">
                          {selectedProject.details}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {selectedProject.highlight && (
                  <div className="mt-6 rounded-2xl border border-[#2AE8A8]/[0.18] bg-[linear-gradient(135deg,rgba(42,232,168,0.16),rgba(255,255,255,0.04))] px-5 py-4 text-slate-100">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8AF6D4]">
                      Enjeu produit
                    </p>
                    <p className="mt-2 leading-relaxed">
                      {selectedProject.highlight}
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-5">
                {(selectedProject.problem || selectedProject.solution) && (
                  <div className="grid gap-5 md:grid-cols-2">
                    {selectedProject.problem && (
                      <ProjectDetailPanel
                        icon={FaBullseye}
                        title="Problème"
                      >
                        <p>{selectedProject.problem}</p>
                      </ProjectDetailPanel>
                    )}

                    {selectedProject.solution && (
                      <ProjectDetailPanel
                        icon={FaLightbulb}
                        title="Solution"
                      >
                        <p>{selectedProject.solution}</p>
                      </ProjectDetailPanel>
                    )}
                  </div>
                )}

                {selectedProject.contribution && (
                  <ProjectDetailPanel
                    icon={FaBriefcase}
                    title={
                      selectedProject.roleHighlights?.length > 0
                        ? "Mon rôle concret"
                        : "Mon rôle"
                    }
                  >
                    <p>{selectedProject.contribution}</p>

                    {selectedProject.roleHighlights?.length > 0 && (
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {selectedProject.roleHighlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3"
                          >
                            <FaCheckCircle
                              className="mt-0.5 shrink-0 text-[#8AF6D4]"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </ProjectDetailPanel>
                )}

                {selectedProject.targetAudience?.length > 0 && (
                  <ProjectDetailPanel
                    icon={FaUsers}
                    title="Public cible"
                  >
                        <ul className="space-y-3">
                          {selectedProject.targetAudience.map((audience) => (
                            <li
                              key={audience}
                              className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3"
                            >
                              {audience}
                            </li>
                      ))}
                    </ul>
                  </ProjectDetailPanel>
                )}

                {(selectedProject.backOffice || selectedProject.backendDocs) && (
                  <div className="grid gap-5 md:grid-cols-2">
                    {selectedProject.backOffice && (
                      <ProjectDetailPanel
                        icon={FaDatabase}
                        title="Back-office"
                      >
                        <p>{selectedProject.backOffice.summary}</p>

                        <ul className="space-y-3">
                          {selectedProject.backOffice.features.map((feature) => (
                            <li
                              key={feature}
                              className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3"
                            >
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </ProjectDetailPanel>
                    )}

                    {selectedProject.backendDocs && (
                      <ProjectDetailPanel
                        icon={FaBook}
                        title="Documentation back-end"
                      >
                        <p>{selectedProject.backendDocs.summary}</p>

                        <ul className="space-y-3">
                          {selectedProject.backendDocs.items.map((item) => (
                            <li
                              key={item}
                              className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </ProjectDetailPanel>
                    )}
                  </div>
                )}

                {selectedProject.mainFeatures?.length > 0 && (
                  <ProjectDetailPanel
                    icon={FaCheckCircle}
                    title="Fonctionnalités principales"
                  >
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {selectedProject.mainFeatures.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3"
                        >
                          <FaCheckCircle
                            className="mt-0.5 shrink-0 text-[#8AF6D4]"
                            aria-hidden="true"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </ProjectDetailPanel>
                )}

                <ProjectDetailPanel
                  icon={FaLayerGroup}
                  title={selectedProject.stackTitle || "Stack technique"}
                >
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </ProjectDetailPanel>

                {selectedProject.backendPerspective && (
                  <ProjectDetailPanel
                    icon={FaServer}
                    title="Back-end"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          selectedProject.backendPerspective.level ===
                            "Essentiel" ||
                          selectedProject.backendPerspective.level ===
                            "Intégré"
                            ? "bg-[#2AE8A8]/[0.15] text-[#2AE8A8]"
                            : "bg-white/10 text-white/[0.85]"
                        }`}
                      >
                        {selectedProject.backendPerspective.level}
                      </span>
                      <span className="text-sm text-slate-200/75">
                        Architecture serveur déjà intégrée sur le projet.
                      </span>
                    </div>

                    <p>{selectedProject.backendPerspective.summary}</p>

                    <ul className="grid gap-3 sm:grid-cols-2">
                      {selectedProject.backendPerspective.useCases.map(
                        (useCase) => (
                          <li
                            key={useCase}
                            className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3"
                          >
                            {useCase}
                          </li>
                        )
                      )}
                    </ul>

                    {selectedProject.backendPerspective.note && (
                      <div className="rounded-xl border border-[#2AE8A8]/[0.18] bg-[linear-gradient(135deg,rgba(42,232,168,0.15),rgba(255,255,255,0.04))] px-4 py-3 text-slate-100">
                        {selectedProject.backendPerspective.note}
                      </div>
                    )}
                  </ProjectDetailPanel>
                )}

                {selectedProject.link && (
                  <div className="pt-4 border-t border-white/10">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,#2AE8A8_0%,#78F2D8_100%)] px-5 py-3 text-base font-semibold text-[#001B4B] shadow-[0_18px_42px_-20px_rgba(42,232,168,0.7)] transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      <FaExternalLinkAlt />
                      Voir le projet en ligne
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
