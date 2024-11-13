import classes from "./completedTask.module.css"

interface CompletedTaskProps {
    setShowCompleted: () => void;
    isActive: boolean;
}

const CompletedTask: React.FC<CompletedTaskProps> = ({ setShowCompleted, isActive }) => {
    return (
        <div className={classes.completed} onClick={setShowCompleted}>
            {`${isActive ? "Active" : "Complete"}`}
        </div>
    );
};

export default CompletedTask;