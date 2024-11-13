import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classes from "./tasksList.module.css";
import importanceIcon from "../../../../assets/icons8-огонь-24.png";
const TasksList = ({ tasks, setCompleted }) => {
    return (_jsx("div", { className: classes.taskList, children: tasks.map(task => (_jsxs("div", { className: classes.taskContainer, children: [_jsx("div", { className: `${classes.isCompleted} ${task.isPending ? classes.true : ""}  ${task.completed ? classes.true : ""}`, onClick: () => setCompleted(task.id) }), _jsx("span", { className: `${classes.task} ${task.isPending ? classes.true : ""} ${task.completed ? classes.true : ""}`, onClick: () => setCompleted(task.id), children: task.text }), task.importance && (_jsx("img", { src: importanceIcon, alt: "" }))] }, task.id))) }));
};
export default TasksList;
