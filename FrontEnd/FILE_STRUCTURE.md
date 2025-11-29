# Rayyyan Project - Complete File Structure

## Project Overview
This is a full-stack event management and booking application with two main components:
- **Backend**: Express.js + MongoDB + Next.js (RESTful API for bookings)
- **Frontend**: React + Vite (Event management UI)

---

## 📁 Root Structure
```
Rayyyan/
├── backend/                    # Next.js + Express.js backend server
├── event_management/           # React + Vite frontend application
└── FILE_STRUCTURE.md          # This file
```

---

## 🔧 Backend Structure (`/backend`)

### Purpose
RESTful API for booking system with user authentication, built with Express.js and MongoDB.

### Configuration Files
```
backend/
├── package.json               # Dependencies & scripts (npm/pnpm)
├── package-lock.json         # Package lock file
├── pnpm-lock.yaml           # pnpm lock file
├── tsconfig.json            # TypeScript configuration
├── next.config.mjs          # Next.js configuration
├── components.json          # UI components configuration
├── postcss.config.mjs        # PostCSS configuration
├── .gitignore               # Git ignore rules
├── README.md                # Backend documentation
├── db.js                    # Database connection setup
├── index.js                 # Main server entry point
```

### Key Dependencies
- **Express**: Web framework for REST API
- **MongoDB/Mongoose**: Database & ODM
- **JWT**: Authentication tokens
- **bcryptjs**: Password hashing
- **CORS**: Cross-origin resource sharing
- **Next.js**: React framework
- **TailwindCSS**: Styling framework

### Scripts
```bash
npm run dev      # Start development server with nodemon
npm start        # Start production server
npm test         # Run tests (not configured)
```

### Directory Structure

#### `/app` - Next.js Application
```
app/
├── layout.tsx               # Root layout component
├── page.tsx                 # Home page component
├── globals.css              # Global styling
```

#### `/components` - Reusable Components
```
components/
├── booking.js               # Booking component
├── user.js                  # User component
├── theme-provider.tsx       # Theme provider component
└── ui/                      # UI component library (45+ components)
    ├── accordion.tsx
    ├── alert.tsx
    ├── alert-dialog.tsx
    ├── avatar.tsx
    ├── badge.tsx
    ├── breadcrumb.tsx
    ├── button.tsx
    ├── button-group.tsx
    ├── calendar.tsx
    ├── card.tsx
    ├── carousel.tsx
    ├── chart.tsx
    ├── checkbox.tsx
    ├── collapsible.tsx
    ├── command.tsx
    ├── context-menu.tsx
    ├── dialog.tsx
    ├── drawer.tsx
    ├── dropdown-menu.tsx
    ├── empty.tsx
    ├── field.tsx
    ├── form.tsx
    ├── hover-card.tsx
    ├── input.tsx
    ├── input-group.tsx
    ├── input-otp.tsx
    ├── item.tsx
    ├── kbd.tsx
    ├── label.tsx
    ├── menubar.tsx
    ├── navigation-menu.tsx
    ├── pagination.tsx
    ├── popover.tsx
    ├── progress.tsx
    ├── radio-group.tsx
    ├── resizable.tsx
    ├── scroll-area.tsx
    ├── select.tsx
    ├── separator.tsx
    ├── sheet.tsx
    ├── sidebar.tsx
    ├── skeleton.tsx
    ├── slider.tsx
    ├── sonner.tsx
    ├── spinner.tsx
    ├── switch.tsx
    ├── table.tsx
    ├── tabs.tsx
    ├── textarea.tsx
    ├── toast.tsx
    ├── toaster.tsx
    ├── toggle.tsx
    ├── toggle-group.tsx
    ├── tooltip.tsx
    ├── use-mobile.tsx
    ├── use-toast.ts
```

#### `/hooks` - Custom React Hooks
```
hooks/
├── use-mobile.ts            # Mobile detection hook
└── use-toast.ts             # Toast notification hook
```

#### `/lib` - Utility Functions
```
lib/
└── utils.ts                 # Shared utility functions
```

