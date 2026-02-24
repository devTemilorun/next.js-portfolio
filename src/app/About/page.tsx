'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import Image from 'next/image'
import PagesNavbar from '@/src/components/PagesNavbar'
import { assets } from '@/src/Assets/assets'

const AboutPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen text-gray-900 dark:text-gray-100">
      <PagesNavbar />

      <section className="mt-24 py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-3">
              PROFILE
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light">
              I'm a Creative and Passionate Website Developer
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 0.1 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
              }}
              className="md:col-span-1 text-center md:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-8 text-gray-900 dark:text-white">
                ABOUT ME
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <p>
                  I’m <span className="font-semibold text-indigo-600 dark:text-indigo-400">Olawuni Israel Oluwatemilorun</span> — a full-stack developer focused on building clean, fast, and intuitive digital experiences.
                </p>
                <p>
                  I create modern web applications where thoughtful design meets solid engineering — products that feel effortless for users and maintainable for teams.
                </p>
                <p>
                  My primary stack includes <strong className="text-gray-900 dark:text-white">React</strong>, <strong className="text-gray-900 dark:text-white">Next.js</strong>, and <strong className="text-gray-900 dark:text-white">Tailwind CSS</strong> on the frontend, with <strong className="text-gray-900 dark:text-white">PHP</strong> and <strong className="text-gray-900 dark:text-white">Laravel</strong> powering scalable backend architecture and APIs.
                </p>
                <p>
                  I enjoy solving complex problems, optimizing performance, and turning abstract ideas into production-ready systems that remain reliable as they grow.
                </p>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium italic text-xl pt-4">
                  Let’s build something remarkable together.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.92 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.9 } },
              }}
              className="flex justify-center md:self-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                <Image
                  src={assets.about_img}
                  alt="Olawuni Israel Oluwatemilorun"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 40 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
              }}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-8 text-gray-900 dark:text-white">
                DETAILS
              </h2>

              <div className="space-y-8 text-lg text-gray-700 dark:text-gray-300 max-w-sm">
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white block mb-2">Skills:</span>
                  <p>
                    HTML • CSS • JavaScript • TypeScript • React • Next.js • PHP • Laravel
                  </p>
                </div>

                <div>
                  <span className="font-semibold text-gray-900 dark:text-white block mb-2">Education:</span>
                  <p>
                    Ekiti State University [EKSU] <br />
                    2025 - 2028
                  </p>
                </div>

                <div>
                  <span className="font-semibold text-gray-900 dark:text-white block mb-2">Location</span>
                  <p>Nigeria, Earth</p>
                </div>

                <div>
                  <span className="font-semibold text-gray-900 dark:text-white block mb-3">Connect with me</span>
                  <div className="flex gap-5 justify-center md:justify-start flex-wrap">
                    {[
                      { href: 'https://github.com/devTemilorun', icon: <FaGithub className="w-7 h-7" />, label: 'GitHub' },
                      { href: 'https://wa.me/2347031225674?text=Hello!%20I\'m%20interested%20in%20your%20services.', icon: <FaWhatsapp className="w-7 h-7" />, label: 'WhatsApp' },
                      { href: 'https://x.com/dev_Temilorun', icon: <FaXTwitter className="w-7 h-7" />, label: 'X / Twitter' },
                      { href: 'https://www.linkedin.com/in/olawuni-israel-oluwatemilorun-85714a324', icon: <FaLinkedin className="w-7 h-7" />, label: 'LinkedIn' },
                      { href: 'mailto:dev.temilorun@gmail.com?subject=Inquiry&body=Hello,%0A%0AI\'d%20like%20to%20discuss...', icon: <MdEmail className="w-7 h-7" />, label: 'Email' },
                    ].map((link, i) => (
                      <Link
                        key={i}
                        href={link.href}
                        target="_blank"
                        aria-label={link.label}
                        className="w-14 h-14 flex items-center justify-center rounded-full border border-gray-400 dark:border-gray-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300 shadow-sm hover:shadow-md"
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
    </div>
  )
}

export default AboutPage