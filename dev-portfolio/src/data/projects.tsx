import type { Project } from "../types/project"

export const projects: Project[] = [
  {
    id: "1",
    title: "DevConnect",
    description: "Developer networking platform with authentication and analytics.",
    techStack: ["React", "Django REST Framework", "PostgresSQL"],
    githubUrl: "https://github.com/EmberDes/DevConnect",
    liveUrl: "#",
    category: "fullstack",
  },
  {
    id: "2",
    title: "Portfolio Pro",
    description: "Modern responsive portfolio built with React and Tailwind.",
    techStack: ["React", "Tailwind",],
    githubUrl: "https://github.com/EmberDes/PortfolioNew",
    category: "frontend",
  },
  {
    id: "3",
    title: "API Service",
    description: "RESTful API built with Python and FastAPI.",
    techStack: ["Python", "Flask", "React","PostgreSQL"],
    githubUrl: "https://github.com/EmberDes/UrlShortner#",
    category: "backend",
  },
]