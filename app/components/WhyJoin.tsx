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
    icon: Target
  },
  {
    text: 'Work with agencies, startups, and international clients',
    icon: Globe
  },
  {
    text: 'Avoid applying repeatedly to random job posts',
    icon: Repeat
  },
  {
    text: 'Get matched based on your actual skills and experience',
    icon: Target
  },
  {
    text: 'Choose freelance, part-time, or full-time work',
    icon: Briefcase
  },
  {
    text: 'Build long-term remote work opportunities',
    icon: Clock
  },
  {
    text: 'Get considered for future openings even if there is no active role today',
    icon: Sparkles
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
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F4F1FF] text-[#624DE3] px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-[#E7E8F2]">
            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Why Join Us</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#00234B]">
            Why Skilled Experts Join Our <span className="text-[#624DE3]">Remote Talent Network</span>
          </h2>
          
          <p className="text-sm sm:text-base text-[#00234B]/70 mt-3 max-w-2xl mx-auto leading-relaxed">
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
                className="bg-[#F4F1FF] p-3 sm:p-4 rounded-xl text-center border border-[#E7E8F2] hover:border-[#624DE3] transition-all duration-300 hover:shadow-lg hover:shadow-[#624DE3]/10"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#624DE3] mx-auto mb-1" />
                <p className="text-lg sm:text-xl font-extrabold text-[#00234B]">{stat.value}</p>
                <p className="text-[10px] sm:text-xs text-[#00234B]/60">{stat.label}</p>
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
                className="group flex items-start gap-3 p-4 sm:p-5 rounded-xl bg-white border border-[#E7E8F2] hover:border-[#624DE3] transition-all duration-300 hover:shadow-2xl hover:shadow-[#624DE3]/10 hover:-translate-y-0.5"
              >
                {/* Icon */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F4F1FF] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mt-0.5">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#624DE3]" />
                </div>
                
                {/* Text */}
                <p className="text-xs sm:text-sm text-[#00234B]/80 leading-relaxed">
                  {benefit.text}
                </p>
              </div>
            )
          })}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 sm:mt-10">
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#00234B]/70">
            <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#75E8F0]" />
            <span>Verified Experts</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#00234B]/70">
            <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#75E8F0]" />
            <span>Quality Assured</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#00234B]/70">
            <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#75E8F0]" />
            <span>Growing Community</span>
          </div>
        </div>

        {/* Trust Note */}
        <div className="text-center mt-8 sm:mt-10 max-w-2xl mx-auto">
          <div className="bg-[#F4F1FF] p-4 sm:p-6 rounded-2xl border border-[#E7E8F2]">
            <p className="text-xs sm:text-sm text-[#00234B]/70 leading-relaxed">
              <span className="font-semibold text-[#00234B]">💡 Note:</span> We do not guarantee immediate placement. 
              We are building a high-quality talent network and reach out when there is a strong match. 
              Your patience and trust in our process will be rewarded with the right opportunity.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center mt-8 sm:mt-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a 
              href="#apply" 
              className="group inline-flex items-center gap-2 bg-[#624DE3] text-white font-semibold px-8 sm:px-10 py-3 rounded-xl transition-all duration-300 hover:bg-[#624DE3]/90 hover:shadow-xl hover:shadow-[#624DE3]/25 hover:scale-105 text-sm sm:text-base"
            >
              Join Our Network Today
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#openings" 
              className="group inline-flex items-center gap-2 bg-white text-[#624DE3] font-semibold px-8 sm:px-10 py-3 rounded-xl transition-all duration-300 hover:bg-[#624DE3] hover:text-white hover:shadow-xl hover:shadow-[#624DE3]/15 text-sm sm:text-base border-2 border-[#E7E8F2] hover:border-[#624DE3]"
            >
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
              View Opportunities
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}