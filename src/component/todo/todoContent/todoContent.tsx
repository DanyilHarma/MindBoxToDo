import TasksList from "./tasksList/tasksList"
import classes from "./todoContent.module.css"
import AddTask from "./addTask/addTask";
import { useTodoState } from "../../../hooks/todoState";
import { useCallback, useState } from "react";
import CategoriesButton from "./categoriesButton/categoriesButton";
import CompletedTask from "./completedTask/completedTask";

const TodoContent: React.FC = () => {
    const { tasks, toggleCompleted, addTask } = useTodoState();
    const [isPopup, setIsPopup] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [showCompleted, setShowCompleted] = useState<boolean>(false);

    const handleAddTask = useCallback((text: string, category: string, importance: boolean) => {
        addTask(text, category, importance)
    }, [addTask]);

    const filteredTask = tasks.filter(task => {
        if (selectedCategory && task.category !== selectedCategory) return false;
        if (showCompleted) return task.completed === true; else {
            return task.completed === false;
        }
    })

    return (
        <div className={classes.todoContent}>
            <CategoriesButton setSelectedCategory={setSelectedCategory} />
            <TasksList tasks={filteredTask} setCompleted={toggleCompleted} />
            <CompletedTask setShowCompleted={() => setShowCompleted(prev => !prev)} isActive={showCompleted} />
            <div className={classes.openPopup} onClick={() => setIsPopup(true)}>
                Add Task
            </div>
            {isPopup && (<AddTask onAddTask={handleAddTask} closePopup={() => setIsPopup(false)} />)}
        </div>
    );
};

export default TodoContent;