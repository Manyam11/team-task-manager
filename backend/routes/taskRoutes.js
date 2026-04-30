const express = require("express");
const router = express.Router();

// ✅ TEMP WORKING ROUTE (NO DB)
router.get("/", (req, res) => {
  res.json([
    { id: 1, title: "Task 1", status: "pending" },
    { id: 2, title: "Task 2", status: "completed" }
  ]);
});

// (optional POST bhi safe bana dete hain)
router.post("/", (req, res) => {
  res.json({
    message: "Task created (dummy)",
    data: req.body
  });
});

module.exports = router;