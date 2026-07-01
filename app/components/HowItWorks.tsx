import { 
  FileText, 
  Users, 
  Target, 
  Rocket,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Clock,
  Briefcase,
  Star,
  Zap
} from 'lucide-react'

const steps = [
  {
    number: '1',
    title: 'Apply Once',
    description: 'Fill out a short application form with your skills, experience, portfolio, availability, and expected pricing.',
    icon: FileText
  },
  {
    number: '2',
    title: 'Get Added to Our Talent Network',
    description: 'Our team reviews your profile and adds you to the right talent category.',
    icon: Users
  },
  {
    number: '3',
    title: 'Get Matched With Relevant Opportunities',
    description: 'When a client or project requirement comes in, we reach out to the most relevant experts.',
    icon: Target
  },
  {
    number: '4',
    title: 'Start Remote Work',
    description: 'Once selected, you receive the scope, payment terms, contract, and project details.',
    icon: Rocket
  }
]

const stats = [
  { label: 'Average match time', value: '24hrs', icon: Clock },
  { label: 'Success rate', value: '95%', icon: Star },
  { label: 'Active projects', value: '200+', icon: Briefcase }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F4F1FF]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-white text-[#624DE3] px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-[#E7E8F2]">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Simple Process</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#00234B]">
            How <span className="text-[#624DE3]">RemoteExpertJobs</span> Works
          </h2>
          
          <p className="text-sm sm:text-base text-[#00234B]/70 mt-3 max-w-2xl mx-auto leading-relaxed">
            Get started in 4 simple steps and join our network of skilled remote professionals.
            We make it easy to find the perfect opportunity.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div 
                key={step.number} 
                className="group relative bg-white p-6 sm:p-8 rounded-2xl border border-[#E7E8F2] hover:border-[#624DE3] transition-all duration-300 hover:shadow-2xl hover:shadow-[#624DE3]/10 hover:-translate-y-1"
              >
                {/* Step Number Background */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#F4F1FF] flex items-center justify-center text-xs font-bold text-[#624DE3] border border-[#E7E8F2]">
                  {step.number}
                </div>

                {/* Icon Container */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#F4F1FF] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#624DE3]" />
                </div>
                
                {/* Content */}
                <h3 className="text-base sm:text-lg font-bold text-[#00234B] text-center mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#00234B]/70 text-center leading-relaxed">
                  {step.description}
                </p>

                {/* Step Number Badge - Bottom */}
                <div className="mt-4 flex justify-center">
                  <span className="text-xs font-semibold text-[#624DE3] bg-[#F4F1FF] px-3 py-1 rounded-full border border-[#E7E8F2]">
                    Step {step.number}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Connection Line (Desktop only) */}
        <div className="hidden lg:block relative mt-8">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-[#624DE3]/20 via-[#624DE3]/40 to-[#624DE3]/20 -translate-y-1/2"></div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12 max-w-3xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div 
                key={index}
                className="bg-white p-4 sm:p-5 rounded-xl text-center border border-[#E7E8F2] hover:border-[#624DE3] transition-all duration-300 hover:shadow-lg hover:shadow-[#624DE3]/10"
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#624DE3]" />
                  <p className="text-lg sm:text-xl font-extrabold text-[#00234B]">{stat.value}</p>
                </div>
                <p className="text-xs sm:text-sm text-[#00234B]/60">{stat.label}</p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 sm:mt-12 md:mt-14">
          <p className="text-sm sm:text-base text-[#00234B]/70 mb-4 font-medium">
            Ready to start your remote journey?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a 
              href="#apply" 
              className="group inline-flex items-center gap-2 bg-[#624DE3] text-white font-semibold px-8 sm:px-10 py-3 rounded-xl transition-all duration-300 hover:bg-[#624DE3]/90 hover:shadow-xl hover:shadow-[#624DE3]/25 hover:scale-105 text-sm sm:text-base"
            >
              Apply Now
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#openings" 
              className="group inline-flex items-center gap-2 bg-white text-[#624DE3] font-semibold px-8 sm:px-10 py-3 rounded-xl transition-all duration-300 hover:bg-[#624DE3] hover:text-white hover:shadow-xl hover:shadow-[#624DE3]/15 text-sm sm:text-base border-2 border-[#E7E8F2] hover:border-[#624DE3]"
            >
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
              View Openings
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Trust Message */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-2.5 rounded-full border border-[#E7E8F2]">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#75E8F0]" />
            <span className="text-xs sm:text-sm text-[#00234B]/70">
              <span className="font-medium text-[#00234B]">Trusted process</span> • 
              <span className="hidden xs:inline"> 500+ freelancers placed</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}