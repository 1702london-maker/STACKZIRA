'use client'

import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'
import { menuItems } from '@/lib/siteContent'

export default function Home() {
  const angleRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const [rotation, setRotation] = useState(0)
  const [paused, setPaused] = useState(false)
  const [isSmall, setIsSmall] = useState(false)
  const menuCount = menuItems.length

  useEffect(() => {
    const check = () => setIsSmall(window.innerWidth < 760)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const loop = () => {
      if (!paused) {
        angleRef.current += 0.16
        setRotation(angleRef.current)
      }
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [menuCount, paused])

  const ringCards = useMemo(() => menuItems.map((item, index) => ({
    item,
    angle: (360 / menuCount) * index,
  })), [menuCount])

  function focusCard(index: number) {
    angleRef.current = (360 / menuCount) * index
    setRotation(angleRef.current)
  }

  return (
    <main className="bn-home bn-home--ring-only">
      <div className="top-left-menu">
        <img className="site-logo" src="/stackzira-logo-transparent.png" alt="STACKZIRA" />
        <div className="top-left-actions" aria-label="Quick contact">
          <a className="quick-icon quick-icon--chat" href="mailto:hello@stackzira.com" aria-label="Chat">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4.6 18.7c-.5.2-.9-.3-.7-.8l1.2-3A8.2 8.2 0 0 1 4 10.8C4 6.5 7.8 3 12.4 3s8.4 3.5 8.4 7.8-3.8 7.8-8.4 7.8c-1.5 0-3-.4-4.2-1.1l-3.6 1.2Zm3.9-3.3.5.3c1 .7 2.2 1 3.4 1 3.5 0 6.4-2.6 6.4-5.9S15.9 5 12.4 5 6 7.6 6 10.8c0 1.2.4 2.3 1.1 3.2l.3.5-.6 1.6 1.7-.7Z" />
            </svg>
          </a>
          <a className="quick-icon quick-icon--whatsapp" href="https://wa.me/2340000000000" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.1 3A8.8 8.8 0 0 0 4.5 16.2L3.3 21l4.9-1.2A8.8 8.8 0 1 0 12.1 3Zm0 1.7a7.1 7.1 0 0 1 0 14.2c-1.2 0-2.3-.3-3.3-.8l-.4-.2-2.7.7.7-2.6-.3-.4a7.1 7.1 0 0 1 6-10.9Zm-3.2 3.8c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.5 3.9 3.4 1.9.8 2.3.6 2.8.6.4 0 1.3-.5 1.5-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.5-.3l-1.6-.8c-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.3 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2.1-.3 0-.5l-.7-1.6c-.2-.4-.3-.4-.6-.4h-.1Z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="top-actions" aria-label="Social links and consultation">
        {socialLinks.map((link) => (
          <a className={`social-icon ${link.className}`} href={link.href} key={link.label} aria-label={link.label} target="_blank" rel="noreferrer">
            {link.icon}
          </a>
        ))}
        <a className="consultation-button" href="mailto:hello@stackzira.com">Book Consultation</a>
      </div>
      <StickyBar className="sticky-bar--left" links={leftStickyLinks} />
      <StickyBar className="sticky-bar--right" links={rightStickyLinks} />
      <section className="bn-stage bn-stage--ring-only" aria-label="Rotating menu">
        <div
          className="bn-ring-wrap"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="africa-centrepiece" aria-hidden="true">
            <img src="/africa-map-transparent.png" alt="" />
          </div>
          <svg className="wheel-spokes" viewBox="-340 -300 680 600" aria-hidden="true">
            {ringCards.map(({ item, angle }) => (
              <WheelSpoke
                accent={item.accent}
                angle={angle + rotation}
                compact={isSmall}
                key={item.label}
              />
            ))}
          </svg>
          <div className="bn-ring">
            {ringCards.map(({ item, angle }, index) => (
              <FlatMenuCard
                angle={angle + rotation}
                compact={isSmall}
                href={item.href}
                index={index}
                key={item.href}
                label={item.label}
                onFocus={() => focusCard(index)}
                accent={item.accent}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function WheelSpoke({ accent, angle, compact }: { accent: string; angle: number; compact: boolean }) {
  const rad = (angle * Math.PI) / 180
  const orbitRadius = compact ? 210 : 280
  const centreRadius = compact ? 136 : 172
  const buttonRadius = compact ? 41 : 46
  const x1 = Math.sin(rad) * centreRadius
  const y1 = Math.cos(rad) * centreRadius
  const x2 = Math.sin(rad) * (orbitRadius - buttonRadius)
  const y2 = Math.cos(rad) * (orbitRadius - buttonRadius)

  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={accent}
      strokeOpacity="0.5"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  )
}

function StickyBar({ className, links }: { className: string; links: Array<{ href: string; label: string }> }) {
  return (
    <nav className={`sticky-bar ${className}`}>
      {links.map((link) => (
        <a href={link.href} key={link.label} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
          {link.label}
        </a>
      ))}
    </nav>
  )
}

const leftStickyLinks = [
  { label: 'Social Media Marketing', href: 'https://www.budruum.co.uk/services/social-media-marketing' },
  { label: 'Web & App Development', href: 'https://www.budruum.co.uk/services/web-development' },
  { label: 'Insight', href: '/insights' },
  { label: 'Terms', href: '/terms' },
]

const rightStickyLinks = [
  { label: 'Founder Blueprint', href: 'https://www.budruum.co.uk/services/founder-blueprint' },
  { label: 'Business Plan', href: '/services' },
  { label: 'Business Development', href: '/services' },
  { label: 'Privacy', href: '/privacy' },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/stackzira',
    className: 'social-icon--instagram',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3.8a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4Zm0 2a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4Zm4.45-2.95a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9Z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@stackzira',
    className: 'social-icon--tiktok',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M15.25 2c.37 2.83 1.94 4.52 4.75 4.7v3.03a8.17 8.17 0 0 1-4.65-1.45v6.83c0 3.45-2.2 6.89-6.13 6.89A5.77 5.77 0 0 1 3.5 16.2c0-3.98 3.5-6.66 7.32-5.8v3.25c-1.78-.56-4.05.4-4.05 2.55a2.48 2.48 0 0 0 2.47 2.48c1.85 0 2.82-1.36 2.82-3.43V2h3.19Z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/stackzira',
    className: 'social-icon--facebook',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.2 8.02V6.34c0-.82.55-1.02.94-1.02h2.39V2.12L14.24 2.1c-3.65 0-4.48 2.73-4.48 4.48v1.44H7.47v3.3h2.29V22h4.44V11.32h3l.4-3.3h-3.4Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/stackzira',
    className: 'social-icon--linkedin',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.94 8.75H3.25V21h3.69V8.75ZM5.1 3a2.14 2.14 0 1 0 0 4.28A2.14 2.14 0 0 0 5.1 3Zm15.65 11.2c0-3.28-1.75-5.72-4.7-5.72a4.05 4.05 0 0 0-3.64 2h-.05V8.75H8.82V21h3.69v-6.06c0-1.6.3-3.15 2.29-3.15 1.95 0 1.98 1.83 1.98 3.25V21h3.69v-6.8h.28Z" />
      </svg>
    ),
  },
]

function FlatMenuCard({
  accent,
  angle,
  compact,
  href,
  index,
  label,
  onFocus,
}: {
  accent: string
  angle: number
  compact: boolean
  href: string
  index: number
  label: string
  onFocus: () => void
}) {
  const rad = (angle * Math.PI) / 180
  const orbitRadius = compact ? 210 : 280
  const x = Math.sin(rad) * orbitRadius
  const y = Math.cos(rad) * orbitRadius
  const depth = (Math.cos(rad) + 1) / 2
  const scale = 0.78 + depth * 0.22

  return (
    <Link
      className="bn-ring-card"
      href={href}
      onMouseEnter={onFocus}
      style={{
        ['--card-accent' as string]: accent,
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${scale})`,
        zIndex: Math.round(depth * 100) + index,
        opacity: 0.48 + depth * 0.52,
      }}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
    >
      <h2>{label}</h2>
    </Link>
  )
}
