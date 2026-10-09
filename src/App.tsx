import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ServicesSection } from './components/ServicesSection'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0D14] text-slate-100 flex flex-col font-sans selection:bg-[#8B5CF6] selection:text-white relative">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none -z-20" />

      {/* Top Header & Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  )
}

export default App
