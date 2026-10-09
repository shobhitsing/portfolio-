import React from 'react'
import { portfolioConfig } from '../data/portfolioData'
import {
  ArrowUp,
  Terminal,
  Mail,
  Phone,
  MapPin,
  Clock,
  ExternalLink,
  Code2,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()
  const { personal } = portfolioConfig

  return (
    <footer className="border-t border-[rgba(148,163,184,0.16)] bg-[#0A0D14] pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Multi-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[rgba(148,163,184,0.16)]">
          {/* Column 1: Brand & Availability (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6]">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="font-bold text-[#F8FAFC] text-lg tracking-tight">
                {personal.name}
                <span className="text-[#22D3EE] font-mono text-sm ml-1">.dev</span>
              </span>
            </div>

            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-sm">
              Senior Frontend Developer with 5+ years of experience specializing in React, Next.js, TypeScript, and scalable frontend architectures.
            </p>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151927] border border-[rgba(148,163,184,0.16)] text-xs font-medium text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22D3EE]"></span>
              </span>
              <span>Available for Contract & Remote Roles</span>
            </div>

            {/* Social Icons row */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#151927] border border-[rgba(148,163,184,0.16)] hover:border-[#8B5CF6]/50 flex items-center justify-center text-[#94A3B8] hover:text-[#F8FAFC] transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#151927] border border-[rgba(148,163,184,0.16)] hover:border-[#8B5CF6]/50 flex items-center justify-center text-[#94A3B8] hover:text-[#22D3EE] transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="w-9 h-9 rounded-xl bg-[#151927] border border-[rgba(148,163,184,0.16)] hover:border-[#8B5CF6]/50 flex items-center justify-center text-[#94A3B8] hover:text-[#8B5CF6] transition-all"
                aria-label="Email Address"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Sitemap (Col 5-7) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8B5CF6]">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              <li>
                <a href="#services" className="hover:text-[#F8FAFC] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#F8FAFC] transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#F8FAFC] transition-colors">
                  Skills Matrix
                </a>
              </li>
              <li>
                <a href="#system-design" className="hover:text-[#22D3EE] transition-colors flex items-center gap-1.5">
                  <span>System Design</span>
                  <span className="text-[10px] font-mono text-[#8B5CF6] bg-[#8B5CF6]/15 px-1.5 py-0.5 rounded">
                    New
                  </span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F8FAFC] transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F8FAFC] transition-colors">
                  Contact & Hire
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Specializations (Col 8-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8B5CF6]">
              Specializations
            </h3>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              <li className="flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span>Figma to React / Next.js</span>
              </li>
              <li className="flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span>Next.js & React Web Apps</span>
              </li>
              <li className="flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span>Responsive UI Development</span>
              </li>
              <li className="flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span>Frontend Optimization & Speed</span>
              </li>
              <li className="flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span>Redux Toolkit & State Sync</span>
              </li>
              <li className="flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span>Jest & Playwright Testing</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8B5CF6]">
              Direct Contact
            </h3>
            <div className="space-y-2.5 text-sm text-slate-300">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2.5 hover:text-[#22D3EE] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#8B5CF6] shrink-0" />
                <span className="truncate">{personal.email}</span>
              </a>

              <a
                href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2.5 hover:text-[#22D3EE] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#22D3EE] shrink-0" />
                <span>{personal.phone}</span>
              </a>

              <div className="flex items-center gap-2.5 text-[#94A3B8]">
                <MapPin className="w-4 h-4 text-[#8B5CF6] shrink-0" />
                <span>{personal.location}</span>
              </div>

              <div className="flex items-center gap-2.5 text-[#94A3B8] text-xs">
                <Clock className="w-3.5 h-3.5 text-[#22D3EE] shrink-0" />
                <span>Typical response: &lt; 24 hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>© {currentYear} {personal.name}. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Built with React 19, TypeScript & Tailwind CSS</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/shobhitsing/portfolio-"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F8FAFC] transition-colors inline-flex items-center gap-1 font-mono text-[11px]"
            >
              <span>Repository</span>
              <ExternalLink className="w-3 h-3 text-[#22D3EE]" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#151927] border border-[rgba(148,163,184,0.16)] hover:border-[#8B5CF6]/50 hover:text-white transition-all"
              title="Back to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
