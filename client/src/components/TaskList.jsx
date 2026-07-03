import TaskCard from "./TaskCard";

function TaskList({
    sortedTasks,
    completeTask,
    editTask,
    deleteTask,
}) {
    return (
        <ul className="task-list">
            {sortedTasks.map((item) => (
                <TaskCard
                    key={item._id}
                    item={item}
                    completeTask={completeTask}
                    editTask={editTask}
                    deleteTask={deleteTask}
                />
            ))}
        </ul>
    );
}

export default TaskList;