import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import './Services.css'

const services = [
  { icon: '🧠', title: 'HR Consulting', desc: 'Strategic HR advisory covering policy design, compliance, talent strategy, and organizational development tailored to your business needs.', tags: ['Strategy', 'Policy', 'OD'] },
  { icon: '🚀', title: 'Career Development Coaching', desc: 'One-on-one coaching sessions to help professionals chart their career path, build competencies, and achieve their next big break.', tags: ['Coaching', 'Mentoring'] },
  { icon: '🎓', title: 'Corporate Training', desc: 'Customized training programs across leadership, communication, technical skills, and more — delivered in-house or virtually.', tags: ['L&D', 'Upskilling'] },
  { icon: '🎤', title: 'Public Speaking', desc: 'Executive presence coaching and public speaking training to help your leaders communicate with confidence and authority.', tags: ['Leadership', 'Communication'] },
  { icon: '📝', title: 'Resume Review & Writing', desc: 'ATS-optimized, professionally crafted resumes and LinkedIn profiles that open doors to the best opportunities globally.', tags: ['Job Seekers', 'ATS'] },
  { icon: '🤝', title: 'Team Building', desc: 'Engaging workshops and activities designed to strengthen collaboration, trust, and team dynamics across your organization.', tags: ['Culture', 'Engagement'] },
  { icon: '👷', title: 'Manpower Supply', desc: 'Reliable supply of skilled, semi-skilled, and unskilled workforce for manufacturing, construction, and industrial operations.', tags: ['Mass Hiring', 'Blue Collar'] },
  { icon: '💰', title: 'Payroll Services', desc: 'End-to-end payroll processing — calculations, compliance, tax filings, and payslip management — accurate and on time.', tags: ['Compliance', 'Payroll'] },
  { icon: '💻', title: 'IT Skills Training', desc: 'Hands-on technical training in in-demand IT domains including cloud, DevOps, data engineering, and software development.', tags: ['Tech', 'Upskilling'] },
  { icon: '⚡', title: 'End-to-End Technical Hiring', desc: 'Full-cycle IT recruitment — from requirement scoping and sourcing to technical screening, interviews, and offer management.', tags: ['IT', 'Recruitment'] },
  { icon: '🌐', title: 'IT Payroll Outsourcing', desc: 'Specialized IT contractor payroll management for USA, Canada, Australia, and UK — fully compliant with local regulations.', tags: ['USA', 'Canada', 'Australia', 'UK'] },
  { icon: '🔍', title: 'Niche Skills Hiring / Headhunting', desc: 'Targeted search for rare and specialized talent — from C-suite executives to domain experts in building materials, finance, and IT.', tags: ['Headhunting', 'Executive'] },
  { icon: '🏢', title: 'Vendor Management', desc: 'Strategic coordination and optimization of your multi-vendor staffing ecosystem — reducing costs and improving quality of hire.', tags: ['VMO', 'Enterprise'] },
]

const process = [
  { step: '01', title: 'Discovery Call', desc: 'We understand your hiring needs, company culture, and role requirements in depth.' },
  { step: '02', title: 'Talent Sourcing', desc: 'Our team activates creative sourcing channels — databases, networks, headhunting, and referrals.' },
  { step: '03', title: 'Screening & Assessment', desc: 'Rigorous technical, cultural, and competency assessment to shortlist only the best.' },
  { step: '04', title: 'Client Presentation', desc: 'Curated shortlist with detailed profiles, assessment reports, and our recommendation.' },
  { step: '05', title: 'Interview Coordination', desc: 'Seamless scheduling and coordination of all interview rounds between client and candidates.' },
  { step: '06', title: 'Offer & Onboarding', desc: 'Offer negotiation support and post-joining follow-up to ensure smooth onboarding.' },
]

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services — PerfectRecruit Services | HR, Recruitment & Payroll</title>
        <meta name="description" content="Explore PerfectRecruit's comprehensive services: HR Consulting, IT Hiring, Payroll Outsourcing, Niche Headhunting, Corporate Training, Resume Writing & more across India and 6 other countries." />
      </Helmet>

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__content">
          <span className="section__tag">What We Do</span>
          <h1>Comprehensive <span className="text-gradient">HR & Recruitment</span> Solutions</h1>
          <p>13 specialized services — from niche headhunting to IT payroll outsourcing — covering every aspect of your talent strategy.</p>
        </div>
        <div className="page-hero__wave">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none"><path d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z" fill="white"/></svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="section__tag">All Services</span>
            <h2 className="section__title">Everything Your <span>Talent Strategy</span> Needs</h2>
            <p className="section__subtitle">Hand-crafted for each client — no cookie-cutter solutions, only precision-tailored talent services.</p>
          </div>
          <div className="services__grid">
            {services.map((s, i) => (
              <div className="service-card" key={s.title} style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="service-card__icon-wrap">
                  <span className="service-card__icon">{s.icon}</span>
                </div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
                <div className="service-card__tags">
                  {s.tags.map(t => (
                    <span key={t} className="badge badge--accent">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <span className="section__tag">How We Work</span>
            <h2 className="section__title">Our <span>Proven Process</span></h2>
            <p className="section__subtitle">A structured, transparent hiring journey that delivers results — every time.</p>
          </div>
          <div className="services__process">
            {process.map((p, i) => (
              <div className="process-card" key={p.step}>
                <div className="process-card__step">{p.step}</div>
                {i < process.length - 1 && <div className="process-card__connector" />}
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Highlight */}
      <section className="section services-special">
        <div className="container">
          <div className="services-special__grid">
            <div className="services-special__card services-special__card--bm">
              <div className="services-special__number">45+</div>
              <h3>Building Material Companies</h3>
              <p>The only recruitment firm in India with exclusive expertise in the Building Material sector — serving 45+ companies across India, Dubai & Italy.</p>
              <Link to="/industries" className="btn btn--outline services-special__btn" id="services-bm-industries">Explore Industry →</Link>
            </div>
            <div className="services-special__card services-special__card--acc">
              <div className="services-special__number">40+</div>
              <h3>Accounting & Finance Firms</h3>
              <p>Deep partnerships with 40+ Accounting firms including Big 4 — providing specialized finance and accounting talent across India and South Africa.</p>
              <Link to="/industries" className="btn btn--outline services-special__btn" id="services-acc-industries">Explore Industry →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div className="container home-cta__inner">
          <div className="home-cta__content">
            <h2>Need a Custom Talent Solution?</h2>
            <p>Tell us your unique challenge — we'll build the right recruitment strategy for you.</p>
          </div>
          <div className="home-cta__actions">
            <Link to="/contact" className="btn btn--accent btn--lg" id="services-cta">Get Started Today</Link>
            <a href="https://wa.me/918160523497?text=Hello%20PerfectRecruit%2C%20I%20would%20like%20to%20discuss%20your%20services." target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--lg" id="services-wa">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
