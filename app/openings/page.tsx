'use client'

import { useState } from 'react'
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
  UserPlus
} from 'lucide-react'

const openings = [
  {
    id: 1,
    title: 'GoHighLevel Developer',
    type: 'Freelance / Project-Based',
    location: 'Remote',
    department: 'Development',
    description: 'Build funnels, websites, workflows, forms, calendars, automations, and CRM systems inside GoHighLevel. You will work with agencies and businesses to implement complex marketing automation systems.',
    icon: Code2,
    tags: ['GHL', 'CRM', 'Automation', 'Web Development'],
    salary: '$50-80/hr',
    experience: '3+ years',
    posted: '2 days ago',
    applications: 23,
    featured: true,
    urgent: true,
    company: 'RemoteExpertJobs',
    requirements: [
      '3+ years of experience with GoHighLevel',
      'Strong understanding of CRM and automation',
      'Experience with funnel building and landing pages',
      'Good communication skills',
      'Portfolio of previous GHL projects'
    ],
    responsibilities: [
      'Build custom funnels and landing pages',
      'Set up automation workflows',
      'Configure CRM systems',
      'Integrate third-party tools',
      'Optimize conversion rates'
    ]
  },
  {
    id: 2,
    title: 'Funnel & Landing Page Designer',
    type: 'Project-Based',
    location: 'Remote',
    department: 'Design',
    description: 'Design high-converting landing pages, funnels, and website pages for service businesses and agencies. Create visually stunning designs that drive conversions.',
    icon: Palette,
    tags: ['Design', 'Funnels', 'UI/UX', 'Webflow'],
    salary: '$40-70/hr',
    experience: '2+ years',
    posted: '3 days ago',
    applications: 18,
    featured: false,
    urgent: false,
    company: 'RemoteExpertJobs',
    requirements: [
      '2+ years of design experience',
      'Strong portfolio of landing pages',
      'Experience with Webflow or similar tools',
      'Understanding of conversion principles',
      'Excellent visual design skills'
    ],
    responsibilities: [
      'Design high-converting landing pages',
      'Create sales funnels',
      'Develop visual brand identities',
      'Optimize designs for conversions',
      'Collaborate with marketing teams'
    ]
  },
  {
    id: 3,
    title: 'CRM & Automation Specialist',
    type: 'Freelance',
    location: 'Remote',
    department: 'Operations',
    description: 'Set up workflows, lead routing, pipeline automations, email/SMS flows, and client CRM systems. Help businesses streamline their operations through automation.',
    icon: Settings,
    tags: ['CRM', 'Automation', 'Workflows', 'Zapier'],
    salary: '$45-75/hr',
    experience: '4+ years',
    posted: '1 day ago',
    applications: 31,
    featured: true,
    urgent: true,
    company: 'RemoteExpertJobs',
    requirements: [
      '4+ years of CRM experience',
      'Expertise in automation tools',
      'Experience with lead routing',
      'Strong problem-solving skills',
      'Knowledge of various CRMs'
    ],
    responsibilities: [
      'Set up CRM workflows',
      'Configure lead routing',
      'Build automation sequences',
      'Create email/SMS flows',
      'Optimize pipeline processes'
    ]
  },
  {
    id: 4,
    title: 'SEO Content Writer',
    type: 'Freelance',
    location: 'Remote',
    department: 'Content',
    description: 'Write SEO-friendly blogs, landing pages, service pages, and niche content for agency websites. Create content that ranks well and engages readers.',
    icon: PenTool,
    tags: ['SEO', 'Content Writing', 'Blogging', 'Copywriting'],
    salary: '$30-50/hr',
    experience: '2+ years',
    posted: '5 days ago',
    applications: 15,
    featured: false,
    urgent: false,
    company: 'RemoteExpertJobs',
    requirements: [
      '2+ years of content writing experience',
      'Strong SEO knowledge',
      'Excellent writing skills',
      'Portfolio of published work',
      'Understanding of content strategy'
    ],
    responsibilities: [
      'Write SEO-optimized blog posts',
      'Create landing page content',
      'Develop service page copy',
      'Research industry topics',
      'Optimize existing content'
    ]
  },
  {
    id: 5,
    title: 'Remote Project Manager',
    type: 'Part-Time / Freelance',
    location: 'Remote',
    department: 'Management',
    description: 'Manage client communication, task tracking, documentation, deadlines, and project delivery. Coordinate between teams and ensure project success.',
    icon: Users,
    tags: ['Management', 'Communication', 'Delivery', 'Agile'],
    salary: '$40-65/hr',
    experience: '5+ years',
    posted: '4 days ago',
    applications: 27,
    featured: false,
    urgent: false,
    company: 'RemoteExpertJobs',
    requirements: [
      '5+ years of project management experience',
      'Strong communication skills',
      'Experience with Agile methodologies',
      'Track record of successful delivery',
      'Experience with remote teams'
    ],
    responsibilities: [
      'Manage client relationships',
      'Track project tasks and milestones',
      'Handle documentation',
      'Coordinate team members',
      'Ensure timely delivery'
    ]
  },
  {
    id: 6,
    title: 'Digital Marketing Specialist',
    type: 'Freelance',
    location: 'Remote',
    department: 'Marketing',
    description: 'Manage social media, content strategy, paid advertising, and digital marketing campaigns for agencies and businesses.',
    icon: TrendingUp,
    tags: ['Marketing', 'Social Media', 'Strategy', 'Analytics'],
    salary: '$35-60/hr',
    experience: '3+ years',
    posted: '6 days ago',
    applications: 12,
    featured: false,
    urgent: false,
    company: 'RemoteExpertJobs',
    requirements: [
      '3+ years of digital marketing experience',
      'Experience with social media management',
      'Knowledge of content strategy',
      'Understanding of analytics',
      'Campaign management experience'
    ],
    responsibilities: [
      'Manage social media channels',
      'Develop content strategies',
      'Run paid advertising campaigns',
      'Analyze campaign performance',
      'Create marketing reports'
    ]
  }
]

