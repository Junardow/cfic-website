import { useState, useRef, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const ABOUT_DROPDOWN = [
  { label: 'About FIC',    to: '/about' },
  { label: 'Team Members', to: '/team'  },
]

const NAV_LINKS = [
  { label: 'Home',     to: '/'         },
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
]

export default function Navbar() {
  const [menuOpen,     setMenuOpen]     = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location    = useLocation()

  const close   = () => { setMenuOpen(false); setDropdownOpen(false) }
  const isAbout = location.pathname === '/about' || location.pathname === '/team'

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleDropdownLink = () => {
    close()
    setDropdownOpen(false)
  }

  return (
    <nav className={menuOpen ? 'nav-open' : ''}>
      <NavLink className="nav-logo" to="/" onClick={close}>
        <img src="/images/logo.webp" alt="Caraga Food Innovation Center" />
      </NavLink>

      <div className="nav-right">
        <ul className="nav-links">

          {NAV_LINKS.map(({ label, to }) => (
            <li key={label}>
              <NavLink
                to={to}
                onClick={close}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {label}
              </NavLink>
            </li>
          ))}

          {/* About dropdown */}
          <li
            className="nav-dropdown-wrap"
            ref={dropdownRef}
          >
            <button
              className={`nav-dropdown-trigger${isAbout ? ' active' : ''}`}
              onClick={() => setDropdownOpen(o => !o)}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              About Us
              <svg
                className={`nav-dropdown-chevron${dropdownOpen ? ' open' : ''}`}
                viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            <ul className={`nav-dropdown${dropdownOpen ? ' open' : ''}`}>
              {ABOUT_DROPDOWN.map(({ label, to }) => (
                <li key={label}>
                  <NavLink to={to} onClick={handleDropdownLink}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

        </ul>

        <NavLink to="/contact" className="nav-cta" onClick={close}>
          Get in Touch
        </NavLink>
      </div>

      <button
        className="nav-toggle"
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
