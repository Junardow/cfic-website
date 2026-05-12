import { useState, useEffect } from 'react'
import '../styles/services.css'
import '../styles/products.css'

const CATEGORIES = [
  { id: 'all',          label: 'All Products'   },
  { id: 'vacuum-fryer', label: 'Vacuum Fryer'   },
  { id: 'vacuum-dryer', label: 'Vacuum Dryer'   },
  { id: 'spray-dryer',  label: 'Spray Dryer'    },
  { id: 'freeze-dryer', label: 'Freeze Dryer'   },
  { id: 'retort',       label: 'Retort Machine' },
  { id: 'other',        label: 'Other'          },
]

const MACHINE = {
  'vacuum-dryer': { img: '/images/equip1.png', name: 'Vacuum Dryer',        desc: 'Gently removes moisture at low pressure, preserving natural color, aroma, and nutritional content.' },
  'vacuum-fryer': { img: '/images/equip1.png', name: 'Vacuum Fryer',        desc: 'Fries produce at low temperatures under vacuum, locking in nutrients and flavor while reducing oil absorption.' },
  'spray-dryer':  { img: '/images/equip1.png', name: 'Spray Dryer',         desc: 'Converts liquid extracts into fine, shelf-stable powder through rapid hot-air atomization.' },
  'freeze-dryer': { img: '/images/equip1.png', name: 'Freeze Dryer',        desc: 'Removes moisture through sublimation under vacuum, producing shelf-stable food that rehydrates to near-original quality.' },
  'retort':       { img: '/images/equip1.png', name: 'Water Retort Machine', desc: 'Sterilizes sealed food packages with pressurized hot water, ensuring commercial sterility and long shelf life.' },
  'other':        { img: '/images/equip1.png', name: 'Other Equipment',      desc: 'Produced using specialized food processing equipment available at the CFIC facility.' },
}

const PRODUCTS = [
  {
    img: '/images/productIMG1.jpg', badge: 'Vacuum Dried',    category: 'vacuum-dryer',
    title: 'Dried Pineapple Slices',
    desc:  'Naturally sweet and chewy dried pineapple slices, made to preserve flavor and nutrients for a delicious, healthy snack.',
    credit: 'Developed by CFIC',
  },
  {
    img: '/images/productIMG2.jpg', badge: 'Vacuum Dried',    category: 'vacuum-dryer',
    title: 'Dried Mango Strips',
    desc:  'Tender dried mango strips retaining natural sweetness and tropical aroma through gentle vacuum drying.',
    credit: 'Developed by CFIC',
  },
  {
    img: '/images/productIMG3.jpg', badge: 'Vacuum Fried',    category: 'vacuum-fryer',
    title: 'Banana Chips',
    desc:  'Light and crispy banana chips fried at low temperature to preserve color, taste, and nutritional value.',
    credit: 'Developed by CFIC',
  },
  {
    img: '/images/productIMG4.jpg', badge: 'Vacuum Fried',    category: 'vacuum-fryer',
    title: 'Jackfruit Chips',
    desc:  'Golden jackfruit chips with natural sweetness intact, produced using vacuum frying for a healthier crunch.',
    credit: 'Developed by CFIC',
  },
  {
    img: '/images/productIMG1.jpg', badge: 'Spray Dried',     category: 'spray-dryer',
    title: 'Calamansi Powder',
    desc:  'Fine citrus powder spray-dried from fresh calamansi juice, perfect for instant beverages and food seasoning.',
    credit: 'Developed by CFIC',
  },
  {
    img: '/images/productIMG2.jpg', badge: 'Freeze Dried',    category: 'freeze-dryer',
    title: 'Freeze-Dried Durian',
    desc:  'Crisp freeze-dried durian cubes that fully preserve the fruit\'s signature aroma, flavor, and nutrients.',
    credit: 'Developed by CFIC',
  },
  {
    img: '/images/productIMG3.jpg', badge: 'Retort Processed', category: 'retort',
    title: 'Ready-to-Eat Adobo',
    desc:  'Shelf-stable traditional Filipino adobo processed through retort sterilization for convenience and long shelf life.',
    credit: 'Developed by CFIC',
  },
  {
    img: '/images/productIMG4.jpg', badge: 'Vacuum Fried',    category: 'vacuum-fryer',
    title: 'Sweet Potato Chips',
    desc:  'Vibrant sweet potato chips vacuum fried to preserve their natural color and deliver a satisfying low-oil crunch.',
    credit: 'Developed by CFIC',
  },
]

