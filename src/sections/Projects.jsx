 import ProjectCard from '@/components/ProjectCard'
import projectsData from '@/data/projects.json'

export default function Projects() {
  const featuredProjects = projectsData.filter(project => project.featured)

  // return (
  //   <section id="projects" className="py-16 bg-gray-50">
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //       <h2 className="section-title">Projets récents</h2>
  //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  //         {featuredProjects.map((project) => (
  //           <ProjectCard key={project.id} project={project} />
  //         ))}
  //       </div>
  //       <div className="text-center mt-8">
  //         <a
  //           href="/projects"
  //           className="btn-primary"
  //         >
  //           Voir tous les projets
  //         </a>
  //       </div>
  //     </div>
  //   </section>
  // )
}