const departments = [
  'All Departments',
  'Development',
  'Design',
  'Operations',
  'Content',
  'Management',
  'Marketing'
]

const jobTypes = [
  'All Types',
  'Freelance / Project-Based',
  'Project-Based',
  'Freelance',
  'Part-Time / Freelance'
]

export default function OpeningsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments')
  const [selectedType, setSelectedType] = useState('All Types')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedJob, setSelectedJob] = useState<typeof openings[0] | null>(null)

  const filteredOpenings = openings.filter(opening => {
    const matchesSearch = opening.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          opening.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          opening.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesDepartment = selectedDepartment === 'All Departments' || 
                             opening.department === selectedDepartment
    
    const matchesType = selectedType === 'All Types' || 
                       opening.type === selectedType
    
    return matchesSearch && matchesDepartment && matchesType
  })

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
              <p className="text-xl font-extrabold text-[#00234B]">{openings.length}+</p>
              <p className="text-xs text-[#00234B]/60">Open Positions</p>
            </div>
            <div className="bg-white p-4 rounded-xl text-center border border-[#E7E8F2] hover:border-[#624DE3] transition-all duration-300 hover:shadow-lg hover:shadow-[#624DE3]/10">
              <Building2 className="w-5 h-5 text-[#624DE3] mx-auto mb-1" />
              <p className="text-xl font-extrabold text-[#00234B]">500+</p>
              <p className="text-xs text-[#00234B]/60">Companies Hiring</p>
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
                placeholder="Search by title, description, or skills..."
                className="w-full rounded-xl border border-[#E7E8F2] pl-9 pr-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-[#624DE3]/20 focus:border-[#624DE3] transition-all text-sm text-[#00234B] placeholder:text-[#00234B]/40"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Department Filter */}
            <div className="hidden md:flex items-center gap-2">
              <select
                className="rounded-xl border border-[#E7E8F2] px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-[#624DE3]/20 focus:border-[#624DE3] transition-all text-sm text-[#00234B]"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div className="hidden md:flex items-center gap-2">
              <select
                className="rounded-xl border border-[#E7E8F2] px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-[#624DE3]/20 focus:border-[#624DE3] transition-all text-sm text-[#00234B]"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {jobTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
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
                <label className="text-xs font-medium text-[#00234B] mb-1 block">Department</label>
                <select
                  className="w-full rounded-xl border border-[#E7E8F2] px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#624DE3]/20 focus:border-[#624DE3] transition-all text-sm text-[#00234B]"
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-[#00234B] mb-1 block">Job Type</label>
                <select
                  className="w-full rounded-xl border border-[#E7E8F2] px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#624DE3]/20 focus:border-[#624DE3] transition-all text-sm text-[#00234B]"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  {jobTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
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
              Showing <span className="font-semibold text-[#00234B]">{filteredOpenings.length}</span> positions
            </p>
          </div>

          {filteredOpenings.length === 0 ? (
            <div className="text-center py-16">
              <Briefcase className="w-16 h-16 text-[#00234B]/20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#00234B]">No positions found</h3>
              <p className="text-sm text-[#00234B]/60 mt-1">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredOpenings.map((opening) => {
                const Icon = opening.icon
                return (
                  <div 
                    key={opening.id}
                    className="group bg-white p-6 rounded-2xl border border-[#E7E8F2] hover:border-[#624DE3] transition-all duration-300 hover:shadow-2xl hover:shadow-[#624DE3]/10 hover:-translate-y-0.5 relative"
                  >
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {opening.featured && (
                        <span className="bg-gradient-to-r from-[#624DE3] to-[#624DE3]/80 text-white text-[10px] font-bold px-3 py-0.5 rounded-full">
                          Featured
                        </span>
                      )}
                      {opening.urgent && (
                        <span className="bg-red-500 text-white text-[10px] font-bold px-3 py-0.5 rounded-full">
                          Urgent
                        </span>
                      )}
                      <span className="bg-[#F4F1FF] text-[#624DE3] text-[10px] font-medium px-3 py-0.5 rounded-full border border-[#E7E8F2]">
                        {opening.type}
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
                              {opening.title}
                            </h3>
                            <p className="text-sm text-[#00234B]/60">{opening.company}</p>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-[#00234B]/60 whitespace-nowrap">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-[#624DE3]" />
                              {opening.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <DollarSign className="w-3.5 h-3.5 text-[#624DE3]" />
                              {opening.salary}
                            </span>
                          </div>
                        </div>

                        <p className="text-sm text-[#00234B]/70 mt-2 line-clamp-2 leading-relaxed">
                          {opening.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {opening.tags.map((tag, idx) => (
                            <span 
                              key={idx}
                              className="text-[10px] bg-[#F4F1FF] text-[#624DE3] px-2 py-0.5 rounded-full font-medium border border-[#E7E8F2]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-[#00234B]/60">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#624DE3]" />
                            Posted {opening.posted}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3 text-[#624DE3]" />
                            {opening.applications} applications
                          </span>
                          <span className="flex items-center gap-1">
                            <Award className="w-3 h-3 text-[#624DE3]" />
                            {opening.experience}
                          </span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-2 lg:flex-col flex-shrink-0">
                        <Link
                          href={`/openings/${opening.id}`}
                          className="bg-[#624DE3] text-white text-sm font-semibold px-6 py-2 rounded-xl transition-all duration-300 hover:bg-[#624DE3]/90 hover:shadow-lg hover:shadow-[#624DE3]/25 text-center whitespace-nowrap"
                        >
                          Apply Now
                        </Link>
                        <button 
                          onClick={() => setSelectedJob(opening)}
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

          {/* Load More */}
          {filteredOpenings.length > 0 && (
            <div className="text-center mt-10">
              <button className="bg-white text-[#624DE3] font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:bg-[#F4F1FF] border-2 border-[#E7E8F2] hover:border-[#624DE3] text-sm inline-flex items-center gap-2">
                Load More Openings
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
              <UserPlus className="w-4 h-4" />
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
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedJob(null)}>
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-[#E7E8F2] shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#F4F1FF] flex items-center justify-center">
                  <selectedJob.icon className="w-6 h-6 text-[#624DE3]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#00234B]">{selectedJob.title}</h3>
                  <p className="text-sm text-[#00234B]/60">{selectedJob.company}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedJob(null)}
                className="p-2 hover:bg-[#F4F1FF] rounded-xl transition-colors"
              >
                <X className="w-5 h-5 text-[#00234B]/60" />
              </button>
            </div>

            <div className="flex flex-wrap gap-3 mb-4 text-sm">
              <span className="flex items-center gap-1 text-[#00234B]/60">
                <MapPin className="w-4 h-4 text-[#624DE3]" />
                {selectedJob.location}
              </span>
              <span className="flex items-center gap-1 text-[#00234B]/60">
                <DollarSign className="w-4 h-4 text-[#624DE3]" />
                {selectedJob.salary}
              </span>
              <span className="flex items-center gap-1 text-[#00234B]/60">
                <Clock className="w-4 h-4 text-[#624DE3]" />
                {selectedJob.posted}
              </span>
              <span className="flex items-center gap-1 text-[#00234B]/60">
                <Users className="w-4 h-4 text-[#624DE3]" />
                {selectedJob.applications} applications
              </span>
            </div>

            <div className="prose prose-sm max-w-none">
              <h4 className="font-semibold text-[#00234B]">Description</h4>
              <p className="text-[#00234B]/70">{selectedJob.description}</p>

              <h4 className="font-semibold text-[#00234B] mt-4">Requirements</h4>
              <ul className="list-disc pl-5 text-[#00234B]/70 space-y-1">
                {selectedJob.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>

              <h4 className="font-semibold text-[#00234B] mt-4">Responsibilities</h4>
              <ul className="list-disc pl-5 text-[#00234B]/70 space-y-1">
                {selectedJob.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-6 border-t border-[#E7E8F2] flex flex-col sm:flex-row gap-3">
              <Link
                href={`/openings/${selectedJob.id}`}
                className="flex-1 bg-[#624DE3] text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:bg-[#624DE3]/90 hover:shadow-lg hover:shadow-[#624DE3]/25 text-center"
              >
                Apply Now
              </Link>
              <button 
                onClick={() => setSelectedJob(null)}
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