import { Link } from 'react-router-dom'
import './Footer.css'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Contact Us', path: '/contact' },
]

const services = [
  'IT Payroll Outsourcing',
  'Niche Skills Hiring',
  'HR Consulting',
  'Leadership Hiring',
  'Vendor Management',
  'Resume Writing',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__col footer__col--brand">
            <div className="footer__logo">
              <div className="footer__logo-capsule">
                <img src="/logo.png" alt="PerfectRecruit Services" className="footer__logo-img" />
              </div>
            </div>
            <p className="footer__desc">
              Your trusted global talent partner since 2015. Serving Fortune 500 companies 
              across 7 countries with innovative recruitment solutions.
            </p>
            {/* Social */}
            <div className="footer__social">
              <a
                href="https://linkedin.com/company/perfectrecruit-services"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-btn"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/918160523497"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-btn footer__social-btn--wa"
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h3 className="footer__col-title">Quick Links</h3>
            <ul className="footer__links">
              {quickLinks.map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="footer__link">
                    <span className="footer__link-arrow">→</span> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h3 className="footer__col-title">Our Services</h3>
            <ul className="footer__links">
              {services.map(s => (
                <li key={s}>
                  <Link to="/services" className="footer__link">
                    <span className="footer__link-arrow">→</span> {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h3 className="footer__col-title">Get in Touch</h3>
            <ul className="footer__contact-list">
              <li>
                <span className="footer__contact-icon">📍</span>
                <span>Ahmedabad, Gujarat, India</span>
              </li>
              <li>
                <span className="footer__contact-icon">📞</span>
                <a href="tel:+918160523497" className="footer__contact-link">+91 8160523497</a>
              </li>
              <li>
                <span className="footer__contact-icon">✉️</span>
                <a href="mailto:info@perfectrecruit.net" className="footer__contact-link">info@perfectrecruit.net</a>
              </li>
              <li>
                <span className="footer__contact-icon">👤</span>
                <span>Mr. Gaurav Rajput</span>
              </li>
              <li>
                <span className="footer__contact-icon">🌐</span>
                <a href="https://perfectrecruit.net" target="_blank" rel="noopener noreferrer" className="footer__contact-link">perfectrecruit.net</a>
              </li>
            </ul>

            <a
              href="https://wa.me/918160523497?text=Hello%20PerfectRecruit%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="footer__wa-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} PerfectRecruit Services. All rights reserved.</p>
          <p className="footer__bottom-right">
            Made with <span style={{color:'#ff6b6b'}}>♥</span> in Ahmedabad, India &nbsp;·&nbsp;
            <a href="https://perfectrecruit.net" className="footer__bottom-link">perfectrecruit.net</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
