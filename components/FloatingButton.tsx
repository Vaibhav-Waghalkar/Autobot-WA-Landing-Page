'use client'

import { MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export default function FloatingButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      className={cn(
        'fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white shadow-lg shadow-[var(--accent)]/50 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95',
        isHovered && 'scale-110'
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Get help"
    >
      <MessageCircle className="w-6 h-6" />
      {isHovered && (
        <span className="absolute -top-12 left-0 px-3 py-1 rounded-lg glass text-sm text-[var(--text-primary)] whitespace-nowrap border border-[var(--border)]">
          Get help
        </span>
      )}
    </button>
  )
}

