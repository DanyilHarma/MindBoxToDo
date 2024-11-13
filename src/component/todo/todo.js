import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classes from "./todo.module.css";
import TodoContent from "./todoContent/todoContent";
const Todo = () => {
    return (_jsxs("div", { className: classes.todoContainer, children: [_jsx("h1", { children: "ToDo List" }), _jsx("hr", {}), _jsx(TodoContent, {})] }));
};
export default Todo;
