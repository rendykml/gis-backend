import Location from "../models/Location.js";

// GET all locations
export const getLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ADD location
export const addLocation = async (req, res) => {
  const { name, category, description, lat, lng } = req.body;

  try {
    const newLocation = await Location.create({
      name,
      category,
      description,
      lat,
      lng
    });
    res.json(newLocation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE location
export const updateLocation = async (req, res) => {
  const { id } = req.params;
  const { name, category, description, lat, lng } = req.body;

  try {
    const updated = await Location.findByIdAndUpdate(
      id,
      { name, category, description, lat, lng },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE location
export const deleteLocation = async (req, res) => {
  const { id } = req.params;

  try {
    await Location.findByIdAndDelete(id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
