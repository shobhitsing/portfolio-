import React from 'react'
import { portfolioConfig } from '../data/portfolioData'
import { Code2, Layout, Database, Wrench, Check, ShieldCheck, Sparkles } from 'lucide-react'

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
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#22D3EE]" />
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#8B5CF6]" />
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-[#22D3EE]" />
      default:
        return <Code2 className="w-5 h-5 text-[#8B5CF6]" />
    }
  }

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#8B5CF6]/10 border border-[#8B5CF6]/25 text-[#8B5CF6] text-xs font-semibold uppercase tracking-wider mb-3">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Skills & Production Tools
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Specialized in modern JavaScript/TypeScript toolchains, component ecosystems, and responsive CSS architectures.
          </p>
        </div>

        {/* 6 Category Matrix in 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category) => (
            <div
              key={category.title}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#171B2A] border border-slate-700/60 flex items-center justify-center group-hover:border-[#8B5CF6]/50 group-hover:scale-105 transition-all">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-[#171B2A]/90 border border-slate-800 flex items-center justify-between hover:border-slate-700/80 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#22D3EE] shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#22D3EE] bg-[#22D3EE]/10 px-2 py-0.5 rounded border border-[#22D3EE]/25">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-800/60 text-[11px] text-slate-500 font-mono flex items-center justify-between">
                <span>Verified in production code</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]/60"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
