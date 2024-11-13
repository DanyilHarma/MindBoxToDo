import { jsx as _jsx } from "react/jsx-runtime";
import classes from "./completedTask.module.css";
const CompletedTask = ({ setShowCompleted, isActive }) => {
    return (_jsx("div", { className: classes.completed, onClick: setShowCompleted, children: `${isActive ? "Active" : "Complete"}` }));
};
export default CompletedTask;
