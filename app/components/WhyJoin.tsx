const benefits = [
  'Get discovered for relevant remote jobs and freelance projects',
  'Work with agencies, startups, and international clients',
  'Avoid applying repeatedly to random job posts',
  'Get matched based on your actual skills and experience',
  'Choose freelance, part-time, or full-time work',
  'Build long-term remote work opportunities',
  'Get considered for future openings even if there is no active role today'
]

export default function WhyJoin() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">
          Why Skilled Experts Join Our Remote Talent Network
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mt-8">
          <ul className="space-y-2 text-gray-700">
            {benefits.slice(0, 4).map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">✅ {benefit}</li>
            ))}
          </ul>
          <ul className="space-y-2 text-gray-700">
            {benefits.slice(4).map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">✅ {benefit}</li>
            ))}
          </ul>
        </div>
        
        <p className="text-center text-sm text-gray-500 mt-6 max-w-xl mx-auto">
          We do not guarantee immediate placement. We are building a high-quality talent network 
          and reach out when there is a strong match.
        </p>
      </div>
    </section>
  )
}