import '../styles/services.css'
import '../styles/about.css'

const STATS = [
  { value: '8',  label: 'Years of Service'     },
  { value: '200+', label: 'Enterprises Assisted' },
  { value: '50+',  label: 'Products Developed'   },
  { value: '4',    label: 'Expert Researchers'   },
]

export default function About() {
  return (
    <main>

      {/* ── Hero ── */}
      <div className="services-page-hero" style={{ backgroundImage: 'url(/images/hero4.jpg)' }}>
        <div className="services-page-hero-overlay">
          <div className="services-page-hero-content">
            <span className="hero-page-eyebrow">Who We Are</span>
            <h1 className="hero-page-title">About CFIC</h1>
            <p className="hero-page-sub">
              The Caraga Food Innovation Center is a government-supported hub
              dedicated to advancing food science, technology, and enterprise
              development across the Caraga Region.
            </p>
          </div>
        </div>
      </div>

      {/* ── About FIC ── */}
      <section className="about-fic">
        <div className="about-fic-inner">

          <div className="about-fic-grid">
            <div className="about-fic-text">
              <span className="section-label">About the Center</span>
              <h2 className="section-heading">Empowering Food Innovation in Caraga</h2>
              <p className="about-fic-para">
                The Caraga Food Innovation Center (CFIC) supports entrepreneurs,
                businesses, and researchers in developing innovative and high-quality
                food products. Through advanced facilities, specialized equipment, and
                expert technical assistance, the center helps transform food ideas into
                market-ready products.
              </p>
              <p className="about-fic-para">
                The center also promotes collaboration and technology transfer to
                strengthen the region's food industry, contributing to inclusive growth
                and sustainable development in Caraga.
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

            <div className="about-fic-image-wrap">
              <img
                src="/images/aboutIMG.png"
                alt="Caraga Food Innovation Center"
                className="about-fic-img"
                onError={e => { e.currentTarget.style.display = 'none' }}
              />
              <div className="about-fic-img-placeholder" aria-hidden="true" />
            </div>
          </div>

          {/* Stats row */}
          <div className="about-stats">
            {STATS.map(({ value, label }) => (
              <div className="about-stat" key={label}>
                <span className="about-stat-value">{value}</span>
                <span className="about-stat-label">{label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  )
}
