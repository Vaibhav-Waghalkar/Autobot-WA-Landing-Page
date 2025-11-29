'use client'

import { Check, Zap, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'

const comparisonFeatures = [
  { feature: 'Messages/month', starter: '500', growth: '5,000', business: 'Unlimited' },
  { feature: 'WhatsApp numbers', starter: '1', growth: '3', business: 'Unlimited' },
  { feature: 'Auto-replies', starter: 'Basic', growth: '✓', business: '✓' },
  { feature: 'Analytics', starter: '✗', growth: '✓', business: '✓' },
  { feature: 'Team access', starter: '✗', growth: '✗', business: '✓' },
  { feature: 'Priority support', starter: '✗', growth: '✓', business: '✓' },
]

const plans = [
  {
    name: 'Starter',
    price: { monthly: 0, yearly: 0 },
    description: 'Perfect for small businesses getting started',
    features: [
      '500 messages/month',
      '1 WhatsApp number',
      'Basic auto-replies',
      'Email support',
      'Template library',
    ],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Growth',
    price: { monthly: 899, yearly: 719 },
    description: 'Most popular for growing businesses',
    features: [
      '5,000 messages/month',
      '3 WhatsApp numbers',
      'Advanced automation',
      'Analytics dashboard',
      'Priority support',
      'Custom templates',
      'Bulk campaigns',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Business',
    price: { monthly: 2499, yearly: 1999 },
    description: 'For enterprises with high volume needs',
    features: [
      'Unlimited messages',
      'Unlimited numbers',
      'Custom integrations',
      'Dedicated account manager',
      'API access',
      'White-label options',
      '24/7 phone support',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)
  const [visible, setVisible] = useState(false)

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

    const section = document.getElementById('pricing-section')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--background-secondary)]">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 text-[var(--text-primary)]">
            Simple, Transparent
            <br />
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Choose the plan that fits your business. All plans include a 14-day free trial.
          </p>

          {/* Toggle */}
          <div
            id="pricing-section"
            className="flex items-center justify-center gap-4 mb-12"
          >
            <span
              className={cn(
                'text-sm transition-colors',
                !isYearly ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'
              )}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-8 rounded-full bg-[var(--card-background)] border border-[var(--border)] transition-colors"
              aria-label="Toggle billing period"
            >
              <div
                className={cn(
                  'absolute top-1 left-1 w-6 h-6 rounded-full bg-[var(--accent)] transition-transform duration-300',
                  isYearly && 'translate-x-6'
                )}
              />
            </button>
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  'text-sm transition-colors',
                  isYearly ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'
                )}
              >
                Yearly
              </span>
              <span className="px-2 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-xs text-[var(--accent)]">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16 overflow-x-auto">
          <div className="glass rounded-xl border border-[var(--border)] overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="text-left p-4 text-[var(--text-primary)] font-semibold">Features</th>
                  <th className="text-center p-4 text-[var(--text-primary)] font-semibold">Starter</th>
                  <th className="text-center p-4 text-[var(--text-primary)] font-semibold bg-[var(--accent)]/5">Growth</th>
                  <th className="text-center p-4 text-[var(--text-primary)] font-semibold">Business</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr
                    key={index}
                    className={cn(
                      'border-b border-[var(--border)]',
                      'hover:bg-[var(--background-secondary)] transition-colors'
                    )}
                  >
                    <td className="p-4 text-[var(--text-secondary)]">{row.feature}</td>
                    <td className="p-4 text-center text-[var(--text-primary)]">{row.starter}</td>
                    <td className="p-4 text-center text-[var(--text-primary)] bg-[var(--accent)]/5">
                      {row.growth === '✓' ? (
                        <Check className="w-5 h-5 text-[var(--accent)] mx-auto" />
                      ) : row.growth === '✗' ? (
                        <X className="w-5 h-5 text-[var(--text-secondary)] mx-auto" />
                      ) : (
                        row.growth
                      )}
                    </td>
                    <td className="p-4 text-center text-[var(--text-primary)]">
                      {row.business === '✓' ? (
                        <Check className="w-5 h-5 text-[var(--accent)] mx-auto" />
                      ) : row.business === '✗' ? (
                        <X className="w-5 h-5 text-[var(--text-secondary)] mx-auto" />
                      ) : (
                        row.business
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => {
            const price = isYearly ? plan.price.yearly : plan.price.monthly
            const isPopular = plan.popular

            return (
              <div
                key={index}
                className={cn(
                  'glass rounded-xl p-6 lg:p-8 transition-all duration-500 hover:scale-105',
                  'border border-[var(--border)]',
                  isPopular
                    ? 'border-2 border-[var(--accent)] lg:scale-[1.02] relative'
                    : '',
                  visible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[var(--accent)] text-white text-xs font-semibold">
                    Most Popular
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl font-semibold text-[var(--text-primary)]">{plan.name}</h3>
                    {isPopular && <Zap className="w-5 h-5 text-[var(--accent)]" />}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-semibold text-[var(--text-primary)]">
                      ₹{price.toLocaleString()}
                    </span>
                    {price > 0 && (
                      <span className="text-[var(--text-secondary)]">/month</span>
                    )}
                  </div>
                  {isYearly && price > 0 && (
                    <p className="text-xs text-[var(--text-secondary)] mt-1">
                      Billed annually (₹{(plan.price.yearly * 12).toLocaleString()}/year)
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--text-primary)]">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={cn(
                    'w-full py-3 rounded-lg font-medium transition-all active:scale-95',
                    isPopular
                      ? 'bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white hover:scale-105'
                      : 'glass text-[var(--text-primary)] hover:text-[var(--accent)] hover:border-[var(--accent)]/50 border border-[var(--border)]'
                  )}
                >
                  {plan.cta}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

