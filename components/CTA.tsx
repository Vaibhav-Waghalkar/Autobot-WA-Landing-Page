'use client'

import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function CTA() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="cta" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-[var(--background-secondary)] to-[var(--background)]" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(16, 185, 129) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="glass rounded-2xl p-8 lg:p-12 text-center border border-[var(--border)]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 text-[var(--text-primary)]">
            Ready to Transform Your
            <br />
            <span className="gradient-text">WhatsApp Communication?</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using AutoBot WA to automate their
            WhatsApp communication and scale their growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => scrollToSection('pricing')}
              className="group px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-lg font-medium transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              className="px-8 py-4 glass text-[var(--text-primary)] hover:text-[var(--accent)] rounded-lg font-medium transition-all hover:scale-105 active:scale-95 border border-[var(--border)]"
            >
              Schedule a Demo
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--text-secondary)]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[var(--accent)]" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[var(--accent)]" />
              14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[var(--accent)]" />
              Cancel anytime
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[var(--border)]">
            <p className="text-[var(--text-secondary)] text-sm">
              <span className="text-[var(--accent)] font-semibold">Join 10,000+ businesses</span> already using AutoBot WA
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

