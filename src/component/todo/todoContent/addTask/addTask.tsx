import classes from "./addTask.module.css"
import Category from "./category/category";

interface AddTaskProps {
    addTask: () => void;
    setTaskInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    category: string;
    setCategory: (category: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ addTask, setTaskInput, value, category, setCategory }) => {
    return (
        <div className={classes.todoAddContainer}>
            <Category setCategory={setCategory} category={category} />
            <div className={classes.todoAdd}>
                <input type="text" value={value} onChange={setTaskInput} placeholder="Add new task" />
                <button onClick={addTask}>
                    Add New
                </button>
            </div>
        </div >
    )
}

export default AddTask;