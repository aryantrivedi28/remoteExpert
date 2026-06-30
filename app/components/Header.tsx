'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Menu, 
  X, 
  ChevronDown,
  Briefcase,
  Layers,
  HelpCircle,
  ArrowRight,
  UserPlus,
  Home,
  Sparkles
} from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  const navLinks = [
    { href: '#openings', label: 'Openings', icon: Briefcase },
    { href: '#categories', label: 'Categories', icon: Layers },
    { href: '#how-it-works', label: 'How it works', icon: Sparkles },
    { href: '#faq', label: 'FAQ', icon: HelpCircle },
  ]

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-cool-gray' 
          : 'bg-white/90 backdrop-blur-sm border-b border-cool-gray'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image 
              src="/remoteExpertLogo.png" 
              alt="Remote Expert Jobs logo" 
              width={36} 
              height={36} 
              className="h-8 sm:h-9 w-auto group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-lg sm:text-xl font-bold text-navy tracking-tight">
              RemoteExpert<span className="text-purple">Jobs</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1.5 text-gray-600 hover:text-purple transition-colors duration-200 group"
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  {link.label}
                </a>
              )
            })}
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="#apply" 
              className="bg-purple text-white font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:bg-purple/90 hover:scale-105 text-sm inline-flex items-center gap-2"
            >
              Join Talent Network
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-purple/10 transition-colors focus:outline-none focus:ring-2 focus:ring-purple/20"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-navy" />
            ) : (
              <Menu className="w-6 h-6 text-navy" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-x-0 top-16 sm:top-20 bg-white/95 backdrop-blur-md border-b border-cool-gray transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-[calc(100vh-4rem)] opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}
      >
        <nav className="px-4 py-6 space-y-1">
          {navLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-purple/5 transition-colors duration-200 text-gray-600 hover:text-purple"
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{link.label}</span>
              </a>
            )
          })}
          
          {/* Mobile CTA */}
          <div className="pt-4 mt-4 border-t border-cool-gray">
            <a 
              href="#apply" 
              onClick={handleLinkClick}
              className="w-full bg-purple text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:bg-purple/90 inline-flex items-center justify-center gap-2"
            >
              <UserPlus className="w-5 h-5" />
              Join Talent Network
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}