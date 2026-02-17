"use client"

import React from "react"
import Link from "next/link"
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { MdEmail, MdLocationOn } from "react-icons/md"

const Contact = () => {
  return (
    <section className="min-h-screen w-full py-24 px-6">

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="text-5xl font-light tracking-wide text-gray-900">
          Let’s Work Together
        </h1>
        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
          Have a project idea, collaboration, or opportunity?
          Send me a message — I typically respond within 24 hours.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">

        {/* CONTACT FORM */}
        <div className="backdrop-blur-xl bg-white/60 border border-white/40 shadow-xl rounded-3xl p-8 md:p-10">

          <h2 className="text-2xl font-semibold mb-8 text-gray-800 tracking-wide">
            Send Message
          </h2>

          <form className="space-y-6">

            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-xl border border-gray-300 bg-white/70 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-600">Email Address</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full rounded-xl border border-gray-300 bg-white/70 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-600">Subject</label>
              <input
                type="text"
                placeholder="Project Discussion"
                className="w-full rounded-xl border border-gray-300 bg-white/70 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-600">Message</label>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-gray-300 bg-white/70 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl text-white font-medium tracking-wide
              bg-gradient-to-r from-indigo-500 to-blue-600
              hover:from-indigo-600 hover:to-blue-700
              shadow-lg hover:shadow-indigo-300/40
              transition-all duration-300"
            >
              Send Message
            </button>

          </form>
        </div>

        {/* CONTACT INFO */}
        <div className="flex flex-col justify-center text-center md:text-left backdrop-blur-xl bg-white/60 border border-white/40 shadow-xl rounded-3xl p-8 md:p-10">

          <h2 className="text-2xl font-semibold mb-8 text-gray-800 tracking-wide">
            Contact Info
          </h2>

          <div className="space-y-6 text-gray-700">

            {/* Location */}
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <MdLocationOn className="text-3xl text-indigo-600" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-gray-600">Nigeria, Earth</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <MdEmail className="text-3xl text-indigo-600" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">dev.temilorun@gmail.com</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <FaWhatsapp className="text-3xl text-indigo-600" />
              <div>
                <p className="font-medium">WhatsApp</p>
                <p className="text-gray-600">+234 703 122 5674</p>
              </div>
            </div>

            {/* Socials */}
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
