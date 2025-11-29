import mongoose from "mongoose";
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/bookingDB";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
