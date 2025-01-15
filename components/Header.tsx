import Link from 'next/link'
import { motion } from 'framer-motion'

export function Header() {
  return (
    <motion.header 
      className="py-4 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          TagIt
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="https://github.com/tagit/api" className="text-gray-600 hover:text-gray-800 transition-colors">GitHub</a></li>
            <li><a href="#demo" className="text-gray-600 hover:text-gray-800 transition-colors">Demo</a></li>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

