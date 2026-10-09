import React from 'react'
import { portfolioConfig } from '../data/portfolioData'
import { ExternalLink, CheckCircle2 } from 'lucide-react'
import { GithubIcon } from './SocialIcons'

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioConfig

  // Stylized preview background gradients highlighting #8B5CF6 and #22D3EE
  const getProjectPreviewTheme = (index: number) => {
    const gradients = [
      'from-[#8B5CF6]/30 via-[#171B2A] to-[#22D3EE]/20',
      'from-[#22D3EE]/25 via-[#171B2A] to-[#8B5CF6]/25',
      'from-[#7C3AED]/35 via-[#171B2A] to-[#0A0D14]',
      'from-[#171B2A] via-[#1c2235] to-[#8B5CF6]/25',
    ]
    return gradients[index % gradients.length]
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#8B5CF6]/10 border border-[#8B5CF6]/25 text-[#8B5CF6] text-xs font-semibold uppercase tracking-wider mb-3">
              Selected Projects
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Featured Work & Engineering Implementations
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Real-world web applications built with TypeScript, React, Next.js, and clean Tailwind CSS architectures.
            </p>
          </div>
          <div className="text-sm text-slate-400">
            <span>All codebases available on </span>
            <a
              href={portfolioConfig.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22D3EE] hover:underline font-medium inline-flex items-center gap-1"
            >
              <span>GitHub</span>
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Project Cards Grid with Smooth Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="glass-card project-card-interactive rounded-2xl overflow-hidden flex flex-col justify-between group"
            >
              {/* Project Preview Window Mockup */}
              <div
                className={`relative h-52 sm:h-56 bg-gradient-to-br ${getProjectPreviewTheme(
                  idx
                )} p-5 flex flex-col justify-between border-b border-slate-800/80 overflow-hidden`}
              >
                {/* Simulated Browser Bar */}
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-[#22D3EE]" />
                  </div>
                  <div className="bg-[#171B2A]/90 border border-slate-700/60 rounded-md px-3 py-1 text-[11px] font-mono text-slate-300 truncate max-w-[200px]">
                    {project.title.split('—')[0].trim().toLowerCase()}.app
                  </div>
                  {project.badge && (
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 text-purple-300">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Internal UI Mockup Graphic */}
                <div className="my-auto z-10 flex flex-col items-center justify-center text-center p-4">
                  <div className="text-2xl font-black tracking-tight text-white group-hover:scale-105 transition-transform duration-300">
                    {project.title.split('—')[0].trim()}
                  </div>
                  <span className="text-xs text-[#22D3EE] font-mono mt-1">
                    {project.category}
                  </span>
                </div>

                {/* Subtle tech preview tags in bottom of mockup */}
                <div className="flex items-center gap-2 z-10">
                  <span className="text-[11px] text-slate-400 font-mono">
                    ● TypeScript • React
                  </span>
                </div>

                {/* Decorative background grid effect */}
                <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2 mb-6">
                    {project.keyFeatures.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2 text-xs text-slate-400 leading-snug"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#22D3EE] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies and Action Links */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-md bg-[#171B2A] border border-slate-700/70 text-slate-300 font-mono group-hover:border-slate-600 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-white bg-[#8B5CF6] hover:bg-[#7C3AED] py-2.5 px-4 rounded-xl transition-all shadow-md shadow-[#8B5CF6]/25 hover:shadow-[#8B5CF6]/40 active:scale-95"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-[#171B2A] hover:bg-[#1f2438] border border-slate-700/80 hover:border-[#8B5CF6]/50 py-2.5 px-4 rounded-xl transition-all"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
