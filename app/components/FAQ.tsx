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
  Star,
  ArrowRight
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
    <section id="faq" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F4F1FF]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-white text-[#624DE3] px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-[#E7E8F2]">
            <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Got Questions?</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#00234B]">
            Frequently Asked <span className="text-[#624DE3]">Questions</span>
          </h2>
          
          <p className="text-sm sm:text-base text-[#00234B]/70 mt-3 max-w-2xl mx-auto leading-relaxed">
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
              className="bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#E7E8F2] hover:border-[#624DE3] hover:bg-[#F4F1FF] transition-all duration-300 text-xs sm:text-sm font-medium text-[#00234B]/70 hover:text-[#624DE3]"
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
                className="bg-white rounded-2xl border border-[#E7E8F2] hover:border-[#624DE3]/30 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg hover:shadow-[#624DE3]/5"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-start gap-3 sm:gap-4 text-left focus:outline-none focus:ring-2 focus:ring-[#624DE3]/20 rounded-2xl"
                >
                  {/* Icon */}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F4F1FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#624DE3]" />
                  </div>
                  
                  {/* Question */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <p className="font-semibold text-sm sm:text-base text-[#00234B] pr-4">
                        {faq.question}
                      </p>
                      <div className="flex-shrink-0 mt-1">
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#624DE3]" />
                        ) : (
                          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#00234B]/40 group-hover:text-[#624DE3]" />
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
                  <div className="pt-1 border-t border-[#E7E8F2]">
                    <p className="text-sm sm:text-base text-[#00234B]/70 pt-3 sm:pt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Still Have Questions */}
        <div className="mt-8 sm:mt-10 md:mt-12 bg-white rounded-2xl p-6 sm:p-8 text-center border border-[#E7E8F2] shadow-lg shadow-[#624DE3]/5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F4F1FF] flex items-center justify-center">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#624DE3]" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-sm sm:text-base text-[#00234B]">Still have questions?</p>
                <p className="text-xs sm:text-sm text-[#00234B]/60">We're here to help</p>
              </div>
            </div>
            <a 
              href="mailto:hello@remoteexpertjobs.com"
              className="group inline-flex items-center gap-2 bg-[#624DE3] text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl transition-all duration-300 hover:bg-[#624DE3]/90 hover:shadow-xl hover:shadow-[#624DE3]/25 hover:scale-[1.02] text-sm sm:text-base"
            >
              Contact Us
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom Trust Badge */}
        <div className="mt-6 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-2.5 rounded-full border border-[#E7E8F2]">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#624DE3]" />
            <span className="text-xs sm:text-sm text-[#00234B]/70">
              <span className="font-medium text-[#00234B]">500+ experts</span> have already joined
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}