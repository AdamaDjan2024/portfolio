import Card from './Card'

export default function ProjectCard({ project }) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
        <span className="text-gray-500">Image du projet</span>
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex space-x-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Demo
          </a>
        )}
      </div>
    </Card>
  )
}
