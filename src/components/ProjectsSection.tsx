import React from 'react'
import { portfolioConfig } from '../data/portfolioData'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './SocialIcons'

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioConfig

  const getProjectPreviewTheme = (index: number) => {
    const gradients = [
      'from-[#8B5CF6]/20 via-[#151927] to-[#22D3EE]/15',
      'from-[#22D3EE]/20 via-[#151927] to-[#8B5CF6]/15',
      'from-[#7C3AED]/25 via-[#151927] to-[#1e2438]',
    ]
    return gradients[index % gradients.length]
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#8B5CF6]/10 border border-[#8B5CF6]/25 text-[#8B5CF6] text-xs font-semibold uppercase tracking-wider mb-3">
              Featured Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] mb-3">
              Real-World Engineering Projects
            </h2>
            <p className="text-[#94A3B8] text-base sm:text-lg">
              Production web applications demonstrating clean component architecture, responsive UI, and optimized performance.
            </p>
          </div>
          <div className="text-sm text-[#94A3B8]">
            <span>Repositories available on </span>
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

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="glass-card project-card-interactive rounded-2xl overflow-hidden flex flex-col justify-between h-full group"
            >
              {/* Card Window Mockup Header */}
              <div
                className={`relative h-48 bg-gradient-to-br ${getProjectPreviewTheme(
                  idx
                )} p-4 flex flex-col justify-between border-b border-[rgba(148,163,184,0.14)] overflow-hidden`}
              >
                {/* Browser Controls */}
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#22D3EE]" />
                  </div>
                  <div className="bg-[#151927]/90 border border-[rgba(148,163,184,0.16)] rounded-md px-2.5 py-0.5 text-[11px] font-mono text-[#94A3B8] truncate max-w-[180px]">
                    {project.title.toLowerCase().replace(/\s+/g, '')}.app
                  </div>
                  {project.badge && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 text-purple-300">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Center Title in Mockup */}
                <div className="my-auto z-10 text-center py-2">
                  <h3 className="text-xl font-bold tracking-tight text-[#F8FAFC] group-hover:scale-105 transition-transform duration-200">
                    {project.title}
                  </h3>
                  <span className="text-xs text-[#22D3EE] font-mono mt-0.5 block">
                    {project.category}
                  </span>
                </div>

                <div className="flex items-center gap-2 z-10">
                  <span className="text-[11px] text-[#94A3B8] font-mono">
                    ● Production Live
                  </span>
                </div>

                <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
              </div>

              {/* Card Body: Problem, Solution & Decisions */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4 mb-6">
                  {/* Problem */}
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-semibold mb-1">
                      Problem Solved
                    </div>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#22D3EE] font-semibold mb-1">
                      Engineered Solution
                    </div>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  {/* Technical Decision */}
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-purple-400 font-semibold mb-1">
                      Technical Decision
                    </div>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      {project.technicalDecision}
                    </p>
                  </div>
                </div>

                {/* Technologies and Action Links */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] rounded bg-[#1e2438] border border-[rgba(148,163,184,0.12)] text-[#94A3B8] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2.5 pt-4 border-t border-[rgba(148,163,184,0.12)]">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 min-h-[40px] text-xs font-semibold text-white bg-[#8B5CF6] hover:bg-[#7C3AED] px-3 rounded-xl transition-all shadow-sm shadow-[#8B5CF6]/20 active:scale-95"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 min-h-[40px] text-xs font-medium text-[#94A3B8] hover:text-[#F8FAFC] bg-[#1e2438] hover:bg-[#252c44] border border-[rgba(148,163,184,0.16)] px-3 rounded-xl transition-all"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
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
