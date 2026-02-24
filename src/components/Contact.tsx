'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { MdEmail, MdLocationOn } from 'react-icons/md'

const Contact = () => {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-light tracking-wide">
            Let’s Work Together
          </h1>
          <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Have a project idea, collaboration, or opportunity?  
            Send me a message — I typically respond within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, staggerChildren: 0.25 }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
            className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 border border-gray-200/60 dark:border-gray-700/50 shadow-2xl rounded-3xl p-8 md:p-12"
          >
            <div className="space-y-10 text-center">
              <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                Ready to Build Something Exceptional?
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                I deliver <span className="font-semibold text-indigo-600 dark:text-indigo-400">clean, modern, performant</span> code with attention to detail, strong architecture, and excellent user experience.
              </p>

              <p className="text-gray-700 dark:text-gray-300 font-medium text-lg">
                Let's turn your vision into high-quality reality.
              </p>

              <Link
                href="/Contact"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-xl text-white font-medium bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-xl transition-all duration-300 hover:-translate-y-1 mt-6 text-lg"
              >
                Start a Conversation
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <p className="text-sm text-gray-500 dark:text-gray-400 pt-6">
                Usually reply within 4–12 hours • Confidentiality assured
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
            className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 border border-gray-200/60 dark:border-gray-700/50 shadow-2xl rounded-3xl p-8 md:p-12 flex flex-col justify-center"
          >
            <h2 className="text-3xl font-semibold mb-10 text-gray-800 dark:text-gray-100 text-center md:text-left">
              Contact Info
            </h2>

            <div className="space-y-8 text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-5 justify-center md:justify-start">
                <MdLocationOn className="text-4xl text-indigo-600 dark:text-indigo-400" />
                <div>
                  <p className="font-medium text-lg">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">Nigeria, Earth</p>
                </div>
              </div>

              <div className="flex items-center gap-5 justify-center md:justify-start">
                <MdEmail className="text-4xl text-indigo-600 dark:text-indigo-400" />
                <div>
                  <p className="font-medium text-lg">Email</p>
                  <a
                    href="mailto:dev.temilorun@gmail.com?subject=Inquiry&body=Hello,%0A%0AI'd%20like%20to%20discuss..."
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition"
                  >
                    dev.temilorun@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 justify-center md:justify-start">
                <FaWhatsapp className="text-4xl text-indigo-600 dark:text-indigo-400" />
                <div>
                  <p className="font-medium text-lg">Phone</p>
                  <a
                    href="tel:+2347031225674"
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition"
                  >
                    +234 703 122 5674
                  </a>
                </div>
              </div>

              <div className="pt-8">
                <p className="font-medium mb-5 text-lg text-center md:text-left">Connect with me</p>
                <div className="flex gap-6 justify-center md:justify-start">
                  {[
                    { href: "https://github.com/devTemilorun", icon: <FaGithub className="w-7 h-7" /> },
                    { href: "https://wa.me/2347031225674", icon: <FaWhatsapp className="w-7 h-7" /> },
                    { href: "https://x.com/dev_Temilorun", icon: <FaXTwitter className="w-7 h-7" /> },
                    { href: "https://www.linkedin.com/in/olawuni-israel-oluwatemilorun-85714a324", icon: <FaLinkedin className="w-7 h-7" /> },
                  ].map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      target="_blank"
                      className="w-14 h-14 rounded-full border border-gray-400 dark:border-gray-600 flex items-center justify-center hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      {link.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact