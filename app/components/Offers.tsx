const offers = [
  {
    icon: '💼',
    title: 'Freelance Remote Projects',
    description: 'Short-term and project-based work for developers, designers, marketers, writers, and automation experts.'
  },
  {
    icon: '⏳',
    title: 'Part-Time Remote Roles',
    description: 'Flexible roles for experts who want stable monthly work without a full-time commitment.'
  },
  {
    icon: '🚀',
    title: 'Full-Time Remote Opportunities',
    description: 'Dedicated resource roles for clients who need long-term remote support.'
  },
  {
    icon: '🤝',
    title: 'Agency & Client Projects',
    description: 'Work with businesses, agencies, startups, and service companies looking for reliable remote experts.'
  }
]

export default function Offers() {
  return (
    <section className="section-padding bg-soft-lavender">
      <div className="container-max">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">
          Find Remote Work That Matches Your Expertise
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mt-2">
          RemoteExpertJobs helps skilled professionals connect with remote work opportunities 
          across technical, creative, marketing, and operations roles. Instead of applying again 
          and again, you can submit your profile once and get considered for relevant client 
          projects, agency roles, freelance work, and long-term remote positions.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {offers.map((offer, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl card-shadow border border-cool-gray">
              <span className="text-3xl">{offer.icon}</span>
              <h3 className="font-bold mt-2">{offer.title}</h3>
              <p className="text-sm text-gray-500">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}