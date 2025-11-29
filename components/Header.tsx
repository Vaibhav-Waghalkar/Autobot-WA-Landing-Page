'use client'

import { useState, useEffect } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[var(--background)]/80 backdrop-blur-lg border-b border-[var(--border)]'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center transition-transform group-hover:scale-110">
              <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <span className="text-lg lg:text-xl font-semibold tracking-tight text-[var(--text-primary)]">
              AutoBot WA
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('features')}
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              FAQ
            </button>
            <ThemeToggle />
            <button
              onClick={() => scrollToSection('cta')}
              className="px-4 py-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-lg text-sm font-medium transition-all hover:scale-105 active:scale-95"
            >
              Get Started Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className="p-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300',
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="py-4 space-y-4">
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors py-2"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors py-2"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors py-2"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors py-2"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('cta')}
              className="w-full px-4 py-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-lg text-sm font-medium transition-all active:scale-95"
            >
              Get Started Free
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

