'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../Assets/assets'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-light tracking-wide">
            About Me
          </h1>
          <p className="mt-5 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            The result? Digital products that don’t just function
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
          className="flex flex-col md:flex-row items-center md:items-start md:gap-16 lg:gap-24"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } }}
            className="w-full md:w-5/12 mb-10 md:mb-0"
          >
            <Image
              src={assets.about_img}
              alt="Olawuni Israel Oluwatemilorun"
              width={500}
              height={600}
              className="rounded-2xl shadow-2xl object-cover w-full"
            />
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } }}
            className="flex flex-col items-center md:items-start text-gray-700 dark:text-gray-300"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Olawuni Israel Oluwatemilorun
            </h2>

            <p className="max-w-3xl text-lg leading-relaxed mb-8">
              I build <strong className="text-indigo-600 dark:text-indigo-400">modern web applications</strong> that feel effortless — blending thoughtful design with solid engineering.
            </p>

            <div className="grid sm:grid-cols-2 gap-10 w-full max-w-3xl">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Frontend</h3>
                <p className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                  React • Next.js • Tailwind CSS • JavaScript • TypeScript
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Responsive, fast, accessible interfaces. Component-driven. User-first.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Backend</h3>
                <p className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                  PHP • Laravel
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Secure, scalable systems. Clean architecture. Ready for growth.
                </p>
              </div>
            </div>

            <p className="mt-10 text-lg italic text-gray-700 dark:text-gray-300 max-w-3xl">
              Turning ideas into digital products that perform — beautifully and reliably.
            </p>

            <Link
              href="/About"
              className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-medium bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <span>Know More</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About