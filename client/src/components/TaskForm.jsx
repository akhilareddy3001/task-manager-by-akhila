function TaskForm({
    task,
    setTask,
    addTask,
    editIndex,
    priority,
    setPriority,
    dueDate,
    setDueDate,
    sortBy,
    setSortBy,
    category,
    setCategory,
}) {
    return (
        <>
            <div className = "page-header">
                <h1>📋 My Task Manager</h1>
                <p>Stay organized and complete your tasks on time</p>
            </div>

            <div className="input-section">
                <input
                    type="text"
                    placeholder="Enter task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />

                <button onClick={addTask}>
                    {editIndex === null ? "Add Task" : "Update Task"}
                </button>
            </div>
            <div className="task-options">
                <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                    <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    />
                    <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="default">Default</option>
                        <option value="priority">Priority</option>
                        <option value="date">Due Date</option>
                    </select>
                    <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="Study">Study</option>
                        <option value="Personal">Personal</option>
                        <option value="Work">Work</option>
                        <option value="Shopping">Shopping</option>
                    </select>
                </div>

            
        </>
    );
}

export default TaskForm;