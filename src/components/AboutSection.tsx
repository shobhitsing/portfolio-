import React from 'react'
import { portfolioConfig } from '../data/portfolioData'
import { CheckCircle2, FileText, ArrowRight, ShieldCheck, Clock, Monitor } from 'lucide-react'

export const AboutSection: React.FC = () => {
  const { personal } = portfolioConfig

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio & Core Pitch */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#8B5CF6]/10 border border-[#8B5CF6]/25 text-[#8B5CF6] text-xs font-semibold uppercase tracking-wider">
                About Me
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#22D3EE]/10 border border-[#22D3EE]/25 text-[#22D3EE] text-xs font-semibold">
                <span>{personal.experience}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#171B2A] border border-slate-700/60 text-slate-300 text-xs font-medium">
                <span>{personal.country}</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Frontend Developer specialising in{' '}
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] bg-clip-text text-transparent">
                React.js, Next.js, TypeScript & Tailwind CSS
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {personal.fullBio}
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Whether you need to turn complex Figma designs into responsive components or build a full-scale Next.js application from scratch, I write clean, maintainable code that scales with your business.
            </p>

            {/* Quick Work Standards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#171B2A] border border-slate-800">
                <ShieldCheck className="w-5 h-5 text-[#8B5CF6] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Production Quality</h4>
                  <p className="text-[12px] text-slate-400">Strict TypeScript, zero runtime errors.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#171B2A] border border-slate-800">
                <Clock className="w-5 h-5 text-[#22D3EE] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Global Collaboration</h4>
                  <p className="text-[12px] text-slate-400">Smooth async comms across timezones.</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#8B5CF6] hover:bg-[#7C3AED] px-5 py-3 rounded-xl transition-all shadow-md shadow-[#8B5CF6]/25 active:scale-95"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white bg-[#171B2A] border border-slate-800 hover:border-[#8B5CF6]/50 px-5 py-3 rounded-xl transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>View Portfolio Code</span>
              </a>
            </div>
          </div>

          {/* Right Column: Work Philosophy Cards */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-mono text-[#8B5CF6] uppercase tracking-wider mb-2 flex items-center gap-2">
              <Monitor className="w-4 h-4 text-[#22D3EE]" />
              <span>Engineering Standards</span>
            </div>

            <div className="space-y-3.5">
              {personal.philosophyPoints.map((point) => (
                <div
                  key={point.title}
                  className="glass-card p-5 rounded-2xl transition-all duration-200 hover:translate-x-1"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#22D3EE] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">
                        {point.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
