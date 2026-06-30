import { ArrowRight, CheckCircle, Briefcase, Sparkles, Star, Users, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-soft-lavender to-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left order-2 md:order-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-purple/10 text-purple px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Join 500+ Freelancers Already in Our Network</span>
          </div>
          
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-navy">
            Remote Expert Jobs for{' '}
            <span className="text-purple">Skilled Freelancers</span>
            <br className="hidden sm:block" />
            Developers &amp; Operators
          </h1>
          
          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-3 sm:mt-4 max-w-lg mx-auto md:mx-0">
            Join a curated remote talent network and get matched with relevant freelance, 
            part-time, and full-time opportunities across GoHighLevel, web development, 
            marketing, automation, design, content, and operations.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4 justify-center md:justify-start">
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-medium text-navy">4.8/5</span>
            </div>
            <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
              <Users className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>500+ Trusted Freelancers</span>
            </div>
            <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Quick Match</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col xs:flex-row flex-wrap gap-3 mt-6 sm:mt-8 justify-center md:justify-start">
            <a 
              href="#apply" 
              className="bg-purple text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-200 hover:bg-purple/90 hover:scale-105 text-sm sm:text-base text-center inline-flex items-center justify-center gap-2"
            >
              Join Talent Network
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a 
              href="#openings" 
              className="border-2 border-purple text-purple font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-200 hover:bg-purple hover:text-white text-sm sm:text-base text-center inline-flex items-center justify-center gap-2"
            >
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
              View Current Openings
            </a>
          </div>
          
          {/* Trust Message */}
          <p className="text-xs sm:text-sm text-gray-500 mt-4 flex items-center gap-1.5 justify-center md:justify-start">
            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
            <span>Apply once. Get contacted when a matching remote opportunity opens.</span>
          </p>
        </div>
        
        {/* Right Content - Job Card */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="w-full max-w-[280px] sm:max-w-sm">
            {/* Job Card */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-[0_8px_24px_rgba(98,77,227,0.08)] border border-cool-gray relative">
              {/* "Hot" Badge */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                HOT
              </div>
              
              {/* Card Header */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-soft-lavender flex items-center justify-center text-purple font-bold text-sm sm:text-lg flex-shrink-0">
                  JD
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm sm:text-base truncate">Digital Marketing Specialist</p>
                  <p className="text-xs sm:text-sm text-gray-500">Fully Remote · India</p>
                  <p className="text-sm sm:text-base font-medium text-purple">₹10L – ₹18L / year</p>
                  <span className="text-[10px] sm:text-xs bg-cyan/20 text-navy px-2 py-0.5 rounded-full inline-block mt-1">
                    Applications close Aug 20
                  </span>
                </div>
              </div>
              
              {/* Skills Tags */}
              <div className="mt-3 pt-3 border-t border-cool-gray flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="text-[10px] sm:text-xs bg-soft-lavender px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                  Performance Marketing
                </span>
                <span className="text-[10px] sm:text-xs text-gray-400 hidden xs:inline">•</span>
                <span className="text-[10px] sm:text-xs text-gray-500">Aarohi M.</span>
              </div>
              
              {/* Quick Stats */}
              <div className="mt-3 pt-3 border-t border-cool-gray grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-navy">500+</p>
                  <p className="text-[10px] sm:text-xs text-gray-500">Freelancers</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-navy">200+</p>
                  <p className="text-[10px] sm:text-xs text-gray-500">Projects</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-navy">4.8★</p>
                  <p className="text-[10px] sm:text-xs text-gray-500">Rating</p>
                </div>
              </div>
              
              {/* Apply Button on Card */}
              <div className="mt-3 pt-3 border-t border-cool-gray">
                <a 
                  href="#apply" 
                  className="w-full bg-purple text-white text-xs sm:text-sm font-semibold py-2 sm:py-2.5 rounded-lg hover:bg-purple/90 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Apply Now
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}