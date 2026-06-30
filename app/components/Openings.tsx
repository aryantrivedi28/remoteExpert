import { 
  Code2, 
  Palette, 
  Settings, 
  PenTool, 
  Users,
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  ArrowRight,
  Sparkles,
  Eye,
  Calendar,
  CheckCircle
} from 'lucide-react'

const openings = [
  {
    title: 'GoHighLevel Developer',
    type: 'Freelance / Project-Based',
    location: 'Remote',
    description: 'Build funnels, websites, workflows, forms, calendars, automations, and CRM systems inside GoHighLevel.',
    icon: Code2,
    color: 'text-purple',
    bgColor: 'bg-purple/10',
    tags: ['GHL', 'CRM', 'Automation'],
    salary: '$50-80/hr'
  },
  {
    title: 'Funnel & Landing Page Designer',
    type: 'Project-Based',
    location: 'Remote',
    description: 'Design high-converting landing pages, funnels, and website pages for service businesses and agencies.',
    icon: Palette,
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
    tags: ['Design', 'Funnels', 'UI/UX'],
    salary: '$40-70/hr'
  },
  {
    title: 'CRM & Automation Specialist',
    type: 'Freelance',
    location: 'Remote',
    description: 'Set up workflows, lead routing, pipeline automations, email/SMS flows, and client CRM systems.',
    icon: Settings,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    tags: ['CRM', 'Automation', 'Workflows'],
    salary: '$45-75/hr'
  },
  {
    title: 'SEO Content Writer',
    type: 'Freelance',
    location: 'Remote',
    description: 'Write SEO-friendly blogs, landing pages, service pages, and niche content for agency websites.',
    icon: PenTool,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    tags: ['SEO', 'Content', 'Writing'],
    salary: '$30-50/hr'
  },
  {
    title: 'Remote Project Manager',
    type: 'Part-Time / Freelance',
    location: 'Remote',
    description: 'Manage client communication, task tracking, documentation, deadlines, and project delivery.',
    icon: Users,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    tags: ['Management', 'Communication', 'Delivery'],
    salary: '$40-65/hr'
  }
]

export default function Openings() {
  return (
    <section id="openings" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-purple/10 text-purple px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4">
            <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Current Opportunities</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
            Current <span className="text-purple">Remote Openings</span>
          </h2>
          
          <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-2xl mx-auto">
            We are currently building our remote expert network and have limited active openings. 
            You can still apply to join the talent pool, and our team will reach out when a relevant 
            opportunity comes in.
          </p>
        </div>

        {/* Quick Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          <button className="bg-purple text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium hover:bg-purple/90 transition-colors">
            All Roles
          </button>
          <button className="bg-white text-gray-600 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-cool-gray hover:border-purple hover:text-purple transition-colors">
            Freelance
          </button>
          <button className="bg-white text-gray-600 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-cool-gray hover:border-purple hover:text-purple transition-colors">
            Project-Based
          </button>
          <button className="bg-white text-gray-600 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-cool-gray hover:border-purple hover:text-purple transition-colors">
            Part-Time
          </button>
        </div>
        
        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {openings.map((job, index) => {
            const Icon = job.icon
            return (
              <div 
                key={index} 
                className="group bg-white p-5 sm:p-6 rounded-2xl border border-cool-gray hover:border-purple transition-all duration-300 hover:shadow-[0_8px_30px_rgba(98,77,227,0.12)] hover:-translate-y-1"
              >
                {/* Header with Icon and Type */}
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${job.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${job.color}`} />
                  </div>
                  <span className="text-[10px] sm:text-xs font-medium text-purple bg-purple/10 px-2 py-0.5 rounded-full">
                    {job.type}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-navy mb-2 line-clamp-2">
                  {job.title}
                </h3>
                
                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 line-clamp-2">
                  {job.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {job.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-[10px] sm:text-xs bg-soft-lavender px-2 py-0.5 rounded-full text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Job Details */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-4 pt-3 border-t border-cool-gray">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="w-3 h-3 sm:w-4 sm:h-4" />
                    {job.salary}
                  </span>
                </div>
                
                {/* Apply Button */}
                <a 
                  href="#apply" 
                  className="w-full bg-purple text-white text-xs sm:text-sm font-semibold py-2 sm:py-2.5 rounded-lg hover:bg-purple/90 transition-colors inline-flex items-center justify-center gap-2 group/btn"
                >
                  Apply Now
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            )
          })}
          
          {/* Join Network Card */}
          <div className="bg-gradient-to-br from-purple/5 to-purple/10 p-6 sm:p-8 rounded-2xl border-2 border-dashed border-purple/30 flex flex-col items-center justify-center text-center hover:border-purple transition-all duration-300 hover:shadow-[0_8px_30px_rgba(98,77,227,0.12)]">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-purple/10 flex items-center justify-center mb-4">
              <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-purple" />
            </div>
            <p className="font-semibold text-navy text-base sm:text-lg mb-2">
              Don't see the right role?
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mb-4">
              Join our talent network and get matched with future opportunities.
            </p>
            <a 
              href="#apply" 
              className="bg-purple text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-200 hover:bg-purple/90 hover:scale-105 text-sm inline-flex items-center gap-2"
            >
              Join Talent Network
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}