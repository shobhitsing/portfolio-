import React, { useState } from 'react'
import { portfolioConfig } from '../data/portfolioData'
import {
  ArrowRight,
  Copy,
  Check,
  Mail,
  Sparkles,
  Code2,
  Briefcase,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import shobhitImg from '../assets/shobhit.jpg'

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false)
  const { personal } = portfolioConfig

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Left-Aligned Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status availability badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151927] border border-[rgba(148,163,184,0.16)] text-xs sm:text-sm font-medium text-[#94A3B8]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22D3EE]"></span>
              </span>
              <span>{personal.statusBadge}</span>
            </div>

            {/* Greeting & Headline */}
            <div className="space-y-3">
              <div className="inline-block px-3 py-1 rounded-lg bg-[#8B5CF6]/10 border border-[#8B5CF6]/25 text-[#8B5CF6] font-mono text-xs sm:text-sm font-semibold">
                👋 Hi, I'm {personal.name} • {personal.experience}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.12]">
                I Build High-Performance{' '}
                <span className="bg-gradient-to-r from-[#8B5CF6] via-purple-300 to-[#22D3EE] bg-clip-text text-transparent">
                  Web Experiences.
                </span>
              </h1>
            </div>

            {/* Supporting Pitch */}
            <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
              Senior Frontend Developer specializing in <strong>React.js</strong>, <strong>Next.js</strong>, and <strong>TypeScript</strong>. I build clean, responsive interfaces optimized for Core Web Vitals, maintainable architecture, and fast cross-browser performance for international teams and startups.
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {[
                'React.js',
                'Next.js',
                'TypeScript',
                'Tailwind CSS',
                'Redux Toolkit',
                'Responsive Design',
                'Core Web Vitals',
              ].map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1 text-xs font-mono font-medium rounded-md bg-[#151927] border border-[rgba(148,163,184,0.16)] text-[#22D3EE] hover:border-[#8B5CF6]/50 transition-colors"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] text-sm sm:text-base font-semibold text-white bg-[#8B5CF6] hover:bg-[#7C3AED] px-6 py-3 rounded-xl transition-all duration-200 shadow-md shadow-[#8B5CF6]/25 active:scale-95 group"
              >
                <Sparkles className="w-4 h-4 text-purple-200 group-hover:rotate-12 transition-transform" />
                <span>Let's Work Together</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] text-sm sm:text-base font-medium text-[#F8FAFC] bg-[#151927] hover:bg-[#1e2438] border border-[rgba(148,163,184,0.16)] hover:border-[#8B5CF6]/50 px-6 py-3 rounded-xl transition-all duration-200"
              >
                <span>View My Work</span>
              </a>

              {/* Quick 1-click Copy Email */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 min-h-[44px] text-xs sm:text-sm font-medium text-[#94A3B8] hover:text-[#F8FAFC] bg-[#151927] hover:bg-[#1e2438] border border-[rgba(148,163,184,0.16)] px-4 py-3 rounded-xl transition-all"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#22D3EE]" />
                    <span className="text-[#22D3EE] font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#94A3B8]" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Channels */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-sm text-[#94A3B8]">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#F8FAFC] transition-colors min-h-[36px]"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#F8FAFC] transition-colors min-h-[36px]"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-1.5 hover:text-[#22D3EE] transition-colors min-h-[36px]"
              >
                <Mail className="w-4 h-4" />
                <span>{personal.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Portrait Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Card Container */}
              <div className="relative p-2.5 rounded-3xl bg-[#151927] border border-[rgba(148,163,184,0.16)] shadow-xl shadow-black/40">
                <img
                  src={shobhitImg}
                  alt={`${personal.name} - ${personal.title}`}
                  width={380}
                  height={475}
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Floating Badge: Top Right */}
                <div className="absolute -top-3.5 -right-3 sm:-right-4 bg-[#151927] px-3.5 py-2 rounded-xl flex items-center gap-2 shadow-lg border border-[rgba(148,163,184,0.16)]">
                  <div className="w-6 h-6 rounded-lg bg-[#8B5CF6]/15 flex items-center justify-center text-[#8B5CF6]">
                    <Code2 className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-[#94A3B8] font-medium">Experience</div>
                    <div className="text-xs font-bold text-[#F8FAFC]">5+ Years</div>
                  </div>
                </div>

                {/* Floating Badge: Bottom Left */}
                <div className="absolute -bottom-3.5 -left-3 sm:-left-4 bg-[#151927] px-3.5 py-2 rounded-xl flex items-center gap-2.5 shadow-lg border border-[rgba(148,163,184,0.16)]">
                  <div className="w-6 h-6 rounded-lg bg-[#22D3EE]/15 flex items-center justify-center text-[#22D3EE]">
                    <Briefcase className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-[#94A3B8] font-medium">Availability</div>
                    <div className="text-xs font-bold text-[#F8FAFC] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Contract & Full-Time</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
