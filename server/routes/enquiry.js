const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');
const nodemailer = require('nodemailer');

// Configure Nodemailer transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Email template for company notification
const companyEmailTemplate = (data) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #4A0E8F, #00BFA5); padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
    .header h1 { color: white; margin: 0; font-size: 24px; }
    .header p { color: rgba(255,255,255,0.8); margin: 5px 0 0; }
    .body { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #4A0E8F; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; }
    .value { font-size: 16px; color: #333; margin-top: 4px; padding: 10px; background: white; border-left: 3px solid #00BFA5; border-radius: 4px; }
    .message-box { background: white; padding: 15px; border-left: 3px solid #4A0E8F; border-radius: 4px; white-space: pre-wrap; }
    .badge { display: inline-block; background: #4A0E8F; color: white; padding: 4px 12px; border-radius: 20px; font-size: 13px; }
    .footer { text-align: center; margin-top: 20px; color: #999; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎯 New Enquiry Received</h1>
      <p>PerfectRecruit Services — Website Enquiry</p>
    </div>
    <div class="body">
      <div class="field">
        <div class="label">Enquiry Type</div>
        <div class="value"><span class="badge">${data.enquiryType}</span></div>
      </div>
      <div class="field">
        <div class="label">Full Name</div>
        <div class="value">${data.name}</div>
      </div>
      <div class="field">
        <div class="label">Email Address</div>
        <div class="value"><a href="mailto:${data.email}" style="color:#4A0E8F;">${data.email}</a></div>
      </div>
      <div class="field">
        <div class="label">Phone Number</div>
        <div class="value"><a href="tel:${data.phone}" style="color:#4A0E8F;">${data.phone}</a></div>
      </div>
      ${data.company ? `<div class="field">
        <div class="label">Company Name</div>
        <div class="value">${data.company}</div>
      </div>` : ''}
      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">${data.message}</div>
      </div>
      <div class="field">
        <div class="label">Submitted At</div>
        <div class="value">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</div>
      </div>
    </div>
    <div class="footer">
      <p>This email was sent automatically from the PerfectRecruit website enquiry form.</p>
      <p>© 2025 PerfectRecruit Services, Ahmedabad, Gujarat, India</p>
    </div>
  </div>
</body>
</html>
`;

// Email template for user confirmation
const userConfirmationTemplate = (name) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #4A0E8F, #00BFA5); padding: 40px; border-radius: 8px 8px 0 0; text-align: center; }
    .header h1 { color: white; margin: 0; font-size: 28px; }
    .header p { color: rgba(255,255,255,0.9); margin: 10px 0 0; font-size: 16px; }
    .body { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
    .cta { text-align: center; margin: 25px 0; }
    .btn { display: inline-block; background: #25D366; color: white; padding: 14px 28px; border-radius: 30px; text-decoration: none; font-weight: bold; font-size: 16px; }
    .footer { text-align: center; margin-top: 20px; color: #999; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✅ We Received Your Enquiry!</h1>
      <p>Thank you for reaching out to PerfectRecruit Services</p>
    </div>
    <div class="body">
      <p>Dear <strong>${name}</strong>,</p>
      <p>Thank you for contacting <strong>PerfectRecruit Services</strong>. We have successfully received your enquiry and our team will get back to you within <strong>24 business hours</strong>.</p>
      <p>For urgent matters, feel free to reach us directly:</p>
      <ul>
        <li>📞 <a href="tel:+918160523497">+91 8160523497</a> (Mr. Gaurav Rajput)</li>
        <li>📧 <a href="mailto:Connect@perfectrecruit.net">Connect@perfectrecruit.net</a></li>
        <li>📍 Ahmedabad, Gujarat, India</li>
      </ul>
      <div class="cta">
        <a href="https://wa.me/918160523497?text=Hello%20PerfectRecruit%2C%20I%20just%20submitted%20an%20enquiry%20and%20would%20like%20to%20discuss%20further." class="btn">💬 Chat on WhatsApp</a>
      </div>
      <p style="color:#999; font-size:13px;">We serve clients across India, UK, USA, Dubai, Italy, Canada, and South Africa.</p>
    </div>
    <div class="footer">
      <p>© 2025 PerfectRecruit Services | "We Build Career." | Ahmedabad, Gujarat, India</p>
    </div>
  </div>
</body>
</html>
`;

// POST /api/enquiry — Submit new enquiry
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, company, enquiryType, message } = req.body;

    // Basic validation
    if (!name || !email || !phone || !enquiryType || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill all required fields.'
      });
    }

    // Email format validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Invalid email address.' });
    }

    // Save to MongoDB
    const enquiry = new Enquiry({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      company: company ? company.trim() : '',
      enquiryType,
      message: message.trim(),
      ipAddress: req.ip || req.headers['x-forwarded-for'] || ''
    });

    await enquiry.save();

    // Send emails (non-blocking — don't fail submission if email fails)
    const transporter = createTransporter();

    // Notify company
    transporter.sendMail({
      from: `"PerfectRecruit Website" <${process.env.EMAIL_USER}>`,
      to: process.env.COMPANY_EMAIL,
      subject: `[New Enquiry] ${enquiryType} — ${name}`,
      html: companyEmailTemplate({ name, email, phone, company, enquiryType, message })
    }).catch(err => console.error('Company email error:', err.message));

    // User auto-reply confirmation email has been disabled by developer request.
    // If you want to enable it in the future, you can configure it here.

    res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully! We will contact you within 24 business hours.',
      enquiryId: enquiry._id
    });

  } catch (error) {
    console.error('Enquiry submission error:', error);
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(e => e.message);
      return res.status(400).json({ success: false, message: messages.join(', ') });
    }
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again or contact us directly on WhatsApp.'
    });
  }
});

// GET /api/enquiries — Admin: fetch all enquiries (protected by secret key)
router.get('/all', async (req, res) => {
  const adminSecret = req.headers['x-admin-secret'] || req.query.secret;
  if (adminSecret !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  try {
    const enquiries = await Enquiry.find({}).sort({ createdAt: -1 });
    res.json({ success: true, count: enquiries.length, data: enquiries });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
