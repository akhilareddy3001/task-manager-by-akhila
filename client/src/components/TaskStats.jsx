function TaskStats({ totalTasks, completedTasks, pendingTasks, progress, }) {
    return(
        <div className="dashboard">

            <div className="card total-card">📋
                <h2>{totalTasks}</h2>
                <p>Total Tasks</p>
            </div>

            <div className="card completed-card">✅
                <h2>{completedTasks}</h2>
                <p>Completed</p>
            </div>

            <div className="card pending-card">⏳
                <h2>{pendingTasks}</h2>
                <p>Pending</p>
            </div>

            <div className="card progress-card">
                <div className="card-icon">🔥</div>
                <h2>{progress}%</h2>
                <p>Completion Rate</p>
                </div>

        </div>
    );
        
}

export default TaskStats;