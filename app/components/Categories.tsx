import { 
  Code2, 
  Globe, 
  Megaphone, 
  Palette, 
  PenTool, 
  Briefcase,
  ArrowRight,
  Zap,
  TrendingUp,
  Layers,
  FileText,
  Users
} from 'lucide-react'

const categories = [
  {
    title: 'GoHighLevel Experts',
    description: 'GHL developers, funnel builders, automation specialists, CRM experts, SaaS setup specialists.',
    icon: Zap,
    color: 'text-purple',
    bgColor: 'bg-purple/10'
  },
  {
    title: 'Website Developers',
    description: 'WordPress, Webflow, Shopify, Next.js developers, landing page builders.',
    icon: Code2,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10'
  },
  {
    title: 'Marketing Experts',
    description: 'SEO, paid ads, growth marketers, email marketers, social media managers.',
    icon: Megaphone,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10'
  },
  {
    title: 'Design Experts',
    description: 'UI/UX, landing page, brand, presentation, creative designers.',
    icon: Palette,
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10'
  },
  {
    title: 'Content Experts',
    description: 'SEO writers, blog writers, website copywriters, social media content creators, script writers.',
    icon: PenTool,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10'
  },
  {
    title: 'Operations Experts',
    description: 'Virtual assistants, project managers, account managers, customer support, operations associates.',
    icon: Users,
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10'
  }
]

export default function Categories() {
  return (
    <section id="categories" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-purple/10 text-purple px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4">
            <Layers className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Expert Categories</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
            Remote Jobs by <span className="text-purple">Skill Category</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-2xl mx-auto">
            Find the perfect remote opportunity based on your expertise. Browse through our 
            curated categories and discover roles that match your skills.
          </p>
        </div>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {categories.map((cat, index) => {
            const Icon = cat.icon
            return (
              <div 
                key={index} 
                className="group bg-soft-lavender p-5 sm:p-6 rounded-2xl border border-cool-gray hover:border-purple transition-all duration-300 hover:shadow-[0_8px_30px_rgba(98,77,227,0.12)] hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  {/* Icon Container */}
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${cat.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${cat.color}`} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm sm:text-base text-navy mb-1">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {cat.description}
                    </p>
                    
                    {/* View Jobs Link */}
                    <a 
                      href="#openings" 
                      className="inline-flex items-center gap-1 mt-2 text-xs sm:text-sm font-medium text-purple hover:text-purple/80 transition-colors group/link"
                    >
                      View Jobs
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-10 sm:mt-12 md:mt-16">
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Don't see your category? We're always expanding our network.
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