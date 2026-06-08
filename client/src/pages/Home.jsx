import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './Home.css'

const stats = [
  { value: 9, suffix: '+', label: 'Years of Excellence' },
  { value: 45, suffix: '+', label: 'Building Material Companies' },
  { value: 40, suffix: '+', label: 'Accounting Firms' },
  { value: 7, suffix: '', label: 'Countries Served' },
  { value: 500, suffix: '+', label: 'Fortune Clients' },
]

const countries = ['🇮🇳 India', '🇬🇧 UK', '🇺🇸 USA', '🇦🇪 Dubai', '🇮🇹 Italy', '🇨🇦 Canada', '🇿🇦 South Africa']

const highlights = [
  { icon: '🎯', title: 'Niche Skills Hiring', desc: 'Specialized talent for hard-to-fill roles across every industry.' },
  { icon: '🌍', title: 'Global Reach', desc: 'Serving 7 countries with a deep understanding of each market.' },
  { icon: '💼', title: 'Fortune 500 Clients', desc: 'Trusted by the world\'s most prestigious companies since 2015.' },
  { icon: '⚡', title: 'Fast Placements', desc: 'Creative sourcing & headhunting that cuts time-to-hire in half.' },
]

function AnimatedCounter({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const animate = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Home() {
  const [titleIndex, setTitleIndex] = useState(0)
  const titles = ['We Build Career.', 'We Connect Talent.', 'We Drive Growth.']

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex(i => (i + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Helmet>
        <title>PerfectRecruit Services — We Build Career. | Global Talent Partner</title>
        <meta name="description" content="PerfectRecruit Services — Your Global Talent Partner with 9+ years of recruitment excellence. Serving Fortune 500 companies across India, UK, USA, Dubai, Italy, Canada & South Africa." />
        <meta property="og:title" content="PerfectRecruit Services — We Build Career." />
        <meta property="og:description" content="Global talent partner serving 7 countries. HR consulting, IT hiring, payroll outsourcing & more." />
      </Helmet>

      {/* ===== HERO ===== */}
      <section className="hero" id="home">
        <div className="hero__bg-shapes">
          <div className="hero__shape hero__shape--1" />
          <div className="hero__shape hero__shape--2" />
          <div className="hero__shape hero__shape--3" />
        </div>
        <div className="hero__particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="hero__particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }} />
          ))}
        </div>

        <div className="container hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Trusted by Fortune 500 Companies Since 2015
          </div>

          <h1 className="hero__title" key={titleIndex}>
            <span className="hero__title-line">{titles[titleIndex]}</span>
          </h1>

          <p className="hero__subtitle">
            Your Global Talent Partner —{' '}
            <span className="hero__countries">
              {countries.map((c, i) => (
                <span key={c}>
                  {c}{i < countries.length - 1 ? ' · ' : ''}
                </span>
              ))}
            </span>
          </p>

          <div className="hero__actions">
            <Link to="/contact" className="btn btn--accent btn--lg" id="hero-cta-hiring">
              Get Hiring Help
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/services" className="btn btn--outline btn--lg" id="hero-cta-services">
              Explore Services
            </Link>
          </div>

          <div className="hero__scroll-hint">
            <div className="hero__scroll-mouse">
              <div className="hero__scroll-wheel" />
            </div>
            <span>Scroll to explore</span>
          </div>
        </div>

        <div className="hero__wave">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,90 1440,80 L1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <div className="stat-card__value">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="stat-card__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT SNIPPET ===== */}
      <section className="section home-about">
        <div className="container">
          <div className="home-about__grid">
            <div className="home-about__content">
              <span className="section__tag">About PerfectRecruit</span>
              <h2 className="section__title">Connecting the <span>Right Talent</span> to the Right Opportunity</h2>
              <p>Founded in 2015 by Mr. Gaurav Rajput in Ahmedabad, Gujarat, PerfectRecruit Services has grown into India's most specialized recruitment firm — the only company dealing with <strong>45+ Building Material companies</strong> and <strong>40+ Accounting firms</strong> including Big 4.</p>
              <p style={{marginTop:'1rem'}}>Our talent acceleration model serves Fortune 500 companies across 7 countries, providing IT Payroll Outsourcing, Niche Skills Hiring, HR Consulting, and Leadership Hiring with unmatched precision and care.</p>
              <div className="home-about__tags">
                {['Creative Sourcing', 'Headhunting', 'Mass Hiring', 'Vendor Management', 'Leadership Hiring'].map(tag => (
                  <span className="badge badge--primary" key={tag}>{tag}</span>
                ))}
              </div>
              <Link to="/about" className="btn btn--primary" style={{marginTop:'1.5rem'}} id="home-learn-more">
                Learn Our Story →
              </Link>
            </div>
            <div className="home-about__visual">
              <div className="home-about__card-stack">
                {highlights.map((h, i) => (
                  <div className="home-about__highlight-card" key={h.title} style={{animationDelay: `${i * 0.1}s`}}>
                    <span className="home-about__highlight-icon">{h.icon}</span>
                    <div>
                      <h4>{h.title}</h4>
                      <p>{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES TEASER ===== */}
      <section className="section section--alt home-services">
        <div className="container">
          <div className="section__header">
            <span className="section__tag">What We Offer</span>
            <h2 className="section__title">Comprehensive <span>HR & Recruitment</span> Solutions</h2>
            <p className="section__subtitle">From niche hiring to IT payroll outsourcing — we handle every aspect of your talent strategy.</p>
          </div>
          <div className="home-services__grid">
            {[
              { icon: '🔍', title: 'Niche Skills Hiring', desc: 'Finding rare talent for specialized roles where generic searches fail.' },
              { icon: '💻', title: 'IT Payroll Outsourcing', desc: 'Seamless payroll management across USA, Canada, Australia & UK.' },
              { icon: '👑', title: 'Leadership Hiring', desc: 'C-suite and senior executive search for global organizations.' },
              { icon: '📋', title: 'HR Consulting', desc: 'End-to-end HR strategy, policy design, and organizational development.' },
              { icon: '🤝', title: 'Vendor Management', desc: 'Multi-vendor coordination and optimization for large enterprises.' },
              { icon: '📝', title: 'Resume Writing', desc: 'Professional resume crafting that opens doors to dream opportunities.' },
            ].map(s => (
              <div className="home-service-card card" key={s.title}>
                <span className="home-service-card__icon">{s.icon}</span>
                <h3 className="home-service-card__title">{s.title}</h3>
                <p className="home-service-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center', marginTop:'2.5rem'}}>
            <Link to="/services" className="btn btn--primary btn--lg" id="home-view-all-services">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== GLOBAL REACH ===== */}
      <section className="section home-global">
        <div className="container">
          <div className="section__header">
            <span className="section__tag">Global Presence</span>
            <h2 className="section__title">Talent Without <span>Borders</span></h2>
            <p className="section__subtitle">One partner for all your international hiring needs across 7 countries.</p>
          </div>
          <div className="home-global__countries">
            {[
              { flag: '🇮🇳', country: 'India', desc: 'Headquarters — Ahmedabad, Gujarat' },
              { flag: '🇬🇧', country: 'United Kingdom', desc: 'IT & Finance Hiring' },
              { flag: '🇺🇸', country: 'USA', desc: 'IT Payroll Outsourcing' },
              { flag: '🇦🇪', country: 'Dubai / UAE', desc: 'Building Materials Sector' },
              { flag: '🇮🇹', country: 'Italy', desc: 'Manufacturing & Engineering' },
              { flag: '🇨🇦', country: 'Canada', desc: 'IT Payroll & Tech Hiring' },
              { flag: '🇿🇦', country: 'South Africa', desc: 'Accounting & Finance' },
            ].map(c => (
              <div className="home-global__country-card" key={c.country}>
                <div className="home-global__flag">{c.flag}</div>
                <h4>{c.country}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="home-cta">
        <div className="container home-cta__inner">
          <div className="home-cta__content">
            <h2>Ready to Find Your Perfect Hire?</h2>
            <p>Let PerfectRecruit handle your talent needs — from first search to successful onboarding.</p>
          </div>
          <div className="home-cta__actions">
            <Link to="/contact" className="btn btn--accent btn--lg" id="home-cta-bottom">
              Get in Touch Today
            </Link>
            <a
              href="https://wa.me/918160523497?text=Hello%20PerfectRecruit%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline btn--lg"
              id="home-cta-whatsapp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