const EMPTY_FORM = { name: '', email: '', message: '' }

export default function Products() {
  const [active,    setActive]   = useState('all')
  const [selected,  setSelected] = useState(null)
  const [formMode,  setFormMode] = useState(false)
  const [form,      setForm]     = useState(EMPTY_FORM)
  const [sent,      setSent]     = useState(false)

  const filtered = active === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === active)

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  function closeOverlay() {
    setSelected(null)
    setFormMode(false)
    setForm(EMPTY_FORM)
    setSent(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main>

      {/* ── Hero ── */}
      <div className="products-page-hero" style={{ backgroundImage: 'url(/images/hero3.png)' }}>
        <div className="products-page-hero-overlay">
          <div className="products-page-hero-content">
            <span className="hero-page-eyebrow">Food Innovations</span>
            <h1 className="hero-page-title">Our Products</h1>
            <p className="hero-page-sub">
              Discover our portfolio of innovative food products developed
              through cutting-edge processing technologies and the expertise
              of our research team.
            </p>
          </div>
        </div>
      </div>

      {/* ── Products browser ── */}
      <section className="products-page-section">
        <div className="products-page-inner">

          {/* Sidebar */}
          <aside className="products-sidebar">
            <p className="sidebar-heading">Filter by Machine</p>
            <ul className="sidebar-list">
              {CATEGORIES.map(({ id, label }) => (
                <li key={id}>
                  <button
                    className={`sidebar-btn${active === id ? ' active' : ''}`}
                    onClick={() => setActive(id)}
                  >
                    {label}
                    <span className="sidebar-count">
                      {id === 'all'
                        ? PRODUCTS.length
                        : PRODUCTS.filter(p => p.category === id).length}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Grid */}
          <div className="products-page-grid-wrap">
            <div className="products-page-topbar">
              <p className="products-page-result-count">
                Showing <strong>{filtered.length}</strong> product{filtered.length !== 1 ? 's' : ''}
                {active !== 'all' && (
                  <> · <span className="products-page-active-filter">
                    {CATEGORIES.find(c => c.id === active)?.label}
                  </span></>
                )}
              </p>
            </div>

            <div className="products-page-grid">
              {filtered.map((prd, i) => (
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
                      <button className="card-link" onClick={() => setSelected(prd)}>View →</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="products-empty">
                <p>No products found for this category.</p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ── Overlay ── */}
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
                        <label className="inq-label" htmlFor="prd-name">Name</label>
                        <input id="prd-name" className="inq-input" type="text" placeholder="Your full name" required
                          value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                      </div>
                      <div className="inq-field">
                        <label className="inq-label" htmlFor="prd-email">Email</label>
                        <input id="prd-email" className="inq-input" type="email" placeholder="you@email.com" required
                          value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                      </div>
                    </div>
                    <div className="inq-field">
                      <label className="inq-label">Product</label>
                      <input className="inq-input" type="text" value={selected.title} disabled />
                    </div>
                    <div className="inq-field">
                      <label className="inq-label" htmlFor="prd-msg">Message</label>
                      <textarea id="prd-msg" className="inq-textarea" placeholder="Tell us more about your inquiry..."
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
                    <img
                      src={MACHINE[selected.category]?.img ?? '/images/equip1.png'}
                      alt={MACHINE[selected.category]?.name}
                      className="prd-overlay-machine-img"
                      onError={e => { e.currentTarget.style.display = 'none' }}
                    />
                    <div className="prd-overlay-machine-placeholder" aria-hidden="true" />
                  </div>
                  <h4 className="prd-overlay-machine-name">{MACHINE[selected.category]?.name}</h4>
                  <p className="prd-overlay-machine-desc">{MACHINE[selected.category]?.desc}</p>
                </div>

                {/* Right — product */}
                <div className="prd-overlay-product">
                  <p className="prd-overlay-side-label">Product</p>
                  <div className="prd-overlay-product-img-wrap">
                    <span className="product-badge">{selected.badge}</span>
                    <img
                      src={selected.img}
                      alt={selected.title}
                      className="prd-overlay-product-img"
                      onError={e => { e.currentTarget.style.display = 'none' }}
                    />
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

    </main>
  )
}
