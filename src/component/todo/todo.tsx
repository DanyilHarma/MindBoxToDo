import classes from "./todo.module.css"
import TodoContent from "./todoContent/todoContent";

const Todo: React.FC = () => {
    return (
        <div className={classes.todoContainer}>
            <h1>ToDo List</h1>
            <hr />
            <TodoContent />
        </div>
    );
};

export default Todo;