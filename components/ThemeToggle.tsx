'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'relative w-12 h-12 rounded-full flex items-center justify-center',
        'transition-all duration-300 hover:scale-110',
        'bg-[var(--card-background)] border border-[var(--border)]',
        'hover:border-[var(--accent)]',
        'focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2',
        'dark:focus:ring-offset-[var(--background)]'
      )}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5">
        <Sun
          className={cn(
            'absolute inset-0 w-5 h-5 transition-all duration-300',
            'text-amber-500',
            theme === 'dark' 
              ? 'rotate-0 scale-100 opacity-100' 
              : 'rotate-90 scale-0 opacity-0'
          )}
        />
        <Moon
          className={cn(
            'absolute inset-0 w-5 h-5 transition-all duration-300',
            'text-blue-400',
            theme === 'light' 
              ? 'rotate-0 scale-100 opacity-100' 
              : '-rotate-90 scale-0 opacity-0'
          )}
        />
      </div>
    </button>
  )
}

