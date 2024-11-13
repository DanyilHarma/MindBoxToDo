import TasksList from "./tasksList/tasksList"
import classes from "./todoContent.module.css"
import AddTask from "./addTask/addTask";
import { useTodoState } from "../../../hooks/todoState";
import { useState } from "react";
import CategoriesButton from "./categoriesButton/categoriesButton";

const TodoContent: React.FC = () => {
    const { tasks, toggleCompleted, addTask } = useTodoState();
    const [isPopup, setIsPopup] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleAddTask = (text: string, category: string, importance: boolean) => {
        addTask(text, category, importance)
    };

    const filteredTask = selectedCategory ?
        tasks.filter(task => task.category === selectedCategory)
        : tasks;

    return (
        <div className={classes.todoContent}>
            <CategoriesButton setSelectedCategory={setSelectedCategory} />
            <TasksList tasks={filteredTask} setCompleted={toggleCompleted} />
            <div className={classes.openPopup} onClick={() => setIsPopup(true)}>
                Add Task
            </div>
            {isPopup && (<AddTask onAddTask={handleAddTask} closePopup={() => setIsPopup(false)} />)}
        </div>
    );
};

export default TodoContent;