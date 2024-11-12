import classes from "./addTask.module.css"
import close from "../../../../assets/icons8-отмена.svg"
import Category from "./category/category";
import { useState } from "react";

interface AddTaskProps {
    onAddTask: (text: string, category: string, importance: boolean) => void;
    closePopup: () => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask, closePopup }) => {
    const [taskInput, setTaskInput] = useState("");
    const [category, setCategory] = useState("");
    const [importance, setImportance] = useState(false);

    const handleAddTask = () => {
        onAddTask(taskInput, category, importance);
        setTaskInput("");
        setCategory("");
        setImportance(false);
    }

    return (
        <div className={classes.todoAddContainer}>
            <img src={close} alt={close} onClick={closePopup} />
            <div className={classes.propertySelect}>
                <Category setCategory={setCategory} category={category} />
                <div className={classes.importanceContainer}><input type="checkbox" checked={importance}
                    id="importance" onChange={(e) => setImportance(e.target.checked)} />
                    <label htmlFor="importance" onClick={() => setImportance}>Is Important</label></div>
            </div>
            <div className={classes.todoAdd}>
                <input type="text" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} placeholder="Add new task" />
                <button onClick={handleAddTask}>
                    Add New
                </button>
            </div>
        </div >
    )
}

export default AddTask;