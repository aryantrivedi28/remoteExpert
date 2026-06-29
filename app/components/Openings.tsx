const openings = [
  {
    title: 'GoHighLevel Developer',
    type: 'Remote | Freelance / Project-Based',
    description: 'Build funnels, websites, workflows, forms, calendars, automations, and CRM systems inside GoHighLevel.'
  },
  {
    title: 'Funnel & Landing Page Designer',
    type: 'Remote | Project-Based',
    description: 'Design high-converting landing pages, funnels, and website pages for service businesses and agencies.'
  },
  {
    title: 'CRM & Automation Specialist',
    type: 'Remote | Freelance',
    description: 'Set up workflows, lead routing, pipeline automations, email/SMS flows, and client CRM systems.'
  },
  {
    title: 'SEO Content Writer',
    type: 'Remote | Freelance',
    description: 'Write SEO-friendly blogs, landing pages, service pages, and niche content for agency websites.'
  },
  {
    title: 'Remote Project Manager',
    type: 'Remote | Part-Time / Freelance',
    description: 'Manage client communication, task tracking, documentation, deadlines, and project delivery.'
  }
]

export default function Openings() {
  return (
    <section id="openings" className="section-padding bg-white">
      <div className="container-max">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">
          Current Remote Openings
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mt-2">
          We are currently building our remote expert network and have limited active openings. 
          You can still apply to join the talent pool, and our team will reach out when a relevant 
          opportunity comes in.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {openings.map((job, index) => (
            <div key={index} className="job-card">
              <h3 className="font-bold text-xl">{job.title}</h3>
              <p className="text-sm text-purple font-medium">{job.type}</p>
              <p className="text-gray-600 text-sm mt-1">{job.description}</p>
              <a href="#apply" className="inline-block mt-3 text-purple font-semibold text-sm">
                View Role →
              </a>
            </div>
          ))}
          
          <div className="job-card border-2 border-dashed border-purple/30 flex flex-col items-center justify-center text-center">
            <p className="font-medium text-purple">Don&apos;t see the right role?</p>
            <a href="#apply" className="btn-primary text-sm py-2 px-5 mt-2">
              Join our talent network
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}