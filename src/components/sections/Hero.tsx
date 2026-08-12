'use client'
import { useEffect, useRef } from 'react'
import { motion } from '@/lib/motion'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number; opacity: number }> = []

    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    let animId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 229, 255, ${p.opacity})`
        ctx.fill()

        particles.slice(i + 1).forEach(p2 => {
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(0, 229, 255, ${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animId = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <section style={{
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'linear-gradient(160deg, #050508 0%, #0d0a1a 50%, #050508 100%)',
    }}>
      {/* Particle canvas */}
      <canvas ref={canvasRef} style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        opacity: 0.7,
      }} />

      {/* Grid bg */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />

      {/* Radial glow */}
      <div style={{
        position: 'absolute',
        top: '20%', left: '50%',
        transform: 'translateX(-50%)',
        width: 800, height: 800,
        background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: '40%', left: '20%',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '120px 40px 80px', width: '100%' }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '8px 16px',
            border: '1px solid rgba(0,229,255,0.25)',
            borderRadius: 100,
            marginBottom: 32,
            background: 'rgba(0,229,255,0.05)',
          }}
        >
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: '#00e5ff',
            boxShadow: '0 0 8px rgba(0,229,255,0.8)',
            animation: 'pulse 2s infinite',
          }} />
          <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
          <span style={{ color: '#00e5ff', fontSize: 13, fontWeight: 500, letterSpacing: '0.05em' }}>
            Nigeria's AI-First Ecosystem Company
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(48px, 7vw, 96px)',
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: '-0.03em',
            color: '#fff',
            maxWidth: 900,
            marginBottom: 12,
          }}
        >
          Your Business,
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="gradient-text"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(48px, 7vw, 96px)',
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: '-0.03em',
            maxWidth: 900,
            marginBottom: 12,
          }}
        >
          Online in 3 Weeks.
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(48px, 7vw, 96px)',
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: '-0.03em',
            color: 'rgba(255,255,255,0.18)',
            maxWidth: 900,
            marginBottom: 40,
          }}
        >
          Guaranteed.
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.5)',
            maxWidth: 560,
            lineHeight: 1.7,
            marginBottom: 52,
          }}
        >
          STACKZIRA combines AI technology, business strategy, and digital infrastructure to take Nigerian and global small businesses from idea to online â€” in 21 days.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 80 }}
        >
          <a href="#contact" style={{
            padding: '16px 36px',
            background: 'linear-gradient(135deg, #00e5ff, #7c3aed)',
            borderRadius: 100,
            color: '#000',
            fontWeight: 700,
            fontSize: 15,
            textDecoration: 'none',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 0 40px rgba(0,229,255,0.2)',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 60px rgba(0,229,255,0.35)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(0,229,255,0.2)' }}
          >Get Started â€” Free Consultation</a>

          <a href="#services" style={{
            padding: '16px 36px',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: 100,
            color: '#fff',
            fontWeight: 500,
            fontSize: 15,
            textDecoration: 'none',
            transition: 'border-color 0.2s, background 0.2s',
            background: 'transparent',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,229,255,0.4)'; (e.currentTarget as HTMLElement).style.background = 'rgba(0,229,255,0.05)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'; (e.currentTarget as HTMLElement).style.background = 'transparent' }}
          >Explore Services â†“</a>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          style={{
            display: 'flex', alignItems: 'center', gap: 40,
            paddingTop: 40,
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Ecosystem Partners</span>
          {['Supabase', 'Vercel', 'OpenAI', 'Stripe'].map(p => (
            <span key={p} style={{
              color: 'rgba(255,255,255,0.25)',
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: '0.05em',
              fontFamily: 'Space Grotesk, sans-serif',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}
            >{p}</span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: 'absolute', bottom: 40, left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        }}
      >
        <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, rgba(0,229,255,0.5), transparent)' }}
        />
      </motion.div>
    </section>
  )
}

