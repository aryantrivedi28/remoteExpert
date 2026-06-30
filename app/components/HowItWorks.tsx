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
  Star
} from 'lucide-react'

const steps = [
  {
    number: '1',
    title: 'Apply Once',
    description: 'Fill out a short application form with your skills, experience, portfolio, availability, and expected pricing.',
    icon: FileText,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple/10'
  },
  {
    number: '2',
    title: 'Get Added to Our Talent Network',
    description: 'Our team reviews your profile and adds you to the right talent category.',
    icon: Users,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-500/10'
  },
  {
    number: '3',
    title: 'Get Matched With Relevant Opportunities',
    description: 'When a client or project requirement comes in, we reach out to the most relevant experts.',
    icon: Target,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-500/10'
  },
  {
    number: '4',
    title: 'Start Remote Work',
    description: 'Once selected, you receive the scope, payment terms, contract, and project details.',
    icon: Rocket,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-500/10'
  }
]

const stats = [
  { label: 'Average match time', value: '24hrs', icon: Clock },
  { label: 'Success rate', value: '95%', icon: Star },
  { label: 'Active projects', value: '200+', icon: Briefcase }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-soft-lavender">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-purple/10 text-purple px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Simple Process</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
            How <span className="text-purple">RemoteExpertJobs</span> Works
          </h2>
          
          <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-2xl mx-auto">
            Get started in 4 simple steps and join our network of skilled remote professionals.
            We make it easy to find the perfect opportunity.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div 
                key={step.number} 
                className="group relative bg-white p-6 sm:p-8 rounded-2xl border border-cool-gray hover:border-purple transition-all duration-300 hover:shadow-[0_8px_30px_rgba(98,77,227,0.12)] hover:-translate-y-1"
              >
                {/* Step Number Background */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-purple/5 flex items-center justify-center text-xs font-bold text-purple/30">
                  {step.number}
                </div>

                {/* Icon Container */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${step.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 sm:w-7 sm:h-7 text-purple`} />
                </div>
                
                {/* Content */}
                <h3 className="text-base sm:text-lg font-bold text-navy text-center mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 text-center leading-relaxed">
                  {step.description}
                </p>

                {/* Step Number Badge - Bottom */}
                <div className="mt-4 flex justify-center">
                  <span className="text-xs font-semibold text-purple/60 bg-purple/5 px-3 py-1 rounded-full">
                    Step {step.number}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Connection Line (Desktop only) */}
        <div className="hidden lg:block relative mt-8">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-purple/20 via-purple/40 to-purple/20 -translate-y-1/2"></div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12 max-w-3xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div 
                key={index}
                className="bg-white p-4 sm:p-5 rounded-xl text-center border border-cool-gray hover:border-purple transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-purple" />
                  <p className="text-lg sm:text-xl font-bold text-navy">{stat.value}</p>
                </div>
                <p className="text-xs sm:text-sm text-gray-500">{stat.label}</p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Ready to start your remote journey?
          </p>
          <a 
            href="#apply" 
            className="inline-flex items-center gap-2 bg-purple text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-200 hover:bg-purple/90 hover:scale-105 text-sm sm:text-base"
          >
            Apply Now
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}