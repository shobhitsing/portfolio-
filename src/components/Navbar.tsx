import React, { useState, useEffect } from 'react'
import { portfolioConfig } from '../data/portfolioData'
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'System Design', href: '#system-design' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0D14]/90 backdrop-blur-md border-b border-[rgba(148,163,184,0.16)] shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 font-bold text-lg sm:text-xl tracking-tight text-[#F8FAFC] group"
        >
          <div className="w-9 h-9 rounded-xl bg-[#151927] border border-[rgba(148,163,184,0.16)] flex items-center justify-center text-[#8B5CF6] group-hover:border-[#8B5CF6]/50 transition-all duration-200">
            <Terminal className="w-5 h-5" />
          </div>
          <span>
            {portfolioConfig.personal.name}
            <span className="text-[#22D3EE] font-mono text-sm ml-1">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#151927]/90 border border-[rgba(148,163,184,0.16)] rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#94A3B8] hover:text-[#F8FAFC] px-3.5 py-1.5 rounded-full hover:bg-[#1e2438] transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-[#8B5CF6] hover:bg-[#7C3AED] px-4 py-2 rounded-xl transition-all duration-200 shadow-md shadow-[#8B5CF6]/20 active:scale-95"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-[#151927] border border-[rgba(148,163,184,0.16)] text-[#94A3B8] hover:text-[#F8FAFC]"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#151927]/98 border-b border-[rgba(148,163,184,0.16)] backdrop-blur-xl px-4 pt-3 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block min-h-[44px] flex items-center text-base font-medium text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1e2438] px-3.5 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 min-h-[44px] w-full text-center text-sm font-semibold text-white bg-[#8B5CF6] hover:bg-[#7C3AED] rounded-xl transition-all"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
