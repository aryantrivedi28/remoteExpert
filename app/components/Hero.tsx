import { ArrowRight, CheckCircle, Briefcase, Sparkles, Star, Users, Clock, Zap, Award, Globe, Calendar } from 'lucide-react'

export default function Hero() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#F4F1FF] to-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="order-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F4F1FF] text-[#624DE3] px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-5">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Join 500+ Freelancers Already in Our Network</span>
          </div>
          
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] text-[#00234B]">
            Remote Expert Jobs for{' '}
            <span className="text-[#624DE3]">
              Skilled Freelancers
            </span>
            <br/>
            Developers &amp; Operators
          </h1>
          
          {/* Description */}
          <p className="text-base sm:text-lg text-[#00234B]/70 mt-4 max-w-lg leading-relaxed">
            Join a curated remote talent network and get matched with relevant freelance, 
            part-time, and full-time opportunities across GoHighLevel, web development, 
            marketing, automation, design, content, and operations.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-7 mt-5">
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-[#00234B]">4.8/5</span>
              <span className="text-sm text-[#00234B]/60">(200+ reviews)</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-[#00234B]/70">
              <Users className="w-4 h-4 text-[#624DE3]" />
              <span className="font-medium text-[#00234B]">500+</span>
              <span>Trusted Freelancers</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-[#00234B]/70">
              <Clock className="w-4 h-4 text-[#624DE3]" />
              <span className="font-medium text-[#00234B]">Quick</span>
              <span>Match</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
            <a 
              href="#apply" 
              className="group bg-[#624DE3] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:bg-[#624DE3]/90 hover:shadow-xl hover:shadow-[#624DE3]/25 hover:scale-[1.02] text-sm sm:text-base text-center inline-flex items-center justify-center gap-2"
            >
              Join Talent Network
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#openings" 
              className="group bg-white text-[#624DE3] font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:bg-[#624DE3] hover:text-white hover:shadow-xl hover:shadow-[#624DE3]/15 text-sm sm:text-base text-center inline-flex items-center justify-center gap-2 border-2 border-[#E7E8F2] hover:border-[#624DE3]"
            >
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
              View Current Openings
            </a>
          </div>
          
          {/* Join Us Button */}
          <div className="mt-4">
            <a 
              href="#join" 
              className="group inline-flex items-center gap-2.5 bg-[#75E8F0] text-[#00234B] font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:bg-[#75E8F0]/80 hover:shadow-xl hover:shadow-[#75E8F0]/30 hover:scale-[1.02] text-sm sm:text-base shadow-lg shadow-[#75E8F0]/20"
            >
              <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
              Join Us Today
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          {/* Trust Message */}
          <div className="flex items-start gap-2.5 mt-6">
            <CheckCircle className="w-5 h-5 text-[#75E8F0] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[#00234B]/70 leading-relaxed">
              <span className="font-medium text-[#00234B]">Apply once.</span> Get contacted when a matching remote opportunity opens. No spam, guaranteed.
            </p>
          </div>
        </div>
        
        {/* Right Content - Job Card */}
        <div className="order-2 flex justify-center lg:justify-end">
          <div className="w-full max-w-sm">
            {/* Job Card */}
            <div className="bg-white p-6 rounded-2xl shadow-2xl shadow-[#624DE3]/10 border border-[#E7E8F2] relative transition-all duration-300 hover:shadow-2xl hover:shadow-[#624DE3]/20">
              {/* "Hot" Badge */}
              <div className="absolute -top-3 -right-3 bg-[#624DE3] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg shadow-[#624DE3]/30">
                HOT
              </div>
              
              {/* Card Header */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#F4F1FF] flex items-center justify-center text-[#624DE3] font-extrabold text-lg flex-shrink-0">
                  JD
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[#00234B] text-base truncate">Digital Marketing Specialist</p>
                  <div className="flex items-center gap-1.5 text-sm text-[#00234B]/60 mt-0.5">
                    <Globe className="w-3.5 h-3.5" />
                    <span>Fully Remote</span>
                    <span className="w-1 h-1 rounded-full bg-[#E7E8F2]"></span>
                    <span>India</span>
                  </div>
                  <p className="text-lg font-bold text-[#624DE3] mt-1">₹10L – ₹18L <span className="text-sm font-normal text-[#00234B]/60">/ year</span></p>
                  <span className="text-xs bg-[#F4F1FF] text-[#624DE3] px-2.5 py-1 rounded-full inline-block mt-1.5 border border-[#E7E8F2]">
                    <Calendar className="w-3 h-3 inline mr-1" />
                    Applications close Aug 20
                  </span>
                </div>
              </div>
              
              {/* Skills Tags */}
              <div className="mt-4 pt-4 border-t border-[#E7E8F2] flex flex-wrap items-center gap-2">
                <span className="text-xs bg-[#F4F1FF] text-[#624DE3] px-3 py-1 rounded-full font-medium border border-[#E7E8F2]">
                  Performance Marketing
                </span>
                <span className="text-xs bg-[#F4F1FF] text-[#624DE3] px-3 py-1 rounded-full font-medium border border-[#E7E8F2]">
                  SEO
                </span>
                <span className="text-xs text-[#00234B]/40 hidden sm:inline">•</span>
                <span className="text-xs text-[#00234B]/60 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#75E8F0] inline-block"></span>
                  Aarohi M.
                </span>
              </div>
              
              {/* Quick Stats */}
              <div className="mt-4 pt-4 border-t border-[#E7E8F2] grid grid-cols-3 gap-3">
                <div className="text-center bg-[#F4F1FF] rounded-lg py-2 px-1">
                  <p className="text-sm font-extrabold text-[#00234B]">500+</p>
                  <p className="text-[10px] text-[#00234B]/60 font-medium">Freelancers</p>
                </div>
                <div className="text-center bg-[#F4F1FF] rounded-lg py-2 px-1">
                  <p className="text-sm font-extrabold text-[#00234B]">200+</p>
                  <p className="text-[10px] text-[#00234B]/60 font-medium">Projects</p>
                </div>
                <div className="text-center bg-[#F4F1FF] rounded-lg py-2 px-1">
                  <p className="text-sm font-extrabold text-[#00234B] flex items-center justify-center gap-0.5">
                    4.8 <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  </p>
                  <p className="text-[10px] text-[#00234B]/60 font-medium">Rating</p>
                </div>
              </div>
              
              {/* Apply Button on Card */}
              <div className="mt-4 pt-4 border-t border-[#E7E8F2]">
                <a 
                  href="#apply" 
                  className="group w-full bg-[#624DE3] text-white text-sm font-semibold py-3 rounded-xl transition-all duration-300 hover:bg-[#624DE3]/90 hover:shadow-lg hover:shadow-[#624DE3]/25 hover:scale-[1.02] inline-flex items-center justify-center gap-2"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              
              {/* Trust badge */}
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#624DE3]" />
                <span className="text-[10px] text-[#00234B]/60">Trusted by 500+ companies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}