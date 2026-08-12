'use client'
import { motion } from '@/lib/motion'
import { useState } from 'react'

const services = [
  {
    icon: '⚡',
    number: '01',
    title: 'AI Ecosystem Solutions',
    tag: 'Core Offering',
    desc: 'Full-stack AI integration for your business. From intelligent chatbots to automated workflows, we build the AI layer that makes your business 10x more efficient.',
    features: ['Custom AI agents', 'Workflow automation', 'Data intelligence', 'Predictive analytics'],
    accent: '#00e5ff',
  },
  {
    icon: '🧭',
    number: '02',
    title: 'Business Development & Strategy',
    tag: 'Growth',
    desc: 'Comprehensive business strategy from market positioning to revenue models. We help African founders build for local markets and global scale simultaneously.',
    features: ['Market analysis', 'Revenue modelling', 'Go-to-market strategy', 'Partnership development'],
    accent: '#7c3aed',
  },
  {
    icon: '📋',
    number: '03',
    title: 'Business Plans & Funding Docs',
    tag: 'Capital Ready',
    desc: "Investor-grade business plans, financial projections and pitch decks that secure funding. We've helped raise millions for Nigerian startups.",
    features: ['Financial projections', 'Pitch deck design', 'Investor research', 'Due diligence prep'],
    accent: '#ff6b6b',
  },
  {
    icon: '🚀',
    number: '04',
    title: '3-Week Digital Launch',
    tag: 'Flagship',
    desc: 'Our signature offering. We take your business from nothing to a fully live, branded, AI-powered digital presence in exactly 21 days. Guaranteed.',
    features: ['Brand identity', 'Web platform', 'Payment setup', 'SEO foundation'],
    accent: '#00e5ff',
  },
  {
    icon: '🌍',
    number: '05',
    title: 'Innovator Founder Visa',
    tag: 'UK Entry',
    desc: 'Complete support for Nigerian entrepreneurs applying for the UK Innovator Founder Visa. From business plan to endorsement body submission and beyond.',
    features: ['Visa strategy', 'Business plan writing', 'Endorsement support', 'Application guidance'],
    accent: '#7c3aed',
  },
  {
    icon: '🏗',
    number: '06',
    title: 'Brand & Identity Systems',
    tag: 'Creative',
    desc: 'Enterprise-grade brand systems for growth-stage companies. Visual identity, tone of voice, brand guidelines, and all creative assets delivered in weeks.',
    features: ['Logo & identity', 'Brand guidelines', 'Marketing templates', 'Social system'],
    accent: '#ff6b6b',
  },
]

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="services" style={{ padding: '120px 40px', background: '#050508' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 80 }}>
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ color: '#00e5ff', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 500 }}
            >What We Do</motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(36px, 4vw, 56px)',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                maxWidth: 500,
              }}
            >Everything your business needs to grow.</motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ color: 'rgba(255,255,255,0.4)', fontSize: 15, maxWidth: 280, textAlign: 'right', lineHeight: 1.6 }}
          >Six integrated service lines, one ecosystem, unlimited possibility.</motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 24, overflow: 'hidden' }}>
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                padding: '48px 40px',
                background: hovered === i ? '#111118' : '#0d0d14',
                transition: 'background 0.3s',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                background: `linear-gradient(90deg, ${s.accent}, transparent)`,
                opacity: hovered === i ? 1 : 0,
                transition: 'opacity 0.3s',
              }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
                <span style={{ fontSize: 32 }}>{s.icon}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ padding: '4px 10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100, fontSize: 11, color: s.accent, fontWeight: 500 }}>{s.tag}</span>
                  <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: 13, fontWeight: 600 }}>{s.number}</span>
                </div>
              </div>

              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 14, lineHeight: 1.3, letterSpacing: '-0.01em' }}>{s.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14, lineHeight: 1.7, marginBottom: 28 }}>{s.desc}</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {s.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 4, height: 4, borderRadius: '50%', background: s.accent, flexShrink: 0, opacity: hovered === i ? 1 : 0.5, transition: 'opacity 0.3s' }} />
                    <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13 }}>{f}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 6, color: s.accent, fontSize: 13, fontWeight: 500, opacity: hovered === i ? 1 : 0, transform: hovered === i ? 'translateX(0)' : 'translateX(-8px)', transition: 'all 0.3s' }}>
                Learn more →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
