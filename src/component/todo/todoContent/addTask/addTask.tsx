import classes from "./addTask.module.css"

interface AddTaskProps {
    addTask: () => void;
    setTaskInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const AddTask: React.FC<AddTaskProps> = ({ addTask, setTaskInput, value }) => {
    return (
        <div className={classes.todoAdd}>
            <input type="text" value={value} onChange={setTaskInput} placeholder="Add new task" />
            <button onClick={addTask}>
                Add New
            </button>
        </div>
    )
}

export default AddTask;