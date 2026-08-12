'use client'
import { motion } from '@/lib/motion'

const testimonials = [
  {
    quote: "STACKZIRA didn't just build our website â€” they built our entire digital business in 3 weeks. We went from zero online presence to processing orders the same day we launched.",
    name: 'Adaeze Okonkwo',
    role: 'Founder, Zeida Foods Lagos',
    avatar: 'AO',
    color: '#00e5ff',
  },
  {
    quote: "The Innovator Founder Visa support was exceptional. Their business plan was exactly what the endorsement body wanted. We had our visa approved in the first attempt.",
    name: 'Chukwuemeka Dike',
    role: 'CEO, TechPadi Solutions',
    avatar: 'CD',
    color: '#7c3aed',
  },
  {
    quote: "I told them I needed a brand, a strategy, a website, and an AI chatbot. They delivered all four â€” better than I imagined â€” and 2 days early. I've never worked with anyone like this.",
    name: 'Fatima Al-Hassan',
    role: 'Director, Sahara Logistics',
    avatar: 'FA',
    color: '#ff6b6b',
  },
]

export default function Testimonials() {
  return (
    <section style={{ padding: '120px 40px', background: '#07070d' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ color: '#00e5ff', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 500 }}
          >Client Stories</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(36px, 4vw, 56px)',
              fontWeight: 700, color: '#fff',
              lineHeight: 1.1, letterSpacing: '-0.02em',
            }}
          >What founders say.</motion.h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              style={{
                padding: '40px',
                background: '#0d0d14',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 20,
                position: 'relative',
              }}
            >
              {/* Quote mark */}
              <div style={{
                position: 'absolute', top: 24, right: 32,
                fontFamily: 'Georgia, serif',
                fontSize: 80,
                color: t.color,
                opacity: 0.12,
                lineHeight: 1,
              }}>"</div>

              <div style={{
                width: 3, height: 40,
                background: t.color,
                borderRadius: 2,
                marginBottom: 28,
              }} />

              <p style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: 15,
                lineHeight: 1.75,
                marginBottom: 32,
                fontStyle: 'italic',
              }}>"{t.quote}"</p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 44, height: 44,
                  borderRadius: '50%',
                  background: `${t.color}22`,
                  border: `1px solid ${t.color}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 700, color: t.color,
                  flexShrink: 0,
                }}>{t.avatar}</div>
                <div>
                  <p style={{ color: '#fff', fontSize: 14, fontWeight: 600 }}>{t.name}</p>
                  <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12 }}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Star rating bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            marginTop: 60,
            padding: '32px 48px',
            background: '#0d0d14',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 20,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}
        >
          <div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginBottom: 6 }}>Overall client satisfaction</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 48, fontWeight: 700, color: '#fff' }}>4.9</span>
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 14 }}>out of 5</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {[1,2,3,4,5].map(s => (
              <div key={s} style={{
                width: 32, height: 32,
                background: s <= 4 ? '#00e5ff' : 'rgba(0,229,255,0.2)',
                borderRadius: 6,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16,
              }}>â˜…</div>
            ))}
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ color: '#fff', fontSize: 24, fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }}>200+</p>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>verified reviews</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ color: '#fff', fontSize: 24, fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }}>100%</p>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>on-time delivery</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

