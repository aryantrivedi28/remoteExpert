'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Users,
  Code2,
  Palette,
  Settings,
  PenTool,
  Briefcase,
  MapPin,
  DollarSign,
  Star,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Shield,
  Award,
  TrendingUp,
  Globe,
  Mail,
  Phone,
  Search,
  Filter,
  X,
  ChevronDown,
  UserPlus,
  Building2,
  Zap,
  Heart
} from 'lucide-react'

const talents = [
  {
    id: 1,
    name: 'Aarohi Mehta',
    role: 'GoHighLevel Developer',
    location: 'India',
    experience: '5 years',
    rate: '$50-80/hr',
    rating: 4.9,
    projects: 47,
    skills: ['GHL', 'CRM', 'Automation', 'Web Development'],
    availability: 'Available',
    avatar: 'AM',
    featured: true,
    verified: true,
    description: 'Expert in building custom funnels, workflows, and automation systems inside GoHighLevel.',
    portfolio: 'https://portfolio.com/aarohi',
    linkedin: 'https://linkedin.com/in/aarohi'
  },
  {
    id: 2,
    name: 'Rahul Sharma',
    role: 'Funnel & Landing Page Designer',
    location: 'India',
    experience: '4 years',
    rate: '$40-70/hr',
    rating: 4.8,
    projects: 38,
    skills: ['Design', 'Funnels', 'UI/UX', 'Webflow'],
    availability: 'Available',
    avatar: 'RS',
    featured: false,
    verified: true,
    description: 'Creative designer specializing in high-converting landing pages and sales funnels.',
    portfolio: 'https://portfolio.com/rahul',
    linkedin: 'https://linkedin.com/in/rahul'
  },
  {
    id: 3,
    name: 'Priya Patel',
    role: 'CRM & Automation Specialist',
    location: 'India',
    experience: '6 years',
    rate: '$45-75/hr',
    rating: 4.9,
    projects: 52,
    skills: ['CRM', 'Automation', 'Workflows', 'Zapier'],
    availability: 'Available',
    avatar: 'PP',
    featured: true,
    verified: true,
    description: 'Expert in setting up complex CRM workflows, lead routing, and email/SMS automation.',
    portfolio: 'https://portfolio.com/priya',
    linkedin: 'https://linkedin.com/in/priya'
  },
  {
    id: 4,
    name: 'Vikram Singh',
    role: 'SEO Content Writer',
    location: 'India',
    experience: '3 years',
    rate: '$30-50/hr',
    rating: 4.7,
    projects: 29,
    skills: ['SEO', 'Content Writing', 'Blogging', 'Copywriting'],
    availability: 'Available',
    avatar: 'VS',
    featured: false,
    verified: true,
    description: 'SEO-optimized content writer with expertise in agency websites and service pages.',
    portfolio: 'https://portfolio.com/vikram',
    linkedin: 'https://linkedin.com/in/vikram'
  },
  {
    id: 5,
    name: 'Ananya Reddy',
    role: 'Remote Project Manager',
    location: 'India',
    experience: '7 years',
    rate: '$40-65/hr',
    rating: 4.9,
    projects: 61,
    skills: ['Project Management', 'Agile', 'Client Communication', 'Delivery'],
    availability: 'Available',
    avatar: 'AR',
    featured: false,
    verified: true,
    description: 'Experienced project manager handling client communication, task tracking, and delivery.',
    portfolio: 'https://portfolio.com/ananya',
    linkedin: 'https://linkedin.com/in/ananya'
  },
  {
    id: 6,
    name: 'Suresh Kumar',
    role: 'Digital Marketing Specialist',
    location: 'India',
    experience: '4 years',
    rate: '$35-60/hr',
    rating: 4.6,
    projects: 33,
    skills: ['Marketing', 'Social Media', 'Content', 'Strategy'],
    availability: 'Available',
    avatar: 'SK',
    featured: false,
    verified: true,
    description: 'Digital marketing expert with experience in social media management and content strategy.',
    portfolio: 'https://portfolio.com/suresh',
    linkedin: 'https://linkedin.com/in/suresh'
  }
]

