import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { skills } from "../data/skills"
import { useEffect } from "react"


useEffect(() => {
  document.title = "Home | Shashwat Singh"
}, [])

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center py-24 overflow-hidden">
      
      {/* Subtle Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -z-10" />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold leading-tight"
      >
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Shashwat Singh
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
      >
        Full-stack developer crafting clean, scalable and
        performance-driven web applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-10 flex gap-4"
      >
        <Link
          to="/projects"
          className="px-6 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black transition-all duration-300 hover:scale-105"
        >
          View Projects
        </Link>

        <Link
          to="/about"
          className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          About Me
        </Link>
      </motion.div>
      <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mt-3"
>


    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="mt-32"
    >
        <h2 className="text-3xl font-bold mb-10 text-center">
            Core Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill) => {
            const Icon = skill.icon

            return (
                <div
                key={skill.name}
                className="group border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800"
                >
                <Icon className="text-4xl mb-4 text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors duration-300" />
                <span>{skill.name}</span>
                </div>
            )
            })}
        </div>
        </motion.div>
</motion.div>
    </div>
    
  )
}