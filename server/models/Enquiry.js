const mongoose = require('mongoose');

const EnquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    maxlength: [20, 'Phone number cannot exceed 20 characters']
  },
  company: {
    type: String,
    trim: true,
    maxlength: [150, 'Company name cannot exceed 150 characters'],
    default: ''
  },
  enquiryType: {
    type: String,
    required: [true, 'Enquiry type is required'],
    enum: ['Looking for Talent', 'Looking for a Job', 'Payroll Services', 'General Enquiry']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    maxlength: [2000, 'Message cannot exceed 2000 characters']
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  ipAddress: {
    type: String,
    default: ''
  }
}, { timestamps: true });

module.exports = mongoose.model('Enquiry', EnquirySchema);