#### `/models` - Database Models
```
models/
├── User.js                  # User schema
│   - email
│   - password (hashed)
│   - name
│   - createdAt
└── Booking.js               # Booking schema
    - userId (reference to User)
    - eventId
    - bookingDate
    - status
    - createdAt
```

#### `/routes` - API Endpoints
```
routes/
├── userRoutes.js            # User endpoints
│   - POST /api/users/register
│   - POST /api/users/login
│   - GET /api/users/:id
│   - PUT /api/users/:id
│   - DELETE /api/users/:id
└── bookingRoutes.js         # Booking endpoints
    - GET /api/bookings (protected)
    - POST /api/bookings (protected)
    - PUT /api/bookings/:id (protected)
    - DELETE /api/bookings/:id (protected)
```

#### `/middleware` - Express Middleware
```
middleware/
└── auth.js                  # JWT authentication middleware
    - Validates JWT tokens
    - Protects routes
```

#### `/styles` - Global Styles
```
styles/
└── globals.css              # Global CSS styling
```

#### `/public` - Static Assets
```
public/
├── placeholder.svg          # Placeholder SVG
├── placeholder.jpg          # Placeholder image
├── placeholder-user.jpg     # User placeholder image
├── placeholder-logo.svg     # Logo placeholder
└── placeholder-logo.png     # Logo placeholder PNG
```

### API Architecture
```
POST   /api/users/register        → User.register()
POST   /api/users/login           → User.authenticate()
GET    /api/bookings              → Booking.getAll() [Protected]
POST   /api/bookings              → Booking.create() [Protected]
PUT    /api/bookings/:id          → Booking.update() [Protected]
DELETE /api/bookings/:id          → Booking.delete() [Protected]
```

---

## 🎨 Frontend Structure (`/event_management`)

### Purpose
React + Vite event management interface for users to view, book, and manage events.

### Configuration Files
```
event_management/
├── package.json             # Dependencies & scripts (npm)
├── package-lock.json        # Package lock file
├── vite.config.js           # Vite bundler configuration
├── eslint.config.js         # ESLint rules
├── index.html               # Entry HTML file
├── .gitignore               # Git ignore rules
└── README.md                # Frontend documentation
```

### Key Dependencies
- **React**: UI library
- **React Router DOM**: Client-side routing
- **Axios**: HTTP client for API calls
- **Vite**: Build tool & dev server

### Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Directory Structure

#### `/src` - Source Code
```
src/
├── main.jsx                 # React app entry point
├── App.jsx                  # Root App component
├── App.css                  # App styling
├── index.css                # Global index styles
├── assets/                  # Static assets
│   └── react.svg           # React logo
│
├── components/              # Reusable components
│   ├── Navbar.jsx          # Navigation bar
│   ├── Navbar.css          # Navbar styling
│   ├── EventList.jsx       # List of events
│   ├── BookingForm.jsx     # Event booking form
│   ├── Feedback.jsx        # Feedback component
│   └── Footer.jsx          # Footer component
│
├── pages/                   # Page components (route-based)
│   ├── Home.jsx            # Home page
│   ├── Home.css            # Home page styling
│   ├── About.jsx           # About page
│   ├── About.css           # About page styling
│   ├── Events.jsx          # Events listing page
│   ├── Events.css          # Events page styling
│   ├── Dashboard.jsx       # User dashboard
│   ├── Dashboard.css       # Dashboard styling
│   ├── Login.jsx           # Login page
│   ├── Login.css           # Login page styling
│   ├── Registration.jsx    # Registration page
│   ├── Registration.css    # Registration page styling
│   └── LiveEvents.jsx      # Live events page
│
└── validations/             # Validation utilities
    └── checks.js           # Input validation functions
```

#### `/public` - Static Assets
```
public/
└── vite.svg                 # Vite logo
```

### React Component Hierarchy
```
App
├── Navbar
├── Router/Routes
│   ├── Home
│   │   └── EventList
│   ├── Events
│   │   ├── EventList
│   │   └── BookingForm
│   ├── Dashboard
│   ├── Login
│   ├── Registration
│   ├── About
│   ├── LiveEvents
│   └── Feedback
└── Footer
```

