'use client'

import { useState } from 'react'
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  MessageCircle,
  Users,
  Briefcase,
  Sparkles,
  Shield,
  Clock,
  Star
} from 'lucide-react'

const faqs = [
  {
    question: 'Do you have active remote jobs right now?',
    answer: 'We have limited active openings at the moment, but we are building our talent network. You can apply now, and we will contact you when a relevant opportunity comes in.',
    icon: Briefcase
  },
  {
    question: 'Is RemoteExpertJobs only for developers?',
    answer: 'No. We work with developers, designers, marketers, automation experts, content writers, virtual assistants, project managers, and other skilled remote professionals.',
    icon: Users
  },
  {
    question: 'Are the jobs freelance or full-time?',
    answer: 'Opportunities can be freelance, project-based, part-time, or full-time depending on the client requirement.',
    icon: Clock
  },
  {
    question: 'Do I need remote work experience?',
    answer: 'Remote work experience helps, but it is not mandatory. Strong communication, reliability, and proof of work are more important.',
    icon: Star
  },
  {
    question: 'Is there any fee to apply?',
    answer: 'No. Applying to join the RemoteExpertJobs talent network is free.',
    icon: Shield
  }
]

const quickLinks = [
  'How to apply?',
  'Payment terms?',
  'Client verification?',
  'Project timeline?'
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-soft-lavender">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-purple/10 text-purple px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4">
            <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Got Questions?</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
            Frequently Asked <span className="text-purple">Questions</span>
          </h2>
          
          <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-2xl mx-auto">
            Find answers to the most common questions about joining our talent network 
            and working with RemoteExpertJobs.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {quickLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => {
                const faqIndex = index % faqs.length
                toggleFAQ(faqIndex)
                document.getElementById(`faq-${faqIndex}`)?.scrollIntoView({ 
                  behavior: 'smooth', 
                  block: 'center' 
                })
              }}
              className="bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-cool-gray hover:border-purple hover:bg-purple/5 transition-all duration-300 text-xs sm:text-sm font-medium text-gray-700 hover:text-navy"
            >
              {link}
            </button>
          ))}
        </div>
        
        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const Icon = faq.icon
            const isOpen = openIndex === index
            
            return (
              <div 
                key={index} 
                id={`faq-${index}`}
                className="bg-white rounded-2xl border border-cool-gray hover:border-purple/30 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-start gap-3 sm:gap-4 text-left focus:outline-none focus:ring-2 focus:ring-purple/20 rounded-2xl"
                >
                  {/* Icon */}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-purple" />
                  </div>
                  
                  {/* Question */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <p className="font-semibold text-sm sm:text-base text-navy pr-4">
                        {faq.question}
                      </p>
                      <div className="flex-shrink-0 mt-1">
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-purple" />
                        ) : (
                          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-purple" />
                        )}
                      </div>
                    </div>
                  </div>
                </button>
                
                {/* Answer (Accordion Content) */}
                <div 
                  className={`px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 pb-4 sm:pb-5' : 'max-h-0'
                  }`}
                >
                  <div className="pt-1 border-t border-cool-gray">
                    <p className="text-sm sm:text-base text-gray-600 pt-3 sm:pt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Still Have Questions */}
        <div className="mt-8 sm:mt-10 md:mt-12 bg-white rounded-2xl p-6 sm:p-8 text-center border border-cool-gray">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-purple" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-sm sm:text-base text-navy">Still have questions?</p>
                <p className="text-xs sm:text-sm text-gray-500">We're here to help</p>
              </div>
            </div>
            <a 
              href="mailto:hello@remoteexpertjobs.com"
              className="inline-flex items-center gap-2 bg-purple text-white font-semibold px-5 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-200 hover:bg-purple/90 text-sm sm:text-base"
            >
              Contact Us
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}