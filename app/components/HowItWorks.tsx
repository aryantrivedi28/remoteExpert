const steps = [
  {
    number: '1',
    title: 'Apply Once',
    description: 'Fill out a short application form with your skills, experience, portfolio, availability, and expected pricing.'
  },
  {
    number: '2',
    title: 'Get Added to Our Talent Network',
    description: 'Our team reviews your profile and adds you to the right talent category.'
  },
  {
    number: '3',
    title: 'Get Matched With Relevant Opportunities',
    description: 'When a client or project requirement comes in, we reach out to the most relevant experts.'
  },
  {
    number: '4',
    title: 'Start Remote Work',
    description: 'Once selected, you receive the scope, payment terms, contract, and project details.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-soft-lavender">
      <div className="container-max">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">
          How RemoteExpertJobs Works
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-12 h-12 bg-purple text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                {step.number}
              </div>
              <h3 className="font-bold mt-3">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}