### Routing Structure
```
/              → Home page
/events        → Events listing
/dashboard     → User dashboard
/login         → Login page
/register      → Registration page
/about         → About page
/live-events   → Live events
```

---

## 🔄 Data Flow Architecture

### Authentication Flow
```
1. User Registration
   Frontend (Registration.jsx) 
   → POST /api/users/register
   → Backend (userRoutes.js)
   → User.js (Model)
   → MongoDB

2. User Login
   Frontend (Login.jsx)
   → POST /api/users/login
   → Backend (userRoutes.js)
   → JWT Token Generated
   → Stored in Frontend

3. Protected API Calls
   Frontend (any page)
   → Request with JWT
   → Backend (auth.js middleware)
   → Validates JWT
   → Returns data from MongoDB
```

### Booking Flow
```
1. User selects event (Events.jsx)
   → BookingForm.jsx
   → POST /api/bookings (with JWT)
   → Backend (bookingRoutes.js)
   → Booking.js (Model)
   → MongoDB

2. View bookings (Dashboard.jsx)
   → GET /api/bookings (with JWT)
   → Returns user's bookings
   
3. Update/Cancel booking
   → PUT/DELETE /api/bookings/:id
   → Backend processes
   → MongoDB updated
```

---

## 📦 Technology Stack Summary

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB + Mongoose
- **Authentication**: JWT
- **Password Hashing**: bcryptjs
- **Frontend**: Next.js + React
- **Styling**: TailwindCSS
- **TypeScript**: Supported

### Frontend
- **Library**: React 19.2.0
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **HTTP**: Axios
- **Linting**: ESLint
- **Module System**: ES Modules

---

## 🚀 Development Workflow

### Backend Setup
```bash
cd backend
npm install
npm run dev          # Runs on localhost:5000 (or PORT in .env)
```

### Frontend Setup
```bash
cd event_management
npm install
npm run dev          # Runs on localhost:5173
```

### Build for Production
```bash
# Backend
cd backend
npm start

# Frontend
cd event_management
npm run build
npm run preview
```

---

## 📋 Environment Variables

### Backend (.env)
```
MONGO_URL=mongodb://localhost:27017/bookingDB
JWT_SECRET=your-secret-key
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000
```

---

## 🔐 Security Features
- JWT-based authentication
- Password hashing with bcryptjs
- Protected API routes via auth middleware
- CORS configuration
- Environment variables for sensitive data

---

## 📚 Key Files & Their Purposes

| File | Purpose |
|------|---------|
| `backend/index.js` | Express server initialization |
| `backend/db.js` | MongoDB connection setup |
| `backend/models/User.js` | User database schema |
| `backend/models/Booking.js` | Booking database schema |
| `backend/routes/userRoutes.js` | User API endpoints |
| `backend/routes/bookingRoutes.js` | Booking API endpoints |
| `backend/middleware/auth.js` | JWT verification |
| `event_management/src/App.jsx` | React app root |
| `event_management/src/pages/Login.jsx` | User login interface |
| `event_management/src/pages/Dashboard.jsx` | User bookings dashboard |
| `event_management/src/validations/checks.js` | Form validation |

---

## 📊 Database Schema Overview

### User Model
```javascript
{
  _id: ObjectId,
  email: String (unique),
  password: String (hashed),
  name: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Booking Model
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  eventId: String,
  eventTitle: String,
  bookingDate: Date,
  status: String (pending/confirmed/cancelled),
  numberOfTickets: Number,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🎯 Project Status
- ✅ Backend API structure
- ✅ Frontend UI components
- ✅ Authentication system
- ✅ Database models
- ✅ Routing configured
- 🔄 Testing (to be implemented)

---

## 📝 Notes
- Both projects use modern React (v19.2.0)
- Backend uses Next.js alongside Express.js
- UI components library includes 45+ pre-built components
- Project follows modular architecture for scalability
- CORS enabled for local development

---

Generated: November 28, 2025
