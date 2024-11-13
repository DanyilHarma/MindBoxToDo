import { useState } from "react";
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


    const toggleCompleted = (id: number) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        saveTask(updatedTasks);
    };


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

