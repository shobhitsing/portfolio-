import React from 'react'
import { portfolioConfig } from '../data/portfolioData'
import { Layers, Database, Zap, ShieldCheck, Check, ArrowRight, GitFork } from 'lucide-react'

export const SystemDesignSection: React.FC = () => {
  const { systemDesign } = portfolioConfig

  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#8B5CF6]" />
      case 'Database':
        return <Database className="w-6 h-6 text-[#22D3EE]" />
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#8B5CF6]" />
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#22D3EE]" />
      default:
        return <Layers className="w-6 h-6 text-[#8B5CF6]" />
    }
  }

  return (
    <section id="system-design" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#8B5CF6]/10 border border-[#8B5CF6]/25 text-[#8B5CF6] text-xs font-semibold uppercase tracking-wider mb-3">
            Frontend Architecture & Scale
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] mb-3">
            Frontend System Design & Architectural Patterns
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg">
            Engineering robust web applications designed for maintainability, high performance, and enterprise standards.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 items-stretch">
          {systemDesign.map((topic) => (
            <div
              key={topic.id}
              className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#1e2438] border border-[rgba(148,163,184,0.16)] flex items-center justify-center group-hover:border-[#8B5CF6]/50 transition-colors">
                    {getTopicIcon(topic.icon)}
                  </div>
                  <span className="text-xs font-mono text-[#22D3EE] bg-[#22D3EE]/10 border border-[#22D3EE]/25 px-2.5 py-1 rounded-full">
                    {topic.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#F8FAFC] mb-2.5 group-hover:text-purple-300 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                  {topic.summary}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                    Architectural Patterns:
                  </div>
                  {topic.principles.map((principle, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-start gap-2.5 text-xs text-[#94A3B8] leading-snug"
                    >
                      <Check className="w-3.5 h-3.5 text-[#22D3EE] shrink-0 mt-0.5" />
                      <span>{principle}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[rgba(148,163,184,0.12)]">
                {topic.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 text-xs rounded-md bg-[#1e2438] border border-[rgba(148,163,184,0.12)] text-[#94A3B8] font-mono"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Data Flow Banner */}
        <div className="glass-card p-6 sm:p-7 rounded-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-md">
              <div className="flex items-center gap-2 text-xs font-mono text-[#8B5CF6] mb-1">
                <GitFork className="w-4 h-4 text-[#22D3EE]" />
                <span>Production Data Flow</span>
              </div>
              <h4 className="text-base font-bold text-[#F8FAFC] mb-1">
                Predictable, Reactive Frontend Pipeline
              </h4>
              <p className="text-xs text-[#94A3B8]">
                Decoupled UI triggers from business mutations prevent race conditions and ensure instantaneous feedback.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono">
              <div className="px-3 py-2 rounded-xl bg-[#1e2438] border border-[rgba(148,163,184,0.16)] text-[#F8FAFC] font-medium">
                User UI Event
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <div className="px-3 py-2 rounded-xl bg-[#1e2438] border border-[#8B5CF6]/40 text-purple-300 font-medium">
                State Engine / RTK
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#22D3EE] shrink-0" />
              <div className="px-3 py-2 rounded-xl bg-[#1e2438] border border-[#22D3EE]/40 text-[#22D3EE] font-medium">
                Optimistic Cache
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <div className="px-3 py-2 rounded-xl bg-[#1e2438] border border-[rgba(148,163,184,0.16)] text-[#94A3B8] font-medium">
                Resilient API Gateway
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
