import { 
  Users, 
  Code2, 
  Megaphone, 
  Briefcase, 
  Building2, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Globe,
  Shield
} from 'lucide-react'

const hiringNeeds = [
  {
    text: 'Hire remote GoHighLevel experts',
    icon: Code2,
    color: 'text-purple'
  },
  {
    text: 'Hire freelance website developers',
    icon: Globe,
    color: 'text-blue-500'
  },
  {
    text: 'Hire remote marketing specialists',
    icon: Megaphone,
    color: 'text-orange-500'
  },
  {
    text: 'Hire virtual assistants and project managers',
    icon: Users,
    color: 'text-cyan-500'
  },
  {
    text: 'Build a remote delivery team',
    icon: Building2,
    color: 'text-green-500'
  },
  {
    text: 'Find experts for short-term client projects',
    icon: Sparkles,
    color: 'text-pink-500'
  }
]

const stats = [
  {
    number: '500+',
    label: 'Vetted Experts',
    icon: Users
  },
  {
    number: '200+',
    label: 'Projects Completed',
    icon: CheckCircle
  },
  {
    number: '4.8★',
    label: 'Average Rating',
    icon: Star
  },
  {
    number: '24hr',
    label: 'Quick Match',
    icon: Clock
  }
]

export default function Companies() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-soft-lavender">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-purple/10 text-purple px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4">
            <Building2 className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>For Companies</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
            Hiring Remote <span className="text-purple">Experts?</span>
          </h2>
          
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mt-3">
            If you are an agency, startup, or business looking for vetted remote talent, 
            RemoteExpertJobs can help you find developers, marketers, designers, automation 
            experts, content creators, and operations professionals for project-based or 
            dedicated roles.
          </p>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10 max-w-3xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div 
                key={index} 
                className="bg-white p-4 sm:p-5 rounded-xl text-center border border-cool-gray hover:border-purple transition-all duration-300 hover:shadow-[0_4px_20px_rgba(98,77,227,0.08)]"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple/10 flex items-center justify-center mx-auto mb-2">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-purple" />
                </div>
                <p className="text-lg sm:text-xl font-bold text-navy">{stat.number}</p>
                <p className="text-[10px] sm:text-xs text-gray-500">{stat.label}</p>
              </div>
            )
          })}
        </div>
        
        {/* Hiring Needs Tags */}
        <div className="mt-8 sm:mt-10">
          <p className="text-sm sm:text-base font-medium text-navy text-center mb-4">
            What We Can Help You With:
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {hiringNeeds.map((need, index) => {
              const Icon = need.icon
              return (
                <span 
                  key={index} 
                  className="group bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-cool-gray hover:border-purple hover:bg-purple/5 transition-all duration-300 inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-gray-700 hover:text-navy"
                >
                  <Icon className={`w-3 h-3 sm:w-4 sm:h-4 ${need.color}`} />
                  {need.text}
                </span>
              )
            })}
          </div>
        </div>
        
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600">
            <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" />
            <span>Vetted Talent</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500" />
            <span>Quick Turnaround</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600">
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-500" />
            <span>Quality Guaranteed</span>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-8 sm:mt-10">
          <a 
            href="#apply" 
            className="inline-flex items-center gap-2 bg-purple text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-200 hover:bg-purple/90 hover:scale-105 text-sm sm:text-base"
          >
            Request Talent Now
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <p className="text-xs sm:text-sm text-gray-500 mt-3">
            ⚡ Get matched with the right experts within 24 hours
          </p>
        </div>
      </div>
    </section>
  )
}