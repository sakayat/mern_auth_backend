import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser())

const port = process.env.PORT;

// routes
app.use("/api/auth", authRoutes)

app.listen(port, () => {
  connectDB();
  console.log(`server is running on ${port}`);
});
