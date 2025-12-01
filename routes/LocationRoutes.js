import express from "express";
import {
  getLocations,
  addLocation,
  updateLocation,
  deleteLocation
} from "../controllers/LocationController.js";

const router = express.Router();

router.get("/", controller.getLocations);
router.post("/", controller.addLocation);
router.put("/:id", controller.updateLocation);
router.delete("/:id", controller.deleteLocation);


export default router;
