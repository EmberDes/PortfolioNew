import { motion } from "framer-motion"
import type  { Project } from "../../types/project"

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800"
    >
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm font-medium">
        <a href={project.githubUrl} className="text-blue-600 hover:underline">
          GitHub
        </a>

        {project.liveUrl && (
          <a href={project.liveUrl} className="text-green-600 hover:underline">
            Live
          </a>
        )}
      </div>
    </motion.div>
  )
}