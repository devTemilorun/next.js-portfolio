'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { assets } from '@/src/Assets/assets'
import { FaBars,FaTimes } from 'react-icons/fa'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/About' },
  { label: 'Project', href: '/Project' },
  { label: 'Contact', href: '/Contact' },
]

const PagesNavbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50) 
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showMobileMenu])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg mb-32 text-black'
          : 'bg-gray-900'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-8 md:px-20 lg:px-32">
        <Link href="/">
          <Image src={assets.logo} width={180} height={40} alt="logo" className="w-auto h-10" />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8 text-white">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`relative py-2 px-1 transition-colors duration-300 ${
                  pathname === item.href
                    ? 'text-indigo-400 font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-indigo-400 after:rounded-full'
                    : 'hover:text-indigo-300'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        
        <FaBars
          onClick={() => setShowMobileMenu(true)}
          className="md:hidden cursor-pointer w-8 h-8 text-white hover:text-gray-300 transition-colors duration-200"
        />
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          showMobileMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setShowMobileMenu(false)}
      >
        <div
          className={`absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-gray-900 transform transition-transform duration-300 ${
            showMobileMenu ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end p-6">

            <FaTimes
              onClick={() => setShowMobileMenu(false)}
              className="md:hidden cursor-pointer w-8 h-8 text-white hover:text-gray-300 transition-colors duration-200"
            />
          </div>

          <ul className="flex flex-col items-center gap-6 mt-10 px-6 text-xl font-medium text-gray-200">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setShowMobileMenu(false)}
                  className={`block py-3 px-8 rounded-lg transition-all ${
                    pathname === item.href
                      ? 'bg-indigo-600/80 text-white'
                      : 'hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  )
}

export default PagesNavbar