import React from 'react'
import { portfolioConfig } from '../data/portfolioData'
import { Layers, Zap, Smartphone, Rocket, ArrowUpRight } from 'lucide-react'

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const { services } = portfolioConfig

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#8B5CF6]" />
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#22D3EE]" />
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-[#8B5CF6]" />
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-[#22D3EE]" />
      default:
        return <Zap className="w-6 h-6 text-[#8B5CF6]" />
    }
  }

  const handleHireClick = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle)
    }
    const contactElem = document.getElementById('contact')
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#8B5CF6]/10 border border-[#8B5CF6]/25 text-[#8B5CF6] text-xs font-semibold uppercase tracking-wider mb-3">
            Client Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] mb-3">
            Services Built for International Clients & Startups
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg">
            High-standard frontend engineering to ship features fast, eliminate design debt, and deliver reliable web interfaces.
          </p>
        </div>

        {/* 4 Core Services Grid with Uniform Heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {services.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#1e2438]/80 border border-[rgba(148,163,184,0.16)] flex items-center justify-center group-hover:border-[#8B5CF6]/50 transition-colors">
                    {getServiceIcon(service.icon)}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleHireClick(service.title)}
                    className="text-xs font-medium text-[#94A3B8] group-hover:text-[#22D3EE] inline-flex items-center gap-1.5 py-1.5 px-2.5 rounded-lg hover:bg-[#1e2438] transition-colors"
                  >
                    <span>Hire for this</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <h3 className="text-xl font-bold text-[#F8FAFC] mb-2.5 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[rgba(148,163,184,0.12)]">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-md bg-[#1e2438]/70 border border-[rgba(148,163,184,0.12)] text-[#94A3B8] font-mono"
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
