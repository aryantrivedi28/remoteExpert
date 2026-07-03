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
  Sparkles,
  Zap
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
    { href: '#how-it-works', label: 'How it works', icon: Sparkles },
    { href: '#why-join', label: 'Why Join', icon: Zap },
    { href: '#faq', label: 'FAQ', icon: HelpCircle },
  ]

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm'
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
            <span className="text-lg sm:text-xl font-extrabold text-[#00234B] tracking-tight">
              RemoteExpert<span className="text-[#624DE3]">Jobs</span>
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
                  className="flex items-center gap-1.5 text-[#00234B]/70 hover:text-[#624DE3] transition-all duration-200 group relative"
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#624DE3] group-hover:w-full transition-all duration-300"></span>
                </a>
              )
            })}
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="/talent-network" 
              className="group bg-[#624DE3] text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 hover:bg-[#624DE3]/90 hover:shadow-xl hover:shadow-[#624DE3]/25 hover:scale-[1.02] text-sm inline-flex items-center gap-2"
            >
              Join Talent Network
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-[#F4F1FF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#624DE3]/20"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#00234B]" />
            ) : (
              <Menu className="w-6 h-6 text-[#00234B]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-x-0 top-16 sm:top-20 bg-white/95 backdrop-blur-md border-b border-[#E7E8F2] transition-all duration-300 ease-in-out ${
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
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#F4F1FF] transition-all duration-200 text-[#00234B]/70 hover:text-[#624DE3] group"
              >
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{link.label}</span>
              </a>
            )
          })}
          
          {/* Mobile CTA */}
          <div className="pt-4 mt-4 border-t border-[#E7E8F2] space-y-2">
            <a 
              href="#apply" 
              onClick={handleLinkClick}
              className="w-full bg-[#624DE3] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:bg-[#624DE3]/90 hover:shadow-lg hover:shadow-[#624DE3]/25 inline-flex items-center justify-center gap-2"
            >
              <UserPlus className="w-5 h-5" />
              Join Talent Network
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#openings" 
              onClick={handleLinkClick}
              className="w-full bg-white text-[#624DE3] font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:bg-[#F4F1FF] inline-flex items-center justify-center gap-2 border-2 border-[#E7E8F2] hover:border-[#624DE3]"
            >
              <Briefcase className="w-5 h-5" />
              View Openings
            </a>
          </div>

          {/* Mobile Trust Badge */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex items-center gap-1.5 text-xs text-[#00234B]/60">
              <Sparkles className="w-3.5 h-3.5 text-[#624DE3]" />
              <span>500+ experts joined</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}