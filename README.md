# PerfectRecruit Services Website

> **"We Build Career."** — Your Global Talent Partner

A full-stack professional recruitment agency website for **PerfectRecruit Services**, Ahmedabad, Gujarat, India.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (connection string in `.env`)

### 1. Install Dependencies

```bash
# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install
```

### 2. Configure Environment

Edit `server/.env`:
```env
MONGO_URI=mongodb+srv://your-atlas-uri
EMAIL_USER=your@gmail.com
EMAIL_PASS=your-gmail-app-password
COMPANY_EMAIL=info@perfectrecruit.net
PORT=5000
ADMIN_SECRET=your-secret-key
```

> **Note on Email**: Use a Gmail App Password (not your regular Gmail password).  
> Enable it at: Google Account → Security → 2-Step Verification → App Passwords

### 3. Run Development Servers

**Terminal 1 — Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 — Frontend:**
```bash
cd client
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000
- Health Check: http://localhost:5000/api/health

---

## 📁 Project Structure

```
perfectrecruit-website/
├── client/                    # React + Vite frontend
│   ├── public/
│   │   └── favicon.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx / .css
│   │   │   ├── Footer.jsx / .css
│   │   │   └── WhatsAppButton.jsx / .css
│   │   ├── pages/
│   │   │   ├── Home.jsx / .css
│   │   │   ├── About.jsx / .css
│   │   │   ├── Services.jsx / .css
│   │   │   ├── Industries.jsx / .css
│   │   │   ├── Contact.jsx / .css
│   │   │   └── PageHero.css    (shared)
│   │   ├── App.jsx / .css
│   │   ├── index.css           (design system)
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── server/                    # Node.js + Express backend
    ├── models/
    │   └── Enquiry.js          # MongoDB schema
    ├── routes/
    │   └── enquiry.js          # API routes + Nodemailer
    ├── index.js                # Express server entry
    ├── .env                    # Environment variables
    └── package.json
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/enquiry` | Submit contact enquiry |
| `GET` | `/api/enquiry/all` | Admin: get all enquiries (requires `x-admin-secret` header) |
| `GET` | `/api/health` | Server + DB health check |

---

## 🌐 Deployment

### Frontend → Vercel
```bash
cd client
npm run build
# Deploy `dist/` folder to Vercel
```

### Backend → Render / Railway
1. Push `server/` to a Git repo
2. Set environment variables in the dashboard
3. Set start command: `node index.js`

---

## 📞 Contact

- **Company:** PerfectRecruit Services
- **Phone/WhatsApp:** +91 8160523497
- **Email:** info@perfectrecruit.net
- **Contact:** Mr. Gaurav Rajput
- **LinkedIn:** [perfectrecruit-services](https://linkedin.com/company/perfectrecruit-services)
