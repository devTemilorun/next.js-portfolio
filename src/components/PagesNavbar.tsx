import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { assets } from '@/src/Assets/assets'

const PagesNavbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false)
  
      useEffect(()=>{
          if(showMobileMenu){
              document.body.style.overflow = 'hidden'
          }else{
             document.body.style.overflow = 'auto' 
          }
          return ()=>{
             document.body.style.overflow = 'auto'  
          }
      },[showMobileMenu])


  return (
    <div className='relative top-0 left-0 w-full z-10'>
        <nav className='bg-gray-900 container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32'>
            <Image src={assets.logo} width={200} height={10}  alt='logo'/>
            <ul className='hidden md:flex gap-7 text-white'>
              <Link  className='cursor-pointer hover:text-gray-400' href='/'>Home</Link>
              <Link  className='cursor-pointer hover:text-gray-400' href='/About'>About</Link>
              <Link  className='cursor-pointer hover:text-gray-400' href='/Project'>Project</Link>
              <Link  className='cursor-pointer hover:text-gray-400' href='/Contact'>Contact</Link>
          </ul>
          <Image src={assets.menu_icon} onClick={()=> setShowMobileMenu(true)} className='md:hidden cursor-pointer w-7'  alt=''  />
        </nav>
        {/* mobile menu  */}
        <div className={`bg-white transition-all md:hidden ${showMobileMenu ?  'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden`}>
          <div className='flex justify-end p-6 cursor-pointer'>
              <Image src={assets.cross_icon} onClick={()=> setShowMobileMenu(false)} className='w-6'  alt=''/>
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
              <Link onClick={()=> setShowMobileMenu(false)}  className='px-4 py-2 rounded inline-block hover:text-gray-400' href='/'>Home</Link>
              <Link onClick={()=> setShowMobileMenu(false)}  className='px-4 py-2 rounded inline-block hover:text-gray-400' href='/About'>About</Link>
              <Link onClick={()=> setShowMobileMenu(false)}  className='px-4 py-2 rounded inline-block hover:text-gray-400' href='/Project'>Project</Link>
              <Link onClick={()=> setShowMobileMenu(false)}  className='px-4 py-2 rounded inline-block hover:text-gray-400' href='/Contact'>Contact</Link>
          </ul>
        </div>
      </div>
  )
}

export default PagesNavbar
