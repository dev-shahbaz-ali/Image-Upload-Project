import express from "express";
import {
  getHomePage,
  uploadImage,
} from "../controllers/uploadController.controller.js";
import upload from "../middleware/upload.middleware.js";

const router = express.Router();

router.get("/", getHomePage);
router.post("/upload", upload.single("file"), uploadImage);

export default router;
