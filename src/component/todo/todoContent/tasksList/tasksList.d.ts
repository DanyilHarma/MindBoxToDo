import { Task } from "../../../../types/interfaces";
interface TasksListProps {
    tasks: Task[];
    setCompleted: (id: number) => void;
}
declare const TasksList: React.FC<TasksListProps>;
export default TasksList;
//# sourceMappingURL=tasksList.d.ts.map