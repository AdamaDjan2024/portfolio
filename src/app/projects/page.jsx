import { generateMetadata } from "@/utils/seo";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";

export const metadata = generateMetadata(
  "Projets",
  "Découvrez mes projets de développement web et applications"
);

export default function ProjectsPage() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Mes projets
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
