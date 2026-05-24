import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'

// ─────────────────────────────────────────────────────────────
// Section data  (kept at module level — no re-creation on render)
// ─────────────────────────────────────────────────────────────

const SLIDES = [
  '/images/hero-1.jpg',
  '/images/hero-2.JPG',
  '/images/hero-3.JPG',
  '/images/hero-4.webp',
]
const HOLD_MS = 5000
const FADE_MS = 1500

const SERVICES = [
  { img: '/images/serviceIMG1.png', category: 'Rental',        title: 'Rental Equipment and Facility',   anchor: 'rental'       },
  { img: '/images/serviceIMG2.png', category: 'Consultancy',   title: 'Technical Assistance',             anchor: 'consultancy'  },
  { img: '/images/serviceIMG3.jpg', category: 'Technological', title: 'Technology Transfer',              anchor: 'technology'   },
  { img: '/images/serviceIMG4.png', category: 'Research',      title: 'Contract Research & Development',  anchor: 'research'     },
]

const PRODUCTS = [
  {
    img:    '/images/product-dried-pineapple.jpg',
    badge:  'Cabinet Dried',
    title:  'Dehydrated Pineapple Slices',
    desc:   'Naturally sweet and chewy dried pineapple slices, made to preserve flavor and nutrients for a delicious, healthy snack.',
    credit: 'Developed by CFIC',
    machine: { img: '/images/cebinet-dryer.png', name: 'Cabinet Dryer', desc: 'Gently removes moisture through controlled hot-air circulation, preserving the natural color, aroma, and nutritional content of fruits and vegetables.' },
  },
  {
    img:    '/images/product-calamansi-powder.jpeg',
    badge:  'Spray Dried',
    title:  'Calamansi Powder',
    desc:   'Fine citrus powder spray-dried from fresh calamansi juice, perfect for instant beverages and food seasoning.',
    credit: 'Developed by CFIC',
    machine: { img: '/images/spray-dryer.png', name: 'Spray Dryer', desc: 'Converts liquid food extracts into fine, shelf-stable powder through rapid hot-air atomization while retaining bioactive compounds.' },
  },
  {
    img:    '/images/product-freeze-dried-durian.jpeg',
    badge:  'Freeze Dried',
    title:  'Freeze-Dried Durian',
    desc:   'Crisp freeze-dried durian cubes that fully preserve the fruit\'s signature aroma, flavor, and nutrients.',
    credit: 'Developed by CFIC',
    machine: { img: '/images/freeze-dryer.png', name: 'Freeze Dryer', desc: 'Removes moisture through sublimation under vacuum, producing shelf-stable food that rehydrates to near-original quality.' },
  },
  {
    img:    '/images/product-dried-banana.jpeg',
    badge:  'Vacuum Fried',
    title:  'Banana Chips',
    desc:   'Light and crispy banana chips fried at low temperature to preserve color, taste, and nutritional value.',
    credit: 'Developed by CFIC',
    machine: { img: '/images/vacuum-dryer.png', name: 'Vacuum Fryer', desc: 'Fries produce at low temperatures under vacuum pressure, locking in nutrients, color, and flavor while reducing oil absorption.' },
  },
]

