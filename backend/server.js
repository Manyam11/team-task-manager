const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// DB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// API routes
app.use("/api/tasks", require("./routes/taskRoutes"));

// 🔥 FRONTEND SERVE (FIXED)
app.use(express.static(path.join(__dirname, "../frontend")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server running on " + PORT));