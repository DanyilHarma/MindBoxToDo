import TasksList from "./tasksList/tasksList"
import classes from "./todoContent.module.css"
import { Task } from "../../../types/interfaces";
import AddTask from "./addTask/addTask";
import { useTodoState } from "../../../hooks/todoState";

const TodoContent: React.FC = () => {

    const { state, setTasks, setTaskInput, setCompleted, setIsPopup } = useTodoState();

    const addTask = () => {
        if (state.taskInput.trim()) {
            const newTask: Task = {
                id: Date.now(),
                text: state.taskInput,
                completed: false
            };
            setTasks([...state.tasks, newTask]);
            setTaskInput("");
        };
    };

    const handleChangeTaskInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskInput(event.target.value);
    };

    const handleOpenPopup = () => {
        setIsPopup(!state.isPopup);
    };

    return (
        <div className={classes.todoContent}>
            <TasksList tasks={state.tasks} setCompleted={setCompleted} />
            <div className={classes.openPopup} onClick={handleOpenPopup}>
                Add Task
            </div>
            {state.isPopup && (<AddTask addTask={addTask} setTaskInput={handleChangeTaskInput} value={state.taskInput} />)}
        </div>
    );
};

export default TodoContent;