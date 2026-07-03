function TaskCard({
    item,
    completeTask,
    editTask,
    deleteTask,
}) {
    const isOverdue =
    item.dueDate &&
    !item.completed &&
    new Date(item.dueDate) < new Date();
    return (
        <li className={`task-card ${isOverdue ? "overdue" : ""}`}>
            <div className="task-info">
                <div className="task-title">
                    {item.completed ? "✅" : "⬜"}

                    <span className={item.completed ? "completed" : ""}>
                        {item.title}
                    </span>
                </div>

                <span
                    className={
                        item.priority === "High"
                            ? "priority high"
                            : item.priority === "Medium"
                            ? "priority medium"
                            : "priority low"
                    }
                >
                    {item.priority}
                </span>

                <p className="due-date">
                    📅 Due: {item.dueDate}
                </p>
                {item.completed && (
                    <p className="completed-date">
                        ✅ Completed: {item.completedDate}
                        </p>
                    )}
                {isOverdue && (
                    <p className="overdue-text">
                        🔴 OVERDUE
                        </p>
                    )}
            </div>

            <div className="task-buttons">
                <button
                    className={item.completed ? "undo-btn" : "complete-btn"}
                    onClick={() => completeTask(item._id, item)}
                >
                    {item.completed ? "Undo" : "Complete"}
                </button>

                <button
                    className="edit-btn"
                    onClick={() => editTask(item._id, item)}
                >
                    Edit
                </button>

                <button
                    className="delete-btn"
                    onClick={() => deleteTask(item._id)}
                >
                    Delete
                </button>
            </div>
        </li>
    );
}

export default TaskCard;