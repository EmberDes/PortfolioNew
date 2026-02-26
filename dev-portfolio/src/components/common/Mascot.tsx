import { motion } from "framer-motion"
import mascot from "../../assests/Mascot.png"

export default function Mascot() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.05 }}
      className="fixed bottom-6 right-6 w-40 md:w-48 opacity-90 z-50"
    >
      <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full -z-10" />
      <img
        src={mascot}
        alt="Developer Mascot"
        className="w-full drop-shadow-2xl"
      />
      
    </motion.div>
  )
}