import mongoose from "mongoose";

const LocationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String }, 
  description: { type: String },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Location", LocationSchema);
