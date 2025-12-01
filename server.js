// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Connect MongoDB
// mongoose.connect(process.env.MONGO_URL)
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.log(err));

// // Routes
// app.use("/api/locations", require("./routes/locationRoutes"));

// app.get("/", (req, res) => {
//   res.send("GIS Backend running...");
// });

// app.listen(process.env.PORT, () =>
//   console.log("Server running on port " + process.env.PORT)
// );
