'use client'
import Link from 'next/link'
import { useState } from 'react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200/50">
      <div className="container-responsive py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 font-bold text-xl text-brand-700 hover:text-brand-800 transition-colors">
            <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white text-lg font-bold shadow-lg">
              T
            </div>
            <span className="hidden sm:block">Task Tackler</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/browse" className="text-gray-700 hover:text-brand-600 font-medium transition-colors relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-brand-600 font-medium transition-colors relative group">
              Solutions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-brand-600 font-medium transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-brand-600 font-medium transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 transition-all group-hover:w-full"></span>
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/about" className="px-4 py-2 text-brand-600 hover:text-brand-700 font-medium transition-colors">
              Portfolio
            </Link>
            <Link href="/contact" className="px-6 py-2.5 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <Link href="/browse" className="text-gray-700 hover:text-brand-600 font-medium py-2 transition-colors">
                Services
              </Link>
              <Link href="/how-it-works" className="text-gray-700 hover:text-brand-600 font-medium py-2 transition-colors">
                Solutions
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-brand-600 font-medium py-2 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-brand-600 font-medium py-2 transition-colors">
                Contact
              </Link>
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                <Link href="/about" className="text-center px-4 py-2 text-brand-600 hover:text-brand-700 font-medium transition-colors">
                  Portfolio
                </Link>
                <Link href="/contact" className="text-center px-6 py-3 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors">
                  Get Quote
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
