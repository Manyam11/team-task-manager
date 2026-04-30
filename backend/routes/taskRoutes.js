const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// CREATE TASK
router.post("/", async (req, res) => {
    const task = await Task.create(req.body);
    res.json(task);
});

// GET ALL TASKS
router.get("/", async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// UPDATE TASK
router.put("/:id", async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
});

module.exports = router;