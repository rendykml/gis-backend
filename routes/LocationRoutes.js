import express from "express";
import {
  getLocations,
  addLocation,
  updateLocation,
  deleteLocation
} from "../controllers/LocationController.js";

const router = express.Router();

router.get("/", getLocations);
router.post("/", addLocation);
router.put("/:id", updateLocation);
router.delete("/:id", deleteLocation);

export default router;
