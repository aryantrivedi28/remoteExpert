'use client'

import { useState } from 'react'
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  Code2, 
  Calendar, 
  Link, 
  DollarSign, 
  Wrench,
  FileText,
  CheckCircle,
  ArrowRight,
  Upload,
  Send,
  Sparkles,
  Shield,
  Clock,
  Star,
  Globe,
  Zap
} from 'lucide-react'

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    country: '',
    primarySkill: '',
    secondarySkills: '',
    experience: '',
    portfolio: '',
    linkedin: '',
    hourlyRate: '',
    workType: 'freelance',
    tools: '',
    intro: '',
    consent: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit application')
      }

      setIsSuccess(true)
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        whatsapp: '',
        country: '',
        primarySkill: '',
        secondarySkills: '',
        experience: '',
        portfolio: '',
        linkedin: '',
        hourlyRate: '',
        workType: 'freelance',
        tools: '',
        intro: '',
        consent: false
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)

    } catch (error) {
      console.error('Error submitting form:', error)
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement
    const value = target.type === 'checkbox' ? target.checked : target.value
    setFormData({
      ...formData,
      [target.name]: value
    })
  }

  return (
    <section id="apply" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#F4F1FF] text-[#624DE3] px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-[#E7E8F2]">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Apply Now</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#00234B]">
            Join the <span className="text-[#624DE3]">RemoteExpertJobs</span> Talent Network
          </h2>
          
          <p className="text-sm sm:text-base text-[#00234B]/70 mt-3 leading-relaxed">
            We are actively building a network of reliable remote experts. Share your profile, 
            skills, portfolio, availability, and preferred work type. When a matching opportunity 
            opens, our team will reach out.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="bg-[#F4F1FF] p-2.5 sm:p-3 rounded-xl text-center border border-[#E7E8F2] hover:border-[#624DE3] transition-all duration-300">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#624DE3] mx-auto mb-0.5" />
            <p className="text-[10px] sm:text-xs text-[#00234B]/60 font-medium">Secure</p>
          </div>
          <div className="bg-[#F4F1FF] p-2.5 sm:p-3 rounded-xl text-center border border-[#E7E8F2] hover:border-[#624DE3] transition-all duration-300">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#624DE3] mx-auto mb-0.5" />
            <p className="text-[10px] sm:text-xs text-[#00234B]/60 font-medium">24hr Response</p>
          </div>
          <div className="bg-[#F4F1FF] p-2.5 sm:p-3 rounded-xl text-center border border-[#E7E8F2] hover:border-[#624DE3] transition-all duration-300">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#624DE3] mx-auto mb-0.5" />
            <p className="text-[10px] sm:text-xs text-[#00234B]/60 font-medium">Top Experts</p>
          </div>
          <div className="bg-[#F4F1FF] p-2.5 sm:p-3 rounded-xl text-center border border-[#E7E8F2] hover:border-[#624DE3] transition-all duration-300">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#75E8F0] mx-auto mb-0.5" />
            <p className="text-[10px] sm:text-xs text-[#00234B]/60 font-medium">Free to Apply</p>
          </div>
        </div>
        
        {/* Form */}
        <div className="bg-[#F4F1FF] p-5 sm:p-6 md:p-8 rounded-3xl border border-[#E7E8F2] shadow-2xl shadow-[#624DE3]/5">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* Full Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-[#624DE3]" />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  className="w-full rounded-xl border border-[#E7E8F2] pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#624DE3]/20 focus:border-[#624DE3] transition-all text-sm sm:text-base text-[#00234B] placeholder:text-[#00234B]/40"
                  required
                  onChange={handleChange}
                  value={formData.fullName}
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-[#624DE3]" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-[#E7E8F2] pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#624DE3]/20 focus:border-[#624DE3] transition-all text-sm sm:text-base text-[#00234B] placeholder:text-[#00234B]/40"
                  required
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
            </div>
            
            {/* WhatsApp & Country */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="relative">
                <Phone className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-[#624DE3]" />
                <input
                  type="text"
                  name="whatsapp"
                  placeholder="WhatsApp number"
                  className="w-full rounded-xl border border-[#E7E8F2] pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#624DE3]/20 focus:border-[#624DE3] transition-all text-sm sm:text-base text-[#00234B] placeholder:text-[#00234B]/40"
                  onChange={handleChange}
                  value={formData.whatsapp}
                />
              </div>
              <div className="relative">
                <Globe className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-[#624DE3]" />
                <input
                  type="text"
                  name="country"
                  placeholder="Country / time zone"
                  className="w-full rounded-xl border border-[#E7E8F2] pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#624DE3]/20 focus:border-[#624DE3] transition-all text-sm sm:text-base text-[#00234B] placeholder:text-[#00234B]/40"
                  onChange={handleChange}
                  value={formData.country}
                />
              </div>
            </div>
            
            {/* Primary & Secondary Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="relative">
                <Code2 className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-[#624DE3]" />
                <input
                  type="text"
                  name="primarySkill"
                  placeholder="Primary skill"
                  className="w-full rounded-xl border border-[#E7E8F2] pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#624DE3]/20 focus:border-[#624DE3] transition-all text-sm sm:text-base text-[#00234B] placeholder:text-[#00234B]/40"
                  required
                  onChange={handleChange}
                  value={formData.primarySkill}
                />
              </div>
              <div className="relative">
                <Briefcase className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-[#624DE3]" />
                <input
                  type="text"
                  name="secondarySkills"
                  placeholder="Secondary skills (comma separated)"
                  className="w-full rounded-xl border border-[#E7E8F2] pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#624DE3]/20 focus:border-[#624DE3] transition-all text-sm sm:text-base text-[#00234B] placeholder:text-[#00234B]/40"
                  onChange={handleChange}
                  value={formData.secondarySkills}
                />
              </div>
            </div>
            
            {/* Experience & Portfolio */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-[#624DE3]" />
                <input
                  type="text"
                  name="experience"
                  placeholder="Years of experience"
                  className="w-full rounded-xl border border-[#E7E8F2] pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#624DE3]/20 focus:border-[#624DE3] transition-all text-sm sm:text-base text-[#00234B] placeholder:text-[#00234B]/40"
                  onChange={handleChange}
                  value={formData.experience}
                />
              </div>
              <div className="relative">
                <Link className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-[#624DE3]" />
                <input
                  type="url"
                  name="portfolio"
                  placeholder="Portfolio link"
                  className="w-full rounded-xl border border-[#E7E8F2] pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#624DE3]/20 focus:border-[#624DE3] transition-all text-sm sm:text-base text-[#00234B] placeholder:text-[#00234B]/40"
                  onChange={handleChange}
                  value={formData.portfolio}
                />
              </div>
            </div>
            
            {/* LinkedIn & Hourly Rate */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-[#624DE3]" />
                <input
                  type="url"
                  name="linkedin"
                  placeholder="LinkedIn profile"
                  className="w-full rounded-xl border border-[#E7E8F2] pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#624DE3]/20 focus:border-[#624DE3] transition-all text-sm sm:text-base text-[#00234B] placeholder:text-[#00234B]/40"
                  onChange={handleChange}
                  value={formData.linkedin}
                />
              </div>
              <div className="relative">
                <DollarSign className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-[#624DE3]" />
                <input
                  type="text"
                  name="hourlyRate"
                  placeholder="Expected hourly rate (USD)"
                  className="w-full rounded-xl border border-[#E7E8F2] pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#624DE3]/20 focus:border-[#624DE3] transition-all text-sm sm:text-base text-[#00234B] placeholder:text-[#00234B]/40"
                  onChange={handleChange}
                  value={formData.hourlyRate}
                />
              </div>
            </div>
            
            {/* Work Type & Tools */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="relative">
                <Briefcase className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-[#624DE3]" />
                <select
                  name="workType"
                  className="w-full rounded-xl border border-[#E7E8F2] pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#624DE3]/20 focus:border-[#624DE3] transition-all text-sm sm:text-base text-[#00234B] appearance-none"
                  onChange={handleChange}
                  value={formData.workType}
                >
                  <option value="freelance">Freelance</option>
                  <option value="part-time">Part-time</option>
                  <option value="full-time">Full-time</option>
                </select>
              </div>
              <div className="relative">
                <Wrench className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-[#624DE3]" />
                <input
                  type="text"
                  name="tools"
                  placeholder="Tools you know (e.g. GHL, Webflow)"
                  className="w-full rounded-xl border border-[#E7E8F2] pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#624DE3]/20 focus:border-[#624DE3] transition-all text-sm sm:text-base text-[#00234B] placeholder:text-[#00234B]/40"
                  onChange={handleChange}
                  value={formData.tools}
                />
              </div>
            </div>
            
            {/* Intro */}
            <div className="relative">
              <FileText className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-[#624DE3]" />
              <textarea
                name="intro"
                rows={3}
                placeholder="Short intro about yourself"
                className="w-full rounded-xl border border-[#E7E8F2] pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#624DE3]/20 focus:border-[#624DE3] transition-all text-sm sm:text-base text-[#00234B] placeholder:text-[#00234B]/40 resize-y"
                onChange={handleChange}
                value={formData.intro}
              ></textarea>
            </div>
            
            {/* Consent */}
            <div className="flex items-start gap-2.5">
              <input
                type="checkbox"
                name="consent"
                id="consent"
                required
                className="mt-1 w-4 h-4 sm:w-5 sm:h-5 text-[#624DE3] border-[#E7E8F2] rounded focus:ring-[#624DE3]/20 focus:ring-2"
                onChange={handleChange}
                checked={formData.consent}
              />
              <label htmlFor="consent" className="text-xs sm:text-sm text-[#00234B]/70 leading-relaxed">
                I agree to be contacted for relevant freelance opportunities. Your information will be kept confidential and used only for matching purposes.
              </label>
            </div>
            
            {/* Error Message */}
            {errorMessage && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-center">
                <p className="text-sm text-red-600">{errorMessage}</p>
              </div>
            )}
            
            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-[#624DE3] text-white font-semibold py-3 sm:py-3.5 rounded-xl transition-all duration-300 hover:bg-[#624DE3]/90 hover:shadow-xl hover:shadow-[#624DE3]/25 hover:scale-[1.02] text-sm sm:text-base inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Submitting...
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Submitted Successfully!
                </>
              ) : (
                <>
                  Submit Your Profile
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                </>
              )}
            </button>

            {/* Success Message */}
            {isSuccess && (
              <div className="bg-[#75E8F0]/10 border border-[#75E8F0]/30 rounded-xl p-3 sm:p-4 text-center animate-fadeIn">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#75E8F0] mx-auto mb-1" />
                <p className="text-sm sm:text-base font-medium text-[#00234B]">
                  Thank you for applying! Our team will review your profile and reach out when a matching opportunity arises.
                </p>
              </div>
            )}
          </form>
        </div>

        {/* Note */}
        <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
          <Zap className="w-4 h-4 text-[#624DE3]" />
          <p className="text-xs sm:text-sm text-[#00234B]/60">
            <span className="font-medium text-[#00234B]">Join 500+ experts</span> already in our network
          </p>
        </div>
      </div>
    </section>
  )
}