import mongoose from "mongoose";

export const connectDB = async (req, res) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`database connected ${conn.connection.host}`);
  } catch (error) {
    console.log("connection failed");
    process.exit(1)
  }
};
