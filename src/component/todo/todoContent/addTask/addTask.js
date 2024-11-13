import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classes from "./addTask.module.css";
import close from "../../../../assets/icons8-отмена.svg";
import Category from "./category/category";
import { useState } from "react";
const AddTask = ({ onAddTask, closePopup }) => {
    const [taskInput, setTaskInput] = useState("");
    const [category, setCategory] = useState("");
    const [importance, setImportance] = useState(false);
    const handleAddTask = () => {
        onAddTask(taskInput, category, importance);
        setTaskInput("");
        setCategory("");
        setImportance(false);
    };
    return (_jsxs("div", { className: classes.todoAddContainer, children: [_jsx("img", { src: close, alt: close, onClick: closePopup }), _jsxs("div", { className: classes.propertySelect, children: [_jsx(Category, { setCategory: setCategory, category: category }), _jsxs("div", { className: classes.importanceContainer, children: [_jsx("input", { type: "checkbox", checked: importance, id: "importance", onChange: (e) => setImportance(e.target.checked) }), _jsx("label", { htmlFor: "importance", onClick: () => setImportance, children: "Is Important" })] })] }), _jsxs("div", { className: classes.todoAdd, children: [_jsx("input", { type: "text", value: taskInput, onChange: (e) => setTaskInput(e.target.value), placeholder: "Add new task" }), _jsx("button", { onClick: handleAddTask, children: "Add New" })] })] }));
};
export default AddTask;
