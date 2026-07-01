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
  Shield,
  Zap
} from 'lucide-react'

const hiringNeeds = [
  {
    text: 'Hire remote GoHighLevel experts',
    icon: Code2
  },
  {
    text: 'Hire freelance website developers',
    icon: Globe
  },
  {
    text: 'Hire remote marketing specialists',
    icon: Megaphone
  },
  {
    text: 'Hire virtual assistants and project managers',
    icon: Users
  },
  {
    text: 'Build a remote delivery team',
    icon: Building2
  },
  {
    text: 'Find experts for short-term client projects',
    icon: Sparkles
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
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F4F1FF]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white text-[#624DE3] px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-[#E7E8F2]">
            <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>For Companies</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#00234B]">
            Hiring Remote <span className="text-[#624DE3]">Experts?</span>
          </h2>
          
          <p className="text-sm sm:text-base text-[#00234B]/70 max-w-2xl mx-auto mt-3 leading-relaxed">
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
                className="bg-white p-4 sm:p-5 rounded-xl text-center border border-[#E7E8F2] hover:border-[#624DE3] transition-all duration-300 hover:shadow-2xl hover:shadow-[#624DE3]/10 hover:-translate-y-0.5"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F4F1FF] flex items-center justify-center mx-auto mb-2">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#624DE3]" />
                </div>
                <p className="text-lg sm:text-xl font-extrabold text-[#00234B]">{stat.number}</p>
                <p className="text-[10px] sm:text-xs text-[#00234B]/60">{stat.label}</p>
              </div>
            )
          })}
        </div>
        
        {/* Hiring Needs Tags */}
        <div className="mt-8 sm:mt-10">
          <p className="text-sm sm:text-base font-semibold text-[#00234B] text-center mb-4">
            What We Can Help You With:
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {hiringNeeds.map((need, index) => {
              const Icon = need.icon
              return (
                <span 
                  key={index} 
                  className="group bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#E7E8F2] hover:border-[#624DE3] hover:bg-[#F4F1FF] transition-all duration-300 inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-[#00234B]/70 hover:text-[#624DE3]"
                >
                  <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-[#624DE3]" />
                  {need.text}
                </span>
              )
            })}
          </div>
        </div>
        
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#00234B]/70">
            <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#75E8F0]" />
            <span>Vetted Talent</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#00234B]/70">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#75E8F0]" />
            <span>Quick Turnaround</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#00234B]/70">
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#75E8F0]" />
            <span>Quality Guaranteed</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="text-center mt-8 sm:mt-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a 
              href="#apply" 
              className="group inline-flex items-center gap-2 bg-[#624DE3] text-white font-semibold px-8 sm:px-10 py-3 rounded-xl transition-all duration-300 hover:bg-[#624DE3]/90 hover:shadow-xl hover:shadow-[#624DE3]/25 hover:scale-105 text-sm sm:text-base"
            >
              Request Talent Now
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#openings" 
              className="group inline-flex items-center gap-2 bg-white text-[#624DE3] font-semibold px-8 sm:px-10 py-3 rounded-xl transition-all duration-300 hover:bg-[#624DE3] hover:text-white hover:shadow-xl hover:shadow-[#624DE3]/15 text-sm sm:text-base border-2 border-[#E7E8F2] hover:border-[#624DE3]"
            >
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
              Browse Experts
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Zap className="w-4 h-4 text-[#624DE3]" />
            <p className="text-xs sm:text-sm text-[#00234B]/60">
              Get matched with the right experts within <span className="font-semibold text-[#00234B]">24 hours</span>
            </p>
          </div>
        </div>

        {/* Bottom Trust Message */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-2.5 rounded-full border border-[#E7E8F2]">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#75E8F0]" />
            <span className="text-xs sm:text-sm text-[#00234B]/70">
              <span className="font-medium text-[#00234B]">Trusted by 200+ companies</span> • 
              <span className="hidden xs:inline"> 95% satisfaction rate</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}