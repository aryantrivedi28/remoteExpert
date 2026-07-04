'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Briefcase,
  MapPin,
  DollarSign,
  Clock,
  Calendar,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Users,
  Building2,
  Globe,
  Code2,
  Palette,
  Settings,
  PenTool,
  User,
  Search,
  Filter,
  X,
  ChevronDown,
  Heart,
  Share2,
  Bookmark,
  Eye,
  Award,
  Zap,
  Star,
  TrendingUp,
  Loader2,
  AlertCircle
} from 'lucide-react'

// Type for form data from Google Sheet
interface FormData {
  title: string
  category: string
  url: string
  status: string
  createdDate?: string
  description?: string
  company?: string
  location?: string
  salary?: string
  type?: string
  experience?: string
  tags?: string
}

// Map categories to icons and colors
const categoryMap: Record<string, { icon: any; color: string; bgColor: string }> = {
  'Developer': { icon: Code2, color: 'text-[#624DE3]', bgColor: 'bg-[#F4F1FF]' },
  'Designer': { icon: Palette, color: 'text-[#624DE3]', bgColor: 'bg-[#F4F1FF]' },
  'Marketing': { icon: TrendingUp, color: 'text-[#624DE3]', bgColor: 'bg-[#F4F1FF]' },
  'Operations': { icon: Settings, color: 'text-[#624DE3]', bgColor: 'bg-[#F4F1FF]' },
  'Content': { icon: PenTool, color: 'text-[#624DE3]', bgColor: 'bg-[#F4F1FF]' },
  'Management': { icon: Users, color: 'text-[#624DE3]', bgColor: 'bg-[#F4F1FF]' },
  'default': { icon: Briefcase, color: 'text-[#624DE3]', bgColor: 'bg-[#F4F1FF]' }
}