const stats = [
  { value: '500+', label: 'Vetted Experts', icon: Users },
  { value: '200+', label: 'Projects Completed', icon: CheckCircle },
  { value: '4.8★', label: 'Average Rating', icon: Star },
  { value: '95%', label: 'Success Rate', icon: TrendingUp }
]

const categories = [
  'All Talent',
  'Developers',
  'Designers',
  'Marketers',
  'Automation Experts',
  'Project Managers',
  'Content Writers'
]

export default function TalentNetworkPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Talent')
  const [showFilters, setShowFilters] = useState(false)

  const filteredTalents = talents.filter(talent => {
    const matchesSearch = talent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          talent.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          talent.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'All Talent' || 
                           (selectedCategory === 'Developers' && talent.role.includes('Developer')) ||
                           (selectedCategory === 'Designers' && talent.role.includes('Designer')) ||
                           (selectedCategory === 'Marketers' && talent.role.includes('Marketing')) ||
                           (selectedCategory === 'Automation Experts' && talent.role.includes('Automation')) ||
                           (selectedCategory === 'Project Managers' && talent.role.includes('Project Manager')) ||
                           (selectedCategory === 'Content Writers' && talent.role.includes('Content Writer'))
    
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#F4F1FF] to-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white text-[#624DE3] px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-[#E7E8F2]">
            <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Our Talent Network</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#00234B]">
            Meet Our <span className="text-[#624DE3]">Vetted Remote Experts</span>
          </h1>
          
          <p className="text-sm sm:text-base text-[#00234B]/70 mt-4 max-w-2xl mx-auto leading-relaxed">
            Connect with top-tier remote professionals who are ready to work on your projects. 
            All experts are vetted and verified by our team.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-xl text-center border border-[#E7E8F2] hover:border-[#624DE3] transition-all duration-300 hover:shadow-lg hover:shadow-[#624DE3]/10"
                >
                  <Icon className="w-5 h-5 text-[#624DE3] mx-auto mb-1" />
                  <p className="text-xl font-extrabold text-[#00234B]">{stat.value}</p>
                  <p className="text-xs text-[#00234B]/60">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 bg-white border-b border-[#E7E8F2] sticky top-16 z-40 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#00234B]/40" />
              <input
                type="text"
                placeholder="Search by name, role, or skills..."
                className="w-full rounded-xl border border-[#E7E8F2] pl-9 pr-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-[#624DE3]/20 focus:border-[#624DE3] transition-all text-sm text-[#00234B] placeholder:text-[#00234B]/40"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter - Desktop */}
            <div className="hidden md:flex items-center gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-[#624DE3] text-white'
                      : 'bg-[#F4F1FF] text-[#00234B]/70 hover:bg-[#624DE3]/10 hover:text-[#624DE3]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#E7E8F2] hover:border-[#624DE3] transition-all duration-300"
            >
              <Filter className="w-4 h-4 text-[#624DE3]" />
              <span className="text-sm font-medium text-[#00234B]">Filter</span>
              <ChevronDown className={`w-4 h-4 text-[#00234B]/40 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Mobile Category Filter */}
          {showFilters && (
            <div className="md:hidden mt-4 p-4 bg-[#F4F1FF] rounded-xl border border-[#E7E8F2]">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category)
                      setShowFilters(false)
                    }}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-[#624DE3] text-white'
                        : 'bg-white text-[#00234B]/70 hover:bg-[#624DE3]/10 hover:text-[#624DE3]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Talent Grid */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-[#00234B]/60">
              Showing <span className="font-semibold text-[#00234B]">{filteredTalents.length}</span> experts
            </p>
          </div>

          {filteredTalents.length === 0 ? (
            <div className="text-center py-16">
              <Users className="w-16 h-16 text-[#00234B]/20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#00234B]">No experts found</h3>
              <p className="text-sm text-[#00234B]/60 mt-1">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTalents.map((talent) => (
                <div 
                  key={talent.id}
                  className="group bg-white p-6 rounded-2xl border border-[#E7E8F2] hover:border-[#624DE3] transition-all duration-300 hover:shadow-2xl hover:shadow-[#624DE3]/10 hover:-translate-y-1 relative"
                >
                  {talent.featured && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#624DE3] to-[#624DE3]/80 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg shadow-[#624DE3]/30">
                      Featured
                    </div>
                  )}

                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#F4F1FF] flex items-center justify-center text-[#624DE3] font-extrabold text-lg flex-shrink-0">
                      {talent.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <p className="font-bold text-[#00234B] text-base truncate">{talent.name}</p>
                        {talent.verified && (
                          <CheckCircle className="w-4 h-4 text-[#75E8F0] flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-sm text-[#624DE3] font-medium truncate">{talent.role}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <div className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-semibold text-[#00234B]">{talent.rating}</span>
                        </div>
                        <span className="text-xs text-[#00234B]/40">•</span>
                        <span className="text-xs text-[#00234B]/60">{talent.projects} projects</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#00234B]/70 mt-3 line-clamp-2 leading-relaxed">
                    {talent.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {talent.skills.slice(0, 3).map((skill, idx) => (
                      <span 
                        key={idx}
                        className="text-[10px] bg-[#F4F1FF] text-[#624DE3] px-2 py-0.5 rounded-full font-medium border border-[#E7E8F2]"
                      >
                        {skill}
                      </span>
                    ))}
                    {talent.skills.length > 3 && (
                      <span className="text-[10px] text-[#00234B]/40">+{talent.skills.length - 3}</span>
                    )}
                  </div>

                  {/* Details */}
                  <div className="mt-3 pt-3 border-t border-[#E7E8F2] grid grid-cols-3 gap-2">
                    <div className="flex items-center gap-1 text-xs text-[#00234B]/60">
                      <MapPin className="w-3 h-3 text-[#624DE3]" />
                      {talent.location}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[#00234B]/60">
                      <DollarSign className="w-3 h-3 text-[#624DE3]" />
                      {talent.rate}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[#00234B]/60">
                      <Clock className="w-3 h-3 text-[#624DE3]" />
                      {talent.experience}
                    </div>
                  </div>

                  {/* Availability Badge */}
                  <div className="mt-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span className="text-xs font-medium text-green-700">{talent.availability}</span>
                  </div>

                  {/* CTA Buttons */}
                  <div className="mt-4 pt-4 border-t border-[#E7E8F2] flex flex-col sm:flex-row gap-2">
                    <a 
                      href="#apply" 
                      className="flex-1 bg-[#624DE3] text-white text-xs font-semibold py-2 rounded-xl transition-all duration-300 hover:bg-[#624DE3]/90 hover:shadow-lg hover:shadow-[#624DE3]/25 text-center"
                    >
                      Contact Expert
                    </a>
                    <button 
                      className="flex-1 bg-white text-[#624DE3] text-xs font-semibold py-2 rounded-xl transition-all duration-300 hover:bg-[#F4F1FF] border border-[#E7E8F2] hover:border-[#624DE3]"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Load More */}
          {filteredTalents.length > 0 && (
            <div className="text-center mt-10">
              <button className="bg-white text-[#624DE3] font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:bg-[#F4F1FF] border-2 border-[#E7E8F2] hover:border-[#624DE3] text-sm inline-flex items-center gap-2">
                Load More Experts
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 bg-[#F4F1FF]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white text-[#624DE3] px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-[#E7E8F2]">
            <UserPlus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Join Our Network</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#00234B]">
            Are You a <span className="text-[#624DE3]">Skilled Expert?</span>
          </h2>
          
          <p className="text-sm sm:text-base text-[#00234B]/70 mt-3 max-w-2xl mx-auto leading-relaxed">
            Join our talent network and get matched with top companies looking for remote experts like you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
            <a 
              href="#apply" 
              className="group bg-[#624DE3] text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:bg-[#624DE3]/90 hover:shadow-xl hover:shadow-[#624DE3]/25 hover:scale-[1.02] text-sm inline-flex items-center gap-2"
            >
              Apply Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#openings" 
              className="group bg-white text-[#624DE3] font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:bg-[#624DE3] hover:text-white hover:shadow-xl hover:shadow-[#624DE3]/15 text-sm inline-flex items-center gap-2 border-2 border-[#E7E8F2] hover:border-[#624DE3]"
            >
              <Briefcase className="w-4 h-4" />
              View Openings
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}