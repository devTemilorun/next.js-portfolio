'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'                          
import { notFound, useParams } from 'next/navigation'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa' 
import { projectData } from '@/src/Assets/assets'
import PagesNavbar from '@/src/components/PagesNavbar'

function getProjectBySlug(slug: string) {
  return projectData.find((p) => p.slug === slug)
}

export default function SingleProjectPage() {
  const params = useParams()
  const slug = params?.slug as string

  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div>
      <PagesNavbar />
      <div className="mt-24 min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100">
        <div className="container mx-auto px-6 md:px-10 max-w-6xl pt-6 pb-4">
          <Link 
            href="/Project"                                  
            className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium group text-3xl"
          >
            <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
            Back to All Projects
          </Link>
        </div>
        <section className="relative pt-12 pb-16 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03]" />
          <div className="relative container mx-auto px-6 md:px-10 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-center"
            >
              <h1 className="text-6xl font-extrabold tracking-wide text-gray-900 dark:text-gray-100">
                {project.title}
              </h1>
              <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                {project.description}
              </p>
              <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl mt-10">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={600}
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>
        <section className="pb-20 md:pb-32">
          <div className="container mx-auto px-6 md:px-10 max-w-4xl space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="prose dark:prose-invert prose-lg mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p>{project.fullDescription}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6">Screenshots</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {project.screenshots.map((screenshot, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={screenshot}
                      alt={`Screenshot ${idx + 1}`}
                      width={600}
                      height={400}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center space-y-6"
            >
              <h2 className="text-3xl font-bold mb-6">Check It Out</h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-medium bg-indigo-600 hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-gray-900 dark:text-gray-100 font-medium border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                >
                  <FaGithub /> GitHub Repo
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}