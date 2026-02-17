import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-8 py-12 md:py-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          
          <div>
            <h3 className="text-3xl font-medium text-white mb-4">
              Olawuni Israel <br />Oluwatemilorun
            </h3>
            <p className="text-gray-400 max-w-xs">
                Full Stack Web Developer | Crafting Seamless Front-End Experience & Robust Backend System | Turning Ideas into Scalable, User-Focused Web Solution
            </p>
           
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-x-2 flex">
                <Link href='/' className="hover:text-white transition-colors duration-200">Home</Link>
                <Link href='/About' className="hover:text-white transition-colors duration-200">About</Link>
                <Link href='/Project' className="hover:text-white transition-colors duration-200">Project</Link>
                <Link href='/Contact' className="hover:text-white transition-colors duration-200">Contact</Link>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <p className="text-gray-400">
                Email: <a href="mailto:dev.temilorun@gmail.com?subject=Inquiry&body=Hello,%0A%0AI'd%20like%20to%20discuss..." className="hover:text-white transition-colors">
                  dev.temilorun@gmail.com
                </a>
              </p>
              <p className="text-gray-400">
                Phone: <a href="tel:+2347041225674" className="hover:text-white transition-colors">
                  +234 7031225674
                </a>
              </p>
              <div className="flex gap-4 mt-5">
                <Link href="https://github.com/devTemilorun" target="_blank"
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-400 hover:bg-white hover:text-black transition">
                  <FaGithub className="w-6 h-6" />
                </Link>
                <Link href="https://wa.me/2347031225674?text=Hello!%20I'm%20interested%20in%20your%20services." target="_blank"
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-400 hover:bg-white hover:text-black transition">
                  <FaWhatsapp className="w-6 h-6" />
                </Link>
                <Link href="https://twitter.com/ISCRYPT0001" target="_blank"
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-400 hover:bg-white hover:text-black transition">
                  <FaXTwitter className="w-6 h-6" />
                </Link>
                <Link href="https://www.linkedin.com/in/olawuni-israel-oluwatemilorun-85714a324" target="_blank"
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-400 hover:bg-white hover:text-black transition">
                  <FaLinkedin className="w-6 h-6" />
                </Link>
                <Link href="mailto:dev.temilorun@gmail.com?subject=Inquiry&body=Hello,%0A%0AI'd%20like%20to%20discuss..." target="_blank"
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-400 hover:bg-white hover:text-black transition">
                  <MdEmail className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Olawuni Israel Oluwatemilorun. 
            <span className="mx-2">•</span>
            Built with passion & code.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
