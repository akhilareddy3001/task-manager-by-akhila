const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
    deleteAllTasks,
} = require("../controllers/taskController");

// GET all tasks
router.get("/", protect, getTasks);

// POST new task
router.post("/", protect, createTask);
router.delete("/", protect, deleteAllTasks);

// PUT update task
router.put("/:id", protect, updateTask);

// DELETE task
router.delete("/:id", protect, deleteTask);

module.exports = router;