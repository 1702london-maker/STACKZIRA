'use client'
import { motion } from '@/lib/motion'
import { useEffect, useRef } from 'react'

export default function CTA() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    let t = 0
    let animId: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const cx = canvas.width / 2
      const cy = canvas.height / 2

      for (let i = 0; i < 5; i++) {
        ctx.beginPath()
        const r = 80 + i * 60 + Math.sin(t * 0.3 + i) * 15
        ctx.arc(cx, cy, r, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(0, 229, 255, ${0.04 - i * 0.006})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      t += 0.02
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <section style={{
      padding: '160px 40px',
      background: 'linear-gradient(160deg, #0d0a1a 0%, #050508 100%)',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
    }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.6 }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 800, margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ color: '#00e5ff', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 24, fontWeight: 500 }}
        >Ready to Start?</motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(40px, 5vw, 72px)',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: 12,
          }}
        >Your business deserves</motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="gradient-text"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(40px, 5vw, 72px)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: 40,
          }}
        >to be online. Now.</motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ color: 'rgba(255,255,255,0.45)', fontSize: 17, lineHeight: 1.7, marginBottom: 52 }}
        >
          Book a free 30-minute strategy call. We'll map out exactly how to take your business digital in 3 weeks â€” no fluff, no upsells, just a clear plan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="#contact" style={{
            padding: '18px 48px',
            background: 'linear-gradient(135deg, #00e5ff, #7c3aed)',
            borderRadius: 100,
            color: '#000',
            fontWeight: 700,
            fontSize: 16,
            textDecoration: 'none',
            boxShadow: '0 0 60px rgba(0,229,255,0.25)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 80px rgba(0,229,255,0.4)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 60px rgba(0,229,255,0.25)' }}
          >Book Free Strategy Call</a>

          <a href="tel:+2340000000000" style={{
            padding: '18px 48px',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: 100,
            color: '#fff',
            fontWeight: 500,
            fontSize: 16,
            textDecoration: 'none',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,229,255,0.4)'; (e.currentTarget as HTMLElement).style.background = 'rgba(0,229,255,0.05)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'; (e.currentTarget as HTMLElement).style.background = 'transparent' }}
          >WhatsApp Us</a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginTop: 28, color: 'rgba(255,255,255,0.25)', fontSize: 13 }}
        >
          No commitment required. Free consultation for all new enquiries.
        </motion.p>
      </div>
    </section>
  )
}

