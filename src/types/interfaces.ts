export interface Task {
    id: number,
    text: string,
    completed: boolean,
    category: string
}

export interface TodoState {
    tasks: Task[];
    taskInput: string;
    isCompleted: boolean;
    isPopup: boolean;
    category: string;
}