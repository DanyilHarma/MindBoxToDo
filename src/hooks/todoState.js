import { useEffect, useRef, useState } from "react";
import { initialTasks } from "../data/initialTasks";
const TASKS_KEY = "tasks";
export const useTodoState = () => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = sessionStorage.getItem(TASKS_KEY);
        return savedTasks ? JSON.parse(savedTasks) : initialTasks;
    });
    const saveTask = (updatedTasks) => {
        sessionStorage.setItem(TASKS_KEY, JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
    };
    const timers = useRef({});
    const toggleCompleted = (id) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                if (task.isPending) {
                    clearTimeout(timers.current[id]);
                    delete timers.current[id];
                    return { ...task, isPending: false };
                }
                else if (!task.completed) {
                    const timeoutId = setTimeout(() => {
                        const updatedTasksAfterTimeout = tasks.map(t => t.id === id ? { ...t, completed: true, isPending: false } : t);
                        saveTask(updatedTasksAfterTimeout);
                        delete timers.current[id];
                    }, 1000);
                    timers.current[id] = timeoutId;
                    return { ...task, isPending: true };
                }
                else {
                    return { ...task, completed: false };
                }
            }
            return task;
        });
        saveTask(updatedTasks);
    };
    useEffect(() => {
        const timersCopy = { ...timers.current };
        return () => {
            Object.values(timersCopy).forEach(clearTimeout);
        };
    }, []);
    const addTask = (text, category, importance) => {
        if (text.trim() && category) {
            const newTask = {
                id: Date.now(),
                text,
                completed: false,
                category,
                importance
            };
            const updatedTasks = importance ? [newTask, ...tasks] : [...tasks, newTask];
            saveTask(updatedTasks);
        }
        ;
    };
    return { tasks, toggleCompleted, addTask };
};
