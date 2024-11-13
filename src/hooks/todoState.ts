import { useEffect, useRef, useState } from "react";
import { Task } from "../types/interfaces";
import { initialTasks } from "../data/initialTasks";

const TASKS_KEY = "tasks";

export const useTodoState = () => {
    const [tasks, setTasks] = useState<Task[]>(() => {
        const savedTasks = sessionStorage.getItem(TASKS_KEY);
        return savedTasks ? JSON.parse(savedTasks) : initialTasks;
    });

    const saveTask = (updatedTasks: Task[]) => {
        sessionStorage.setItem(TASKS_KEY, JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
    };

    const timers = useRef<{ [key: number]: NodeJS.Timeout }>({});

    const toggleCompleted = (id: number) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                if (task.isPending) {
                    clearTimeout(timers.current[id]);
                    delete timers.current[id];
                    return { ...task, isPending: false };
                } else if (!task.completed) {
                    const timeoutId = setTimeout(() => {
                        const updatedTasksAfterTimeout = tasks.map(t =>
                            t.id === id ? { ...t, completed: true, isPending: false } : t
                        );
                        saveTask(updatedTasksAfterTimeout);
                        delete timers.current[id];
                    }, 1000);
                    timers.current[id] = timeoutId;
                    return { ...task, isPending: true };
                } else {
                    return { ...task, completed: false };
                }
            }
            return task;
        });
        saveTask(updatedTasks);
    };

    useEffect(() => {
        return () => {
            Object.values(timers.current).forEach(clearTimeout);
        };
    }, []);

    const addTask = (text: string, category: string, importance: boolean) => {
        if (text.trim() && category) {
            const newTask: Task = {
                id: Date.now(),
                text,
                completed: false,
                category,
                importance
            };
            const updatedTasks = importance ? [newTask, ...tasks] : [...tasks, newTask];
            saveTask(updatedTasks);
        };
    };

    return { tasks, toggleCompleted, addTask };
};

