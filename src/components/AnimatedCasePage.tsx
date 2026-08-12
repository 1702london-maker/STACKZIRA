'use client'

import Link from 'next/link'
import { pageData } from '@/lib/siteContent'

type PageKey = keyof typeof pageData

export default function AnimatedCasePage({ pageKey }: { pageKey: PageKey }) {
  const page = pageData[pageKey]

  return (
    <div className="case-page" style={{ ['--page-accent' as string]: page.accent }}>
      <section className="case-hero">
        <div className="case-hero__copy">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
          <div className="case-hero__actions">
            <Link className="cta cta--gold" href={page.ctaHref}>{page.cta}</Link>
            <Link className="cta cta--ghost" href="/">Back to ring</Link>
          </div>
        </div>
        <div className="case-orb" aria-hidden="true">
          <div>
            <strong>{page.heroStat}</strong>
            <span>{page.heroStatLabel}</span>
          </div>
        </div>
      </section>

      <section className="case-proof">
        {page.proof.map((item, index) => (
          <div className="case-proof__item reveal" style={{ animationDelay: `${index * 90}ms` }} key={item}>
            <span>0{index + 1}</span>
            <p>{item}</p>
          </div>
        ))}
      </section>

      <section className="case-grid">
        {page.sections.map((section, index) => (
          <article className="case-card reveal" style={{ animationDelay: `${index * 120}ms` }} key={section.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </article>
        ))}
      </section>

      <section className="case-cta">
        <p className="eyebrow">Next move</p>
        <h2>Ready to make this feel real?</h2>
        <p>Book the conversation and we will turn the open question into a clear delivery path.</p>
        <Link className="cta cta--gold" href="/contact">Book a free call</Link>
      </section>
    </div>
  )
}
