import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import './Industries.css'

const industries = [
  {
    icon: '🏗️',
    title: 'Building Materials',
    highlight: '45+ Companies',
    highlightColor: 'primary',
    desc: 'PerfectRecruit is the only recruitment firm in India with exclusive deep specialization in the Building Material sector.',
    detail: 'We serve manufacturers, distributors, and retailers of cement, steel, ceramics, glass, paints, sanitaryware, and more. Our recruiters understand the technical nuances of this sector like no other firm.',
    roles: ['Sales Managers', 'Regional Heads', 'Technical Experts', 'Zonal Directors', 'Product Specialists', 'Branch Managers'],
    countries: ['India', 'Dubai', 'Italy'],
    color: '#4A0E8F',
  },
  {
    icon: '📊',
    title: 'Accounting & Finance',
    highlight: '40+ Firms incl. Big 4',
    highlightColor: 'accent',
    desc: 'Trusted by 40+ Accounting and Financial Services firms including Big 4 global organizations.',
    detail: 'Our finance division specializes in placing Chartered Accountants, CFOs, tax specialists, audit professionals, and financial analysts across India and South Africa.',
    roles: ['Chartered Accountants', 'CFOs', 'Audit Managers', 'Tax Consultants', 'Financial Analysts', 'Controllers'],
    countries: ['India', 'South Africa', 'UK'],
    color: '#00BFA5',
  },
  {
    icon: '💻',
    title: 'IT & Technology',
    highlight: 'Payroll + Hiring',
    highlightColor: 'primary',
    desc: 'End-to-end IT recruitment and payroll outsourcing services for technology companies across 4 countries.',
    detail: 'From software engineers and data scientists to DevOps architects and CISO roles — we handle full-cycle IT hiring and contractor payroll management with deep technical assessment capability.',
    roles: ['Software Engineers', 'Data Scientists', 'DevOps Engineers', 'Product Managers', 'IT Directors', 'Cloud Architects'],
    countries: ['USA', 'Canada', 'UK', 'Australia', 'India'],
    color: '#4A0E8F',
  },
  {
    icon: '🏭',
    title: 'Manufacturing',
    highlight: 'Mass & Niche Hiring',
    highlightColor: 'accent',
    desc: 'Skilled and management-level talent for manufacturing, industrial operations, and production facilities.',
    detail: 'We understand the unique demands of manufacturing environments — from production floor supervisors to plant managers and operations directors, ensuring operational continuity.',
    roles: ['Plant Managers', 'Production Supervisors', 'Quality Engineers', 'Maintenance Heads', 'Operations Directors', 'Safety Officers'],
    countries: ['India', 'Italy', 'Dubai'],
    color: '#00BFA5',
  },
  {
    icon: '🌐',
    title: 'Global & Multinational',
    highlight: '7 Countries',
    highlightColor: 'primary',
    desc: 'Talent partner of choice for Fortune 500 and global enterprises requiring cross-border recruitment expertise.',
    detail: 'Our global recruitment team navigates local regulations, cultural nuances, and international compensation benchmarks to deliver exceptional talent anywhere in the world.',
    roles: ['Country Managers', 'Global HR Heads', 'International Sales', 'Expat Specialists', 'Regional Directors', 'Business Heads'],
    countries: ['India', 'UK', 'USA', 'Dubai', 'Italy', 'Canada', 'South Africa'],
    color: '#4A0E8F',
  },
]

export default function Industries() {
  return (
    <>
      <Helmet>
        <title>Industries We Serve — PerfectRecruit Services | Sector Expertise</title>
        <meta name="description" content="PerfectRecruit serves Building Materials, Accounting, IT, Manufacturing, and Global MNC sectors. The only firm in India with 45+ building material company clients and 40+ accounting firm clients." />
      </Helmet>

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__content">
          <span className="section__tag">Industry Expertise</span>
          <h1>Deep Sector <span className="text-gradient">Specialization</span></h1>
          <p>We don't just recruit — we understand your industry inside out, delivering talent that truly fits.</p>
        </div>
        <div className="page-hero__wave">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none"><path d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z" fill="white"/></svg>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="container">
          <div className="industries__list">
            {industries.map((ind, i) => (
              <div className={`industry-card ${i % 2 === 1 ? 'industry-card--reverse' : ''}`} key={ind.title}>
                <div className="industry-card__visual" style={{ '--ind-color': ind.color }}>
                  <div className="industry-card__icon-big">{ind.icon}</div>
                  <div className="industry-card__stat">
                    <span className={`badge badge--${ind.highlightColor}`} style={{ fontSize: '1rem', padding: '8px 18px' }}>
                      {ind.highlight}
                    </span>
                  </div>
                  <div className="industry-card__countries">
                    {ind.countries.map(c => (
                      <span key={c} className="industry-card__country">{c}</span>
                    ))}
                  </div>
                </div>
                <div className="industry-card__content">
                  <h2 className="industry-card__title">{ind.title}</h2>
                  <p className="industry-card__desc">{ind.desc}</p>
                  <p className="industry-card__detail">{ind.detail}</p>
                  <div className="industry-card__roles">
                    <h4>Typical Roles We Fill</h4>
                    <div className="industry-card__role-tags">
                      {ind.roles.map(r => (
                        <span key={r} className="industry-card__role-tag">{r}</span>
                      ))}
                    </div>
                  </div>
                  <Link to="/contact" className="btn btn--primary" id={`industry-cta-${ind.title.replace(/\s+/g, '-').toLowerCase()}`}>
                    Hire in This Sector →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <span className="section__tag">Our Edge</span>
            <h2 className="section__title">Why Industry Leaders <span>Choose Us</span></h2>
          </div>
          <div className="industries-why__grid">
            {[
              { icon: '🏆', title: 'Sector-Specific Expertise', desc: 'Our recruiters come from industry backgrounds — they speak your language and understand your hiring challenges.' },
              { icon: '🎯', title: 'Pre-Qualified Talent Pools', desc: 'Years of network-building means we have ready access to passive candidates that job boards simply can\'t reach.' },
              { icon: '⚡', title: 'Speed Without Compromise', desc: 'Our processes are optimized for speed — average time-to-shortlist of under 72 hours for most roles.' },
              { icon: '🔒', title: 'Confidential Searches', desc: 'Executive and sensitive searches handled with absolute discretion and professional integrity.' },
            ].map(w => (
              <div className="card industries-why__card" key={w.title}>
                <div className="industries-why__icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div className="container home-cta__inner">
          <div className="home-cta__content">
            <h2>Don't See Your Industry?</h2>
            <p>We work across many more sectors. Get in touch and let's discuss your specific hiring needs.</p>
          </div>
          <div className="home-cta__actions">
            <Link to="/contact" className="btn btn--accent btn--lg" id="industries-cta">Talk to Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
