export interface Task {
    id: string,
    text: string,
    completed: boolean,
    category: string,
    importance: boolean,
    isPending?: boolean
}
