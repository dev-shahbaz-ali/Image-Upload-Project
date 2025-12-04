import File from "../models/File.models.js";
import cloudinary from "../config/cloudinary.js";

export const getHomePage = (req, res) => {
  res.render("index", { url: null, error: null });
};

export const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.render("index", {
        url: null,
        error: "Please select an image file",
      });
    }

    const cloudinaryRes = await cloudinary.uploader.upload(req.file.path, {
      folder: "Image Uploader",
    });

    // Save to database
    await File.create({
      filename: req.file.originalname,
      public_id: cloudinaryRes.public_id,
      imageUrl: cloudinaryRes.secure_url,
    });

    res.render("index", {
      url: cloudinaryRes.secure_url,
      error: null,
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.render("index", {
      url: null,
      error: "Error uploading image. Please try again.",
    });
  }
};
