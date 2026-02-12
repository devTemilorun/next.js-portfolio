'use client'

import Image from 'next/image'
import { assets } from '@/src/Assets/assets'
import PagesNavbar from '@/src/components/PagesNavbar'
import Footer from '@/src/components/Footer'


const AboutPage = () => {
  
  return (
    <div>
      <PagesNavbar/>
      <section 
        className="py-16 md:py-24 bg-white "
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="
              text-4xl sm:text-5xl md:text-6xl 
              font-bold tracking-tight text-gray-900
            ">
              About Me
            </h1>
            <div className="w-16 h-1 bg-gray-700 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* Text content - left side on desktop */}
            <div className="space-y-6 md:space-y-8 order-2 md:order-1">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                I’m Olawuni Israel Oluwatemilorun — a passionate full-stack web developer who believes that exceptional digital products are born from the perfect balance of clean code, thoughtful design, and genuine user focus.
              </p>
              <p className="max-w-2xl text-lg leading-relaxed text-gray-700">
                I build <strong>modern web applications</strong> that feel effortless — blending thoughtful design with solid engineering.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                My journey into web development started with a curiosity for how things work under the hood and quickly grew into a deep love for crafting seamless, performant, and scalable experiences. I specialize in building modern front-end interfaces with <strong>React</strong>, <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and <strong>JavaScript</strong>, while confidently handling backend logic, APIs, and architecture using <strong>PHP</strong> and <strong>Laravel</strong>.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                I enjoy solving complex problems, writing maintainable code, and turning abstract ideas into polished, production-ready applications that look great and feel intuitive on every device. Whether it’s optimizing performance, improving accessibility, or designing scalable systems, I’m driven by the goal of creating digital solutions that deliver real value and leave users delighted.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                Outside of coding, I’m constantly learning, experimenting with new tools and techniques, and staying up-to-date with the evolving web ecosystem. I believe the best work comes from curiosity, discipline, and a relentless focus on quality.
              </p>

              <p className="text-lg font-medium text-indigo-700 pt-4">
                Let’s build something remarkable together.
              </p>
            </div>

            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="
                relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 
                rounded-2xl overflow-hidden shadow-2xl 
                border-8 border-white
                transform transition duration-500 hover:scale-[1.03]
              ">
                <Image src={assets.about_img} alt="Olawuni Israel Oluwatemilorun" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
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
