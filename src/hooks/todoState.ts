import { useState } from "react";
import { Task, TodoState } from "../types/interfaces";
import { initialTasks } from "../data/initialTasks";

const TASKS_KEY = "tasks";

export const useTodoState = () => {
    const [state, setState] = useState<TodoState>(() => {
        const savedTasks = sessionStorage.getItem(TASKS_KEY);
        return {
            tasks: savedTasks ? JSON.parse(savedTasks) : initialTasks,
            taskInput: "",
            isCompleted: false,
            isPopup: false,
            category: ""
        }
    })

    const setTasks = (tasks: Task[]) => setState(prevState => {
        const newState = { ...prevState, tasks };
        sessionStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
        return newState;
    });

    const setTaskInput = (taskInput: string) => setState(prevState => ({ ...prevState, taskInput }));

    const setCompleted = (id: number) => {
        setState(prevState => {
            const updatedTasks = prevState.tasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            );
            sessionStorage.setItem(TASKS_KEY, JSON.stringify(updatedTasks));
            return { ...prevState, tasks: updatedTasks };
        });
    };

    const setCategory = (category: string) => setState(prevState => ({ ...prevState, category }))

    const setIsPopup = (isPopup: boolean) => setState(prevState => ({ ...prevState, isPopup }));

    return { state, setTasks, setTaskInput, setCompleted, setCategory, setIsPopup }
}

