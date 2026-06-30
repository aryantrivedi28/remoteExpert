import Image from 'next/image'
import { 
  Globe,
  Mail, 
  Phone, 
  MapPin,
  Send,
  ChevronRight
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-8 sm:pb-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src="/remoteExpertLogo.png" 
                alt="Remote Expert Jobs" 
                width={40} 
                height={40} 
                className="h-8 sm:h-10 w-auto"
              />
              <span className="text-lg sm:text-xl font-bold text-white">
                RemoteExpert<span className="text-purple">Jobs</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 max-w-sm">
              RemoteExpertJobs helps skilled professionals find remote freelance jobs, 
              remote developer jobs, remote marketing jobs, GoHighLevel jobs, virtual 
              assistant jobs, and project-based opportunities with agencies and businesses.
            </p>
            
            {/* Social Icons with Lucide */}
            {/* <div className="flex gap-3 mt-4">
              <a 
                href="#" 
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-purple transition-colors flex items-center justify-center text-gray-600 hover:text-white"
                aria-label="Website"
              >
                <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-purple transition-colors flex items-center justify-center text-gray-600 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-purple transition-colors flex items-center justify-center text-gray-600 hover:text-white"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-purple transition-colors flex items-center justify-center text-gray-600 hover:text-white"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
                <a href="#" className="text-gray-600 hover:text-purple transition-colors inline-flex items-center gap-1">
                  <ChevronRight className="w-3 h-3" />
                  Home
                </a>
              </li>
              <li>
                <a href="#openings" className="text-gray-600 hover:text-purple transition-colors inline-flex items-center gap-1">
                  <ChevronRight className="w-3 h-3" />
                  Current Openings
                </a>
              </li>
              <li>
                <a href="#apply" className="text-gray-600 hover:text-purple transition-colors inline-flex items-center gap-1">
                  <ChevronRight className="w-3 h-3" />
                  Join Talent Network
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple transition-colors inline-flex items-center gap-1">
                  <ChevronRight className="w-3 h-3" />
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
                <a href="#" className="text-gray-600 hover:text-purple transition-colors inline-flex items-center gap-1">
                  <ChevronRight className="w-3 h-3" />
                  Remote Work Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple transition-colors inline-flex items-center gap-1">
                  <ChevronRight className="w-3 h-3" />
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple transition-colors inline-flex items-center gap-1">
                  <ChevronRight className="w-3 h-3" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple transition-colors inline-flex items-center gap-1">
                  <ChevronRight className="w-3 h-3" />
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
              <p className="text-gray-600 flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple flex-shrink-0" />
                <span className="break-all">aryan@remoteexpertjobs.com</span>
              </p>
              <p className="text-gray-600 flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple flex-shrink-0" />
                +91 9893270210
              </p>
              <p className="text-gray-600 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple flex-shrink-0" />
                Remote - Global
              </p>
            </div>
            
            {/* Newsletter */}
            <div className="mt-4">
              <h5 className="text-sm font-medium text-white mb-2">Subscribe to Updates</h5>
              <div className="flex flex-col sm:flex-row">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3 sm:px-4 py-2 text-sm rounded-lg sm:rounded-l-lg sm:rounded-r-none bg-white/10 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple w-full"
                />
                <button className="px-3 sm:px-4 py-2 bg-purple text-black text-sm font-medium rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:bg-purple/80 transition-colors mt-2 sm:mt-0 inline-flex items-center justify-center gap-1">
                  Subscribe
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 sm:pt-8">
          <p className="text-xs sm:text-sm text-gray-800 text-center sm:text-left">
            © 2026 RemoteExpertJobs. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-800">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}