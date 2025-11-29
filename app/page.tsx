import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Features from '@/components/Features'
import Integration from '@/components/Integration'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import FloatingButton from '@/components/FloatingButton'
import ScrollProgress from '@/components/ScrollProgress'
import WhatsAppWidget from '@/components/WhatsAppWidget'

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <ScrollProgress />
      <Header />
      <Hero />
      <Stats />
      <div className="py-8" />
      <Features />
      <div className="py-8" />
      <Integration />
      <div className="py-8" />
      <HowItWorks />
      <div className="py-8" />
      <Testimonials />
      <div className="py-8" />
      <Pricing />
      <div className="py-8" />
      <FAQ />
      <div className="py-8" />
      <CTA />
      <Footer />
      <FloatingButton />
      <WhatsAppWidget />
    </main>
  )
}

