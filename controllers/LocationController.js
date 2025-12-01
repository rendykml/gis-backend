import Location from "../models/Location.js";

// GET semua lokasi
exports.getLocations = async (req, res) => {
  const locations = await Location.find();
  res.json(locations);
};

// POST tambah lokasi
exports.addLocation = async (req, res) => {
  const { name, category, description, lat, lng } = req.body;

  try {
    const newLoc = await Location.create({
      name,
      category,
      description,
      lat,
      lng,
    });

    res.json({ message: "Location saved", data: newLoc });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.updateLocation = async (req, res) => {
  const { id } = req.params;
  const { name, category, lat, lng } = req.body;

  const result = await Location.findByIdAndUpdate(
    id,
    { name, category, lat, lng },
    { new: true }
  );
  res.json(result);
};

exports.deleteLocation = async (req, res) => {
  const { id } = req.params;
  await Location.findByIdAndDelete(id);
  res.json({ message: "Deleted" });
};
