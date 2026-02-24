'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Link from 'next/link'

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      style={{ backgroundImage: "url('/header_img.png')" }}
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50" />
      <Navbar />
      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-[32px] lg:text-5xl inline-block max-w-5xl font-semibold pt-20 tracking-tight leading-tight"
        >
          Full Stack Web Developer | Crafting Seamless Front-End Experience & Robust Backend System | Turning Ideas into Scalable, User-Focused Web Solutions
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-x-6 mt-16 flex mx-auto justify-center items-center"
        >
          <Link
            href="/Project"
            className="border border-white/70 dark:border-gray-300 px-8 py-3 rounded hover:bg-white/10 dark:hover:bg-gray-700/30 transition-all duration-300"
          >
            Projects
          </Link>

          <Link
            href="/Contact"
            className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 px-8 py-3 rounded shadow-lg transition-all duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Header