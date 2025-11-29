'use client'

import { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, Send, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'bot' }>>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Show typing indicator after a delay
      setTimeout(() => {
        setIsTyping(true)
        setTimeout(() => {
          setIsTyping(false)
          setMessages([{
            text: 'Hi! How can we help you today?',
            sender: 'bot'
          }])
        }, 2000)
      }, 500)
    }
  }, [isOpen, messages.length])

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isTyping])

  const handleSend = () => {
    if (!message.trim()) return

    setMessages(prev => [...prev, { text: message, sender: 'user' }])
    setMessage('')

    // Simulate bot response
    setTimeout(() => {
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        setMessages(prev => [...prev, {
          text: 'Thanks for your message! Our team will get back to you shortly. In the meantime, you can check out our pricing plans or schedule a demo.',
          sender: 'bot'
        }])
      }, 1500)
    }, 500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Widget Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'fixed bottom-6 right-6 z-50',
          'w-14 h-14 rounded-full',
          'bg-[#25D366] hover:bg-[#20BA5A]',
          'text-white shadow-lg shadow-[#25D366]/30',
          'flex items-center justify-center',
          'transition-all duration-300',
          'hover:scale-110 active:scale-95',
          'animate-pulse'
        )}
        aria-label="Open WhatsApp chat"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className={cn(
            'fixed bottom-24 right-6 z-50',
            'w-80 h-96 rounded-2xl shadow-2xl',
            'bg-[var(--card-background)] border border-[var(--border)]',
            'flex flex-col overflow-hidden',
            'animate-in slide-in-from-bottom-4 duration-300'
          )}
        >
          {/* Header */}
          <div className="bg-[#25D366] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">AutoBot WA Support</p>
                <p className="text-white/80 text-xs">Typically replies in a few minutes</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[var(--background-secondary)]">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={cn(
                  'flex',
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                <div
                  className={cn(
                    'max-w-[75%] rounded-2xl px-4 py-2 text-sm',
                    msg.sender === 'user'
                      ? 'bg-[#25D366] text-white'
                      : 'bg-[var(--card-background)] text-[var(--text-primary)] border border-[var(--border)]'
                  )}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[var(--card-background)] border border-[var(--border)] rounded-2xl px-4 py-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[var(--text-secondary)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-[var(--text-secondary)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-[var(--text-secondary)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[var(--border)] bg-[var(--card-background)]">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className={cn(
                  'flex-1 px-4 py-2 rounded-full',
                  'bg-[var(--background-secondary)]',
                  'border border-[var(--border)]',
                  'text-[var(--text-primary)]',
                  'placeholder:text-[var(--text-secondary)]',
                  'focus:outline-none focus:ring-2 focus:ring-[var(--accent)]',
                  'text-sm'
                )}
              />
              <button
                onClick={handleSend}
                disabled={!message.trim()}
                className={cn(
                  'w-10 h-10 rounded-full',
                  'bg-[#25D366] hover:bg-[#20BA5A]',
                  'text-white flex items-center justify-center',
                  'transition-all disabled:opacity-50 disabled:cursor-not-allowed',
                  'hover:scale-110 active:scale-95'
                )}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

