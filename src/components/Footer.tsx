import React from 'react'
import { assets } from '../Assets/assets'
import Link from 'next/link'

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
                Email: <a href="`mailto:dev.temilorun@gmail.com?subject=Inquiry&body=Hello,%0A%0AI'd%20like%20to%20discuss..." className="hover:text-white transition-colors">
                  olawuniisrael2020@gmail.com
                </a>
              </p>
              
              <p className="text-gray-400">
                Phone: <a href="tel:+2347041225674" className="hover:text-white transition-colors">
                  +234 7031225674
                </a>
              </p>
             
              <div className="flex gap-5 mt-5">
                <a href="https://twitter.com/ISCRYPT0001" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/olawuni-israel-oluwatemilorun-85714a324'" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.029-3.058-1.867-3.058-1.867 0-2.152 1.459-2.152 2.966v5.696h-3v-11h2.882v1.509h.039c.401-.757 1.381-1.557 2.837-1.557 3.033 0 3.597 1.997 3.597 4.597v6.451z"/>
                    </svg>
                </a>
                <a href="https://github.com/devTemilorun" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                </a>
                <a href="https://wa.me/2347031225674?text=Hello!%20I'm%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 2.42.82 4.67 2.26 6.5L2.82 22l3.68-1.44C8.33 21.99 10.58 22.82 13 22.82 18.52 22.82 23 18.34 23 12.82 23 7.3 18.52 2 13 2zm4.78 15.28c-.3.63-1.06 1.11-1.8 1.33-.74.22-1.54.16-2.2-.16-1.2-.54-2.3-1.32-3.24-2.3-.94-.96-1.72-2.06-2.26-3.26-.32-.66-.38-1.46-.16-2.2.22-.74.7-1.4 1.33-1.7l1.23-.62c.3-.14.66-.08.92.12.26.2.42.52.44.86l.14 1.26c.02.32-.1.64-.32.88-.22.24-.52.38-.84.4l-.48.08c.24.9.7 1.76 1.34 2.52.64.76 1.44 1.38 2.34 1.84l.08-.48c.02-.32.16-.62.38-.84.22-.22.56-.36.88-.34l1.26.14c.34.02.66.18.86.44.2.26.26.62.12.92l-.62 1.23z"/>
                    </svg>
                </a>
                <a href="`mailto:dev.temilorun@gmail.com?subject=Inquiry&body=Hello,%0A%0AI'd%20like%20to%20discuss..." target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5v2l8 5 8-5v-2zm-16 8v-8l8 5 8-5v8H4z"/>
                    </svg>
                </a>
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
