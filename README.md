# 📝 Notes App — Backend

This is the backend server for the Notes App.  
It is a Node.js + Express + MongoDB API that supports creating users, managing notes (create, read, update, delete), and searching/filtering notes.

---

## ✨ Features

✅ User registration  
✅ Create a note  
✅ Update a note  
✅ Delete a note  
✅ Filter/search notes by keywords  
✅ RESTful API  
✅ CORS enabled

---

## 🚀 Tech Stack

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [CORS](https://www.npmjs.com/package/cors)

---

## 📂 Project Structure

backend/
├── routes/ # All route handlers
│ ├── user.routes.js
│ ├── note.routes.js
│ ├── search.routes.js
├── models/ # Mongoose models
│ ├── User.js
│ ├── Note.js
├── app.js # Express app config
├── server.js # Server entry point
├── .env # Environment variables (not committed)
├── package.json
└── README.md


---

## 🛠️ Getting Started

1️⃣ Clone the repository
```bash
git clone https://github.com/BalaSrivani/Notes-app_backend
cd backend

2️⃣ Install dependencies
```bash
npm install

3️⃣ Set up environment variables
Create a .env file in the root of the backend folder and add:
MONGO_URI=your_mongo_connection_string
ACCESS_TOKEN_SECRET=your_secret_token
PORT=8000

🔗 Run the server locally
```bash
npm start
