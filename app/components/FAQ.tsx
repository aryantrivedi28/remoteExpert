const faqs = [
  {
    question: 'Do you have active remote jobs right now?',
    answer: 'We have limited active openings at the moment, but we are building our talent network. You can apply now, and we will contact you when a relevant opportunity comes in.'
  },
  {
    question: 'Is RemoteExpertJobs only for developers?',
    answer: 'No. We work with developers, designers, marketers, automation experts, content writers, virtual assistants, project managers, and other skilled remote professionals.'
  },
  {
    question: 'Are the jobs freelance or full-time?',
    answer: 'Opportunities can be freelance, project-based, part-time, or full-time depending on the client requirement.'
  },
  {
    question: 'Do I need remote work experience?',
    answer: 'Remote work experience helps, but it is not mandatory. Strong communication, reliability, and proof of work are more important.'
  },
  {
    question: 'Is there any fee to apply?',
    answer: 'No. Applying to join the RemoteExpertJobs talent network is free.'
  }
]

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-soft-lavender">
      <div className="container-max max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mt-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-5 rounded-2xl border border-cool-gray">
              <p className="font-bold">{faq.question}</p>
              <p className="text-gray-600 text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}