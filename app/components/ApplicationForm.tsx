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
  Star
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      console.log('Form data:', formData)
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    }, 1500)
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
    <section id="apply" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 bg-purple/10 text-purple px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Apply Now</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
            Join the <span className="text-purple">RemoteExpertJobs</span> Talent Network
          </h2>
          
          <p className="text-sm sm:text-base text-gray-600 mt-3">
            We are actively building a network of reliable remote experts. Share your profile, 
            skills, portfolio, availability, and preferred work type. When a matching opportunity 
            opens, our team will reach out.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="bg-soft-lavender p-2.5 sm:p-3 rounded-lg text-center border border-cool-gray">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-purple mx-auto mb-0.5" />
            <p className="text-[10px] sm:text-xs text-gray-600">Secure</p>
          </div>
          <div className="bg-soft-lavender p-2.5 sm:p-3 rounded-lg text-center border border-cool-gray">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mx-auto mb-0.5" />
            <p className="text-[10px] sm:text-xs text-gray-600">24hr Response</p>
          </div>
          <div className="bg-soft-lavender p-2.5 sm:p-3 rounded-lg text-center border border-cool-gray">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 mx-auto mb-0.5" />
            <p className="text-[10px] sm:text-xs text-gray-600">Top Experts</p>
          </div>
          <div className="bg-soft-lavender p-2.5 sm:p-3 rounded-lg text-center border border-cool-gray">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mx-auto mb-0.5" />
            <p className="text-[10px] sm:text-xs text-gray-600">Free to Apply</p>
          </div>
        </div>
        
        {/* Form */}
        <div className="bg-soft-lavender p-5 sm:p-6 md:p-8 rounded-3xl border border-cool-gray shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* Full Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  className="w-full rounded-xl border border-cool-gray pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-white focus:outline-none focus:ring-2 focus:ring-purple/20 focus:border-purple transition-all text-sm sm:text-base"
                  required
                  onChange={handleChange}
                  value={formData.fullName}
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-cool-gray pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-white focus:outline-none focus:ring-2 focus:ring-purple/20 focus:border-purple transition-all text-sm sm:text-base"
                  required
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
            </div>
            
            {/* WhatsApp & Country */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="relative">
                <Phone className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <input
                  type="text"
                  name="whatsapp"
                  placeholder="WhatsApp number"
                  className="w-full rounded-xl border border-cool-gray pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-white focus:outline-none focus:ring-2 focus:ring-purple/20 focus:border-purple transition-all text-sm sm:text-base"
                  onChange={handleChange}
                  value={formData.whatsapp}
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <input
                  type="text"
                  name="country"
                  placeholder="Country / time zone"
                  className="w-full rounded-xl border border-cool-gray pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-white focus:outline-none focus:ring-2 focus:ring-purple/20 focus:border-purple transition-all text-sm sm:text-base"
                  onChange={handleChange}
                  value={formData.country}
                />
              </div>
            </div>
            
            {/* Primary & Secondary Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="relative">
                <Code2 className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <input
                  type="text"
                  name="primarySkill"
                  placeholder="Primary skill"
                  className="w-full rounded-xl border border-cool-gray pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-white focus:outline-none focus:ring-2 focus:ring-purple/20 focus:border-purple transition-all text-sm sm:text-base"
                  required
                  onChange={handleChange}
                  value={formData.primarySkill}
                />
              </div>
              <div className="relative">
                <Briefcase className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <input
                  type="text"
                  name="secondarySkills"
                  placeholder="Secondary skills (comma separated)"
                  className="w-full rounded-xl border border-cool-gray pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-white focus:outline-none focus:ring-2 focus:ring-purple/20 focus:border-purple transition-all text-sm sm:text-base"
                  onChange={handleChange}
                  value={formData.secondarySkills}
                />
              </div>
            </div>
            
            {/* Experience & Portfolio */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <input
                  type="text"
                  name="experience"
                  placeholder="Years of experience"
                  className="w-full rounded-xl border border-cool-gray pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-white focus:outline-none focus:ring-2 focus:ring-purple/20 focus:border-purple transition-all text-sm sm:text-base"
                  onChange={handleChange}
                  value={formData.experience}
                />
              </div>
              <div className="relative">
                <Link className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <input
                  type="url"
                  name="portfolio"
                  placeholder="Portfolio link"
                  className="w-full rounded-xl border border-cool-gray pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-white focus:outline-none focus:ring-2 focus:ring-purple/20 focus:border-purple transition-all text-sm sm:text-base"
                  onChange={handleChange}
                  value={formData.portfolio}
                />
              </div>
            </div>
            
            {/* LinkedIn & Hourly Rate */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="relative">
                <input
                  type="url"
                  name="linkedin"
                  placeholder="LinkedIn profile"
                  className="w-full rounded-xl border border-cool-gray pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-white focus:outline-none focus:ring-2 focus:ring-purple/20 focus:border-purple transition-all text-sm sm:text-base"
                  onChange={handleChange}
                  value={formData.linkedin}
                />
              </div>
              <div className="relative">
                <DollarSign className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <input
                  type="text"
                  name="hourlyRate"
                  placeholder="Expected hourly rate (USD)"
                  className="w-full rounded-xl border border-cool-gray pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-white focus:outline-none focus:ring-2 focus:ring-purple/20 focus:border-purple transition-all text-sm sm:text-base"
                  onChange={handleChange}
                  value={formData.hourlyRate}
                />
              </div>
            </div>
            
            {/* Work Type & Tools */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="relative">
                <Briefcase className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <select
                  name="workType"
                  className="w-full rounded-xl border border-cool-gray pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-white focus:outline-none focus:ring-2 focus:ring-purple/20 focus:border-purple transition-all text-sm sm:text-base appearance-none"
                  onChange={handleChange}
                  value={formData.workType}
                >
                  <option value="freelance">Freelance</option>
                  <option value="part-time">Part-time</option>
                  <option value="full-time">Full-time</option>
                </select>
              </div>
              <div className="relative">
                <Wrench className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <input
                  type="text"
                  name="tools"
                  placeholder="Tools you know (e.g. GHL, Webflow)"
                  className="w-full rounded-xl border border-cool-gray pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-white focus:outline-none focus:ring-2 focus:ring-purple/20 focus:border-purple transition-all text-sm sm:text-base"
                  onChange={handleChange}
                  value={formData.tools}
                />
              </div>
            </div>
            
            {/* Intro */}
            <div className="relative">
              <FileText className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <textarea
                name="intro"
                rows={3}
                placeholder="Short intro about yourself"
                className="w-full rounded-xl border border-cool-gray pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-white focus:outline-none focus:ring-2 focus:ring-purple/20 focus:border-purple transition-all text-sm sm:text-base resize-y"
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
                className="mt-1 w-4 h-4 sm:w-5 sm:h-5 text-purple border-cool-gray rounded focus:ring-purple/20"
                onChange={handleChange}
                checked={formData.consent}
              />
              <label htmlFor="consent" className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                I agree to be contacted for relevant freelance opportunities. Your information will be kept confidential and used only for matching purposes.
              </label>
            </div>
            
            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-purple text-white font-semibold py-3 sm:py-3.5 rounded-xl transition-all duration-200 hover:bg-purple/90 hover:scale-[1.02] text-sm sm:text-base inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
              <div className="bg-green-50 border border-green-200 rounded-xl p-3 sm:p-4 text-center animate-fadeIn">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mx-auto mb-1" />
                <p className="text-sm sm:text-base font-medium text-green-700">
                  Thank you for applying! Our team will review your profile and reach out when a matching opportunity arises.
                </p>
              </div>
            )}
          </form>
        </div>

        {/* Note */}
        <p className="text-center text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6">
          🔒 Your information is secure and will only be used for matching you with relevant opportunities.
        </p>
      </div>
    </section>
  )
}