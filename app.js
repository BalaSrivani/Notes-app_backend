import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import userRoutes from "./routes/user.routes.js";
import noteRoutes from "./routes/note.routes.js";
import searchRoutes from "./routes/search.routes.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
    res.json({ data: "hello" });
});

app.use("/", userRoutes);
app.use("/", noteRoutes);
app.use("/", searchRoutes);

export default app;
