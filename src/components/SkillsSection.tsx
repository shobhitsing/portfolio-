import React from 'react'
import { portfolioConfig } from '../data/portfolioData'
import { Code2, Layout, Database, Zap, Check } from 'lucide-react'

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioConfig

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#8B5CF6]" />
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#22D3EE]" />
      case 'Database':
        return <Database className="w-5 h-5 text-[#8B5CF6]" />
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#22D3EE]" />
      default:
        return <Code2 className="w-5 h-5 text-[#8B5CF6]" />
    }
  }

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#8B5CF6]/10 border border-[#8B5CF6]/25 text-[#8B5CF6] text-xs font-semibold uppercase tracking-wider mb-3">
            Technical Proficiency
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] mb-3">
            Core Skills & Production Toolchain
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg">
            Focused exclusively on technologies I utilize daily to engineer high-standard web applications.
          </p>
        </div>

        {/* 4 Group Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {skills.map((category) => (
            <div
              key={category.title}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between h-full group"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#1e2438] border border-[rgba(148,163,184,0.16)] flex items-center justify-center group-hover:border-[#8B5CF6]/50 transition-colors">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <h3 className="text-base font-bold text-[#F8FAFC] group-hover:text-purple-300 transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-[#1e2438]/70 border border-[rgba(148,163,184,0.1)] flex items-center justify-between hover:border-[rgba(148,163,184,0.2)] transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#22D3EE] shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-[#F8FAFC]">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[#22D3EE] bg-[#22D3EE]/10 px-2 py-0.5 rounded border border-[#22D3EE]/25">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[rgba(148,163,184,0.12)] text-[11px] text-[#94A3B8] font-mono flex items-center justify-between">
                <span>Production Verified</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]/80"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
