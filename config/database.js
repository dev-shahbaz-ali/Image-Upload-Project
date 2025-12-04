import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/image_uploader");
    console.log("MongoDB Connected...!");
  } catch (err) {
    console.log("MongoDB Connection Error:", err);
    process.exit(1);
  }
};
