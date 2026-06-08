import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import './About.css'

const timeline = [
  { year: '2015', title: 'Founded in Ahmedabad', desc: 'PerfectRecruit Services established by Mr. Gaurav Rajput with a vision to transform talent acquisition in India.' },
  { year: '2017', title: 'First International Expansion', desc: 'Extended services to Dubai & UK markets, partnering with building material and finance companies.' },
  { year: '2019', title: '45+ Building Material Clients', desc: 'Became the only recruitment firm in India exclusively serving 45+ companies in the Building Material sector.' },
  { year: '2020', title: 'IT Payroll Outsourcing Launch', desc: 'Launched IT Payroll services for USA, Canada, Australia & UK — growing our global footprint.' },
  { year: '2022', title: 'Big 4 Partnerships', desc: 'Onboarded 40+ Accounting firms including Big 4 firms across India and South Africa.' },
  { year: '2024', title: '9+ Years · 7 Countries', desc: 'Celebrating nearly a decade of talent excellence, now serving Fortune 500 companies across 7 countries with a team of 11–50.' },
]

const values = [
  { icon: '🎯', title: 'Precision', desc: 'We match talent to opportunity with surgical accuracy — right person, right role, right time.' },
  { icon: '🤝', title: 'Partnership', desc: 'We\'re not vendors; we\'re strategic partners invested in your long-term success.' },
  { icon: '🌍', title: 'Global Mindset', desc: 'Deep understanding of 7 international markets with local nuance and global reach.' },
  { icon: '⚡', title: 'Agility', desc: 'Creative sourcing and rapid turnaround — because great talent doesn\'t wait.' },
  { icon: '🔒', title: 'Integrity', desc: 'Transparent communication and ethical practices form the bedrock of every engagement.' },
  { icon: '📈', title: 'Excellence', desc: 'We continually raise the bar — for our clients, candidates, and ourselves.' },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us — PerfectRecruit Services | Our Story & Mission</title>
        <meta name="description" content="Learn about PerfectRecruit Services — founded in 2015 by Mr. Gaurav Rajput in Ahmedabad. 9+ years of global recruitment excellence across India, UK, USA, Dubai, Italy, Canada & South Africa." />
      </Helmet>

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__content">
          <span className="section__tag">Our Story</span>
          <h1>Built on <span className="text-gradient">Trust & Talent</span></h1>
          <p>From a single office in Ahmedabad to a global recruitment powerhouse — discover the journey of PerfectRecruit Services.</p>
        </div>
        <div className="page-hero__wave">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none"><path d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z" fill="white" /></svg>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="about-mission__grid">
            <div className="about-mission__card about-mission__card--primary">
              <div className="about-mission__icon">🚀</div>
              <h3>Our Mission</h3>
              <p>To accelerate talent acquisition for organizations worldwide by combining deep industry expertise, creative sourcing, and a human-first approach — building careers and companies simultaneously.</p>
            </div>
            <div className="about-mission__card about-mission__card--accent">
              <div className="about-mission__icon">🔭</div>
              <h3>Our Vision</h3>
              <p>To be the most trusted talent partner across every industry we serve — recognized globally for precision hiring, ethical practices, and transformative impact on people and organizations.</p>
            </div>
            <div className="about-mission__card about-mission__card--teal">
              <div className="about-mission__icon">⭐</div>
              <h3>Our Promise</h3>
              <p>Every placement is backed by rigorous screening, cultural alignment assessment, and post-placement support — ensuring success for both client and candidate, every single time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="about-founder">
        <div className="about-founder__bg-layer" />
        <div className="container">
          <div className="about-founder__grid">

            {/* Left — Photo Card */}
            <div className="about-founder__photo-col">
              <div className="about-founder__photo-frame">
                <img src="/gaurav.jpg" alt="Mr. Gaurav Rajput — Founder & Director" />
                <div className="about-founder__photo-overlay" />
                <div className="about-founder__photo-badge">
                  <span className="about-founder__photo-badge-crown">👑</span>
                  <div>
                    <div className="about-founder__photo-badge-name">Mr. Gaurav Rajput</div>
                    <div className="about-founder__photo-badge-title">Founder &amp; Director</div>
                  </div>
                </div>
              </div>
              {/* Mini stat pills */}
              <div className="about-founder__stat-row">
                <div className="about-founder__stat">
                  <span className="about-founder__stat-number">9+</span>
                  <span className="about-founder__stat-label">Years</span>
                </div>
                <div className="about-founder__stat">
                  <span className="about-founder__stat-number">7</span>
                  <span className="about-founder__stat-label">Countries</span>
                </div>
                <div className="about-founder__stat">
                  <span className="about-founder__stat-number">500+</span>
                  <span className="about-founder__stat-label">Placements</span>
                </div>
              </div>
            </div>

            {/* Right — Content */}
            <div className="about-founder__content">
              <span className="section__tag">Leadership</span>
              <h2 className="about-founder__name">
                Mr. <span className="text-gradient">Gaurav Rajput</span>
              </h2>
              <p className="about-founder__role">Founder &amp; Director — PerfectRecruit Services</p>

              <blockquote className="about-founder__quote">
                "Every person deserves the right career,<br />and every company deserves the right team."
              </blockquote>

              <p className="about-founder__bio">
                With a visionary approach to human capital, Mr. Gaurav Rajput founded PerfectRecruit Services in 2015 in Ahmedabad. Under his leadership, the firm evolved from a local staffing company to an internationally recognized talent partner — serving Fortune 500 companies across <strong>7 countries</strong> and pioneering niche recruitment in Building Materials, Accounting &amp; IT.
              </p>

              <div className="about-founder__pills">
                <span className="about-founder__pill">🏗️ Building Materials</span>
                <span className="about-founder__pill">💻 IT Staffing</span>
                <span className="about-founder__pill">📊 Accounting</span>
                <span className="about-founder__pill">🌍 Global Reach</span>
              </div>

              <div className="about-founder__contact">
                <a href="tel:+918160523497" className="about-founder__contact-item">
                  <span>📞</span> +91 8160523497
                </a>
                <a href="mailto:Connect@perfectrecruit.net" className="about-founder__contact-item">
                  <span>✉️</span> Connect@perfectrecruit.net
                </a>
                <a href="https://linkedin.com/company/perfectrecruit-services" target="_blank" rel="noopener noreferrer" className="about-founder__contact-item about-founder__contact-item--linkedin">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  LinkedIn
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section about-timeline">
        <div className="container">
          <div className="section__header">
            <span className="section__tag">Our Journey</span>
            <h2 className="section__title">9+ Years of <span>Milestones</span></h2>
            <div className="divider" />
          </div>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div className={`timeline__item ${i % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`} key={item.year}>
                <div className="timeline__content">
                  <div className="timeline__year">{item.year}</div>
                  <h3 className="timeline__title">{item.title}</h3>
                  <p className="timeline__desc">{item.desc}</p>
                </div>
                <div className="timeline__dot" />
              </div>
            ))}
            <div className="timeline__line" />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <span className="section__tag">What We Stand For</span>
            <h2 className="section__title">Our Core <span>Values</span></h2>
            <p className="section__subtitle">The principles that guide every placement, every partnership, every day.</p>
          </div>
          <div className="about-values__grid">
            {values.map(v => (
              <div className="about-values__card card" key={v.title}>
                <div className="about-values__icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section about-global">
        <div className="container">
          <div className="section__header">
            <span className="section__tag">Global Reach</span>
            <h2 className="section__title">We Operate in <span>7 Countries</span></h2>
          </div>
          <div className="about-global__grid">
            {[
              { flag: '🇮🇳', country: 'India', role: 'Headquarters', detail: 'Ahmedabad, Gujarat — our home base and largest talent pool.' },
              { flag: '🇬🇧', country: 'United Kingdom', role: 'IT & Finance', detail: 'Specialized IT and financial services hiring.' },
              { flag: '🇺🇸', country: 'USA', role: 'IT Payroll', detail: 'IT Payroll Outsourcing and technology staffing.' },
              { flag: '🇦🇪', country: 'Dubai / UAE', role: 'Building Materials', detail: 'Niche hiring for the building material sector.' },
              { flag: '🇮🇹', country: 'Italy', role: 'Manufacturing', detail: 'Manufacturing, engineering, and operations talent.' },
              { flag: '🇨🇦', country: 'Canada', role: 'IT & Payroll', detail: 'IT payroll services and technology talent.' },
              { flag: '🇿🇦', country: 'South Africa', role: 'Accounting', detail: 'Accounting and finance professionals.' },
            ].map(c => (
              <div className="about-global__card" key={c.country}>
                <div className="about-global__flag">{c.flag}</div>
                <div className="about-global__info">
                  <h4>{c.country}</h4>
                  <span className="badge badge--accent">{c.role}</span>
                  <p>{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container about-cta__inner">
          <h2>Let's Build Something Great Together</h2>
          <p>Partner with PerfectRecruit and experience talent acquisition done right.</p>
          <Link to="/contact" className="btn btn--accent btn--lg" id="about-cta-btn">Get in Touch →</Link>
        </div>
      </section>
    </>
  )
}
