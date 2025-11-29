'use client'

import { ChevronDown, Search, Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState, useMemo } from 'react'

const faqs = [
  {
    question: 'Is AutoBot WA legal and WhatsApp-approved?',
    answer:
      'Yes, AutoBot WA operates in full compliance with WhatsApp Business API policies. We use the official WhatsApp Business API, which is designed for businesses to communicate with customers at scale. All messages are sent through approved channels with proper opt-in mechanisms.',
  },
  {
    question: 'How quickly can I start sending messages?',
    answer:
      'You can start sending messages within minutes of signing up. Simply create your account, import your contacts, and set up your first campaign. Our intuitive dashboard makes it easy to get started, and our support team is available to help if you need assistance.',
  },
  {
    question: 'Do I need to save contacts in my phone?',
    answer:
      'No, you don\'t need to save contacts in your phone. AutoBot WA provides a comprehensive contact management system where you can import, organize, and manage all your contacts directly in the platform. You can upload contacts via CSV or integrate with your CRM.',
  },
  {
    question: 'What happens if I exceed my message limit?',
    answer:
      'If you exceed your monthly message limit, you\'ll receive a notification. You can either upgrade to a higher plan or purchase additional message credits. We never cut off your service abruptly - you\'ll always have options to continue your campaigns.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Absolutely! You can cancel your subscription at any time with no penalties or fees. Your account will remain active until the end of your current billing period, and you\'ll continue to have access to all features until then. No questions asked.',
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'We offer multiple support channels based on your plan. Starter plans include email support, Growth plans get priority email support, and Business plans include 24/7 phone support plus a dedicated account manager. All plans also have access to our comprehensive knowledge base and video tutorials.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes, we take data security very seriously. All data is encrypted in transit and at rest using bank-level encryption. We are GDPR and SOC 2 compliant, and we never share your data with third parties without your explicit consent.',
  },
  {
    question: 'Can I use AutoBot WA for personal use?',
    answer:
      'AutoBot WA is designed for businesses and organizations. While personal use is technically possible, we recommend using the official WhatsApp app for personal messaging. Our platform is optimized for business communication, marketing campaigns, and customer support.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return faqs
    const query = searchQuery.toLowerCase()
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
    )
  }, [searchQuery])

  const toggleFAQ = (index: number) => {
    const actualIndex = faqs.findIndex((_, i) => filteredFaqs[index] === faqs[i])
    setOpenIndex(openIndex === actualIndex ? null : actualIndex)
  }

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 text-[var(--text-primary)]">
            Frequently Asked
            <br />
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Everything you need to know about AutoBot WA. Can't find what you're looking for?
            Contact our support team.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-secondary)]" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={cn(
                'w-full pl-12 pr-4 py-3 rounded-xl',
                'bg-[var(--card-background)] border border-[var(--border)]',
                'text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]',
                'focus:outline-none focus:ring-2 focus:ring-[var(--accent)]',
                'transition-all'
              )}
            />
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[var(--text-secondary)]">No FAQs found matching your search.</p>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const actualIndex = faqs.indexOf(faq)
              const isOpen = openIndex === actualIndex

              return (
                <div
                  key={actualIndex}
                  className={cn(
                    'glass rounded-xl overflow-hidden transition-all duration-300',
                    'border border-[var(--border)]',
                    isOpen && 'border-[var(--accent)]/50'
                  )}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[var(--background-secondary)] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-[var(--text-primary)] pr-4">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <Minus
                        className={cn(
                          'w-5 h-5 text-[var(--accent)] flex-shrink-0 transition-all duration-300'
                        )}
                      />
                    ) : (
                      <Plus
                        className={cn(
                          'w-5 h-5 text-[var(--text-secondary)] flex-shrink-0 transition-all duration-300'
                        )}
                      />
                    )}
                  </button>
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300 ease-in-out',
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    )}
                  >
                    <div className="px-6 pb-5 text-[var(--text-secondary)] leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
    </section>
  )
}

