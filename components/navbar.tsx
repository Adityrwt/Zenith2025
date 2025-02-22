"use client"

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { DownloadButton } from "@/components/download-button"

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "EVENTS", href: "/events" },
  { name: "SPONSORS", href: "/sponsors" },
  { name: "REGISTER", href: "/register" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className={`fixed top-4 right-4 z-50 p-2 rounded-full bg text-white shadow-lg transition-all duration-300 ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
        aria-label="Open Menu"
      >
        <Menu size={24} />
      </button>

      {/* Fullscreen Navigation Menu with Top-Right Origin Animation */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-pink-200/90 via-blue-200/90 to-gray-200/90 backdrop-blur-sm 
        flex flex-col items-center justify-center transform transition-all duration-500 ease-in-out z-40 ${
          isOpen 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-0 pointer-events-none'
        }`}
        style={{
          transformOrigin: 'top right',
          transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 p-2 rounded-full bg hover:bg transition-colors duration-200"
          aria-label="Close Menu"
        >
          <X size={24} />
        </button>

        {/* Logo Area */}
        <div className="absolute top-4 sm:top-8 left-4 sm:left-8">
          <Link href="/" className="relative block">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HqsSd8ODyl1cpMzjdbPprhLRQeFXNI.png"
              alt="Zenith Logo"
              width={100}
              height={35}
              className="h-6 sm:h-8 w-auto transition-all duration-300 hover:opacity-90"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="w-full max-w-md px-4 sm:px-0">
          <ul className="space-y-6 sm:space-y-8 text-center">
            {navItems.map((item, index) => (
              <li 
                key={item.name} 
                className="pl-0"
                style={{ 
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateY(0)' : 'translateY(-30px)',
                  transition: 'opacity 400ms, transform 400ms'
                }}
              >
                <Link
                  href={item.href}
                  className="inline-block text-stone-800 text-xl sm:text-2xl md:text-3xl font-['Bangers'] tracking-wider transition-all duration-300 
                    hover:text-pink-400 hover:scale-110 hover:-rotate-3
                    focus:outline-none focus:text-pink-400 
                    animate-float"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logo Area - Updated for mobile */}
        <div className="absolute top-4 sm:top-8 left-4 sm:left-8">
          <Link href="/" className="relative block">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HqsSd8ODyl1cpMzjdbPprhLRQeFXNI.png"
              alt="Zenith Logo"
              width={100}
              height={35}
              className="h-6 sm:h-8 w-auto transition-all duration-300 hover:opacity-90"
            />
          </Link>
        </div>

        {/* Download Button - Updated for mobile */}
        <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-xs px-4">
          <div className="flex justify-center">
            <DownloadButton />
          </div>
        </div>

        {/* Footer - Updated for mobile */}
        <div className="absolute bottom-4 sm:bottom-8 w-full text-center text-xs sm:text-sm text-stone-600">
          <p>© 2025 Zenith E-Summit</p>
        </div>
      </div>
    </div>
  )
}