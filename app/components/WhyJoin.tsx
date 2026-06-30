import { 
  CheckCircle, 
  Users, 
  Globe, 
  Repeat, 
  Target, 
  Briefcase, 
  Clock,
  Sparkles,
  Shield,
  Star,
  Zap,
  ArrowRight,
  Award,
  TrendingUp
} from 'lucide-react'

const benefits = [
  {
    text: 'Get discovered for relevant remote jobs and freelance projects',
    icon: Target,
    color: 'text-purple',
    bgColor: 'bg-purple/10'
  },
  {
    text: 'Work with agencies, startups, and international clients',
    icon: Globe,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10'
  },
  {
    text: 'Avoid applying repeatedly to random job posts',
    icon: Repeat,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10'
  },
  {
    text: 'Get matched based on your actual skills and experience',
    icon: Target,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10'
  },
  {
    text: 'Choose freelance, part-time, or full-time work',
    icon: Briefcase,
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10'
  },
  {
    text: 'Build long-term remote work opportunities',
    icon: Clock,
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10'
  },
  {
    text: 'Get considered for future openings even if there is no active role today',
    icon: Sparkles,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10'
  }
]

const stats = [
  { value: '500+', label: 'Active Members', icon: Users },
  { value: '200+', label: 'Projects Matched', icon: CheckCircle },
  { value: '95%', label: 'Satisfaction Rate', icon: Star },
  { value: '24hr', label: 'Avg. Response Time', icon: Zap }
]

export default function WhyJoin() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-purple/10 text-purple px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4">
            <Award className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Why Join Us</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
            Why Skilled Experts Join Our <span className="text-purple">Remote Talent Network</span>
          </h2>
          
          <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-2xl mx-auto">
            Join a community of top-tier professionals who have found success in our network. 
            Here's why thousands of experts trust us to find their next opportunity.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-10 sm:mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div 
                key={index}
                className="bg-soft-lavender p-3 sm:p-4 rounded-xl text-center border border-cool-gray hover:border-purple transition-all duration-300"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-purple mx-auto mb-1" />
                <p className="text-lg sm:text-xl font-bold text-navy">{stat.value}</p>
                <p className="text-[10px] sm:text-xs text-gray-500">{stat.label}</p>
              </div>
            )
          })}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div 
                key={index}
                className="group flex items-start gap-3 p-4 sm:p-5 rounded-xl bg-white border border-cool-gray hover:border-purple transition-all duration-300 hover:shadow-[0_4px_20px_rgba(98,77,227,0.08)] hover:-translate-y-0.5"
              >
                {/* Icon */}
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${benefit.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mt-0.5`}>
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${benefit.color}`} />
                </div>
                
                {/* Text */}
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {benefit.text}
                </p>
              </div>
            )
          })}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 sm:mt-10">
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600">
            <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" />
            <span>Verified Experts</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600">
            <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple" />
            <span>Quality Assured</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600">
            <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" />
            <span>Growing Community</span>
          </div>
        </div>

        {/* Trust Note */}
        <div className="text-center mt-8 sm:mt-10 max-w-2xl mx-auto">
          <div className="bg-soft-lavender p-4 sm:p-6 rounded-2xl border border-cool-gray">
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              <span className="font-semibold text-navy">💡 Note:</span> We do not guarantee immediate placement. 
              We are building a high-quality talent network and reach out when there is a strong match. 
              Your patience and trust in our process will be rewarded with the right opportunity.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8 sm:mt-10">
          <a 
            href="#apply" 
            className="inline-flex items-center gap-2 bg-purple text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-200 hover:bg-purple/90 hover:scale-105 text-sm sm:text-base"
          >
            Join Our Network Today
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}