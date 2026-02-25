'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { projectData } from '@/src/Assets/assets'  
import PagesNavbar from '@/src/components/PagesNavbar'



export default function ProjectsPage() {
  return (
    <div>
      <PagesNavbar/>
      <div className="mt-24 min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100">
        <section className="relative pt-20 pb-16 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03]" />
          <div className="relative container mx-auto px-6 md:px-10 max-w-6xl text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 md:mb-20"
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-3">
                My Projects
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light">
                Explore my portfolio of innovative web applications and solutions.<br className="hidden sm:block" />
                Each project showcases cutting-edge tech and user-centric design.              
              </p>
            </motion.div>
            
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <h1 className="text-5xl font-light tracking-wide text-gray-900">
              </h1>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                
              </p>
            </motion.div> */}
          </div>
        </section> 
        <section className="pb-20 md:pb-32">
          <div className="container mx-auto px-6 md:px-10 max-w-6xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projectData.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative w-full h-60 md:h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="p-5 md:p-6 space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 line-clamp-3">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/Project/${project.slug}`}
                      className="mt-4 block w-full py-3 text-center text-white font-medium rounded-xl bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      View Details
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}