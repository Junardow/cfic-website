import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/services.css'

const SERVICES = [
  {
    id:       'rental',
    img:      '/images/serviceIMG1.jpg',
    category: 'Rental',
    title:    'Rental Equipment and Facility',
    desc:     'Access our state-of-the-art food processing equipment and pilot plant facilities. Ideal for entrepreneurs and businesses that need professional-grade machinery without the capital investment.',
    items:    ['Vacuum Fryer', 'Spray Dryer', 'Freeze Dryer', 'Retort Machine', 'Water Retort Machine', 'Cabinet Dryer'],
  },
  {
    id:       'consultancy',
    img:      '/images/serviceIMG2.png',
    category: 'Consultancy',
    title:    'Technical Assistance',
    desc:     ' Our team provides expert guidance, from product development to market readiness.',
    items:    [
      'Packaging & Labeling Consultation',
      'Food Product Consultation',
      'Product Development Speakership',
      'Food Safety & Compliance Speakership',
      'Skills Training Speakership',
      'DOST-FTE Operation',
      'Marketing Study',
    ],
  },
  {
    id:       'technology',
    img:      '/images/serviceIMG3.jpg',
    category: 'Technological',
    title:    'Technology Transfer',
    desc:     'We facilitate the transfer of proven food processing technologies from research institutions to local enterprises, helping you scale innovations into commercially viable products.',
    items:    ['Technology Licensing', 'Process Scale-Up', 'Training & Capacity Building', 'Technical Assistance'],
  },
  {
    id:       'research',
    img:      '/images/serviceIMG4.png',
    category: 'Research',
    title:    'Contract Research & Development',
    desc:     'Our team partners with you to develop new products or refine existing ones, overseeing every stage of the development process from initial concept to a market-ready prototype.',
    items:    ['Product Formulation & Optimization', 'Technology Transfer'],
  },
]

const PROCESS_STEPS = [
  { step: '01', title: 'Inquiry',        desc: 'Submit your request through our contact form or visit us directly.' },
  { step: '02', title: 'Assessment',     desc: 'Our team evaluates your needs and recommends the right service package.' },
  { step: '03', title: 'Deliberation',   desc: 'We align on scope, timeline, and terms through collaborative discussion.' },
  { step: '04', title: 'Implementation', desc: 'Our experts carry out the service with full documentation and reporting.' },
]

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' }

export default function Services() {
  const { hash } = useLocation()
  const [inquiring, setInquiring] = useState(null)
  const [form, setForm]           = useState(EMPTY_FORM)
  const [sent, setSent]           = useState(false)

  useEffect(() => {
    if (!hash) return
    const id = setTimeout(() => {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
    return () => clearTimeout(id)
  }, [hash])

  useEffect(() => {
    document.body.style.overflow = inquiring ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [inquiring])

  function openInquiry(svc) {
    setForm({ ...EMPTY_FORM, subject: svc.title })
    setSent(false)
    setInquiring(svc)
  }

  function closeInquiry() {
    setInquiring(null)
    setSent(false)
    setForm(EMPTY_FORM)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main>

      {/* ── Hero ── */}
      <div className="services-page-hero" style={{ backgroundImage: 'url(/images/hero2.webp)' }}>
        <div className="services-page-hero-overlay">
          <div className="services-page-hero-content">
            <span className="hero-page-eyebrow">What We Offer</span>
            <h1 className="hero-page-title">Our Services</h1>
            <p className="hero-page-sub">
              From equipment rental to contract research, we provide end-to-end
              support for food entrepreneurs, businesses, and researchers across
              the Caraga Region.
            </p>
          </div>
        </div>
      </div>

      {/* ── Services list ── */}
      <section className="services-page-list">
        <div className="services-page-inner">

          <div className="services-page-header">
            <span className="section-label">Our Programs</span>
            <h2 className="section-heading">How Can We Help You?</h2>
            <p className="services-page-intro">
              We provide equipment, expertise, and support to help entrepreneurs,
              businesses, and researchers develop high-quality, innovative food products.
            </p>
          </div>

          <div className="svc-cards">
            {SERVICES.map(({ id, img, category, title, desc, items }, i) => (
              <div id={id} className={`svc-card${i % 2 !== 0 ? ' svc-card-reverse' : ''}`} key={title}>
                <div className="svc-card-img-wrap">
                  <img
                    src={img}
                    alt={title}
                    className="svc-card-img"
                    onError={e => { e.currentTarget.style.display = 'none' }}
                  />
                  <div className="svc-card-img-placeholder" aria-hidden="true" />
                </div>
                <div className="svc-card-body">
                  <span className="section-label">{category}</span>
                  <h3 className="svc-card-title">{title}</h3>
                  <p className="svc-card-desc">{desc}</p>
                  <ul className="svc-card-list">
                    {items.map(item => (
                      <li key={item}>
                        <span className="svc-check" aria-hidden="true">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className="btn-pill" onClick={() => openInquiry({ id, img, category, title, desc, items })}>Inquire Now →</button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Process steps ── */}
      <section className="services-process">
        <div className="services-process-inner">
          <div className="services-process-header">
            <span className="section-label">How It Works</span>
            <h2 className="section-heading">Our Process</h2>
          </div>
          <div className="process-steps">
            {PROCESS_STEPS.map(({ step, title, desc }) => (
              <div className="process-step" key={step}>
                <span className="process-step-num">{step}</span>
                <h4 className="process-step-title">{title}</h4>
                <p className="process-step-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Inquiry overlay ── */}
      {inquiring && (
        <div className="card-overlay-backdrop" onClick={closeInquiry}>
          <div className="card-overlay inq-overlay" onClick={e => e.stopPropagation()}>
            <button className="card-overlay-close" onClick={closeInquiry} aria-label="Close">✕</button>

            {sent ? (
              <div className="inq-success">
                <div className="inq-success-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3>Inquiry Sent!</h3>
                <p>Thank you for reaching out. Our team will get back to you shortly.</p>
              </div>
            ) : (
              <>
                <p className="inq-overlay-eyebrow">Service Inquiry</p>
                <h2 className="inq-overlay-title">{inquiring.title}</h2>

                <form className="inq-form" onSubmit={handleSubmit}>
                  <div className="inq-form-row">
                    <div className="inq-field">
                      <label className="inq-label" htmlFor="inq-name">Name</label>
                      <input
                        id="inq-name"
                        className="inq-input"
                        type="text"
                        placeholder="Your full name"
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      />
                    </div>
                    <div className="inq-field">
                      <label className="inq-label" htmlFor="inq-email">Email</label>
                      <input
                        id="inq-email"
                        className="inq-input"
                        type="email"
                        placeholder="you@email.com"
                        required
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="inq-field">
                    <label className="inq-label" htmlFor="inq-subject">Subject</label>
                    <select
                      id="inq-subject"
                      className="inq-select"
                      required
                      value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    >
                      {inquiring.items.map(item => (
                        <option key={item} value={item}>{item}</option>
                      ))}
                    </select>
                  </div>

                  <div className="inq-field">
                    <label className="inq-label" htmlFor="inq-message">Message</label>
                    <textarea
                      id="inq-message"
                      className="inq-textarea"
                      placeholder="Tell us more about your needs..."
                      required
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    />
                  </div>

                  <button type="submit" className="inq-submit">Send Inquiry →</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

    </main>
  )
}
