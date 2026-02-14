import { useState, useEffect } from 'react'
import './App.css'
import logoImg from './assets/logo.png'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo" onClick={() => scrollTo('hero')}>
            <img src={logoImg} alt="DMGT Systems" className="nav-logo-img" />
          </div>
          <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
            <li><button onClick={() => scrollTo('services')}>Services</button></li>
            <li><button onClick={() => scrollTo('about')}>About</button></li>
            <li><button onClick={() => scrollTo('contact')}>Contact</button></li>
          </ul>
          <button className={`hamburger${menuOpen ? ' active' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <h1>Your One-Stop <span className="gradient-text">IT Solution</span></h1>
          <p className="hero-sub">
            Infrastructure, software development, cybersecurity, and data analytics. Everything your business needs under one roof.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollTo('services')}>Our Services</button>
            <button className="btn btn-outline" onClick={() => scrollTo('contact')}>Get in Touch</button>
          </div>
        </div>
        <div className="hero-glow" />
      </section>

      {/* Services */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Do</span>
            <h2>Comprehensive IT Services</h2>
            <p>End-to-end technology solutions tailored to drive your business forward.</p>
          </div>
          <div className="services-grid">
            <ServiceCard
              icon={<ServerIcon />}
              title="Infrastructure Setup & Management"
              items={[
                'Install and manage servers, computers, networking devices, and storage systems',
                'Set up local networks (LAN/WAN), Wi-Fi, VPNs, and cloud infrastructure',
              ]}
            />
            <ServiceCard
              icon={<CodeIcon />}
              title="Software Development"
              items={[
                'Build custom software, web apps, and mobile applications',
                'Maintain and update existing software systems',
                'Integrate third-party software into business workflows',
              ]}
            />
            <ServiceCard
              icon={<ShieldIcon />}
              title="Cybersecurity Services"
              items={[
                'Protect systems against malware, viruses, and hacking threats',
                'Set up firewalls, VPNs, and secure authentication systems',
              ]}
            />
            <ServiceCard
              icon={<DatabaseIcon />}
              title="Data Management & Analytics"
              items={[
                'Handle databases, backups, and data recovery',
                'Provide data analytics and reporting services for smarter business decisions',
              ]}
            />
            <ServiceCard
              icon={<UsersIcon />}
              title="IT Support & Account Management"
              items={[
                'User account management ensuring secure access to systems',
                'Dedicated tech support for smooth operation of all IT tools',
              ]}
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <span className="section-tag">About Us</span>
              <h2>Technology Partner You Can Trust</h2>
              <p>
                DMGT Systems is a full-service IT solutions company that helps businesses
                get the most out of their technology. We handle everything from infrastructure setup
                and custom software development to cybersecurity and keeping your digital assets safe.
              </p>
              <p>
                Our team works closely with each client to deliver solutions that fit their
                specific needs and help them stay competitive.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-icon"><ServerIcon /></div>
                <h3>Infrastructure</h3>
                <p>Enterprise-grade setup and management</p>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><ShieldIcon /></div>
                <h3>Security First</h3>
                <p>Protection at every layer</p>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><CodeIcon /></div>
                <h3>Custom Software</h3>
                <p>Built for your unique needs</p>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><UsersIcon /></div>
                <h3>24/7 Support</h3>
                <p>Always here when you need us</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Get in Touch</span>
            <h2>Let's Build Something Great</h2>
            <p>Ready to transform your IT infrastructure? Reach out to us today.</p>
          </div>
          <div className="contact-grid">
            <a href="tel:4167048184" className="contact-card">
              <div className="contact-icon"><PhoneIcon /></div>
              <h3>Call Us</h3>
              <p>(416) 704-8184</p>
            </a>
            <a href="mailto:rakesh@dmgtsystems.com" className="contact-card">
              <div className="contact-icon"><EmailIcon /></div>
              <h3>Email Us</h3>
              <p>rakesh@dmgtsystems.com</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={logoImg} alt="DMGT Systems" className="footer-logo-img" />
            </div>
            <p className="footer-text">
              &copy; {new Date().getFullYear()} DMGT Systems. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

/* SVG Icons */
function ServerIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <circle cx="6" cy="6" r="1" fill="currentColor" />
      <circle cx="6" cy="18" r="1" fill="currentColor" />
      <line x1="10" y1="6" x2="18" y2="6" />
      <line x1="10" y1="18" x2="18" y2="18" />
    </svg>
  )
}

function CodeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  )
}

function DatabaseIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="22 6 12 13 2 6" />
    </svg>
  )
}

export default App
