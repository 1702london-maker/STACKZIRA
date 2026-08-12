'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#0D1B2A', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 48px 40px' }}>
        {/* Top grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 60 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 34, height: 34, borderRadius: 8,
                background: 'linear-gradient(135deg, #C9963A, #1A3A5C)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, fontWeight: 800, color: '#fff',
              }}>SZ</div>
              <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 17, color: '#fff', letterSpacing: '-0.02em' }}>STACKZIRA</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, lineHeight: 1.75, maxWidth: 300, marginBottom: 24 }}>
              Business growth and digital delivery for Nigerian and diaspora entrepreneurs. Strategy, brand, technology and operations — done properly.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {['Lagos', 'London'].map(c => (
                <span key={c} style={{ padding: '4px 12px', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 100, color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>{c}</span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 13, letterSpacing: '0.04em', marginBottom: 20 }}>Services</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: 'Business Strategy', href: '/services' },
                { label: 'Business Plans', href: '/services' },
                { label: '3-Week Launch', href: '/services' },
                { label: 'Founder Visa', href: '/visa' },
                { label: 'Brand & Identity', href: '/services' },
                { label: 'Operations Setup', href: '/services' },
              ].map(l => (
                <Link key={l.label} href={l.href} style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#C9963A')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                >{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 13, letterSpacing: '0.04em', marginBottom: 20 }}>Company</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: 'About', href: '/about' },
                { label: 'How It Works', href: '/process' },
                { label: 'Contact', href: '/contact' },
              ].map(l => (
                <Link key={l.label} href={l.href} style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#C9963A')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                >{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 13, letterSpacing: '0.04em', marginBottom: 20 }}>Get in Touch</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="mailto:hello@stackzira.com" style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, textDecoration: 'none' }}>hello@stackzira.com</a>
              <a href="https://wa.me/2340000000000" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, textDecoration: 'none' }}>WhatsApp Us</a>
            </div>
            <div style={{ marginTop: 28 }}>
              <Link href="/contact" style={{
                display: 'inline-block', padding: '11px 24px',
                background: '#C9963A', borderRadius: 100,
                color: '#fff', fontWeight: 600, fontSize: 13, textDecoration: 'none',
              }}>Book a Free Call</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: 12 }}>
            &copy; {new Date().getFullYear()} STACKZIRA. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 28 }}>
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a key={l} href="#" style={{ color: 'rgba(255,255,255,0.25)', fontSize: 12, textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
