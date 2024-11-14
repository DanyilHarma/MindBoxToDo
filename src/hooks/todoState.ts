import { useCallback, useEffect, useReducer, useRef } from "react";
import { Task } from "../types/interfaces";
import { v4 as uuidv4 } from 'uuid';
import { initialTasks } from "../data/initialTasks";
import { tasksReducer } from "../reducer/taskReducer";

const TASKS_KEY = "tasks";

export const useTodoState = () => {
    const [tasks, dispatch] = useReducer(tasksReducer, [], () => {
        const savedTasks = sessionStorage.getItem(TASKS_KEY);
        return savedTasks ? JSON.parse(savedTasks) : initialTasks;
    });

    useEffect(() => {
        sessionStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
    }, [tasks]);

    const timers = useRef<Record<string, NodeJS.Timeout>>({});

    const toggleCompleted = useCallback((id: string) => {
        const task = tasks.find(task => task.id === id);

        if (!task) return;

        const currentTimer = timers.current[id];

        if (currentTimer) {
            clearTimeout(currentTimer);
            delete timers.current[id];
            dispatch({ type: 'CANCEL_PENDING', id });
        } else if (!task.completed) {
            dispatch({ type: 'TOGGLE_PENDING', id });
            const timeoutId = setTimeout(() => {
                dispatch({ type: 'COMPLETE_TASK', id });
                delete timers.current[id];
            }, 1000);
            timers.current[id] = timeoutId;
        } else {
            dispatch({ type: 'UNCOMPLETE_TASK', id });
        }
    }, []);

    useEffect(() => {
        return () => {
            Object.values(timers.current).forEach(clearTimeout);
        };
    }, []);

    const addTask = useCallback((text: string, category: string, importance: boolean) => {
        if (text.trim() && category) {
            const newTask: Task = {
                id: uuidv4(),
                text,
                completed: false,
                category,
                importance,
            };
            dispatch({ type: 'ADD_TASK', task: newTask });
        }
    }, []);

    return { tasks, toggleCompleted, addTask };
};
