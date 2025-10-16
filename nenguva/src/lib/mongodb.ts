// lib/mongodb.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://hudsonnbenhuraa_db_user:1234567890.@nenguvashipping.o3qfskb.mongodb.net/?retryWrites=true&w=majority&appName=NenguvaShipping";

if (!MONGODB_URI) {
  throw new Error("⚠️ Please define MONGODB_URI in your environment variables");
}

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  try {
    await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    throw error;
  }
}
