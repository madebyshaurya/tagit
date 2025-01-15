'use client'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Home() {
  const [imageUrl, setImageUrl] = useState('')
  const [result, setResult] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulated API call
    setResult({
      caption: "A beautiful sunset over the ocean",
      tags: ["sunset", "ocean", "nature", "beautiful"]
    })
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.section 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-800">TagIt</h1>
          <p className="text-xl mb-4 text-gray-600">
            A free, open-source API for image tagging and captioning.
          </p>
          <a 
            href="https://github.com/tagit/api" 
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
          >
            View on GitHub
          </a>
        </motion.section>

        <motion.section 
          id="demo" 
          className="max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Try it out</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="url" 
              value={imageUrl} 
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Enter image URL"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Analyze Image
            </button>
          </form>
        </motion.section>

        {result && (
          <motion.section 
            className="mt-8 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Results:</h3>
            <div className="bg-white p-4 rounded-md shadow">
              <p className="mb-2"><strong>Caption:</strong> {result.caption}</p>
              <p><strong>Tags:</strong> {result.tags.join(', ')}</p>
            </div>
          </motion.section>
        )}
      </main>

      <Footer />
    </div>
  )
}

