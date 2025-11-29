'use client'

import { Users, MessageSquare, Activity, Star } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'
import { cn } from '@/lib/utils'

const stats = [
  {
    icon: Users,
    value: 10000,
    suffix: '+',
    label: 'Happy Customers',
    color: 'text-emerald-400',
  },
  {
    icon: MessageSquare,
    value: 500,
    suffix: 'M+',
    label: 'Messages Sent',
    color: 'text-blue-400',
  },
  {
    icon: Activity,
    value: 99.9,
    suffix: '%',
    label: 'Uptime',
    color: 'text-purple-400',
  },
  {
    icon: Star,
    value: 4.9,
    suffix: '★',
    label: 'Average Rating',
    color: 'text-amber-400',
  },
]

function formatCount(count: number, suffix: string): string {
  if (suffix === '★') {
    return count.toFixed(1) + suffix
  }
  if (suffix === '%') {
    return count.toFixed(1) + suffix
  }
  if (suffix === 'M+') {
    return Math.floor(count) + suffix
  }
  return Math.floor(count).toLocaleString() + suffix
}

function StatCard({ 
  stat, 
  index, 
  isVisible 
}: { 
  stat: typeof stats[0]
  index: number
  isVisible: boolean 
}) {
  const [count, setCount] = useState(0)
  const Icon = stat.icon

  useEffect(() => {
    if (!isVisible) {
      setCount(0)
      return
    }

    let startTime: number | null = null
    const duration = 2000
    
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(stat.value * easeOutQuart)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(stat.value)
      }
    }

    requestAnimationFrame(animate)
  }, [stat.value, isVisible])

  return (
    <div
      className={cn(
        'glass rounded-xl p-6 lg:p-8 text-center transition-all duration-500',
        'hover:scale-105 hover:shadow-lg',
        'dark:hover:shadow-emerald-500/10 dark:hover:border-emerald-500/30',
        'hover:border-[var(--accent)]/30',
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center">
          <Icon className={cn('w-6 h-6 lg:w-7 lg:h-7', stat.color)} />
        </div>
      </div>
      <p className="text-3xl lg:text-4xl font-semibold mb-2 text-[var(--text-primary)]">
        {formatCount(count, stat.suffix)}
      </p>
      <p className="text-sm text-[var(--text-secondary)]">{stat.label}</p>
    </div>
  )
}

export default function Stats() {
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
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} isVisible={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}
