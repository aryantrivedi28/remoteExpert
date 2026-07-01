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
  CheckCircle,
  Globe
} from 'lucide-react'

const openings = [
  {
    title: 'GoHighLevel Developer',
    type: 'Freelance / Project-Based',
    location: 'Remote',
    description: 'Build funnels, websites, workflows, forms, calendars, automations, and CRM systems inside GoHighLevel.',
    icon: Code2,
    tags: ['GHL', 'CRM', 'Automation'],
    salary: '$50-80/hr'
  },
  {
    title: 'Funnel & Landing Page Designer',
    type: 'Project-Based',
    location: 'Remote',
    description: 'Design high-converting landing pages, funnels, and website pages for service businesses and agencies.',
    icon: Palette,
    tags: ['Design', 'Funnels', 'UI/UX'],
    salary: '$40-70/hr'
  },
  {
    title: 'CRM & Automation Specialist',
    type: 'Freelance',
    location: 'Remote',
    description: 'Set up workflows, lead routing, pipeline automations, email/SMS flows, and client CRM systems.',
    icon: Settings,
    tags: ['CRM', 'Automation', 'Workflows'],
    salary: '$45-75/hr'
  },
  {
    title: 'SEO Content Writer',
    type: 'Freelance',
    location: 'Remote',
    description: 'Write SEO-friendly blogs, landing pages, service pages, and niche content for agency websites.',
    icon: PenTool,
    tags: ['SEO', 'Content', 'Writing'],
    salary: '$30-50/hr'
  },
  {
    title: 'Remote Project Manager',
    type: 'Part-Time / Freelance',
    location: 'Remote',
    description: 'Manage client communication, task tracking, documentation, deadlines, and project delivery.',
    icon: Users,
    tags: ['Management', 'Communication', 'Delivery'],
    salary: '$40-65/hr'
  }
]

export default function Openings() {
  return (
    <section id="openings" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F4F1FF] text-[#624DE3] px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4">
            <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Current Opportunities</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#00234B]">
            Current <span className="text-[#624DE3]">Remote Openings</span>
          </h2>
          
          <p className="text-sm sm:text-base text-[#00234B]/70 mt-3 max-w-2xl mx-auto leading-relaxed">
            We are currently building our remote expert network and have limited active openings. 
            You can still apply to join the talent pool, and our team will reach out when a relevant 
            opportunity comes in.
          </p>
        </div>

        {/* Quick Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          <button className="bg-[#624DE3] text-white px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-[#624DE3]/90 transition-all duration-300 hover:scale-105">
            All Roles
          </button>
          <button className="bg-white text-[#00234B]/70 px-5 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-[#E7E8F2] hover:border-[#624DE3] hover:text-[#624DE3] transition-all duration-300">
            Freelance
          </button>
          <button className="bg-white text-[#00234B]/70 px-5 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-[#E7E8F2] hover:border-[#624DE3] hover:text-[#624DE3] transition-all duration-300">
            Project-Based
          </button>
          <button className="bg-white text-[#00234B]/70 px-5 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-[#E7E8F2] hover:border-[#624DE3] hover:text-[#624DE3] transition-all duration-300">
            Part-Time
          </button>
        </div>
        
        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {openings.map((job, index) => {
            const Icon = job.icon
            return (
              <div 
                key={index} 
                className="group bg-white p-5 sm:p-6 rounded-2xl border border-[#E7E8F2] hover:border-[#624DE3] transition-all duration-300 hover:shadow-2xl hover:shadow-[#624DE3]/10 hover:-translate-y-1"
              >
                {/* Header with Icon and Type */}
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#F4F1FF] flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#624DE3]" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold text-[#624DE3] bg-[#F4F1FF] px-2.5 py-1 rounded-full border border-[#E7E8F2]">
                    {job.type}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#00234B] mb-2 line-clamp-2">
                  {job.title}
                </h3>
                
                {/* Description */}
                <p className="text-xs sm:text-sm text-[#00234B]/70 leading-relaxed mb-3 line-clamp-2">
                  {job.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {job.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-[10px] sm:text-xs bg-[#F4F1FF] text-[#624DE3] px-2.5 py-0.5 rounded-full font-medium border border-[#E7E8F2]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Job Details */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[#00234B]/60 mb-4 pt-3 border-t border-[#E7E8F2]">
                  <span className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#624DE3]" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#624DE3]" />
                    {job.salary}
                  </span>
                </div>
                
                {/* Apply Button */}
                <a 
                  href="#apply" 
                  className="w-full bg-[#624DE3] text-white text-xs sm:text-sm font-semibold py-2.5 sm:py-3 rounded-xl transition-all duration-300 hover:bg-[#624DE3]/90 hover:shadow-lg hover:shadow-[#624DE3]/25 hover:scale-[1.02] inline-flex items-center justify-center gap-2 group/btn"
                >
                  Apply Now
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            )
          })}
          
          {/* Join Network Card */}
          <div className="bg-gradient-to-br from-[#F4F1FF] to-[#F4F1FF]/50 p-6 sm:p-8 rounded-2xl border-2 border-dashed border-[#624DE3]/30 flex flex-col items-center justify-center text-center hover:border-[#624DE3] transition-all duration-300 hover:shadow-2xl hover:shadow-[#624DE3]/10 hover:scale-[1.02]">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#624DE3]/10 flex items-center justify-center mb-4">
              <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-[#624DE3]" />
            </div>
            <p className="font-bold text-[#00234B] text-base sm:text-lg mb-2">
              Don't see the right role?
            </p>
            <p className="text-xs sm:text-sm text-[#00234B]/60 mb-5">
              Join our talent network and get matched with future opportunities.
            </p>
            <a 
              href="#apply" 
              className="bg-[#624DE3] text-white font-semibold px-7 py-3 rounded-xl transition-all duration-300 hover:bg-[#624DE3]/90 hover:shadow-xl hover:shadow-[#624DE3]/25 hover:scale-105 text-sm inline-flex items-center gap-2"
            >
              Join Talent Network
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        {/* Bottom Trust Message */}
        <div className="mt-12 sm:mt-14 text-center">
          <div className="inline-flex items-center gap-2 bg-[#F4F1FF] px-6 py-3 rounded-full border border-[#E7E8F2]">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#75E8F0]" />
            <p className="text-xs sm:text-sm text-[#00234B]/70">
              <span className="font-medium text-[#00234B]">500+ freelancers</span> already in our network • 
              <span className="hidden xs:inline"> New opportunities added weekly</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}