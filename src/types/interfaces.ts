export interface Task {
    id: number,
    text: string,
    completed: boolean
}

export interface TodoState {
    tasks: Task[];
    taskInput: string;
    isCompleted: boolean;
    isPopup: boolean;
}