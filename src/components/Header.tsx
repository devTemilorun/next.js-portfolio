import React from 'react'
import Navbar from './Navbar'
import Link from 'next/link'


const Header = () => {
  return (
    <div
     id='Header'
     style={{backgroundImage: "url('/header_img.png')"}}  
     className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
    >
      <Navbar/>
      <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-3xl sm:text-3xl md:text-[32px] inline-block max-w-6xl font-semibold pt-20'>
            Full Stack Web Developer | Crafting Seamless Front-End Experience & Robust Backend System | Turning Ideas into Scalable, User-Focused Web Solution 
        </h2>
        <div className='space-x-6 mt-16 flex mx-auto justify-center items-center'>
            <Link href='/Project' className='border border-white px-8 py-3 rounded'>Projects</Link>
            <Link href='/Contact' className='bg-blue-500 px-8 py-3 rounded'>Contact Us</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
