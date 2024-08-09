import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";

dotenv.config();

const app = express();

app.use(express.json());

const port = process.env.PORT;

app.listen(port, () => {
  connectDB();
  console.log(`server is running on ${port}`);
});
