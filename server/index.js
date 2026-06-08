require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://perfectrecruit.net',
    'https://www.perfectrecruit.net'
  ],
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Request logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Routes
const enquiryRoutes = require('./routes/enquiry');
app.use('/api/enquiry', enquiryRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'PerfectRecruit API is running!',
    timestamp: new Date().toISOString(),
    dbStatus: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

// Root
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to PerfectRecruit Services API',
    version: '1.0.0',
    endpoints: {
      submitEnquiry: 'POST /api/enquiry',
      adminEnquiries: 'GET /api/enquiry/all (requires x-admin-secret header)',
      health: 'GET /api/health'
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.path} not found` });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, {
  dbName: 'perfectrecruit'
})
.then(() => {
  console.log('✅ MongoDB Atlas connected successfully');
  app.listen(PORT, () => {
    console.log(`🚀 PerfectRecruit Server running on port ${PORT}`);
    console.log(`📡 Health check: http://localhost:${PORT}/api/health`);
  });
})
.catch((err) => {
  console.error('❌ MongoDB connection failed:', err.message);
  process.exit(1);
});
