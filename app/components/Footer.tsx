import Image from 'next/image'
import { 
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  Send,
  ChevronRight,
  Briefcase,
  Sparkles,
  Users,
  Shield,
  ArrowRight,
  Heart
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#00234B] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-8 sm:pb-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#624DE3]/20 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-[#624DE3]" />
              </div>
              <span className="text-lg sm:text-xl font-extrabold text-white">
                RemoteExpert<span className="text-[#624DE3]">Jobs</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/60 max-w-sm">
              RemoteExpertJobs helps skilled professionals find remote freelance jobs, 
              remote developer jobs, remote marketing jobs, GoHighLevel jobs, virtual 
              assistant jobs, and project-based opportunities with agencies and businesses.
            </p>
            
            {/* Social Icons */}
            {/* <div className="flex gap-2.5 mt-4">
              <a 
                href="#" 
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/5 hover:bg-[#624DE3] transition-all duration-300 hover:scale-110 flex items-center justify-center text-white/40 hover:text-white border border-white/10 hover:border-[#624DE3]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/5 hover:bg-[#624DE3] transition-all duration-300 hover:scale-110 flex items-center justify-center text-white/40 hover:text-white border border-white/10 hover:border-[#624DE3]"
                aria-label="Twitter"
              >
                <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/5 hover:bg-[#624DE3] transition-all duration-300 hover:scale-110 flex items-center justify-center text-white/40 hover:text-white border border-white/10 hover:border-[#624DE3]"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/5 hover:bg-[#624DE3] transition-all duration-300 hover:scale-110 flex items-center justify-center text-white/40 hover:text-white border border-white/10 hover:border-[#624DE3]"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>
                <a href="#" className="text-white/60 hover:text-[#624DE3] transition-all duration-300 inline-flex items-center gap-1 group">
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  Home
                </a>
              </li>
              <li>
                <a href="#openings" className="text-white/60 hover:text-[#624DE3] transition-all duration-300 inline-flex items-center gap-1 group">
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  Current Openings
                </a>
              </li>
              <li>
                <a href="#apply" className="text-white/60 hover:text-[#624DE3] transition-all duration-300 inline-flex items-center gap-1 group">
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  Join Talent Network
                </a>
              </li>
              <li>
                <a href="#companies" className="text-white/60 hover:text-[#624DE3] transition-all duration-300 inline-flex items-center gap-1 group">
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  Hire Remote Experts
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
              Resources
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>
                <a href="#" className="text-white/60 hover:text-[#624DE3] transition-all duration-300 inline-flex items-center gap-1 group">
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  Remote Work Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#624DE3] transition-all duration-300 inline-flex items-center gap-1 group">
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#624DE3] transition-all duration-300 inline-flex items-center gap-1 group">
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#624DE3] transition-all duration-300 inline-flex items-center gap-1 group">
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-semibold text-white text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
              Get In Touch
            </h4>
            
            {/* Contact Info with Icons */}
            <div className="space-y-2 text-sm">
              <a href="mailto:aryan@remoteexpertjobs.com" className="text-white/60 hover:text-[#624DE3] transition-all duration-300 flex items-center gap-2 group">
                <Mail className="w-4 h-4 text-[#624DE3] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="break-all">aryan@remoteexpertjobs.com</span>
              </a>
              <a href="tel:+919893270210" className="text-white/60 hover:text-[#624DE3] transition-all duration-300 flex items-center gap-2 group">
                <Phone className="w-4 h-4 text-[#624DE3] flex-shrink-0 group-hover:scale-110 transition-transform" />
                +91 9893270210
              </a>
              <p className="text-white/60 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#624DE3] flex-shrink-0" />
                Remote - Global
              </p>
            </div>
            
            {/* Newsletter */}
            <div className="mt-4">
              <h5 className="text-sm font-medium text-white mb-2">Subscribe to Updates</h5>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3 sm:px-4 py-2.5 text-sm rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#624DE3] focus:ring-2 focus:ring-[#624DE3]/20 transition-all duration-300 w-full"
                />
                <button className="px-4 sm:px-5 py-2.5 bg-[#624DE3] text-white text-sm font-semibold rounded-xl hover:bg-[#624DE3]/90 hover:shadow-lg hover:shadow-[#624DE3]/25 transition-all duration-300 inline-flex items-center justify-center gap-2 group whitespace-nowrap">
                  Subscribe
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <p className="text-xs text-white/40 mt-2 flex items-center gap-1">
                <Shield className="w-3 h-3" />
                No spam, unsubscribe anytime
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 sm:pt-8">
          <p className="text-xs sm:text-sm text-white/40 text-center sm:text-left flex items-center gap-1.5">
            © 2026 RemoteExpertJobs. Made with 
            <Heart className="w-3 h-3 text-[#624DE3] fill-[#624DE3]" />
            for remote workers
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
            <a href="#" className="text-white/40 hover:text-[#624DE3] transition-all duration-300">Privacy</a>
            <span className="text-white/20 hidden sm:inline">|</span>
            <a href="#" className="text-white/40 hover:text-[#624DE3] transition-all duration-300">Terms</a>
            <span className="text-white/20 hidden sm:inline">|</span>
            <a href="#" className="text-white/40 hover:text-[#624DE3] transition-all duration-300">Cookies</a>
            <span className="text-white/20 hidden sm:inline">|</span>
            <a href="#" className="text-white/40 hover:text-[#624DE3] transition-all duration-300 flex items-center gap-1">
              <Globe className="w-3 h-3" />
              Global
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}