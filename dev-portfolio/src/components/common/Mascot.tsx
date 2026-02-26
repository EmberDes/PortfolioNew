import { motion } from "framer-motion"

export default function Mascot() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="fixed bottom-6 right-6 w-28 h-28 opacity-80 pointer-events-none z-50"
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-xl"
      >
        <circle cx="100" cy="100" r="80" fill="#111827" />
        <circle cx="70" cy="85" r="10" fill="white" />
        <circle cx="130" cy="85" r="10" fill="white" />
        <path
          d="M70 130 Q100 160 130 130"
          stroke="white"
          strokeWidth="6"
          fill="none"
        />
      </svg>
    </motion.div>
  )
}