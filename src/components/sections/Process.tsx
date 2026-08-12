'use client'
import { motion, useScroll, useTransform } from '@/lib/motion'
import { useRef } from 'react'

const steps = [
  { week: 'Day 1–2', title: 'Discovery & Strategy Sprint', desc: 'We run an intensive 2-day strategy session to understand your business, target market, competitors and goals. You leave with a complete digital roadmap.', deliverables: ['Digital Strategy Doc', 'Brand Direction', 'Tech Stack Plan', 'Content Outline'], color: '#00e5ff' },
  { week: 'Day 3–7', title: 'Brand & Design System', desc: 'Our design team builds your complete brand identity — logo, colours, typography, and a full design system that scales with your business.', deliverables: ['Logo Suite', 'Brand Guidelines', 'Design Tokens', 'Social Templates'], color: '#7c3aed' },
  { week: 'Day 8–14', title: 'Platform Build', desc: 'Developers build your full digital platform using the latest tech — Next.js, Supabase, AI integrations, payment systems, and CMS.', deliverables: ['Web Platform', 'Mobile Responsive', 'CMS Setup', 'Payment Integration'], color: '#ff6b6b' },
  { week: 'Day 15–18', title: 'AI Layer Integration', desc: 'We wire in the AI capabilities — chatbots, automations, lead capture, analytics dashboards, and any custom AI tools specific to your industry.', deliverables: ['AI Chatbot', 'Automations', 'Analytics Dashboard', 'Lead System'], color: '#00e5ff' },
  { week: 'Day 19–21', title: 'Launch & Handover', desc: 'Final QA, SEO setup, domain configuration, social profiles, and a full handover session. You are live, trained, and ready to grow.', deliverables: ['Live Platform', 'SEO Foundation', 'Training Session', '30-Day Support'], color: '#7c3aed' },
]

export default function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const lineH = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%'])

  return (
    <section id="process" ref={ref} style={{ padding: '120px 40px', background: '#07070d' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 100 }}>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: '#00e5ff', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 500 }}>Our Process</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 20 }}>21 Days. Zero Compromise.</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: 'rgba(255,255,255,0.4)', fontSize: 16, maxWidth: 480, margin: '0 auto' }}>
            Our proprietary delivery framework gets your business online faster than anyone else, without cutting corners.
          </motion.p>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: 'rgba(255,255,255,0.06)', transform: 'translateX(-50%)' }}>
            <div style={{ width: '100%', background: 'linear-gradient(to bottom, #00e5ff, #7c3aed)', height: lineH, transition: 'height 0.1s linear' }} />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.week}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ display: 'grid', gridTemplateColumns: '1fr 60px 1fr', marginBottom: 60, alignItems: 'start' }}
            >
              {/* Left */}
              <div style={{ paddingRight: 60 }}>
                {i % 2 === 0 ? (
                  <div style={{ background: '#0d0d14', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 36, transition: 'border-color 0.3s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = `${step.color}33`}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'}
                  >
                    <span style={{ color: step.color, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>{step.week}</span>
                    <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 22, fontWeight: 700, color: '#fff', margin: '12px 0', letterSpacing: '-0.01em' }}>{step.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{step.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'flex-end' }}>
                      {step.deliverables.map(d => <span key={d} style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100, fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{d}</span>)}
                    </div>
                  </div>
                ) : null}
              </div>

              {/* Center dot */}
              <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 24 }}>
                <div style={{ width: 16, height: 16, borderRadius: '50%', background: step.color, boxShadow: `0 0 20px ${step.color}66`, border: '3px solid #07070d', flexShrink: 0 }} />
              </div>

              {/* Right */}
              <div style={{ paddingLeft: 60 }}>
                {i % 2 !== 0 ? (
                  <div style={{ background: '#0d0d14', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 36, transition: 'border-color 0.3s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = `${step.color}33`}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'}
                  >
                    <span style={{ color: step.color, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>{step.week}</span>
                    <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 22, fontWeight: 700, color: '#fff', margin: '12px 0', letterSpacing: '-0.01em' }}>{step.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{step.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {step.deliverables.map(d => <span key={d} style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100, fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{d}</span>)}
                    </div>
                  </div>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
