import React, { useState, useEffect } from 'react'
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
  AlertCircle,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'

interface ContactSectionProps {
  selectedService?: string
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedService }) => {
  const { personal } = portfolioConfig
  const [copied, setCopied] = useState(false)
  const [phoneCopied, setPhoneCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Figma to React / Next.js',
    message: '',
  })
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }))
    }
  }, [selectedService])

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

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Please share a brief project summary (min 10 characters).'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Construct direct mailto trigger with formatted subject and body
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} — from ${formData.name}`)
    const body = encodeURIComponent(
      `Hello ${personal.name},\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nProject Overview:\n${formData.message}\n`
    )
    const mailtoUrl = `mailto:${personal.email}?subject=${subject}&body=${body}`

    // Trigger user's mail client directly
    window.location.href = mailtoUrl

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
    }, 500)
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Call to Action Banner */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl mb-14 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/25 text-[#8B5CF6] text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>International Client Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight mb-4">
            Let's Work Together
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg max-w-xl mx-auto mb-8">
            Looking for a dedicated React.js / Next.js developer to convert designs, build production features, or scale your web app? Let's discuss your project.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 min-h-[44px] bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-md shadow-[#8B5CF6]/25 active:scale-95"
            >
              {copied ? <Check className="w-4 h-4 text-[#22D3EE]" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Email Copied!' : `Copy: ${personal.email}`}</span>
            </button>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 min-h-[44px] bg-[#151927] hover:bg-[#1e2438] text-[#F8FAFC] border border-[rgba(148,163,184,0.16)] hover:border-[#8B5CF6]/50 font-medium text-sm px-6 py-3 rounded-xl transition-all"
            >
              <LinkedinIcon className="w-4 h-4 text-[#22D3EE]" />
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Contact Form and Direct Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-1.5">Direct Channels</h3>
              <p className="text-[#94A3B8] text-sm">
                Fastest response via direct email or LinkedIn message.
              </p>
            </div>

            <div className="space-y-3">
              {/* Email Card */}
              <div className="glass-card p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#94A3B8]">Email Address</div>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-sm font-semibold text-[#F8FAFC] hover:text-[#22D3EE] transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="min-h-[40px] min-w-[40px] flex items-center justify-center text-[#94A3B8] hover:text-[#F8FAFC] rounded-lg hover:bg-[#1e2438] transition-colors"
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
                    <div className="text-xs text-[#94A3B8]">Call / WhatsApp</div>
                    <a
                      href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-semibold text-[#F8FAFC] hover:text-[#22D3EE] transition-colors"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="min-h-[40px] min-w-[40px] flex items-center justify-center text-[#94A3B8] hover:text-[#F8FAFC] rounded-lg hover:bg-[#1e2438] transition-colors"
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
                    <div className="text-xs text-[#94A3B8]">Professional Network</div>
                    <div className="text-sm font-semibold text-[#F8FAFC] group-hover:text-purple-300 transition-colors">
                      LinkedIn Profile
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#F8FAFC] transition-colors" />
              </a>

              {/* GitHub Card */}
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-xl flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1e2438] border border-[rgba(148,163,184,0.16)] flex items-center justify-center text-slate-200 group-hover:border-[#8B5CF6]/50">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#94A3B8]">Code Repositories</div>
                    <div className="text-sm font-semibold text-[#F8FAFC] group-hover:text-purple-300 transition-colors">
                      GitHub Profile
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#F8FAFC] transition-colors" />
              </a>

              {/* Location Card */}
              <div className="glass-card p-4 rounded-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#94A3B8]">Location</div>
                  <div className="text-sm font-semibold text-[#F8FAFC]">
                    {personal.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Badge */}
            <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#151927] border border-[rgba(148,163,184,0.16)] text-xs text-[#94A3B8]">
              <Clock className="w-4 h-4 text-[#22D3EE] shrink-0" />
              <span>Response time: Typically replies within 24 hours</span>
            </div>
          </div>

          {/* Right Column: Validated Message Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-[#F8FAFC] mb-1">
                  Send an Inquiry
                </h3>
                <p className="text-xs text-[#94A3B8]">
                  Submitting directly generates an email in your mail client with your requirements pre-filled.
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-purple-950/40 border border-[#8B5CF6]/40 text-[#22D3EE] text-xs sm:text-sm flex items-start gap-2.5">
                  <Check className="w-5 h-5 shrink-0 text-[#22D3EE] mt-0.5" />
                  <div>
                    <strong className="block font-semibold">Email client launched!</strong>
                    <span>Your inquiry has been formatted. If your email client didn't open automatically, write directly to {personal.email}.</span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs sm:text-sm flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
                  <div>
                    <strong className="block font-semibold">Please check required fields</strong>
                    <span>Fill in your name, a valid email address, and project summary.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#F8FAFC] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Alex Taylor"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value })
                        if (errors.name) setErrors({ ...errors, name: undefined })
                      }}
                      className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-[#1e2438] border ${
                        errors.name ? 'border-rose-500' : 'border-[rgba(148,163,184,0.16)]'
                      } text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8B5CF6] transition-all`}
                    />
                    {errors.name && <span className="text-[11px] text-rose-400 mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#F8FAFC] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value })
                        if (errors.email) setErrors({ ...errors, email: undefined })
                      }}
                      className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-[#1e2438] border ${
                        errors.email ? 'border-rose-500' : 'border-[rgba(148,163,184,0.16)]'
                      } text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8B5CF6] transition-all`}
                    />
                    {errors.email && <span className="text-[11px] text-rose-400 mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#F8FAFC] mb-1.5">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-[#1e2438] border border-[rgba(148,163,184,0.16)] text-sm text-white focus:outline-none focus:border-[#8B5CF6] transition-all"
                  >
                    <option value="Figma to React / Next.js">Figma to React / Next.js</option>
                    <option value="Next.js and React Web Applications">Next.js and React Web Applications</option>
                    <option value="Responsive UI Development">Responsive UI Development</option>
                    <option value="Frontend Optimization and Performance">Frontend Optimization and Performance</option>
                    <option value="General Frontend Inquiry">General Frontend Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#F8FAFC] mb-1.5">
                    Project Details / Requirements *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project, timeline, and design files..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value })
                      if (errors.message) setErrors({ ...errors, message: undefined })
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#1e2438] border ${
                      errors.message ? 'border-rose-500' : 'border-[rgba(148,163,184,0.16)]'
                    } text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#8B5CF6] transition-all resize-none`}
                  />
                  {errors.message && <span className="text-[11px] text-rose-400 mt-1 block">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#8B5CF6] hover:bg-[#7C3AED] disabled:opacity-50 py-3 rounded-xl transition-all shadow-md shadow-[#8B5CF6]/20 active:scale-95"
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
