import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "./Tasks.css";
import TaskStats from "../components/TaskStats";
import SearchBar from "../components/SearchBar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { toast } from "react-toastify";
import exportPDF from "../utils/exportPDF";
import API from "../api/api";

function Tasks() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [searchTask, setSearchTask] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [priority, setPriority] = useState("Medium");
    const [dueDate, setDueDate] = useState("");
    const [category, setCategory] = useState("Study");
    const [sortBy, setSortBy] = useState("default");
    const [filter, setFilter] = useState("All");
    const [darkMode, setDarkMode] = useState(false);


    useEffect(() => {
        fetchTasks();
    }, []);
    const fetchTasks = async () => {
        try {
            const { data } = await API.get("/tasks");
            setTasks(data);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    const addTask = async () => {
        if (task.trim() === "") return;
        try {

            if (editIndex !== null) {
                await API.put(`/tasks/${editIndex}`, {
                    title: task,
                    priority,
                    category,
                    dueDate,
                });
                toast.info("Task Updated Successfully!");
                setEditIndex(null);
            } else {
                await API.post("/tasks", {
                    title: task,
                    priority,
                    dueDate,
                    category,
                    completed: false,
                });
                toast.success("Task Added Successfully!");
            }
             await fetchTasks();
            setTask("");
            setPriority("Medium");
            setDueDate("");
            setCategory("Study");
        } catch (error) {
            console.error(error);
            
            toast.error("Failed to add/update task. Please try again.");
        }
    };

    const deleteTask = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this task?"
        );
        if (!confirmDelete) return;
        try {
            await API.delete(`/tasks/${id}`);
            await fetchTasks();
            toast.success("Task Deleted Successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to delete task.");
        }
    }
    function editTask(id, item) {
        setTask(item.title);
        setDueDate(item.dueDate);
        setEditIndex(id);
        setCategory(item.category);
        setPriority(item.priority);
    };
    const completeTask = async (id, item) => {
        try {
            await API.put(`/tasks/${id}`, {
                title: item.title,
                priority: item.priority,
                dueDate: item.dueDate,
                category: item.category,
                completed: !item.completed,
            });
            await fetchTasks();
            if (item.completed) {
                toast.info("Task Marked as Pending");
            } else {
                toast.success("Task Completed 🎉");
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to update task.");
        }
    };



    function searchTasks() {

        setSearchQuery(searchTask.trim());
    }

    const filteredTasks = tasks.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
        .filter((item) => {
            if (filter === "Completed") {
                return item.completed;
            } else if (filter === "Pending") {
                return !item.completed;
            }
            return true;
        });

    console.log("Tasks State:", tasks);
    let sortedTasks = [...filteredTasks];
    if (sortBy === "priority") {
        sortedTasks.sort((a, b) => {
            const order = {
                High: 1,
                Medium: 2,
                Low: 3,
            };

            return order[a.priority] - order[b.priority];
        });
    }

    if (sortBy === "date") {
        sortedTasks.sort(
            (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
        );
    }

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((item) => item.completed).length;
    const pendingTasks = tasks.filter((item) => !item.completed).length;

    const progress =
        totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);


    const clearAllTasks = async () => {
        const confirmClear = window.confirm(
            "Are you sure you want to delete all tasks?"
        );
        if (!confirmClear) return;
        try {
            await API.delete("/tasks");
            await fetchTasks();
            toast.success("All Tasks Cleared!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to clear tasks.");
        }
    };

    return (
        <div className={darkMode ? "dark-theme" : "light-theme"}>
            <Navbar />
            <div className="theme-toggle">
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </button>
            </div>
            <div className="dashboard-card">
                <TaskStats
                totalTasks={totalTasks}
                completedTasks={completedTasks}
                pendingTasks={pendingTasks}
                progress={progress}
                />
                <div className="progress-section">
                    <h3>Progress</h3>
                    <div className="progress-bar">
                        <div
                        className="progress-fill"
                        style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
                <p>
                    {progress === 100
                    ? "🎉 Excellent! All tasks completed."
                    : progress >= 70
                    ? "🔥 Great progress! Keep going."
                    : progress >= 40
                    ? "💪 You're making good progress."
                    : "🚀 Let's start completing some tasks!"}
                </p>
            </div>
            <SearchBar
                showSearch={showSearch}
                setShowSearch={setShowSearch}
                searchTask={searchTask}
                setSearchTask={setSearchTask}
                searchTasks={searchTasks}
            />

            <div className="tasks-container">
                <TaskForm
                    task={task}
                    setTask={setTask}
                    addTask={addTask}
                    editIndex={editIndex}
                    priority={priority}
                    setPriority={setPriority}
                    dueDate={dueDate}
                    setDueDate={setDueDate}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    category={category}
                    setCategory={setCategory}
                />


                <div className="task-header">
                    <h2>My Tasks</h2>
                    <p>Manage and organize your daily tasks</p>
                </div>

                <div className="filter-buttons">
                    <button
                        className={filter === "All" ? "active-filter" : ""} onClick={() => setFilter("All")}>All</button>
                    <button
                        className={filter === "Completed" ? "active-filter" : ""} onClick={() => setFilter("Completed")}>Completed</button>
                    <button
                        className={filter === "Pending" ? "active-filter" : ""} onClick={() => setFilter("Pending")}>Pending</button>
                </div>
                {filteredTasks.length === 0 ? (
                    tasks.length === 0 ? (
                        <div className="empty-state">
                            <div className="empty-icon">📝</div>
                            <h2>No Tasks Yet</h2>
                            <p>Stay organized by creating your first task.</p>
                        </div>
                    ) : (
                        <div className="empty-state">
                            <div className="empty-icon">🔍</div>
                            <h2>No Matching Tasks</h2>
                            <p>Try searching with a different keyword.</p>
                        </div>
                    )
                ) : (
                    <TaskList
                        sortedTasks={sortedTasks}
                        completeTask={completeTask}
                        editTask={editTask}
                        deleteTask={deleteTask}
                    />
                )}
            </div>
            <div className="bottom-buttons">
                <button
                    className="clear-btn"
                    onClick={clearAllTasks}>
                    🗑 Clear All
                </button>
                <button
                    className="export-btn"
                    onClick={() => exportPDF(tasks)}
                >
                    📄 Export PDF
                </button>
            </div>

        </div>
    );

}
export default Tasks;