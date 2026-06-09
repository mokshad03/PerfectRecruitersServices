require('dotenv').config();
const nodemailer = require('nodemailer');

console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS length:', process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 0);
console.log('COMPANY_EMAIL:', process.env.COMPANY_EMAIL);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

transporter.verify(function (error, success) {
  if (error) {
    console.error('SMTP Connection verification failed:');
    console.error(error);
  } else {
    console.log('SMTP Connection is ready to take our messages!');
    
    // Attempt to send a test email
    transporter.sendMail({
      from: `"Test Mail" <${process.env.EMAIL_USER}>`,
      to: process.env.COMPANY_EMAIL,
      subject: "Test email from nodemailer",
      text: "If you get this, email sending works!"
    })
    .then(info => {
      console.log('Email sent successfully:', info.messageId);
    })
    .catch(err => {
      console.error('Failed to send mail:', err);
    });
  }
});