const TEAM_MEMBERS = [
  {
    img:       '/images/team-cutamora.png',
    name:      'CUTAMORA, Genesis Jared A.',
    role:      'Assistant Professor 1 / Center Chief,  Caraga Food Innovation Center (CFIC), CAA',
    education: 'Master of Science in Food Science & Technology, Visayas State University',
    email:     'genesis.cutamora@cfic.gov.ph',
    skills:    ['Functional Properties', 'Food product development', 'Food Processing Technologies', 'Waste Valorization', 'Meat Quality', 'Post Harvest Handling Technology'],
  },
  {
    img:       '/images/team-modina.png',
    name:      'MODINA, Lix B.',
    role:      'Assistant Professor 1 / TTLO College Intellectual Property Coordinator, CAA',
    education: 'Master of Science in Food Science & Technology, Visayas State University',
    email:     'lix.modina@cfic.gov.ph',
    skills:    ['Food Product Development'],
  },
  {
    img:       '/images/team-galang.png',
    name:      'GALANG, Marie Bless B.',
    role:      'Assistant Professor 1',
    education: 'Doctor of Philosophy in Food Science, University of the Philippines Los Baños',
    email:     'marie.galang@cfic.gov.ph',
    skills:    ['Food Biochemistry', 'Applied Nutrition', 'Process and Product Development'],
  },
  {
    img:       '/images/team-alambatin.png',
    name:      'ALAMBATIN, Peth Trixia Brooxs C.',
    role:      'Instructor 1',
    education: 'Master of Science in Food Science, University of the Philippines Mindanao',
    email:     'peth.alambatin@cfic.gov.ph',
    skills:    ['Nutraceuticals', 'Functional Food', 'Food Ingredients'],
  },
]

