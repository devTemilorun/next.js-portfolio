'use client'

import Link from 'next/link'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import Image from "next/image";
import PagesNavbar from '@/src/components/PagesNavbar'
import Footer from '@/src/components/Footer'
import { assets } from "@/src/Assets/assets";


const AboutPage = () => {
  
  return (
    <div>
      <PagesNavbar/>
      <section className="min-h-screen bg-gray-100 flex flex-col items-center py-20">
        <div className="text-center mb-16">
          <h1 className="text-2xl font-semibold tracking-widest mb-2">PROFILE</h1>
          <p className="text-gray-600 text-lg">
            I'm a Creative and Passionate Website Developer
          </p>
        </div>
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-16 md:items-center px-6">
          <div className="max-w-md mx-auto text-center md:text-left md:self-center">
            <h2 className="text-2xl font-semibold tracking-widest mb-8">
              ABOUT ME
            </h2>
            <p className="text-xl text-gray-800 leading-relaxed mb-6">
              I’m <span className="font-medium">Olawuni Israel Oluwatemilorun</span> — a full-stack developer focused on building clean, fast, and intuitive digital experiences.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              I create modern web applications where thoughtful design meets solid engineering — products that feel effortless for users and maintainable for teams.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              My primary stack includes <strong>React</strong>, <strong>Next.js</strong>, and <strong>Tailwind CSS</strong> on the frontend, with <strong>PHP</strong> and <strong>Laravel</strong> powering scalable backend architecture and APIs.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              I enjoy solving complex problems, optimizing performance, and turning abstract ideas into production-ready systems that remain reliable as they grow.
            </p>
            <p className="text-indigo-700 font-medium">
              Let’s build something remarkable together.
            </p>
          </div>
          <div className="flex justify-center md:self-center">
            <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-300">
              <Image
                src={assets.about_img}
                alt="Profile"
                width={256}
                height={256}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-center text-center md:self-center">
            <h2 className="text-2xl font-semibold tracking-widest mb-8">
              DETAILS
            </h2>
            <div className="space-y-6 text-gray-600 max-w-xs">
              <p>
                <span className="font-semibold text-gray-800">Skills:</span><br />
                HTML | CSS | JavaScript | TypeScript | React | Next.js | PHP | Laravel
              </p>
              <p>
                <span className="font-semibold text-gray-800">Location:</span><br />
                Nigeria, Earth
              </p>
              <div>
                <span className="font-semibold text-gray-800">Links:</span>
                <div className="flex gap-4 mt-4 justify-center items-center">
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
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default AboutPage
