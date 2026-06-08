import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import axios from 'axios'
import './Contact.css'

const enquiryTypes = [
  'Looking for Talent',
  'Looking for a Job',
  'Payroll Services',
  'General Enquiry',
]

const initialForm = {
  name: '', email: '', phone: '', company: '', enquiryType: '', message: ''
}

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Full name is required'
  if (!form.email.trim()) errors.email = 'Email address is required'
  else if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = 'Please enter a valid email'
  if (!form.phone.trim()) errors.phone = 'Phone number is required'
  if (!form.enquiryType) errors.enquiryType = 'Please select an enquiry type'
  if (!form.message.trim()) errors.message = 'Message is required'
  else if (form.message.trim().length < 20) errors.message = 'Message must be at least 20 characters'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [apiMessage, setApiMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(e => ({ ...e, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('loading')
    try {
      const res = await axios.post('/api/enquiry', form)
      if (res.data.success) {
        setStatus('success')
        setApiMessage(res.data.message)
        setForm(initialForm)
      } else {
        setStatus('error')
        setApiMessage(res.data.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus('error')
      setApiMessage(err.response?.data?.message || 'Server error. Please contact us directly on WhatsApp.')
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Us — PerfectRecruit Services | Submit an Enquiry</title>
        <meta name="description" content="Contact PerfectRecruit Services for talent acquisition, job search, payroll outsourcing, or general enquiries. Based in Ahmedabad, Gujarat. Call +91 8160523497." />
      </Helmet>

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__content">
          <span className="section__tag">Get in Touch</span>
          <h1>Let's Start Your <span className="text-gradient">Talent Journey</span></h1>
          <p>Whether you're hiring or job hunting — our team is ready to help you succeed.</p>
        </div>
        <div className="page-hero__wave">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none"><path d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z" fill="white" /></svg>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact__grid">

            {/* Info Panel */}
            <div className="contact__info">
              <h2>Talk to <span className="text-gradient">Our Team</span></h2>
              <p>We're available Monday–Saturday, 9AM–7PM IST. For urgent queries, reach us directly on WhatsApp.</p>

              <ul className="contact__info-list">
                <li>
                  <div className="contact__info-icon">📍</div>
                  <div>
                    <strong>Office</strong>
                    <span>Ahmedabad, Gujarat, India</span>
                  </div>
                </li>
                <li>
                  <div className="contact__info-icon">📞</div>
                  <div>
                    <strong>Phone / WhatsApp</strong>
                    <a href="tel:+918160523497">+91 8160523497</a>
                  </div>
                </li>
                <li>
                  <div className="contact__info-icon">✉️</div>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:Connect@perfectrecruit.net">Connect@perfectrecruit.net</a>
                  </div>
                </li>
                <li>
                  <div className="contact__info-icon">👤</div>
                  <div>
                    <strong>Contact Person</strong>
                    <span>Mr. Gaurav Rajput</span>
                  </div>
                </li>
                <li>
                  <div className="contact__info-icon">🕐</div>
                  <div>
                    <strong>Business Hours</strong>
                    <span>Mon–Sat · 9:00 AM – 7:00 PM IST</span>
                  </div>
                </li>
              </ul>

              <a
                href="https://wa.me/918160523497?text=Hello%20PerfectRecruit%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="contact__wa-cta"
                id="contact-whatsapp-btn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>
                  <strong>Chat on WhatsApp</strong>
                  <small>Usually replies within minutes</small>
                </span>
              </a>

              {/* Social */}
              <div className="contact__social">
                <a href="https://linkedin.com/company/perfectrecruit-services" target="_blank" rel="noopener noreferrer" className="contact__social-link" id="contact-linkedin">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Follow on LinkedIn
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="contact__form-wrap">
              {status === 'success' ? (
                <div className="contact__success" id="contact-success-msg">
                  <div className="contact__success-icon">✅</div>
                  <h3>Enquiry Submitted!</h3>
                  <p>{apiMessage}</p>
                  <p>Our team will reach out within 24 business hours. For urgent assistance, please WhatsApp us directly.</p>
                  <a
                    href="https://wa.me/918160523497?text=Hi%20PerfectRecruit!%20I've%20submitted%20an%20enquiry%20and%20would%20like%20to%20discuss%20further."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--accent btn--lg"
                    style={{ marginTop: '1rem' }}
                    id="contact-success-wa"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Continue on WhatsApp
                  </a>
                  <button className="contact__reset-btn" onClick={() => setStatus('idle')}>Submit Another Enquiry</button>
                </div>
              ) : (
                <form className="contact__form" onSubmit={handleSubmit} noValidate id="enquiry-form">
                  <div className="contact__form-header">
                    <h2>Send an <span className="text-gradient">Enquiry</span></h2>
                    <p>Fill in the details below and we'll get back to you within 24 hours.</p>
                  </div>

                  <div className="contact__form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Full Name <span>*</span></label>
                      <input
                        id="name" name="name" type="text"
                        className={`form-input ${errors.name ? 'error' : ''}`}
                        placeholder="e.g. John Smith"
                        value={form.name} onChange={handleChange}
                        autoComplete="name"
                      />
                      {errors.name && <span className="form-error-msg">⚠ {errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address <span>*</span></label>
                      <input
                        id="email" name="email" type="email"
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        placeholder="e.g. john@company.com"
                        value={form.email} onChange={handleChange}
                        autoComplete="email"
                      />
                      {errors.email && <span className="form-error-msg">⚠ {errors.email}</span>}
                    </div>
                  </div>

                  <div className="contact__form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number <span>*</span></label>
                      <input
                        id="phone" name="phone" type="tel"
                        className={`form-input ${errors.phone ? 'error' : ''}`}
                        placeholder="e.g. +91 9876543210"
                        value={form.phone} onChange={handleChange}
                        autoComplete="tel"
                      />
                      {errors.phone && <span className="form-error-msg">⚠ {errors.phone}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="company">Company Name</label>
                      <input
                        id="company" name="company" type="text"
                        className="form-input"
                        placeholder="e.g. Acme Corp (optional)"
                        value={form.company} onChange={handleChange}
                        autoComplete="organization"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="enquiryType">Type of Enquiry <span>*</span></label>
                    <select
                      id="enquiryType" name="enquiryType"
                      className={`form-select ${errors.enquiryType ? 'error' : ''}`}
                      value={form.enquiryType} onChange={handleChange}
                    >
                      <option value="">— Select enquiry type —</option>
                      {enquiryTypes.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    {errors.enquiryType && <span className="form-error-msg">⚠ {errors.enquiryType}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message / Details <span>*</span></label>
                    <textarea
                      id="message" name="message"
                      className={`form-textarea ${errors.message ? 'error' : ''}`}
                      placeholder="Please describe your requirements — role, location, timeline, or any other details..."
                      value={form.message} onChange={handleChange}
                      rows={5}
                    />
                    {errors.message && <span className="form-error-msg">⚠ {errors.message}</span>}
                  </div>

                  {status === 'error' && (
                    <div className="contact__error-banner" role="alert">
                      ⚠ {apiMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn btn--primary btn--lg contact__submit"
                    disabled={status === 'loading'}
                    id="contact-submit-btn"
                  >
                    {status === 'loading' ? (
                      <><div className="spinner" /> Submitting…</>
                    ) : (
                      <>Send Enquiry →</>
                    )}
                  </button>

                  <p className="contact__privacy">
                    🔒 Your information is secure and will never be shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
