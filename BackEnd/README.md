# Booking Backend API

A RESTful API built with Express.js and MongoDB following the React with Vite course guidelines.

## Features
- User Authentication (Register/Login with JWT)
- Booking Management (Create, Read, Update, Delete)
- Password Hashing with bcryptjs
- Token-based Authorization
- MongoDB Database with Mongoose ODM

## Installation

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Create a `.env` file based on `.env.example`:
   \`\`\`
   MONGO_URL=mongodb://localhost:27017/bookingDB
   JWT_SECRET=mySuperSecretKey
   PORT=5000
   \`\`\`

4. Make sure MongoDB is running locally

5. Start the server:
   \`\`\`bash
   npm run dev
   \`\`\`

## API Endpoints

### Authentication
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user

### Bookings (Protected Routes)
- `GET /api/bookings` - Get all user bookings
- `POST /api/bookings` - Create new booking
- `PUT /api/bookings/:id` - Update booking
- `DELETE /api/bookings/:id` - Delete booking

All booking routes require JWT token in header:
\`\`\`
Authorization: Bearer <token>
