import { Task } from "../types/interfaces";
export declare const useTodoState: () => {
    tasks: Task[];
    toggleCompleted: (id: number) => void;
    addTask: (text: string, category: string, importance: boolean) => void;
};
//# sourceMappingURL=todoState.d.ts.map