'use client'
import { motion, useInView } from '@/lib/motion'
import { useRef, useEffect, useState } from 'react'

function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = to / 60
    const timer = setInterval(() => {
      start += step
      if (start >= to) { setVal(to); clearInterval(timer) }
      else setVal(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, to])

  return <span ref={ref}>{val}{suffix}</span>
}

const stats = [
  { value: 3, suffix: ' weeks', label: 'From zero to live platform', desc: 'Fastest go-to-market in West Africa' },
  { value: 200, suffix: '+', label: 'Businesses transformed', desc: 'Across Nigeria, UK and diaspora' },
  { value: 98, suffix: '%', label: 'Client satisfaction rate', desc: 'Measured at 30 days post-launch' },
  { value: 12, suffix: 'x', label: 'Average revenue growth', desc: 'Within first 6 months online' },
]

export default function Stats() {
  return (
    <section style={{
      padding: '100px 40px',
      background: '#07070d',
      borderTop: '1px solid rgba(255,255,255,0.04)',
      borderBottom: '1px solid rgba(255,255,255,0.04)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 1,
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 20,
            overflow: 'hidden',
          }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                padding: '48px 40px',
                background: '#0d0d14',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = '#131320';
                el.querySelector('.stat-glow')?.setAttribute('style', 'opacity:1')
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = '#0d0d14';
                el.querySelector('.stat-glow')?.setAttribute('style', 'opacity:0')
              }}
            >
              <div className="stat-glow" style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                background: 'linear-gradient(90deg, #00e5ff, #7c3aed)',
                opacity: 0, transition: 'opacity 0.3s',
              }} />
              <div style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 52,
                fontWeight: 700,
                letterSpacing: '-0.03em',
                marginBottom: 8,
                background: 'linear-gradient(135deg, #fff 0%, rgba(0,229,255,0.8) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <p style={{ color: '#fff', fontSize: 15, fontWeight: 600, marginBottom: 6 }}>{s.label}</p>
              <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13 }}>{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

