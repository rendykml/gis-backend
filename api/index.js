import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import locationRoutes from "../routes/LocationRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Prevent multiple connections in serverless environment
if (!global._mongoConnected) {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("MongoDB connected!");
      global._mongoConnected = true;
    })
    .catch((err) => console.log("Mongo ERROR:", err));
}

// Routes
app.use("/api/locations", locationRoutes);

export default app;