// ─────────────────────────────────────────────────────────────
// Section: Hero
// ─────────────────────────────────────────────────────────────
function HeroSection() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % SLIDES.length)
  }, [])

  useEffect(() => {
    const id = setInterval(next, HOLD_MS + FADE_MS)
    return () => clearInterval(id)
  }, [next])

  return (
    <div className="page">
      <div className="hero">
        {SLIDES.map((src, i) => (
          <div
            key={src}
            className={`slide${i === current ? ' active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}

        <div className="hero-overlay">
          <div className="hero-content">
            <p className="hero-eyebrow">Caraga</p>
            <h1 className="hero-title">
              Food<br />Innovation Center
            </h1>
            <p className="hero-sub">
              Transforming concepts into products,<br />
              making local innovations work.
            </p>
            <div className="hero-actions">
              <a href="#programs" className="btn-primary">Explore Services</a>
              {/*<a href="#about"    className="btn-outline">Learn More</a>*/}
            </div>
          </div>
        </div>

        <div className="hero-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`dot${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Section: About — full-width slider
// ─────────────────────────────────────────────────────────────

// Helper: single team-member slide (portrait left, info right)
function TeamSlide({ member }) {
  return (
    <div className="about-inner">
      <div className="member-portrait-wrap">
        <img
          src={member.img}
          alt={member.name}
          className="member-portrait-img"
          onError={e => { e.currentTarget.style.display = 'none' }}
        />
        <div className="about-img-placeholder" aria-hidden="true" />
      </div>

      <div className="member-info">
        <h2 className="member-name">{member.name}</h2>
        <p className="member-role">{member.role}</p>

        <dl className="member-details">
          <div className="member-detail-row">
            <dt>Education</dt>
            <dd>{member.education}</dd>
          </div>
          <div className="member-detail-row">
            <dt>Contact</dt>
            <dd>
              <a href={`mailto:${member.email}`} className="member-email">
                {member.email}
              </a>
            </dd>
          </div>
        </dl>

        <div className="member-chips">
          {member.skills.map(skill => (
            <span key={skill} className="member-chip">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function AboutSection() {
  const total   = 1 + TEAM_MEMBERS.length
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(c => Math.max(0, c - 1))
  const next = () => setCurrent(c => Math.min(total - 1, c + 1))

  return (
    <section className="about" id="about">

      {/* Slider viewport */}
      <div className="about-slider">
        <div
          className="about-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {/* Slide 0 — About Us overview */}
          <div className="about-slide">
            <div className="about-inner">
              <div className="about-text">
                <span className="section-label">About Us</span>
                <h2 className="section-heading">
                  Empowering Food Innovation in Caraga
                </h2>
                <p className="about-para">
                  The Caraga Food Innovation Center supports entrepreneurs, businesses,
                  and researchers in developing innovative and high-quality food
                  products. Through advanced facilities, specialized equipment, and
                  expert technical assistance, the center helps transform food ideas
                  into market-ready products.
                </p>
                <p className="about-para">
                  The center also promotes collaboration and technology transfer to
                  strengthen the region's food industry.
                </p>

                <div className="about-vm">
                  <div className="vm-card">
                    <span className="vm-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M2 12C4.5 6 8 3 12 3s7.5 3 10 9c-2.5 6-6 9-10 9S4.5 18 2 12Z" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="vm-title">Vision</h4>
                      <p className="vm-text">A leading hub in food industry innovation in Caraga Region.</p>
                    </div>
                  </div>

                  <div className="vm-card">
                    <span className="vm-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="4" />
                        <line x1="12" y1="2"  x2="12" y2="6"  />
                        <line x1="12" y1="18" x2="12" y2="22" />
                        <line x1="2"  y1="12" x2="6"  y2="12" />
                        <line x1="18" y1="12" x2="22" y2="12" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="vm-title">Mission</h4>
                      <p className="vm-text">We commit to lead the food industry innovation in Caraga Region.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-image-wrap">
                <img
                  src="/images/about-img.JPG"
                  alt="About the Caraga Food Innovation Center"
                  className="about-img"
                  onError={e => { e.currentTarget.style.display = 'none' }}
                />
                <div className="about-img-placeholder" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Slides 1+ — Team members */}
          {TEAM_MEMBERS.map((member, i) => (
            <div className="about-slide" key={i}>
              <TeamSlide member={member} />
            </div>
          ))}
        </div>

        {/* Side arrows */}
        <button
          className="about-arrow about-arrow-prev"
          onClick={prev}
          disabled={current === 0}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          className="about-arrow about-arrow-next"
          onClick={next}
          disabled={current === total - 1}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>

      {/* Pill-dot navigation */}
      <div className="about-nav">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            className={`about-dot${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={i === 0 ? 'About slide' : `Team member ${i}`}
          />
        ))}
      </div>

    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// Section: Services
// ─────────────────────────────────────────────────────────────
function ServicesSection() {
  return (
    <section className="services" id="programs">
      <div className="services-inner">

        <div className="services-header">
          <div className="services-header-left">
            <span className="section-label">Our Services</span>
            <h2 className="section-heading">How can we help you?</h2>
            <p className="services-desc">
              We provide equipment, expertise, and support to help MSMEs, and researchers develop high-quality, innovative food
              products.
            </p>
          </div>
          <div className="services-header-right">
            <Link to="/services" className="btn-pill">Explore →</Link>
          </div>
        </div>

        <div className="services-grid">
          {SERVICES.map((svc) => (
            <Link to={`/services#${svc.anchor}`} className="service-card" key={svc.title}>
              <div className="service-card-img-wrap">
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="service-card-img"
                  onError={e => { e.currentTarget.style.display = 'none' }}
                />
                <div className="service-card-img-placeholder" aria-hidden="true" />
              </div>
              <div className="service-card-body">
                <span className="service-category">{svc.category}</span>
                <h3 className="service-title">{svc.title}</h3>
                <span className="card-link">Learn More →</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// Section: Products
// ─────────────────────────────────────────────────────────────
const EMPTY_PRD_FORM = { name: '', email: '', message: '' }

function ProductsSection() {
  const [selected,  setSelected]  = useState(null)
  const [formMode,  setFormMode]  = useState(false)
  const [form,      setForm]      = useState(EMPTY_PRD_FORM)
  const [sent,      setSent]      = useState(false)

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  function closeOverlay() {
    setSelected(null)
    setFormMode(false)
    setForm(EMPTY_PRD_FORM)
    setSent(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="products" id="gallery">
      <div className="products-inner">

        <div className="products-header">
          <div className="products-header-left">
            <span className="section-label">Our Products</span>
            <h2 className="section-heading">Featured Food Innovations</h2>
            <p className="products-desc">
              Each product is developed using the DOST-developed food processing equipment to ensure it meets the standard and is ready for large-scale production today.
            </p>
          </div>
          <div className="products-header-right">
            <Link to="/products" className="btn-pill">View More →</Link>
          </div>
        </div>

        <div className="products-grid">
          {PRODUCTS.map((prd, i) => (
            <div className="product-card" key={i}>
              <div className="product-card-img-wrap">
                <span className="product-badge">{prd.badge}</span>
                <img
                  src={prd.img}
                  alt={prd.title}
                  className="product-card-img"
                  onError={e => { e.currentTarget.style.display = 'none' }}
                />
                <div className="product-card-img-placeholder" aria-hidden="true" />
              </div>
              <div className="product-card-body">
                <h3 className="product-title">{prd.title}</h3>
                <p className="product-desc">{prd.desc}</p>
                <div className="product-footer">
                  <span className="product-credit">{prd.credit}</span>
                  <button className="card-link" onClick={() => setSelected(prd)}>View Product →</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Overlay */}
      {selected && (
        <div className="card-overlay-backdrop" onClick={closeOverlay}>
          <div
            className={`card-overlay${formMode ? ' inq-overlay' : ' prd-overlay'}`}
            onClick={e => e.stopPropagation()}
          >
            <button className="card-overlay-close" onClick={closeOverlay} aria-label="Close">✕</button>

            {formMode ? (
              /* ── Inquiry form ── */
              sent ? (
                <div className="inq-success">
                  <div className="inq-success-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for your inquiry. Our team will get back to you shortly.</p>
                </div>
              ) : (
                <>
                  <button className="inq-back" onClick={() => setFormMode(false)}>← Back</button>
                  <p className="inq-overlay-eyebrow">Product Inquiry</p>
                  <h2 className="inq-overlay-title">Send a Message</h2>
                  <form className="inq-form" onSubmit={handleSubmit}>
                    <div className="inq-form-row">
                      <div className="inq-field">
                        <label className="inq-label" htmlFor="prd-name-h">Name</label>
                        <input id="prd-name-h" className="inq-input" type="text" placeholder="Your full name" required
                          value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                      </div>
                      <div className="inq-field">
                        <label className="inq-label" htmlFor="prd-email-h">Email</label>
                        <input id="prd-email-h" className="inq-input" type="email" placeholder="you@email.com" required
                          value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                      </div>
                    </div>
                    <div className="inq-field">
                      <label className="inq-label">Product</label>
                      <input className="inq-input" type="text" value={selected.title} disabled />
                    </div>
                    <div className="inq-field">
                      <label className="inq-label" htmlFor="prd-msg-h">Message</label>
                      <textarea id="prd-msg-h" className="inq-textarea" placeholder="Tell us more about your inquiry..."
                        required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
                    </div>
                    <button type="submit" className="inq-submit">Send Message →</button>
                  </form>
                </>
              )
            ) : (
              /* ── Product details ── */
              <>
                {/* Left — machine */}
                <div className="prd-overlay-machine">
                  <p className="prd-overlay-side-label">Made Using</p>
                  <div className="prd-overlay-machine-img-wrap">
                    <img src={selected.machine.img} alt={selected.machine.name} className="prd-overlay-machine-img" onError={e => { e.currentTarget.style.display = 'none' }} />
                    <div className="prd-overlay-machine-placeholder" aria-hidden="true" />
                  </div>
                  <h4 className="prd-overlay-machine-name">{selected.machine.name}</h4>
                  <p className="prd-overlay-machine-desc">{selected.machine.desc}</p>
                </div>

                {/* Right — product */}
                <div className="prd-overlay-product">
                  <p className="prd-overlay-side-label">Product</p>
                  <div className="prd-overlay-product-img-wrap">
                    <span className="product-badge">{selected.badge}</span>
                    <img src={selected.img} alt={selected.title} className="prd-overlay-product-img" onError={e => { e.currentTarget.style.display = 'none' }} />
                    <div className="prd-overlay-product-placeholder" aria-hidden="true" />
                  </div>
                  <h3 className="prd-overlay-product-name">{selected.title}</h3>
                  <p className="prd-overlay-product-desc">{selected.desc}</p>
                  <p className="prd-overlay-credit">{selected.credit}</p>
                  <button className="btn-pill prd-overlay-cta" onClick={() => setFormMode(true)}>Send a Message →</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// Section: Equipment slider
// ─────────────────────────────────────────────────────────────
const EQUIPMENT_LIST = [
  {
    img:   '/images/vacuum-dryer.png',
    title: 'Vacuum Fryer Machine',
    desc:  'Used in deep-fat frying under reduced pressure (vacuum), which allows use of lower temperatures during frying (usually 90-120°C) as compared to conventional frying.',
    highlight: 'Discount price applicable only for PWD and student.',
    features: [
      { title: 'Capacity',  desc: '5–10.0 kilograms'                        },
      { title: 'Rate',      desc: '₱275.00 per hour'                         },
      { title: 'Inclusion', desc: 'LPG'                                      },
      { title: 'Exclusion', desc: 'Oil, Packaging, and sanitation materials' },
    ],
    products: [
      { img: '/images/mixed-veggie-chips.png', label: 'Mixed Veggie Chips' },
      { img: '/images/sweetpotato-chips.png',  label: 'Sweet Potato Chips' },
      { img: '/images/mushroom-chips.png',     label: 'Mushroom Chips'     },
      { img: '/images/okra-chips.png',         label: 'Okra Chips'         },
    ],
  },
  {
    img:   '/images/spray-dryer.png',
    title: 'Spray Dryer',
    desc:  'A spray dryer converts liquid food extracts into fine powders by atomizing them into a hot-air chamber, ideal for producing instant beverage mixes and food additives.',
    highlight: 'Discount price applicable only for PWD and student.',
    features: [
      { title: 'Capacity',  desc: '25 liters minimum'                        },
      { title: 'Rate',      desc: '₱475.00 per hour'                         },
      { title: 'Inclusion', desc: 'LPG'                                      },
      { title: 'Exclusion', desc: 'Oil, Packaging, and sanitation materials' },
    ],
    products: [
      { img: '/images/squash-powder.png',    label: 'Squash Powder'    },
      { img: '/images/papaya-powder.png',    label: 'Papaya Powder'    },
      { img: '/images/pineapple-powder.png', label: 'Pineapple Powder' },
      { img: '/images/cassava-powder.png',   label: 'Cassava Powder'   },
    ],
  },
  {
    img:   '/images/freeze-dryer.png',
    title: 'Freeze Dryer',
    desc:  'A freeze dryer removes moisture from food through sublimation under vacuum conditions, producing shelf-stable products that fully retain their original taste, texture, and nutritional content.',
    highlight: 'Discount price applicable only for PWD and student.',
    features: [
      { title: 'Capacity',  desc: '5 kilograms'                        },
      { title: 'Rate',      desc: '₱250.00 per hour'                         },
      { title: 'Inclusion', desc: 'LPG'                                      },
      { title: 'Exclusion', desc: 'Oil, Packaging, and sanitation materials' },
    ],
    products: [
      { img: '/images/freeze-dried-banana.png',    label: 'Freeze-Dried Banana'    },
      { img: '/images/freeze-dried-pineapple.png', label: 'Freeze-Dried Pineapple' },
      { img: '/images/freeze-dried-papaya.png',    label: 'Freeze-Dried Papaya'    },
      { img: '/images/freeze-dried-jackfruit.png', label: 'Freeze-Dried Jackfruit' },
    ],
  },
  {
    img:   '/images/cebinet-dryer.png',
    title: 'Cabinet Dryer',
    desc:  'A cabinet dryer uses controlled hot-air circulation to gently dehydrate fruits, vegetables, and herbs, producing consistent, shelf-stable dried food products.',
    highlight: 'Discount price applicable only for PWD and student.',
    features: [
      { title: 'Capacity',  desc: '30 kilograms'                        },
      { title: 'Rate',      desc: '₱250.00 per hour'                         },
      { title: 'Inclusion', desc: 'LPG'                                      },
      { title: 'Exclusion', desc: 'Oil, Packaging, and sanitation materials' },
    ],
    products: [
      { img: '/images/cabinet-dried-okra.png',    label: 'Dehydrated Okra'         },
      { img: '/images/cabinet-dried-carrots.png', label: 'Dehydrated Carrots'      },
      { img: '/images/cabinet-dried-string-beans.png', label: 'Dehydrated String Beans' },
      { img: '/images/cabinet-dried-cassava.png',     label: 'Dehydrated Cassava'      },
    ],
  },
  {
    img:   '/images/water-retort.png',
    title: 'Water Retort Machine',
    desc:  'A water retort sterilizes packaged food products using pressurized hot water, ensuring commercial sterility and an extended shelf life without the need for refrigeration.',
    highlight: 'Discount price applicable only for PWD and student.',
    features: [
      { title: 'Capacity',  desc: '250g retort pouch – 80 pcs | 150g retort pouch – 100 pcs | 8 oz glass jars – 100 pcs' },
      { title: 'Rate',      desc: '₱250.00 per hour'                         },
      { title: 'Inclusion', desc: 'LPG'                                      },
      { title: 'Exclusion', desc: 'Oil, Packaging, and sanitation materials' },
    ],
    products: [
      { img: '/images/retort-jackfruit.png', label: 'Canned Jackfruit'  },
      { img: '/images/retort-pineapple.png', label: 'Canned Pineapple' },
      { img: '/images/retort-karlang.png',   label: 'Karlang in Brine' },
      { img: '/images/retort-squash.png',    label: 'Squash in Brine'  },
    ],
  },
]

function EquipmentSection() {
  const [current, setCurrent] = useState(0)
  const total = EQUIPMENT_LIST.length

  const prev = () => setCurrent(c => (c - 1 + total) % total)
  const next = () => setCurrent(c => (c + 1) % total)

  return (
    <section className="equipment" id="equipment">
      <button className="equip-arrow equip-arrow-prev" onClick={prev} disabled={current === 0} aria-label="Previous equipment">‹</button>
      <button className="equip-arrow equip-arrow-next" onClick={next} disabled={current === total - 1} aria-label="Next equipment">›</button>

      {/* Slider viewport */}
      <div className="equip-slider-viewport">
        <div
          className="equip-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {EQUIPMENT_LIST.map((eq) => (
            <div className="equip-slide" key={eq.title}>
              <div className="equipment-inner">
                <div className="equipment-grid">

                  {/* ── LEFT: machine image ── */}
                  <div className="equip-image-wrap">
                    <img
                      src={eq.img}
                      alt={eq.title}
                      className="equip-machine-img"
                      onError={e => { e.currentTarget.style.display = 'none' }}
                    />
                    <div className="equip-machine-placeholder" aria-hidden="true" />
                  </div>

                  {/* ── RIGHT: content ── */}
                  <div className="equip-content">

                    <span className="section-label">Equipment</span>
                    <h2 className="equip-title">{eq.title}</h2>
                    <p className="equip-desc">{eq.desc}</p>

                    <div className="equip-features">
                      {eq.features.map(({ title, desc }) => (
                        <div className="equip-feature" key={title}>
                          <span className="equip-feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
                            </svg>
                          </span>
                          <div>
                            <p className="equip-feature-title">{title}</p>
                            <p className="equip-feature-desc">{desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <p className="equip-products-label">Products You Can Make</p>
                    <div className="equip-products-grid">
                      {eq.products.map(({ img, label }) => (
                        <div className="equip-product-card" key={label}>
                          <div className="equip-product-img-wrap">
                            <img
                              src={img}
                              alt={label}
                              className="equip-product-img"
                              onError={e => { e.currentTarget.style.display = 'none' }}
                            />
                            <div className="equip-product-img-placeholder" aria-hidden="true" />
                          </div>
                          <p className="equip-product-label">{label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="equip-highlight">
                      <span className="equip-highlight-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
                        </svg>
                      </span>
                      <p>{eq.highlight}</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="equip-slider-controls">
        <div className="equip-dots">
          {EQUIPMENT_LIST.map((e, i) => (
            <button
              key={e.title}
              className={`equip-dot${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to ${e.title}`}
            />
          ))}
        </div>
      </div>

    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// Home page — composes all sections
// ─────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <EquipmentSection />
    </main>
  )
}
