'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/process', label: 'How It Works' },
  { href: '/visa', label: 'Founder Visa' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isDark = pathname === '/' && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const textColor = isDark ? '#fff' : '#0D1B2A'
  const mutedColor = isDark ? 'rgba(255,255,255,0.65)' : '#6B7280'

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        padding: scrolled ? '14px 48px' : '22px 48px',
        background: scrolled ? 'rgba(250,250,247,0.95)' : pathname === '/' ? 'transparent' : 'rgba(250,250,247,0.97)',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid #E2E0D8' : 'none',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'all 0.35s ease',
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 8,
            background: 'linear-gradient(135deg, #C9963A, #1A3A5C)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 13, fontWeight: 800, color: '#fff',
            letterSpacing: '-0.02em',
          }}>SZ</div>
          <span style={{
            fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700,
            fontSize: 17, color: textColor, letterSpacing: '-0.02em',
            transition: 'color 0.3s',
          }}>STACKZIRA</span>
        </Link>

        {/* Desktop */}
        <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} className="hover-line" style={{
              color: pathname === l.href ? '#C9963A' : mutedColor,
              textDecoration: 'none', fontSize: 14, fontWeight: 500,
              transition: 'color 0.2s', letterSpacing: '0.01em',
            }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" style={{
            padding: '10px 24px',
            background: '#0D1B2A', borderRadius: 100,
            color: '#fff', fontWeight: 600, fontSize: 14,
            textDecoration: 'none', letterSpacing: '0.01em',
            transition: 'background 0.2s, transform 0.15s',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#C9963A' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#0D1B2A' }}
          >Get Started</Link>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} style={{
          display: 'none', background: 'none', border: 'none',
          fontSize: 22, color: textColor, cursor: 'pointer',
        }} aria-label="Menu">☰</button>
      </header>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 300, background: '#0D1B2A',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 28,
        }}>
          <button onClick={() => setOpen(false)} style={{
            position: 'absolute', top: 24, right: 32,
            background: 'none', border: 'none', color: '#fff', fontSize: 28, cursor: 'pointer',
          }}>✕</button>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              color: '#fff', textDecoration: 'none',
              fontSize: 28, fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif',
            }} onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
          <Link href="/contact" style={{
            padding: '14px 40px', background: '#C9963A', borderRadius: 100,
            color: '#fff', fontWeight: 700, fontSize: 16, textDecoration: 'none', marginTop: 12,
          }} onClick={() => setOpen(false)}>Get Started</Link>
        </div>
      )}
    </>
  )
}
