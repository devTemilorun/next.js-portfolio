'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

const iconVariants = {
  rest: { y: 0, scale: 1 },
  hover: { y: -4, scale: 1.15, transition: { duration: 0.3 } },
}

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-950 text-gray-300 pt-16 pb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl px-6 md:px-20 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-medium text-white mb-6">
              Olawuni Israel <br />Oluwatemilorun
            </h3>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Full Stack Web Developer | Crafting Seamless Front-End Experience & Robust Backend System | Turning Ideas into Scalable, User-Focused Web Solutions
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <div className="flex flex-col space-y-4 text-gray-400">
              <Link href="/" className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4">
                Home
              </Link>
              <Link href="/About" className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4">
                About
              </Link>
              <Link href="/Project" className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4">
                Projects
              </Link>
              <Link href="/Contact" className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4">
                Contact
              </Link>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold text-white mb-6">Connect with me</h4>
            <div className="space-y-4 text-gray-400">
              <p>
                Email:{' '}
                <a
                  href="mailto:dev.temilorun@gmail.com?subject=Inquiry&body=Hello,%0A%0AI'd%20like%20to%20discuss..."
                  className="hover:text-white transition-colors"
                >
                  dev.temilorun@gmail.com
                </a>
              </p>
              <p>
                Phone:{' '}
                <a href="tel:+2347031225674" className="hover:text-white transition-colors">
                  +234 703 122 5674
                </a>
              </p>

              <div className="flex gap-3 lg:gap-5 mt-6 shrink">
                {[
                  { href: "https://github.com/devTemilorun", icon: <FaGithub className="w-5 h-5" />, label: "GitHub" },
                  { href: "https://wa.me/2347031225674?text=Hello!%20I'm%20interested%20in%20your%20services.", icon: <FaWhatsapp className="w-5 h-5" />, label: "WhatsApp" },
                  { href: "https://x.com/dev_Temilorun", icon: <FaXTwitter className="w-5 h-5" />, label: "X / Twitter" },
                  { href: "https://www.linkedin.com/in/olawuni-israel-oluwatemilorun-85714a324", icon: <FaLinkedin className="w-5 h-5" />, label: "LinkedIn" },
                  { href: "mailto:dev.temilorun@gmail.com?subject=Inquiry&body=Hello,%0A%0AI'd%20like%20to%20discuss...", icon: <MdEmail className="w-5 h-5" />, label: "Email" },
                ].map((link, i) => (
                  <motion.div key={i} variants={iconVariants} whileHover="hover">
                    <Link
                      href={link.href}
                      target="_blank"
                      aria-label={link.label}
                      className="w-14 h-14 flex items-center justify-center rounded-full border border-gray-600 hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      {link.icon}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500"
        >
          <p>
            © {new Date().getFullYear()} Olawuni Israel Oluwatemilorun.  
            <span className="mx-3">•</span>
            Built with passion & code.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer