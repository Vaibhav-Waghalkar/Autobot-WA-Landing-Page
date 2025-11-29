'use client'

import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder',
    company: 'TechStart India',
    rating: 5,
    quote: 'AutoBot WA transformed our customer communication. We now send 10,000+ messages monthly with 40% higher engagement.',
    avatar: 'RK',
  },
  {
    name: 'Priya Sharma',
    role: 'Marketing Director',
    company: 'GrowthCo',
    rating: 5,
    quote: 'The automation features saved us 20 hours per week. ROI was visible within the first month of using the platform.',
    avatar: 'PS',
  },
  {
    name: 'Amit Patel',
    role: 'CEO',
    company: 'ScaleUp Solutions',
    rating: 5,
    quote: 'Best investment we made for our WhatsApp marketing. The analytics dashboard gives us insights we never had before.',
    avatar: 'AP',
  },
]


export default function Testimonials() {
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

    const section = document.getElementById('testimonials-section')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const companies = ['TechCorp', 'GrowthHub', 'ScaleUp', 'InnovateLab', 'StartupX', 'BizFlow']

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Trust Bar */}
        <div
          id="testimonials-section"
          className={cn(
            'mb-16 transition-all duration-1000',
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <div className="text-center mb-8">
            <p className="text-sm text-[var(--text-secondary)] mb-6">
              Trusted by 10,000+ businesses worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-60">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="text-lg font-semibold text-[var(--text-secondary)]"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 text-[var(--text-primary)]">
            Loved by Businesses
            <br />
            <span className="gradient-text">Worldwide</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            See what our customers have to say about their experience with AutoBot WA.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                'glass rounded-xl p-6 lg:p-8 border border-[var(--border)]',
                'hover:border-[var(--accent)]/50 transition-all duration-500',
                'hover:scale-105 hover:shadow-xl',
                'dark:hover:shadow-emerald-500/10',
                'group perspective-1000',
                visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              )}
              style={{ 
                transitionDelay: `${(index + 4) * 100}ms`,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[var(--accent)] text-[var(--accent)]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[var(--text-primary)] mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent)] to-emerald-600 flex items-center justify-center text-white font-semibold shadow-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-[var(--text-primary)]">{testimonial.name}</p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

