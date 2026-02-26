import { motion } from "framer-motion"
import { useEffect } from "react"

useEffect(() => {
  document.title = "About | Shashwat Singh"
}, [])
export default function About() {
  return (
    
    <div className="max-w-4xl mx-auto">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About Me
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          I’m a full-stack developer focused on building scalable,
          performance-driven web applications with clean architecture
          and modern technologies.
        </p>
      </motion.div>

      {/* Specialization Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 grid md:grid-cols-2 gap-10"
      >
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            What I Specialize In
          </h2>

          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li>• React & TypeScript front-end architecture</li>
            <li>• RESTful API development (FastAPI / Python)</li>
            <li>• Scalable backend systems</li>
            <li>• Clean UI with Tailwind CSS</li>
            <li>• Performance optimization & best practices</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Approach
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I focus on writing maintainable, structured code with
            attention to performance and scalability. I enjoy
            building systems that are both visually refined and
            technically robust.
          </p>
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-2xl font-semibold mb-8">
          Journey
        </h2>

        <div className="space-y-8 border-l border-gray-300 dark:border-gray-700 pl-6">
          <div>
            <h3 className="font-semibold">Started Programming</h3>
            <p className="text-sm text-gray-500">
              Focused on core fundamentals, DSA and backend systems.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Full-stack Projects</h3>
            <p className="text-sm text-gray-500">
              Built scalable apps integrating frontend and backend systems.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Advanced React & System Design</h3>
            <p className="text-sm text-gray-500">
              Focused on architecture, performance, and production-ready applications.
            </p>
          </div>
        </div>
      </motion.div>

    </div>
  )
}