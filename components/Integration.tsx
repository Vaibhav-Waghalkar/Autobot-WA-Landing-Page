'use client'

import { useEffect, useState, useRef } from 'react'
import { cn } from '@/lib/utils'
import { ExternalLink } from 'lucide-react'

const integrations = [
  { name: 'Zapier', logo: 'Z' },
  { name: 'HubSpot', logo: 'H' },
  { name: 'Salesforce', logo: 'S' },
  { name: 'Google Sheets', logo: 'G' },
  { name: 'Shopify', logo: 'S' },
  { name: 'Slack', logo: 'S' },
  { name: 'Mailchimp', logo: 'M' },
  { name: 'Stripe', logo: 'S' },
  { name: 'Notion', logo: 'N' },
  { name: 'Airtable', logo: 'A' },
  { name: 'Trello', logo: 'T' },
  { name: 'Asana', logo: 'A' },
]

export default function Integration() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--background-secondary)]">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 text-[var(--text-primary)]">
            Integrates with Your
            <br />
            <span className="gradient-text">Favorite Tools</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Connect AutoBot WA with the tools you already use. Seamless integration with 50+ popular platforms.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6 mb-8">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className={cn(
                'glass rounded-xl p-6 flex flex-col items-center justify-center',
                'transition-all duration-300 cursor-pointer group',
                'hover:scale-110 hover:border-[var(--accent)]/50',
                'border border-[var(--border)]',
                visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--background-secondary)] flex items-center justify-center mb-3 group-hover:bg-[var(--accent)]/10 transition-colors">
                <span className="text-xl font-bold text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors">
                  {integration.logo}
                </span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] text-center group-hover:text-[var(--text-primary)] transition-colors">
                {integration.name}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Link */}
        <div className="text-center">
          <a
            href="#"
            className={cn(
              'inline-flex items-center gap-2',
              'text-[var(--accent)] hover:text-[var(--accent-hover)]',
              'font-medium transition-colors',
              'group'
            )}
          >
            View all 50+ integrations
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}

