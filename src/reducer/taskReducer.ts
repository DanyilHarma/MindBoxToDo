import { Task } from "../types/interfaces";

export type Action =
    | { type: 'TOGGLE_PENDING'; id: string }
    | { type: 'COMPLETE_TASK'; id: string }
    | { type: 'CANCEL_PENDING'; id: string }
    | { type: 'ADD_TASK'; task: Task }
    | { type: 'UNCOMPLETE_TASK'; id: string };

export const tasksReducer = (state: Task[], action: Action): Task[] => {
    console.log('Action dispatched:', action);
    switch (action.type) {
        case 'TOGGLE_PENDING':
            return state.map(task =>
                task.id === action.id ? { ...task, isPending: true } : task
            );
        case 'COMPLETE_TASK':
            return state.map(task =>
                task.id === action.id ? { ...task, completed: true, isPending: false } : task
            );
        case 'CANCEL_PENDING':
            return state.map(task =>
                task.id === action.id ? { ...task, isPending: false } : task
            );
        case 'ADD_TASK':
            return action.task.importance
                ? [action.task, ...state]
                : [...state, action.task];
        case 'UNCOMPLETE_TASK':
            return state.map(task =>
                task.id === action.id ? { ...task, completed: false } : task
            );
        default:
            return state;
    }
};