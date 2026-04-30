const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

// ROOT ROUTE (important)
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// DB CONNECT (SAFE)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("DB Error:", err));

// ROUTES
app.use("/api/tasks", require("./routes/taskRoutes"));

// ERROR HANDLING (VERY IMPORTANT)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Server error" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});