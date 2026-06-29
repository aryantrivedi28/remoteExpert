'use client'

import { useState } from 'react'

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Form submitted (demo). In production this would connect to your GHL backend.')
    console.log('Form data:', formData)
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
    <section id="apply" className="section-padding bg-white">
      <div className="container-max max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">
          Join the RemoteExpertJobs Talent Network
        </h2>
        <p className="text-center text-gray-600 mt-2">
          We are actively building a network of reliable remote experts. Share your profile, 
          skills, portfolio, availability, and preferred work type. When a matching opportunity 
          opens, our team will reach out.
        </p>
        
        <div className="bg-soft-lavender p-6 md:p-8 rounded-3xl mt-8 border border-cool-gray">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                className="rounded-xl border border-cool-gray p-3 bg-white"
                required
                onChange={handleChange}
                value={formData.fullName}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="rounded-xl border border-cool-gray p-3 bg-white"
                required
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="whatsapp"
                placeholder="WhatsApp number"
                className="rounded-xl border border-cool-gray p-3 bg-white"
                onChange={handleChange}
                value={formData.whatsapp}
              />
              <input
                type="text"
                name="country"
                placeholder="Country / time zone"
                className="rounded-xl border border-cool-gray p-3 bg-white"
                onChange={handleChange}
                value={formData.country}
              />
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="primarySkill"
                placeholder="Primary skill"
                className="rounded-xl border border-cool-gray p-3 bg-white"
                required
                onChange={handleChange}
                value={formData.primarySkill}
              />
              <input
                type="text"
                name="secondarySkills"
                placeholder="Secondary skills (comma separated)"
                className="rounded-xl border border-cool-gray p-3 bg-white"
                onChange={handleChange}
                value={formData.secondarySkills}
              />
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="experience"
                placeholder="Years of experience"
                className="rounded-xl border border-cool-gray p-3 bg-white"
                onChange={handleChange}
                value={formData.experience}
              />
              <input
                type="url"
                name="portfolio"
                placeholder="Portfolio link"
                className="rounded-xl border border-cool-gray p-3 bg-white"
                onChange={handleChange}
                value={formData.portfolio}
              />
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="url"
                name="linkedin"
                placeholder="LinkedIn profile"
                className="rounded-xl border border-cool-gray p-3 bg-white"
                onChange={handleChange}
                value={formData.linkedin}
              />
              <input
                type="text"
                name="hourlyRate"
                placeholder="Expected hourly rate (USD)"
                className="rounded-xl border border-cool-gray p-3 bg-white"
                onChange={handleChange}
                value={formData.hourlyRate}
              />
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <select
                name="workType"
                className="rounded-xl border border-cool-gray p-3 bg-white"
                onChange={handleChange}
                value={formData.workType}
              >
                <option value="freelance">Freelance</option>
                <option value="part-time">Part-time</option>
                <option value="full-time">Full-time</option>
              </select>
              <input
                type="text"
                name="tools"
                placeholder="Tools you know (e.g. GHL, Webflow)"
                className="rounded-xl border border-cool-gray p-3 bg-white"
                onChange={handleChange}
                value={formData.tools}
              />
            </div>
            
            <textarea
              name="intro"
              rows={3}
              placeholder="Short intro about yourself"
              className="rounded-xl border border-cool-gray p-3 bg-white w-full"
              onChange={handleChange}
              value={formData.intro}
            ></textarea>
            
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="consent"
                id="consent"
                required
                onChange={handleChange}
                checked={formData.consent}
              />
              <label htmlFor="consent" className="text-sm text-gray-600">
                I agree to be contacted for relevant freelance opportunities.
              </label>
            </div>
            
            <button type="submit" className="btn-primary w-full text-center py-3 text-base">
              Submit Your Profile
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}