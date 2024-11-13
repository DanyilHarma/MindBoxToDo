export interface Task {
    id: number,
    text: string,
    completed: boolean,
    category: string,
    importance: boolean,
    isPending?: boolean
}
