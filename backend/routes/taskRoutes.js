const router = require("express").Router();
const Task = require("../models/Task");

// GET ALL TASKS
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    console.log("GET ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

// CREATE TASK
router.post("/", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.json(task);
  } catch (err) {
    console.log("POST ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;