import { motion } from 'framer-motion'

export function Footer() {
  return (
    <motion.footer 
      className="py-4 text-center text-gray-500 text-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      © {new Date().getFullYear()} TagIt. Open source and free to use.
    </motion.footer>
  )
}

