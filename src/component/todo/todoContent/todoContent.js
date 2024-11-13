import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import TasksList from "./tasksList/tasksList";
import classes from "./todoContent.module.css";
import AddTask from "./addTask/addTask";
import { useTodoState } from "../../../hooks/todoState";
import { useState } from "react";
import CategoriesButton from "./categoriesButton/categoriesButton";
import CompletedTask from "./completedTask/completedTask";
const TodoContent = () => {
    const { tasks, toggleCompleted, addTask } = useTodoState();
    const [isPopup, setIsPopup] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showCompleted, setShowCompleted] = useState(false);
    const handleAddTask = (text, category, importance) => {
        addTask(text, category, importance);
    };
    const filteredTask = tasks.filter(task => {
        if (selectedCategory && task.category !== selectedCategory)
            return false;
        if (showCompleted)
            return task.completed === true;
        else {
            return task.completed === false;
        }
    });
    return (_jsxs("div", { className: classes.todoContent, children: [_jsx(CategoriesButton, { setSelectedCategory: setSelectedCategory }), _jsx(TasksList, { tasks: filteredTask, setCompleted: toggleCompleted }), _jsx(CompletedTask, { setShowCompleted: () => setShowCompleted(prev => !prev), isActive: showCompleted }), _jsx("div", { className: classes.openPopup, onClick: () => setIsPopup(true), children: "Add Task" }), isPopup && (_jsx(AddTask, { onAddTask: handleAddTask, closePopup: () => setIsPopup(false) }))] }));
};
export default TodoContent;
