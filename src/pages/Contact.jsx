import { useState } from 'react'
import '../styles/services.css'
import '../styles/contact.css'

const CONTACT_INFO = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Address',
    value: 'Building 7, Caraga State University, Ampayon, Butuan City',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: 'Email',
    value: 'caragafic@carsu.edu.ph',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.64a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 15.92Z" />
      </svg>
    ),
    label: 'Phone',
    value: '+63 969 209 8967',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: 'Office Hours',
    value: 'Monday – Friday, 8:00 AM – 5:00 PM',
  },
]

const SUBJECTS = [
  'Equipment Rental',
  'Technical Consultation',
  'Speakership Request',
  'Technology Transfer',
  'Contract R&D',
  'DOST-FTE Operation',
  'Marketing Study',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main>

      {/* ── Hero ── */}
      <div className="services-page-hero" style={{ backgroundImage: 'url(/images/hero2.webp)' }}>
        <div className="services-page-hero-overlay">
          <div className="services-page-hero-content">
            <span className="hero-page-eyebrow">Reach Out</span>
            <h1 className="hero-page-title">Get in Touch</h1>
            <p className="hero-page-sub">
              Have a question, inquiry, or partnership proposal? We'd love to
              hear from you. Fill out the form or reach us through any of our
              contact channels below.
            </p>
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <section className="contact-section">
        <div className="contact-inner">

          {/* Left — info cards */}
          <div className="contact-info">
            <div className="contact-info-header">
              <span className="section-label">Contact Information</span>
              <h2 className="section-heading">We're Here to Help</h2>
              <p className="contact-info-desc">
                Whether you're an entrepreneur, researcher, or business owner,
                our team is ready to assist you with any inquiry about our
                services and programs.
              </p>
            </div>

            <div className="contact-cards">
              {CONTACT_INFO.map(({ icon, label, value }) => (
                <div className="contact-card" key={label}>
                  <span className="contact-card-icon">{icon}</span>
                  <div>
                    <p className="contact-card-label">{label}</p>
                    <p className="contact-card-value">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="contact-form-wrap">
            {sent ? (
              <div className="contact-success">
                <span className="contact-success-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </span>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. Our team will get back to you within 1–2 business days.</p>
                <button className="btn-pill" onClick={() => setSent(false)}>Send Another Message</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={submit} noValidate>
                <h3 className="contact-form-title">Send Us a Message</h3>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Juan dela Cruz"
                      value={form.name}
                      onChange={handle}
                      required
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="juan@example.com"
                      value={form.email}
                      onChange={handle}
                      required
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handle}
                    required
                  >
                    <option value="" disabled>Select a topic…</option>
                    {SUBJECTS.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="contact-field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us how we can help you…"
                    value={form.message}
                    onChange={handle}
                    required
                  />
                </div>

                <button type="submit" className="btn-pill contact-submit">
                  Send Message →
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </main>
  )
}
