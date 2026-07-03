import { useState, useEffect } from "react";
import API from "../api/api";

function useTasks() {
    const [task, setTask] = useState("");

    const [tasks, setTasks] = useState([]);

    const [editIndex, setEditIndex] = useState(null);
    const [searchTask, setSearchTask] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [priority, setPriority] = useState("Medium");
    const [dueDate, setDueDate] = useState("");
    const [sortBy, setSortBy] = useState("default");

    useEffect(() => {
        const fetchTasks = async () => {
            try{
                const { data } = await API.get("/tasks");
                setTasks(data);
            }catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };
        fetchTasks();
    }, [tasks]);

    return {
        task,
        setTask,

        tasks,
        setTasks,

        editIndex,
        setEditIndex,

        searchTask,
        setSearchTask,

        searchQuery,
        setSearchQuery,

        showSearch,
        setShowSearch,

        priority,
        setPriority,

        dueDate,
        setDueDate,

        sortBy,
        setSortBy,
    };
}

export default useTasks;