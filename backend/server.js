const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

// DB CONNECT
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

// ROUTES
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));

// TEST ROUTE
app.get("/", (req, res) => {
    res.send("API is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});