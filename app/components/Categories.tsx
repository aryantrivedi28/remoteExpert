const categories = [
  {
    title: 'GoHighLevel Experts',
    description: 'GHL developers, funnel builders, automation specialists, CRM experts, SaaS setup specialists.'
  },
  {
    title: 'Website Developers',
    description: 'WordPress, Webflow, Shopify, Next.js developers, landing page builders.'
  },
  {
    title: 'Marketing Experts',
    description: 'SEO, paid ads, growth marketers, email marketers, social media managers.'
  },
  {
    title: 'Design Experts',
    description: 'UI/UX, landing page, brand, presentation, creative designers.'
  },
  {
    title: 'Content Experts',
    description: 'SEO writers, blog writers, website copywriters, social media content creators, script writers.'
  },
  {
    title: 'Operations Experts',
    description: 'Virtual assistants, project managers, account managers, customer support, operations associates.'
  }
]

export default function Categories() {
  return (
    <section id="categories" className="section-padding bg-white">
      <div className="container-max">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">
          Remote Jobs by Skill Category
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {categories.map((cat, index) => (
            <div key={index} className="bg-soft-lavender p-5 rounded-2xl border border-cool-gray">
              <span className="font-bold text-purple">{cat.title}</span>
              <p className="text-sm text-gray-600">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}