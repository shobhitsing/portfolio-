import React from 'react'
import { portfolioConfig } from '../data/portfolioData'
import { ArrowUp, Terminal, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800/80 bg-[#0A0D14] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6]">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white text-base">
                {portfolioConfig.personal.name}
              </span>
              <span className="text-slate-500 text-xs ml-2">
                • {portfolioConfig.personal.title}
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 text-slate-400">
            <a
              href={portfolioConfig.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#22D3EE] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioConfig.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#22D3EE] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioConfig.personal.email}`}
              className="hover:text-[#22D3EE] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span>© {currentYear} All rights reserved.</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#171B2A] border border-slate-800 hover:border-[#8B5CF6]/50 hover:text-white transition-all"
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
