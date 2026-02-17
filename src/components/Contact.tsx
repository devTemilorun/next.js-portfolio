"use client"

import React from "react"
import Link from "next/link"
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { MdEmail, MdLocationOn } from "react-icons/md"

const Contact = () => {
  return (
    <section className="min-h-screen w-full py-24 px-6">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-light tracking-wide text-gray-900">
          Let’s Work Together
        </h1>
        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
          Have a project idea, collaboration, or opportunity?
          Send me a message — I typically respond within 24 hours.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        <div className="backdrop-blur-xl bg-white/60 border border-white/40 shadow-xl rounded-3xl p-8 md:p-10">
          <div className="space-y-8 py-6 px-2 md:px-6">
            <div className="text-center space-y-5">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100">
                Ready to Build Something Exceptional?
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                I deliver <span className="font-semibold text-indigo-600 dark:text-indigo-400">clean, modern, performant</span> code 
                with attention to detail, strong architecture, and excellent user experience.
                </p>

                <p className="text-gray-600 dark:text-gray-300 font-medium">
                Let's turn your vision into high-quality reality.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/Contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-medium tracking-wide
                    bg-gradient-to-r from-indigo-500 to-blue-600
                    hover:from-indigo-600 hover:to-blue-700
                    shadow-lg hover:shadow-indigo-300/40
                    transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                    <span>Start a Conversation</span>
                    <svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
            </div>

            <p className="text-center text-sm text-gray-500 dark:text-gray-400 pt-4">
                Usually reply within 4–12 hours • Confidentiality assured
            </p>
            </div>
        </div>
        <div className="flex flex-col justify-center text-center md:text-left backdrop-blur-xl bg-white/60 border border-white/40 shadow-xl rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800 tracking-wide">
            Contact Info
          </h2>
          <div className="space-y-6 text-gray-700">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <MdLocationOn className="text-3xl text-indigo-600" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-gray-600">Nigeria, Earth</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <MdEmail className="text-3xl text-indigo-600" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">dev.temilorun@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <FaWhatsapp className="text-3xl text-indigo-600" />
              <div>
                <p className="font-medium">WhatsApp</p>
                <p className="text-gray-600">+234 703 122 5674</p>
              </div>
            </div>
            <div className="pt-6">
              <p className="font-medium mb-4">Connect with me</p>
              <div className="flex gap-5 justify-center md:justify-start text-gray-700">
                <Link target="_blank" href="https://github.com/devTemilorun" className="w-11 h-11 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-900 hover:text-white transition">
                  <FaGithub className="w-5 h-5" />
                </Link>
                <Link target="_blank" href="https://wa.me/2347031225674" className="w-11 h-11 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-900 hover:text-white transition">
                  <FaWhatsapp className="w-5 h-5" />
                </Link>
                <Link target="_blank" href="https://twitter.com/ISCRYPT0001" className="w-11 h-11 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-900 hover:text-white transition">
                  <FaXTwitter className="w-5 h-5" />
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/in/olawuni-israel-oluwatemilorun-85714a324" className="w-11 h-11 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-900 hover:text-white transition">
                  <FaLinkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
