const hiringNeeds = [
  'Hire remote GoHighLevel experts',
  'Hire freelance website developers',
  'Hire remote marketing specialists',
  'Hire virtual assistants and project managers',
  'Build a remote delivery team',
  'Find experts for short-term client projects'
]

export default function Companies() {
  return (
    <section className="section-padding bg-soft-lavender">
      <div className="container-max text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-navy">
          Hiring Remote Experts?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2">
          If you are an agency, startup, or business looking for vetted remote talent, 
          RemoteExpertJobs can help you find developers, marketers, designers, automation 
          experts, content creators, and operations professionals for project-based or 
          dedicated roles.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mt-6 text-sm font-medium">
          {hiringNeeds.map((need, index) => (
            <span key={index} className="bg-white px-4 py-2 rounded-full border border-cool-gray">
              {need}
            </span>
          ))}
        </div>
        
        <a href="#apply" className="btn-primary inline-block mt-8">
          Request Talent
        </a>
      </div>
    </section>
  )
}