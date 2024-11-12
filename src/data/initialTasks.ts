import { Task } from "../types/interfaces";

export const initialTasks: Task[] = [
    { id: 1, text: "Соблюсти дистанцию", completed: false, category: "rules" },
    { id: 2, text: "Соблюсти ротацию", completed: false, category: "rules" }
]

export const categories: string[] = ["rules", "sport", "music", "idea"]