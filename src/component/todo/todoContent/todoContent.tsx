import TasksList from "./tasksList/tasksList"
import classes from "./todoContent.module.css"
import AddTask from "./addTask/addTask";
import { useTodoState } from "../../../hooks/todoState";
import { useState } from "react";

const TodoContent: React.FC = () => {
    const { tasks, toggleCompleted, addTask } = useTodoState();
    const [isPopup, setIsPopup] = useState(false);

    const handleAddTask = (text: string, category: string, importance: boolean) => {
        addTask(text, category, importance)
    };

    return (
        <div className={classes.todoContent}>
            <TasksList tasks={tasks} setCompleted={toggleCompleted} />
            <div className={classes.openPopup} onClick={() => setIsPopup(true)}>
                Add Task
            </div>
            {isPopup && (<AddTask onAddTask={handleAddTask} closePopup={() => setIsPopup(false)} />)}
        </div>
    );
};

export default TodoContent;