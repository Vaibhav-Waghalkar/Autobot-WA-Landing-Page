'use client'

import { UserPlus, Upload, Edit3, Rocket } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

const steps = [
  {
    icon: UserPlus,
    title: 'Sign Up Free',
    description: 'Create your account in seconds. No credit card required. Start with a 14-day free trial.',
  },
  {
    icon: Upload,
    title: 'Import Contacts',
    description: 'Upload your contact list via CSV or connect your CRM. Organize contacts with tags and segments.',
  },
  {
    icon: Edit3,
    title: 'Create Campaign',
    description: 'Design personalized messages with templates, variables, and media. Schedule for optimal delivery.',
  },
  {
    icon: Rocket,
    title: 'Automate & Scale',
    description: 'Set up auto-replies, trigger workflows, and watch your business grow with automated communication.',
  },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setTimeout(() => setActiveStep(index), index * 200)
          }
        })
      },
      { threshold: 0.3 }
    )

    const stepElements = document.querySelectorAll('[data-index]')
    stepElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--background-secondary)]">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 text-[var(--text-primary)]">
            Get Started in
            <br />
            <span className="gradient-text">4 Simple Steps</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            From signup to automation, we've made it incredibly simple to get started.
          </p>
        </div>

        {/* Steps - Desktop Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connector Line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--accent)] via-emerald-400 to-[var(--accent)] opacity-20" />

            <div className="grid grid-cols-4 gap-8 relative">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isActive = activeStep !== null && activeStep >= index

                return (
                  <div
                    key={index}
                    data-index={index}
                    className="relative"
                  >
                    {/* Step Number Circle */}
                    <div className="flex flex-col items-center">
                      <div
                        className={cn(
                          'w-24 h-24 rounded-full glass flex items-center justify-center mb-6 transition-all duration-500 border border-[var(--border)]',
                          isActive
                            ? 'scale-110 border-[var(--accent)] shadow-lg shadow-[var(--accent)]/20'
                            : 'scale-100'
                        )}
                      >
                        <Icon
                          className={cn(
                            'w-10 h-10 transition-colors duration-500',
                            isActive ? 'text-[var(--accent)]' : 'text-[var(--text-secondary)]'
                          )}
                        />
                      </div>
                      <div className="text-center">
                        <div
                          className={cn(
                            'inline-flex items-center justify-center w-8 h-8 rounded-full mb-3 text-sm font-semibold transition-all duration-500',
                            isActive
                              ? 'bg-[var(--accent)] text-white'
                              : 'bg-[var(--card-background)] text-[var(--text-secondary)]'
                          )}
                        >
                          {index + 1}
                        </div>
                        <h3
                          className={cn(
                            'text-xl font-semibold mb-2 transition-colors duration-500',
                            isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'
                          )}
                        >
                          {step.title}
                        </h3>
                        <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Steps - Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isActive = activeStep !== null && activeStep >= index

            return (
              <div
                key={index}
                data-index={index}
                className="relative pl-12"
              >
                {/* Vertical Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-[var(--border)]" />
                )}

                {/* Step Circle */}
                <div
                  className={cn(
                    'absolute left-0 w-12 h-12 rounded-full glass flex items-center justify-center transition-all duration-500 border border-[var(--border)]',
                    isActive
                      ? 'border-[var(--accent)] shadow-lg shadow-[var(--accent)]/20 scale-110'
                      : ''
                  )}
                >
                  <Icon
                    className={cn(
                      'w-6 h-6 transition-colors duration-500',
                      isActive ? 'text-[var(--accent)]' : 'text-[var(--text-secondary)]'
                    )}
                  />
                </div>

                {/* Step Content */}
                <div>
                  <div
                    className={cn(
                      'inline-flex items-center justify-center w-6 h-6 rounded-full mb-2 text-xs font-semibold transition-all duration-500',
                      isActive
                        ? 'bg-[var(--accent)] text-white'
                        : 'bg-[var(--card-background)] text-[var(--text-secondary)]'
                    )}
                  >
                    {index + 1}
                  </div>
                  <h3
                    className={cn(
                      'text-lg font-semibold mb-2 transition-colors duration-500',
                      isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'
                    )}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

