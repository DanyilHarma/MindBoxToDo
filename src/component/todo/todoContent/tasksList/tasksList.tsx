import { Task } from "../../../../types/interfaces";
import classes from "./tasksList.module.css"

interface TasksListProps {
    tasks: Task[];
    setCompleted: (id: number) => void;
}

const TasksList: React.FC<TasksListProps> = ({ tasks, setCompleted }) => {
    return (
        <div className={classes.taskList}>
            {tasks.map(task => (
                <div key={task.id} className={classes.taskContainer}>
                    <div className={`${classes.isCompleted} ${task.completed ? classes.true : ""}`} onClick={() => setCompleted(task.id)}></div>
                    <span className={`${classes.task} ${task.completed ? classes.true : ""}`} onClick={() => setCompleted(task.id)}>
                        {task.text}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default TasksList;