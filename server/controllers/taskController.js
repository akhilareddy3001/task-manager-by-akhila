const Task = require("../models/Task");

// Get all tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({
            user: req.user.id, // Filter tasks by the authenticated user's ID
        });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new task
const createTask = async (req, res) => {
    try {
        const task = await Task.create({
            ...req.body,
            user: req.user.id, // Associate the task with the authenticated user
        });
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a task
const updateTask = async (req, res) => {
    try {
        const task = await Task.findOne({
            _id: req.params.id,
            user: req.user.id,
        });

        if (!task) {
            return res.status(404).json({
                message: "Task not found or unauthorized",
            });
        }

        task.title = req.body.title ?? task.title;
        task.priority = req.body.priority ?? task.priority;
        task.dueDate = req.body.dueDate ?? task.dueDate;
        task.completed = req.body.completed ?? task.completed;
        task.category = req.body.category ?? task.category;

        const updatedTask = await task.save();

        res.json(updatedTask);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

// Delete a task
const deleteTask = async (req, res) => {
    try {
        const task = await Task.findOne({
            _id: req.params.id,
            user: req.user.id,
        });

        if (!task) {
            return res.status(404).json({
                message: "Task not found or unauthorized",
            });
        }

        await task.deleteOne();

        res.json({
            message: "Task deleted successfully",
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const deleteAllTasks = async (req, res) => {
    try {
        await Task.deleteMany({
            user: req.user.id,
        });

        res.json({
            message: "All your tasks deleted successfully",
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
    deleteAllTasks, // Export the new function
};