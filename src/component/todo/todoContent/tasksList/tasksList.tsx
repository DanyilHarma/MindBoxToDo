import { Task } from "../../../../types/interfaces";
import classes from "./tasksList.module.css"
import importanceIcon from "../../../../assets/icons8-огонь-24.png"
import { memo } from "react";

interface TasksListProps {
    tasks: Task[];
    setCompleted: (id: string) => void;
}

const TasksList: React.FC<TasksListProps> = ({ tasks, setCompleted }) => {
    return (
        <div className={classes.taskList}>
            {tasks.map(task => (
                <div key={task.id} className={classes.taskContainer}>
                    <div className={`${classes.isCompleted} ${task.isPending ? classes.true : ""}  ${task.completed ? classes.true : ""}`}
                        onClick={() => setCompleted(task.id)}></div>
                    <span className={`${classes.task} ${task.isPending ? classes.true : ""} ${task.completed ? classes.true : ""}`}
                        onClick={() => setCompleted(task.id)}>
                        {task.text}
                    </span>
                    {task.importance && (<img src={importanceIcon} alt="" />)}
                </div>
            ))}
        </div>
    )
}

export default memo(TasksList);