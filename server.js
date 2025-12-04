import express from "express";
import { connectDB } from "./config/database.js";
import uploadRoutes from "./routes/uploadRoutes.routes.js";

const app = express();
const PORT = 5000;

// Configuration
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Routes
app.use("/", uploadRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
