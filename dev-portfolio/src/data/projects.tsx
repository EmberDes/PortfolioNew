import type { Project } from "../types/project"

export const projects: Project[] = [
  {
    id: "1",
    title: "DevConnect",
    description: "Developer networking platform with authentication and analytics.",
    techStack: ["React", "TypeScript", "Tailwind"],
    githubUrl: "#",
    liveUrl: "#",
    category: "fullstack",
  },
  {
    id: "2",
    title: "Portfolio Pro",
    description: "Modern responsive portfolio built with React and Tailwind.",
    techStack: ["React", "Tailwind"],
    githubUrl: "#",
    category: "frontend",
  },
  {
    id: "3",
    title: "API Service",
    description: "RESTful API built with Python and FastAPI.",
    techStack: ["Python", "FastAPI"],
    githubUrl: "#",
    category: "backend",
  },
]