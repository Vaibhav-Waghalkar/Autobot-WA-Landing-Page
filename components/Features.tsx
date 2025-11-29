'use client'

import { Send, Clock, Bot, BarChart3, Users, Lock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'

const features = [
  {
    icon: Send,
    title: 'Bulk Campaigns',
    description: 'Send 10,000+ messages instantly with personalized templates and smart scheduling.',
  },
  {
    icon: Clock,
    title: 'Smart Scheduling',
    description: 'Schedule campaigns at optimal times to maximize engagement and response rates.',
  },
  {
    icon: Bot,
    title: 'Auto Replies',
    description: 'AI-powered instant responses that handle common queries 24/7 without human intervention.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Track opens, replies, conversions, and ROI with detailed insights and reports.',
  },
  {
    icon: Users,
    title: 'Contact Management',
    description: 'Organize unlimited contacts with tags, segments, and custom fields for targeted campaigns.',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and compliance to keep your data and communications secure.',
  },
]

export default function Features() {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setTimeout(() => {
              setVisibleFeatures((prev) => [...prev, index])
            }, index * 100)
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = sectionRef.current?.querySelectorAll('[data-index]')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 text-[var(--text-primary)]">
            Everything You Need to
            <br />
            <span className="gradient-text">Automate & Scale</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Powerful features designed to help you communicate better, faster, and at scale.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isVisible = visibleFeatures.includes(index)
            // Make first and last features larger (2x2)
            const isLarge = index === 0 || index === 5
            const colSpan = isLarge ? 'md:col-span-2' : ''
            const rowSpan = isLarge ? 'md:row-span-2' : ''

            return (
              <div
                key={index}
                data-index={index}
                className={cn(
                  'glass rounded-xl p-6 lg:p-8 transition-all duration-500',
                  'hover:scale-[1.02] hover:shadow-2xl',
                  'dark:hover:shadow-emerald-500/10',
                  'hover:border-[var(--accent)]/50',
                  'border border-[var(--border)]',
                  colSpan,
                  rowSpan,
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={cn(
                  'rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center mb-4 transition-colors',
                  'group-hover:bg-[var(--accent)]/20',
                  isLarge ? 'w-16 h-16 lg:w-20 lg:h-20' : 'w-12 h-12 lg:w-14 lg:h-14'
                )}>
                  <Icon className={cn(
                    'text-[var(--accent)] transition-colors',
                    isLarge ? 'w-8 h-8 lg:w-10 lg:h-10' : 'w-6 h-6 lg:w-7 lg:h-7'
                  )} />
                </div>
                <h3 className={cn(
                  'font-semibold mb-2 text-[var(--text-primary)]',
                  isLarge ? 'text-2xl lg:text-3xl' : 'text-xl'
                )}>
                  {feature.title}
                </h3>
                <p className={cn(
                  'leading-relaxed text-[var(--text-secondary)]',
                  isLarge ? 'text-base lg:text-lg' : 'text-sm'
                )}>
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

