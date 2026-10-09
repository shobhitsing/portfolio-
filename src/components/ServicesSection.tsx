import React from 'react'
import { portfolioConfig } from '../data/portfolioData'
import { Layers, Zap, Smartphone, Briefcase, ArrowUpRight } from 'lucide-react'

export const ServicesSection: React.FC = () => {
  const { services } = portfolioConfig

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Figma':
        return <Layers className="w-6 h-6 text-[#8B5CF6]" />
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#22D3EE]" />
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-[#8B5CF6]" />
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#22D3EE]" />
      default:
        return <Zap className="w-6 h-6 text-[#8B5CF6]" />
    }
  }

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#8B5CF6]/10 border border-[#8B5CF6]/25 text-[#8B5CF6] text-xs font-semibold uppercase tracking-wider mb-3">
            Core Client Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Services Built for International Clients & Startups
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High-standard engineering to ship fast, eliminate design debt, and deliver reliable web interfaces.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#171B2A] border border-slate-700/60 flex items-center justify-center group-hover:scale-110 group-hover:border-[#8B5CF6]/50 transition-all duration-300">
                    {getServiceIcon(service.icon)}
                  </div>
                  <a
                    href="#contact"
                    className="text-xs font-medium text-slate-400 group-hover:text-[#22D3EE] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Hire for this</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-md bg-[#171B2A] border border-slate-800 text-slate-400 font-mono group-hover:border-slate-700 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
