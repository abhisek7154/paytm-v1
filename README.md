# PayTm Clone v1

A full-stack PayTm clone built with **React** (frontend), **Express**/**Node.js** (backend), and **MongoDB** (database).  
This app allows users to sign up, sign in, view users, check balances, and send money.

---

## Features

- User authentication (Sign Up & Sign In)
- JWT-based protected routes
- View all users and search users
- View account balance
- Send money to other users
- Responsive UI with Tailwind CSS

---

## Tech Stack

- **Frontend:** React, Tailwind CSS, Axios, React Router
- **Backend:** Node.js, Express, Mongoose, Zod, JWT
- **Database:** MongoDB Atlas

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm
- MongoDB Atlas account (or local MongoDB)

---

### Backend Setup

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Configure MongoDB:**
   - Update your MongoDB connection string in `backend/db.js`:
     ```js
     const mongoUri = 'YOUR_MONGODB_URI';
     ```

3. **Start the backend server:**
   ```bash
   npm start
   ```
   The backend runs on [http://localhost:3000](http://localhost:3000).

---

### Frontend Setup

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```

2. **Start the frontend dev server:**
   ```bash
   npm run dev
   ```
   The frontend runs on [http://localhost:5173](http://localhost:5173) (or as shown in your terminal).

---

## API Endpoints

### Auth

- `POST /api/v1/user/signup`  
  Create a new user.  
  **Body:** `{ "username": "...", "firstname": "...", "lastname": "...", "password": "..." }`

- `POST /api/v1/user/signin`  
  Sign in and receive a JWT token.  
  **Body:** `{ "username": "...", "password": "..." }`

### Users

- `GET /api/v1/user/bulk?filter=...`  
  Get a list of users, optionally filtered by name/email.

### Account

- `GET /api/v1/account/balance`  
  Get the current user's account balance.  
  **Headers:** `Authorization: Bearer <token>`

- `POST /api/v1/account/transfer`  
  Send money to another user.  
  **Body:** `{ "to": "<userId>", "amount": <number> }`  
  **Headers:** `Authorization: Bearer <token>`

---

## Usage

1. **Sign Up** for a new account.
2. **Sign In** to receive your JWT token (handled automatically by the frontend).
3. **View Users** and search for users.
4. **Check your balance** on the dashboard.
5. **Send money** to other users.

---

## Folder Structure

```
backend/
  ├── db.js
  ├── index.js
  ├── routes/
  └── ...
frontend/
  ├── src/
  │   ├── components/
  │   ├── pages/
  │   └── ...
  └── ...
```

---

## Notes

- Make sure your backend is running before using the frontend.
- Update API URLs in the frontend if your backend runs on a different port or host.
- JWT tokens are stored in `localStorage` for authentication.

---

## License

MIT

---

## Author

- [Abhisek](https://github.com/yourusername)
