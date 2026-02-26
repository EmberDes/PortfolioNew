import { useState, useMemo, useEffect } from "react"
import { projects } from "../data/projects"
import ProjectCard from "../components/ui/ProjectCard"



useEffect(() => {
  document.title = "Home | Shashwat Singh"
}, [])


export default function Projects() {
  const [filter, setFilter] = useState("all")

  const filteredProjects = useMemo(() => {
    if (filter === "all") return projects
    return projects.filter((p) => p.category === filter)
  }, [filter])

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="flex gap-4 mb-8">
        {["all", "frontend", "backend", "fullstack"].map((type) => {
  const isActive = filter === type

  return (
    <button
      key={type}
      onClick={() => setFilter(type)}
      className={`
        px-4 py-2 rounded-lg border transition-all duration-300
        ${isActive
          ? "bg-black text-white dark:bg-white dark:text-black border-black dark:border-white"
          : "border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
        }
      `}
    >
      {type}
    </button>
  )
})}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}