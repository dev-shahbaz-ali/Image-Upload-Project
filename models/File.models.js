import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
  {
    filename: String,
    public_id: String,
    imageUrl: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("File", imageSchema);
