import React from 'react'
import { assets } from '../Assets/assets'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div
    className='flex mx-auto p-14 md:px-20 lg:px-24 w-full overflow-hidden container flex-col items-center justify-center'>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-light tracking-wide text-gray-900">
          About Me
        </h1>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          The result? Digital products that don’t just function
        </p>
      </div>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <Image src={assets.about_img} className='w-full sm:w-1/2' alt="" />
        <div className='flex flex-col items-center md:items-start text-gray-600 mt-6 lg:mt-0'>
          <h2 className="text-xl sm:text-2xl font-bold mb-2">
            Olawuni Israel Oluwatemilorun
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed mb-4">
            I build <strong>modern web applications</strong> that feel effortless — blending thoughtful design with solid engineering.
          </p>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl">
            <div>
              <h3 className="text-xl font-semibold mb-3">Frontend</h3>
              <p className="font-medium text-gray-800 mb-1">React • Next.js • Tailwind CSS • JavaScript • Typescript</p>
              <p className="text-gray-600">
                Responsive, fast, accessible interfaces. Component-driven. User-first.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Backend</h3>
              <p className="font-medium text-gray-800 mb-1">PHP • Laravel</p>
              <p className="text-gray-600">
                Secure, scalable systems. Clean architecture. Ready for growth.
              </p>
            </div>
          </div>
          <p className="mt-4 text-lg italic text-gray-700 max-w-2xl">
            Turning ideas into digital products that perform — beautifully and reliably.
          </p>

          <Link
            href="/About"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
            text-white font-medium tracking-wide
            bg-indigo-600 hover:bg-indigo-700
            shadow-lg transition-transform duration-200
            hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Know More</span>
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
      </div>
    </div>
  )
}

export default About
