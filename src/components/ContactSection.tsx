import React, { useState } from 'react'
import { portfolioConfig } from '../data/portfolioData'
import {
  Mail,
  Send,
  Copy,
  Check,
  Clock,
  Sparkles,
  ArrowUpRight,
  Phone,
  MapPin,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'

export const ContactSection: React.FC = () => {
  const { personal } = portfolioConfig
  const [copied, setCopied] = useState(false)
  const [phoneCopied, setPhoneCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Figma to React / Next.js',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'fallback'>('idle')

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone)
    setPhoneCopied(true)
    setTimeout(() => setPhoneCopied(false), 2500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Construct direct mailto fallback link with prefilled subject and body
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} - from ${formData.name}`)
    const body = encodeURIComponent(
      `Hello ${personal.name},\n\nName: ${formData.name}\nEmail: ${formData.email}\nService Requested: ${formData.service}\n\nProject Details:\n${formData.message}\n`
    )
    const mailtoUrl = `mailto:${personal.email}?subject=${subject}&body=${body}`

    // Trigger user's mail client directly
    window.location.href = mailtoUrl

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
    }, 600)
  }

  return (
    <section id="contact" className="py-20 relative">
      {/* Background purple glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-[#8B5CF6]/12 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[250px] bg-[#22D3EE]/8 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Call to Action Banner */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-[#8B5CF6]/30 mb-16 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/25 text-[#8B5CF6] text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for your next release</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's Work Together
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-8">
            Have a project in mind, need Figma designs converted, or looking for a dedicated frontend engineer? Let's connect.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-[#8B5CF6]/25 active:scale-95"
            >
              {copied ? <Check className="w-4 h-4 text-[#22D3EE]" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Email Copied!' : `Copy: ${personal.email}`}</span>
            </button>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#171B2A] hover:bg-[#1f2438] text-slate-200 border border-slate-700/80 hover:border-[#8B5CF6]/40 font-medium text-sm px-6 py-3.5 rounded-xl transition-all"
            >
              <LinkedinIcon className="w-4 h-4 text-[#22D3EE]" />
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Contact Form and Direct Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          {/* Left Column: Direct Reachouts */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Direct Channels</h3>
              <p className="text-slate-400 text-sm">
                Feel free to reach out directly through any of these platforms.
              </p>
            </div>

            <div className="space-y-3.5">
              {/* Email Card */}
              <div className="glass-card p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Email Address</div>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-sm font-semibold text-white hover:text-[#22D3EE] transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  title="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-[#22D3EE]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone / WhatsApp Card */}
              <div className="glass-card p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Call / WhatsApp</div>
                    <a
                      href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-semibold text-white hover:text-[#22D3EE] transition-colors"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  title="Copy phone number"
                >
                  {phoneCopied ? <Check className="w-4 h-4 text-[#22D3EE]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Card */}
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-xl flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6]">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Professional Network</div>
                    <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                      LinkedIn Profile
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              </a>

              {/* GitHub Card */}
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-xl flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#171B2A] border border-slate-700 flex items-center justify-center text-slate-200 group-hover:border-[#8B5CF6]/50">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Open Source & Code</div>
                    <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                      GitHub Repositories
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              </a>

              {/* Location Card */}
              <div className="glass-card p-4 rounded-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Location</div>
                  <div className="text-sm font-semibold text-white">
                    {personal.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Badge */}
            <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#171B2A] border border-slate-800 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-[#22D3EE] shrink-0" />
              <span>Response time: Typically replies within 24 hours</span>
            </div>
          </div>

          {/* Right Column: Functional Message Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-1">
                  Send an Inquiry
                </h3>
                <p className="text-xs text-slate-400">
                  Submitting directly prepares and launches your email client with your project specs pre-filled.
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-purple-950/40 border border-[#8B5CF6]/40 text-[#22D3EE] text-xs sm:text-sm flex items-start gap-2.5">
                  <Check className="w-5 h-5 shrink-0 text-[#22D3EE] mt-0.5" />
                  <div>
                    <strong className="block font-semibold">Email client launched!</strong>
                    <span>Your message details have been pre-filled. If your email client didn't open automatically, feel free to write directly to {personal.email}.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Taylor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#171B2A] border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#171B2A] border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#171B2A] border border-slate-700/80 text-sm text-white focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all"
                  >
                    <option value="Figma to React / Next.js">Figma to React / Next.js (Pixel-Perfect)</option>
                    <option value="Next.js & React Web Apps">Next.js & React Web App Development</option>
                    <option value="Responsive & Accessible UI">Responsive & Mobile UI Overhaul</option>
                    <option value="Frontend Outsourcing & Contracts">Frontend Outsourcing & Staff Augmentation</option>
                    <option value="General Frontend Inquiry">General Frontend Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Project Details / Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project, timeline, and design files..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#171B2A] border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#8B5CF6] hover:bg-[#7C3AED] disabled:opacity-50 py-3 rounded-xl transition-all shadow-md shadow-[#8B5CF6]/25 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Preparing Email...' : 'Send Inquiry Directly'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
