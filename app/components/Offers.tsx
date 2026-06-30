import { 
  Briefcase, 
  Clock, 
  Rocket, 
  Handshake,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Zap,
  TrendingUp,
  Shield
} from 'lucide-react'

const offers = [
  {
    icon: Briefcase,
    title: 'Freelance Remote Projects',
    description: 'Short-term and project-based work for developers, designers, marketers, writers, and automation experts.',
    color: 'text-purple',
    bgColor: 'bg-purple/10',
    gradient: 'from-purple-50 to-purple-100/30'
  },
  {
    icon: Clock,
    title: 'Part-Time Remote Roles',
    description: 'Flexible roles for experts who want stable monthly work without a full-time commitment.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    gradient: 'from-blue-50 to-blue-100/30'
  },
  {
    icon: Rocket,
    title: 'Full-Time Remote Opportunities',
    description: 'Dedicated resource roles for clients who need long-term remote support.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    gradient: 'from-orange-50 to-orange-100/30'
  },
  {
    icon: Handshake,
    title: 'Agency & Client Projects',
    description: 'Work with businesses, agencies, startups, and service companies looking for reliable remote experts.',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    gradient: 'from-green-50 to-green-100/30'
  }
]

const benefits = [
  'No repeated applications',
  'Skill-based matching',
  'Flexible work options',
  'Global opportunities'
]

export default function Offers() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-soft-lavender">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-purple/10 text-purple px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Work Opportunities</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
            Find Remote Work That <span className="text-purple">Matches Your Expertise</span>
          </h2>
          
          <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-2xl mx-auto">
            RemoteExpertJobs helps skilled professionals connect with remote work opportunities 
            across technical, creative, marketing, and operations roles. Instead of applying again 
            and again, you can submit your profile once and get considered for relevant client 
            projects, agency roles, freelance work, and long-term remote positions.
          </p>
        </div>

        {/* Benefits Tags */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {benefits.map((benefit, index) => (
            <span 
              key={index}
              className="bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-cool-gray hover:border-purple hover:bg-purple/5 transition-all duration-300 inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-700"
            >
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
              {benefit}
            </span>
          ))}
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {offers.map((offer, index) => {
            const Icon = offer.icon
            return (
              <div 
                key={index} 
                className={`group bg-gradient-to-br ${offer.gradient} p-6 sm:p-8 rounded-2xl border border-cool-gray hover:border-purple transition-all duration-300 hover:shadow-[0_8px_30px_rgba(98,77,227,0.12)] hover:-translate-y-1`}
              >
                {/* Icon Container */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${offer.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${offer.color}`} />
                </div>
                
                {/* Content */}
                <h3 className="text-base sm:text-lg font-bold text-navy mb-2">
                  {offer.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {offer.description}
                </p>

                {/* Learn More Link */}
                <a 
                  href="#apply" 
                  className="inline-flex items-center gap-1 mt-4 text-xs sm:text-sm font-medium text-purple hover:text-purple/80 transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            )
          })}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-10 sm:mt-12 max-w-3xl mx-auto">
          <div className="bg-white p-3 sm:p-4 rounded-xl text-center border border-cool-gray">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-purple mx-auto mb-1" />
            <p className="text-xs sm:text-sm font-semibold text-navy">500+</p>
            <p className="text-[10px] sm:text-xs text-gray-500">Active Freelancers</p>
          </div>
          <div className="bg-white p-3 sm:p-4 rounded-xl text-center border border-cool-gray">
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mx-auto mb-1" />
            <p className="text-xs sm:text-sm font-semibold text-navy">200+</p>
            <p className="text-[10px] sm:text-xs text-gray-500">Projects Completed</p>
          </div>
          <div className="bg-white p-3 sm:p-4 rounded-xl text-center border border-cool-gray">
            <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mx-auto mb-1" />
            <p className="text-xs sm:text-sm font-semibold text-navy">95%</p>
            <p className="text-[10px] sm:text-xs text-gray-500">Match Success</p>
          </div>
          <div className="bg-white p-3 sm:p-4 rounded-xl text-center border border-cool-gray">
            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mx-auto mb-1" />
            <p className="text-xs sm:text-sm font-semibold text-navy">4.8★</p>
            <p className="text-[10px] sm:text-xs text-gray-500">Average Rating</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Ready to find your next remote opportunity?
          </p>
          <a 
            href="#apply" 
            className="inline-flex items-center gap-2 bg-purple text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-200 hover:bg-purple/90 hover:scale-105 text-sm sm:text-base"
          >
            Join Our Talent Network
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}