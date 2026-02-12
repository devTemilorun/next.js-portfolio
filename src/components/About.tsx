import React from 'react'
import { assets } from '../Assets/assets'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div
    className='flex mx-auto p-14 md:px-20 lg:px-24 w-full overflow-hidden container flex-col items-center justify-center'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Me</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>The result? Digital products that don’t just function</p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <Image src={assets.about_img} className='w-full sm:w-1/2' alt="" />
        <div className='flex flex-col items-center md:items-start text-gray-600 mt-6 lg:mt-0'>
          <h2 className="text-xl sm:text-2xl font-bold mb-2">
            OLAWUNI ISRAEL OLUWATEMILORUN
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed mb-4">
            I build <strong>modern web applications</strong> that feel effortless — blending thoughtful design with solid engineering.
          </p>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl">
            <div>
              <h3 className="text-xl font-semibold mb-3">Frontend</h3>
              <p className="font-medium text-gray-800 mb-1">React • Next.js • Tailwind CSS • JavaScript</p>
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

            <Link href='/About' className='bg-blue-600 mt-8 text-white px-8 py-2 rounded'>About Me</Link>
        </div>
      </div>
    </div>
  )
}

export default About
