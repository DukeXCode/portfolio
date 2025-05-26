import {ExternalLink} from 'lucide-react'
import {SiGithub} from "@icons-pack/react-simple-icons";
import {useTranslation} from "react-i18next";

export interface Project {
  name: string
  descriptionKey: string
  github: string
  demo: string
  tech: string[]
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({project}: ProjectCardProps) => {
    const { t } = useTranslation();

    return (
    <div className="p-6 transition-colors bg-gray-800 rounded-lg hover:bg-gray-800/80">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">
            {project.name}
          </h3>
          <p className="mt-2 text-gray-300">{t(project.descriptionKey)}</p>
        </div>
        <div className="flex gap-3">
          {project.github && (
            <a href={project.github} className="text-gray-400 hover:text-purple-400">
              <SiGithub className="w-5 h-5"/>
            </a>
          )}
          {project.demo && (
            <a href={project.demo} className="text-gray-400 hover:text-purple-400">
              <ExternalLink className="w-5 h-5"/>
            </a>
          )}
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((tech, techIndex) => (
          <span key={techIndex} className="px-3 py-1 text-sm text-purple-300 bg-purple-900/30 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
