import { Link } from 'react-router-dom'

const FOOTER_LINKS = [
  { label: 'About CFIC',   to: '/about'    },
  { label: 'Services',     to: '/services' },
  { label: 'Products',     to: '/products' },
  { label: 'Team Members', to: '/team'     },
  { label: 'Contact',      to: '/contact'  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/images/logo.webp" alt="Caraga Food Innovation Center" />
          <p>Empowering food innovation across the Caraga Region through research, technology, and community-driven collaboration.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            {FOOTER_LINKS.map(({ label, to }) => (
              <li key={label}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Caraga Food Innovation Center</p>
          <p>Caraga State University, Butuan City</p>
          <p>Caraga Region, Philippines</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Caraga Food Innovation Center. All rights reserved.</p>
        <div className="footer-partner-logos">
          <img src="/images/CSU-logo.png"          alt="CSU"         />
          <img src="/images/dost-logo.png"          alt="DOST"        />
          <img src="/images/consortium-logo.png"    alt="Consortium"  />
        </div>
      </div>
    </footer>
  )
}
