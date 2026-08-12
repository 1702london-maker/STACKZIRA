'use client'
import { motion } from '@/lib/motion'
import { useState } from 'react'

const cases = [
  { name: 'AI Brand OS', category: 'Business Platform', result: '13-module AI platform built in 4 weeks', metric: '38 DB tables · Live on Vercel', tags: ['AI', 'SaaS', 'Brand'], gradient: 'linear-gradient(135deg, #00e5ff22, #7c3aed22)', border: 'rgba(124,58,237,0.3)' },
  { name: 'Careroot', category: 'UK Care SaaS', result: 'CQC-compliant care management platform', metric: '26 DB tables · Full scaffold', tags: ['HealthTech', 'UK', 'Compliance'], gradient: 'linear-gradient(135deg, #00e5ff22, #00b3cc22)', border: 'rgba(0,229,255,0.3)' },
  { name: 'Dehadza Homes', category: 'Luxury E-commerce', result: 'Premium Nigerian real estate marketplace', metric: 'Phase 1 complete · Port 3200', tags: ['E-commerce', 'Luxury', 'Real Estate'], gradient: 'linear-gradient(135deg, #ff6b6b22, #ff9f4322)', border: 'rgba(255,107,107,0.3)' },
  { name: 'REEVYL', category: 'Luxury Leather', result: 'Heritage leather goods digital brand', metric: '6 pages live · Bespoke configurator', tags: ['Fashion', 'D2C', 'Luxury'], gradient: 'linear-gradient(135deg, #7c3aed22, #ff6b6b22)', border: 'rgba(124,58,237,0.3)' },
  { name: 'Melvin Gaal', category: 'Maritime Platform', result: 'Global maritime crew recruitment system', metric: 'Port 3400 · Supabase live', tags: ['Maritime', 'Recruitment', 'B2B'], gradient: 'linear-gradient(135deg, #00b3cc22, #00e5ff22)', border: 'rgba(0,229,255,0.3)' },
  { name: 'Fennby', category: 'EdTech Platform', result: 'UK whole-child education platform', metric: '38 pages · fennby.vercel.app', tags: ['EdTech', 'UK', 'Families'], gradient: 'linear-gradient(135deg, #7c3aed22, #00e5ff22)', border: 'rgba(124,58,237,0.3)' },
]

export default function Work() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="work" style={{ padding: '120px 40px', background: '#050508' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 80 }}>
          <div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: '#00e5ff', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 500 }}>Selected Work</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em' }}>Platforms we&apos;ve built.</motion.h2>
          </div>
          <motion.a initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} href="#contact" style={{ padding: '12px 28px', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 100, color: '#fff', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#00e5ff'; (e.currentTarget as HTMLElement).style.color = '#00e5ff' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)'; (e.currentTarget as HTMLElement).style.color = '#fff' }}
          >View All Work →</motion.a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {cases.map((c, i) => (
            <motion.div key={c.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
              style={{ padding: '36px', background: hovered === i ? c.gradient : '#0d0d14', border: `1px solid ${hovered === i ? c.border : 'rgba(255,255,255,0.06)'}`, borderRadius: 20, transition: 'all 0.35s ease', cursor: 'none' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                <div>
                  <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 24, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>{c.name}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, marginTop: 4 }}>{c.category}</p>
                </div>
                <div style={{ width: 40, height: 40, border: `1px solid ${hovered === i ? c.border : 'rgba(255,255,255,0.08)'}`, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, transition: 'all 0.3s', transform: hovered === i ? 'rotate(45deg)' : 'rotate(0)' }}>↗</div>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>{c.result}</p>
              <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: 12, marginBottom: 20 }}>{c.metric}</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {c.tags.map(t => (
                  <span key={t} style={{ padding: '3px 10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100, fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
