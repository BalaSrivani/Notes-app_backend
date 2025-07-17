# 📝 Notes App — Backend

This is the backend server for the Notes App.  
It is a Node.js + Express + MongoDB API that supports creating users,logging in, managing notes (create, read, update, delete), and searching/filtering notes.
this backend also uses bcryptjs for password encryption and jsonwebtoken for authentication.

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

routes/

Contains all Express route handlers:

user.routes.js — User creation/login.

note.routes.js — CRUD operations for notes.

search.routes.js — Search notes by keyword.

models/

Contains Mongoose schemas:

User.js — Defines the user schema.

Note.js — Defines the note schema.

app.js

Main app setup (Express, CORS, JSON parsing).

index.js :

Entry point — starts listening on the configured port.

.env

Environment variables (MongoDB URI, secret, port).

package.json

Project metadata & dependencies.


---

Responsive UI

🌐 Live Demo

Frontend : notes-app-frontend-git-main-bala-srivani-vattams-projects.vercel.app

Backend API : https://notes-app-backend-cppi.onrender.com



## 🛠️ Getting Started

1️⃣ Clone the repository
```bash
git clone https://github.com/BalaSrivani/Notes-app_backend
cd backend
```

2️⃣ Install dependencies
```bash
npm install
```

3️⃣ Set up environment variables
Create a .env file in the root of the backend folder and add:
MONGO_URI=your_mongo_connection_string
ACCESS_TOKEN_SECRET=your_secret_token
PORT=8000

🔗 Run the server locally
```bash
npm start
```
