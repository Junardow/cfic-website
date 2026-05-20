import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home     from './pages/Home'
import Services from './pages/Services'
import Products from './pages/Products'
import About    from './pages/About'
import Team     from './pages/Team'
import Contact  from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"         element={<Home />}     />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about"    element={<About />}    />
        <Route path="/team"     element={<Team />}     />
        <Route path="/contact"  element={<Contact />}  />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
