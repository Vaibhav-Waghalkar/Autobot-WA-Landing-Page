'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Play, CheckCircle2, TrendingUp, MessageSquare, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(16, 185, 129) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div
            className={cn(
              'space-y-8 transition-all duration-1000 ease-out',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent)] text-sm">
              <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
              Trusted by 10,000+ businesses
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-tight text-[var(--text-primary)]">
              Automate WhatsApp,
              <br />
              <span className="gradient-text">Scale Your Business</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-xl">
              Send bulk messages, schedule campaigns, and automate replies with AI-powered tools.
              Transform your WhatsApp communication into a growth engine.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('pricing')}
                className="group px-6 py-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-lg font-medium transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-[var(--accent)]/20"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className="px-6 py-3 glass text-[var(--text-primary)] hover:text-[var(--accent)] rounded-lg font-medium transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 border-[var(--border)]"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle2 className="w-5 h-5 text-[var(--accent)]" />
                No credit card required
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle2 className="w-5 h-5 text-[var(--accent)]" />
                14-day free trial
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle2 className="w-5 h-5 text-[var(--accent)]" />
                Cancel anytime
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Mockup */}
          <div
            className={cn(
              'relative transition-all duration-1000 ease-out delay-300',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}
          >
            <div className="glass rounded-2xl p-6 shadow-2xl border-[var(--border)]">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">Campaign Dashboard</h3>
                  <p className="text-sm text-[var(--text-secondary)]">Last 30 days</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20">
                  <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
                  <span className="text-xs text-[var(--accent)]">Live</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="glass rounded-lg p-4 border-[var(--border)]">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-4 h-4 text-[var(--accent)]" />
                    <span className="text-xs text-[var(--text-secondary)]">Messages Sent</span>
                  </div>
                  <p className="text-2xl font-semibold text-[var(--text-primary)]">24,583</p>
                  <p className="text-xs text-[var(--accent)] flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" />
                    +12.5%
                  </p>
                </div>
                <div className="glass rounded-lg p-4 border-[var(--border)]">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-[var(--accent)]" />
                    <span className="text-xs text-[var(--text-secondary)]">Replies</span>
                  </div>
                  <p className="text-2xl font-semibold text-[var(--text-primary)]">8,942</p>
                  <p className="text-xs text-[var(--accent)] flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" />
                    +8.2%
                  </p>
                </div>
              </div>

              {/* Chart */}
              <div className="glass rounded-lg p-4 border-[var(--border)]">
                <p className="text-xs text-[var(--text-secondary)] mb-4">Conversion Rate</p>
                <div className="flex items-end gap-2 h-24">
                  {[65, 72, 68, 80, 75, 85, 78].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-[var(--accent)] to-emerald-400 rounded-t transition-all hover:opacity-80"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <p className="text-2xl font-semibold text-[var(--text-primary)] mt-4">36.4%</p>
                <p className="text-xs text-[var(--text-secondary)]">Above industry average</p>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 glass rounded-lg px-4 py-2 animate-bounce border-[var(--border)]">
              <p className="text-xs text-[var(--text-secondary)]">Active Campaigns</p>
              <p className="text-lg font-semibold text-[var(--accent)]">12</p>
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-lg px-4 py-2 animate-pulse border-[var(--border)]">
              <p className="text-xs text-[var(--text-secondary)]">This Month</p>
              <p className="text-lg font-semibold text-[var(--accent)]">+24%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