export default function OpeningsPage() {
  const [forms, setForms] = useState<FormData[]>([])
  const [filteredForms, setFilteredForms] = useState<FormData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [selectedStatus, setSelectedStatus] = useState('Active')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedForm, setSelectedForm] = useState<FormData | null>(null)

  // Fetch forms from API
  useEffect(() => {
    const fetchForms = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch('/api/forms', {
          cache: 'no-store'
        })
        
        if (!response.ok) {
          throw new Error(`Failed to fetch forms: ${response.status}`)
        }
        
        const data = await response.json()
        
        // Ensure data is an array
        const formsArray = Array.isArray(data) ? data : []
        setForms(formsArray)
        setFilteredForms(formsArray)
      } catch (err) {
        console.error('Error fetching forms:', err)
        setError(err instanceof Error ? err.message : 'Failed to load openings')
        setForms([])
        setFilteredForms([])
      } finally {
        setLoading(false)
      }
    }

    fetchForms()
  }, [])

  // Filter forms based on search, category, and status
  useEffect(() => {
    let filtered = forms

    // Filter by status
    if (selectedStatus !== 'All') {
      filtered = filtered.filter(form => 
        form.status?.toLowerCase() === selectedStatus.toLowerCase()
      )
    }

    // Filter by category
    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter(form => 
        form.category?.toLowerCase() === selectedCategory.toLowerCase()
      )
    }

    // Filter by search term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(form =>
        form.title?.toLowerCase().includes(term) ||
        form.category?.toLowerCase().includes(term) ||
        form.description?.toLowerCase().includes(term) ||
        form.tags?.toLowerCase().includes(term)
      )
    }

    setFilteredForms(filtered)
  }, [searchTerm, selectedCategory, selectedStatus, forms])

  // Get unique categories for filter
  const categories = ['All Categories', ...new Set(forms.map(form => form.category).filter(Boolean))]

  // Get unique statuses for filter
  const statuses = ['All', ...new Set(forms.map(form => form.status).filter(Boolean))]

  // Get icon for category
  const getCategoryIcon = (category: string) => {
    return categoryMap[category || 'default'] || categoryMap['default']
  }

  // Format date
  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Recently'
    try {
      const date = new Date(dateString)
      const now = new Date()
      const diffTime = Math.abs(now.getTime() - date.getTime())
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      
      if (diffDays === 0) return 'Today'
      if (diffDays === 1) return 'Yesterday'
      if (diffDays < 7) return `${diffDays} days ago`
      if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
      if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
      return `${Math.floor(diffDays / 365)} years ago`
    } catch {
      return 'Recently'
    }
  }

  // Parse tags from string to array
  const parseTags = (tagsString?: string) => {
    if (!tagsString) return []
    return tagsString.split(',').map(tag => tag.trim()).filter(Boolean)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-[#624DE3] animate-spin mx-auto mb-4" />
          <p className="text-[#00234B]/60">Loading openings...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-[#00234B] mb-2">Unable to load openings</h3>
          <p className="text-[#00234B]/60 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-[#624DE3] text-white font-semibold px-6 py-2 rounded-xl hover:bg-[#624DE3]/90 transition-all duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#F4F1FF] to-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white text-[#624DE3] px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-[#E7E8F2]">
            <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Current Openings</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#00234B]">
            Find Your Next <span className="text-[#624DE3]">Remote Opportunity</span>
          </h1>
          
          <p className="text-sm sm:text-base text-[#00234B]/70 mt-4 max-w-2xl mx-auto leading-relaxed">
            Explore our curated list of remote positions and find the perfect opportunity that matches your skills and experience.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 max-w-3xl mx-auto">
            <div className="bg-white p-4 rounded-xl text-center border border-[#E7E8F2] hover:border-[#624DE3] transition-all duration-300 hover:shadow-lg hover:shadow-[#624DE3]/10">
              <Briefcase className="w-5 h-5 text-[#624DE3] mx-auto mb-1" />
              <p className="text-xl font-extrabold text-[#00234B]">{forms.length}+</p>
              <p className="text-xs text-[#00234B]/60">Open Positions</p>
            </div>
            <div className="bg-white p-4 rounded-xl text-center border border-[#E7E8F2] hover:border-[#624DE3] transition-all duration-300 hover:shadow-lg hover:shadow-[#624DE3]/10">
              <Building2 className="w-5 h-5 text-[#624DE3] mx-auto mb-1" />
              <p className="text-xl font-extrabold text-[#00234B]">
                {new Set(forms.map(f => f.category)).size}
              </p>
              <p className="text-xs text-[#00234B]/60">Categories</p>
            </div>
            <div className="bg-white p-4 rounded-xl text-center border border-[#E7E8F2] hover:border-[#624DE3] transition-all duration-300 hover:shadow-lg hover:shadow-[#624DE3]/10">
              <Globe className="w-5 h-5 text-[#624DE3] mx-auto mb-1" />
              <p className="text-xl font-extrabold text-[#00234B]">Remote</p>
              <p className="text-xs text-[#00234B]/60">Work from Anywhere</p>
            </div>
            <div className="bg-white p-4 rounded-xl text-center border border-[#E7E8F2] hover:border-[#624DE3] transition-all duration-300 hover:shadow-lg hover:shadow-[#624DE3]/10">
              <Clock className="w-5 h-5 text-[#624DE3] mx-auto mb-1" />
              <p className="text-xl font-extrabold text-[#00234B]">24hr</p>
              <p className="text-xs text-[#00234B]/60">Quick Response</p>
            </div>
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
                placeholder="Search by title, category, or skills..."
                className="w-full rounded-xl border border-[#E7E8F2] pl-9 pr-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-[#624DE3]/20 focus:border-[#624DE3] transition-all text-sm text-[#00234B] placeholder:text-[#00234B]/40"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter - Desktop */}
            <div className="hidden md:flex items-center gap-2">
              <select
                className="rounded-xl border border-[#E7E8F2] px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-[#624DE3]/20 focus:border-[#624DE3] transition-all text-sm text-[#00234B]"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Status Filter - Desktop */}
            <div className="hidden md:flex items-center gap-2">
              <select
                className="rounded-xl border border-[#E7E8F2] px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-[#624DE3]/20 focus:border-[#624DE3] transition-all text-sm text-[#00234B]"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#E7E8F2] hover:border-[#624DE3] transition-all duration-300"
            >
              <Filter className="w-4 h-4 text-[#624DE3]" />
              <span className="text-sm font-medium text-[#00234B]">Filters</span>
              <ChevronDown className={`w-4 h-4 text-[#00234B]/40 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="md:hidden mt-4 p-4 bg-[#F4F1FF] rounded-xl border border-[#E7E8F2] space-y-3">
              <div>
                <label className="text-xs font-medium text-[#00234B] mb-1 block">Category</label>
                <select
                  className="w-full rounded-xl border border-[#E7E8F2] px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#624DE3]/20 focus:border-[#624DE3] transition-all text-sm text-[#00234B]"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-[#00234B] mb-1 block">Status</label>
                <select
                  className="w-full rounded-xl border border-[#E7E8F2] px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#624DE3]/20 focus:border-[#624DE3] transition-all text-sm text-[#00234B]"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  {statuses.map((status) => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-[#00234B]/60">
              Showing <span className="font-semibold text-[#00234B]">{filteredForms.length}</span> positions
            </p>
          </div>

          {filteredForms.length === 0 ? (
            <div className="text-center py-16">
              <Briefcase className="w-16 h-16 text-[#00234B]/20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#00234B]">No positions found</h3>
              <p className="text-sm text-[#00234B]/60 mt-1">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredForms.map((form, index) => {
                const categoryInfo = getCategoryIcon(form.category)
                const Icon = categoryInfo.icon
                const tags = parseTags(form.tags)
                
                return (
                  <div 
                    key={index}
                    className="group bg-white p-6 rounded-2xl border border-[#E7E8F2] hover:border-[#624DE3] transition-all duration-300 hover:shadow-2xl hover:shadow-[#624DE3]/10 hover:-translate-y-0.5 relative"
                  >
                    {/* Status Badge */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`text-[10px] font-bold px-3 py-0.5 rounded-full ${
                        form.status?.toLowerCase() === 'active' 
                          ? 'bg-green-500 text-white' 
                          : form.status?.toLowerCase() === 'urgent' 
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-500 text-white'
                      }`}>
                        {form.status || 'Active'}
                      </span>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-[#F4F1FF] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-[#624DE3]" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                          <div>
                            <h3 className="text-lg font-bold text-[#00234B] group-hover:text-[#624DE3] transition-colors">
                              {form.title}
                            </h3>
                            <p className="text-sm text-[#624DE3] font-medium">{form.category}</p>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-[#00234B]/60 whitespace-nowrap">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-[#624DE3]" />
                              {form.location || 'Remote'}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-[#624DE3]" />
                              {formatDate(form.createdDate)}
                            </span>
                          </div>
                        </div>

                        <p className="text-sm text-[#00234B]/70 mt-2 line-clamp-2 leading-relaxed">
                          {form.description || `Apply for the ${form.title} position. Join our talent network and start your remote journey.`}
                        </p>

                        {/* Tags */}
                        {tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {tags.map((tag, idx) => (
                              <span 
                                key={idx}
                                className="text-[10px] bg-[#F4F1FF] text-[#624DE3] px-2 py-0.5 rounded-full font-medium border border-[#E7E8F2]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-[#00234B]/60">
                          {form.salary && (
                            <span className="flex items-center gap-1">
                              <DollarSign className="w-3 h-3 text-[#624DE3]" />
                              {form.salary}
                            </span>
                          )}
                          {form.experience && (
                            <span className="flex items-center gap-1">
                              <Award className="w-3 h-3 text-[#624DE3]" />
                              {form.experience}
                            </span>
                          )}
                          {form.company && (
                            <span className="flex items-center gap-1">
                              <Building2 className="w-3 h-3 text-[#624DE3]" />
                              {form.company}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-2 lg:flex-col flex-shrink-0">
                        <a
                          href={form.url || '#apply'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#624DE3] text-white text-sm font-semibold px-6 py-2 rounded-xl transition-all duration-300 hover:bg-[#624DE3]/90 hover:shadow-lg hover:shadow-[#624DE3]/25 text-center whitespace-nowrap"
                        >
                          Apply Now
                        </a>
                        <button 
                          onClick={() => setSelectedForm(form)}
                          className="bg-white text-[#624DE3] text-sm font-semibold px-6 py-2 rounded-xl transition-all duration-300 hover:bg-[#F4F1FF] border border-[#E7E8F2] hover:border-[#624DE3] text-center whitespace-nowrap"
                        >
                          <Eye className="w-4 h-4 inline mr-1" />
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 bg-[#F4F1FF]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white text-[#624DE3] px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-[#E7E8F2]">
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Don't See Your Match?</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#00234B]">
            Join Our <span className="text-[#624DE3]">Talent Network</span>
          </h2>
          
          <p className="text-sm sm:text-base text-[#00234B]/70 mt-3 max-w-2xl mx-auto leading-relaxed">
            Not seeing the right opportunity? Join our talent network and get notified when new positions matching your skills become available.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
            <a 
              href="#apply" 
              className="group bg-[#624DE3] text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:bg-[#624DE3]/90 hover:shadow-xl hover:shadow-[#624DE3]/25 hover:scale-[1.02] text-sm inline-flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              Join Talent Network
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/talent-network" 
              className="group bg-white text-[#624DE3] font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:bg-[#624DE3] hover:text-white hover:shadow-xl hover:shadow-[#624DE3]/15 text-sm inline-flex items-center gap-2 border-2 border-[#E7E8F2] hover:border-[#624DE3]"
            >
              <Users className="w-4 h-4" />
              Browse Experts
            </a>
          </div>
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedForm(null)}>
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-[#E7E8F2] shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#F4F1FF] flex items-center justify-center">
                  {(() => {
                    const categoryInfo = getCategoryIcon(selectedForm.category)
                    const Icon = categoryInfo.icon
                    return <Icon className="w-6 h-6 text-[#624DE3]" />
                  })()}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#00234B]">{selectedForm.title}</h3>
                  <p className="text-sm text-[#624DE3] font-medium">{selectedForm.category}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedForm(null)}
                className="p-2 hover:bg-[#F4F1FF] rounded-xl transition-colors"
              >
                <X className="w-5 h-5 text-[#00234B]/60" />
              </button>
            </div>

            <div className="flex flex-wrap gap-3 mb-4 text-sm">
              {selectedForm.location && (
                <span className="flex items-center gap-1 text-[#00234B]/60">
                  <MapPin className="w-4 h-4 text-[#624DE3]" />
                  {selectedForm.location}
                </span>
              )}
              {selectedForm.salary && (
                <span className="flex items-center gap-1 text-[#00234B]/60">
                  <DollarSign className="w-4 h-4 text-[#624DE3]" />
                  {selectedForm.salary}
                </span>
              )}
              {selectedForm.createdDate && (
                <span className="flex items-center gap-1 text-[#00234B]/60">
                  <Clock className="w-4 h-4 text-[#624DE3]" />
                  {formatDate(selectedForm.createdDate)}
                </span>
              )}
              {selectedForm.status && (
                <span className={`text-xs font-bold px-3 py-0.5 rounded-full ${
                  selectedForm.status.toLowerCase() === 'active' 
                    ? 'bg-green-100 text-green-700' 
                    : selectedForm.status.toLowerCase() === 'urgent' 
                    ? 'bg-red-100 text-red-700'
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {selectedForm.status}
                </span>
              )}
            </div>

            <div className="prose prose-sm max-w-none">
              <h4 className="font-semibold text-[#00234B]">Description</h4>
              <p className="text-[#00234B]/70">
                {selectedForm.description || `Join us as a ${selectedForm.title} and be part of our growing team. This is a great opportunity to work with exciting projects and clients.`}
              </p>

              {selectedForm.company && (
                <>
                  <h4 className="font-semibold text-[#00234B] mt-4">Company</h4>
                  <p className="text-[#00234B]/70">{selectedForm.company}</p>
                </>
              )}

              {selectedForm.experience && (
                <>
                  <h4 className="font-semibold text-[#00234B] mt-4">Experience Required</h4>
                  <p className="text-[#00234B]/70">{selectedForm.experience}</p>
                </>
              )}

              {selectedForm.tags && (
                <>
                  <h4 className="font-semibold text-[#00234B] mt-4">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {parseTags(selectedForm.tags).map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-[#F4F1FF] text-[#624DE3] px-3 py-1 rounded-full font-medium border border-[#E7E8F2]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="mt-6 pt-6 border-t border-[#E7E8F2] flex flex-col sm:flex-row gap-3">
              <a
                href={selectedForm.url || '#apply'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#624DE3] text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:bg-[#624DE3]/90 hover:shadow-lg hover:shadow-[#624DE3]/25 text-center"
              >
                Apply Now
              </a>
              <button 
                onClick={() => setSelectedForm(null)}
                className="flex-1 bg-white text-[#624DE3] font-semibold py-3 rounded-xl transition-all duration-300 hover:bg-[#F4F1FF] border border-[#E7E8F2] hover:border-[#624DE3]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}