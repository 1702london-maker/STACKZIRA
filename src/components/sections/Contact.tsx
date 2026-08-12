'use client'
import { motion } from '@/lib/motion'
import { useState } from 'react'

const services = ['AI Solutions', 'Business Strategy', 'Business Plan', '3-Week Launch', 'Innovator Founder Visa', 'Brand System', 'Other']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 12,
    color: '#fff',
    fontSize: 15,
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'Inter, sans-serif',
  }

  return (
    <section id="contact" style={{ padding: '120px 40px', background: '#050508' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
        {/* Left */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ color: '#00e5ff', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 500 }}
          >Get In Touch</motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(32px, 3.5vw, 52px)',
              fontWeight: 700, color: '#fff',
              lineHeight: 1.1, letterSpacing: '-0.02em',
              marginBottom: 24,
            }}
          >Let's build something extraordinary.</motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, lineHeight: 1.75, marginBottom: 60 }}
          >
            Whether you need a full 3-week digital launch, a killer business plan for investors, or support with your UK Innovator Founder Visa â€” we're ready. Tell us about your project.
          </motion.p>

          {/* Contact details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {[
              { label: 'Email', value: 'hello@stackzira.com', icon: 'âœ‰' },
              { label: 'WhatsApp', value: '+234 000 000 0000', icon: 'ðŸ“±' },
              { label: 'Location', value: 'Lagos, Nigeria  Â·  London, UK', icon: 'ðŸ“' },
              { label: 'Office Hours', value: 'Monâ€“Fri, 8amâ€“8pm WAT', icon: 'ðŸ•' },
            ].map(item => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{ display: 'flex', alignItems: 'center', gap: 16 }}
              >
                <div style={{
                  width: 44, height: 44,
                  background: 'rgba(0,229,255,0.06)',
                  border: '1px solid rgba(0,229,255,0.12)',
                  borderRadius: 12,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, flexShrink: 0,
                }}>{item.icon}</div>
                <div>
                  <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 3 }}>{item.label}</p>
                  <p style={{ color: '#fff', fontSize: 15 }}>{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right â€” Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: '#0d0d14',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 24,
            padding: '48px',
          }}
        >
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: 56, marginBottom: 20 }}>ðŸš€</div>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 12 }}>We'll be in touch!</h3>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, lineHeight: 1.7 }}>
                Expect a response within 2 hours during business hours. We're excited to hear about your project.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div>
                  <label style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, letterSpacing: '0.05em', display: 'block', marginBottom: 8 }}>YOUR NAME *</label>
                  <input
                    required
                    placeholder="Emeka Okafor"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(0,229,255,0.3)'}
                    onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.08)'}
                  />
                </div>
                <div>
                  <label style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, letterSpacing: '0.05em', display: 'block', marginBottom: 8 }}>EMAIL *</label>
                  <input
                    type="email" required
                    placeholder="emeka@company.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                    onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(0,229,255,0.3)'}
                    onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.08)'}
                  />
                </div>
              </div>

              <div>
                <label style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, letterSpacing: '0.05em', display: 'block', marginBottom: 8 }}>COMPANY / BUSINESS NAME</label>
                <input
                  placeholder="Your Business Ltd"
                  value={form.company}
                  onChange={e => setForm({ ...form, company: e.target.value })}
                  style={inputStyle}
                  onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(0,229,255,0.3)'}
                  onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>

              <div>
                <label style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, letterSpacing: '0.05em', display: 'block', marginBottom: 8 }}>SERVICE INTERESTED IN *</label>
                <select
                  required
                  value={form.service}
                  onChange={e => setForm({ ...form, service: e.target.value })}
                  style={{ ...inputStyle, cursor: 'none' }}
                >
                  <option value="" style={{ background: '#0d0d14' }}>Select a service...</option>
                  {services.map(s => <option key={s} value={s} style={{ background: '#0d0d14' }}>{s}</option>)}
                </select>
              </div>

              <div>
                <label style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, letterSpacing: '0.05em', display: 'block', marginBottom: 8 }}>TELL US ABOUT YOUR PROJECT *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="I need a complete digital launch for my fashion brand in Lagos. We have 3 years of offline sales and want to go online with e-commerce, branding and social presence..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }}
                  onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(0,229,255,0.3)'}
                  onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>

              <button
                type="submit"
                style={{
                  padding: '16px',
                  background: 'linear-gradient(135deg, #00e5ff, #7c3aed)',
                  border: 'none',
                  borderRadius: 12,
                  color: '#000',
                  fontWeight: 700,
                  fontSize: 15,
                  cursor: 'none',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 0 30px rgba(0,229,255,0.15)',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 50px rgba(0,229,255,0.3)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(0,229,255,0.15)' }}
              >
                Send Message â€” Get Free Consultation â†’
              </button>

              <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.2)', fontSize: 12 }}>
                We respond within 2 hours Â· No spam ever
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

