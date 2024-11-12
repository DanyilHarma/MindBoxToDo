import { renderHook, act } from "@testing-library/react";
import { useTodoState } from "./todoState";

describe("useTodoState hook", () => {
    it("adds a task with the selected category", () => {
        const { result } = renderHook(() => useTodoState());

        // Устанавливаем значения для категории и ввода текста
        act(() => {
            result.current.setCategory("music");
            result.current.setTaskInput("New Music Task");
        });

        // Вызываем addTask для добавления задачи
        act(() => {
            result.current.addTask();
        });

        // Проверяем, что задача была добавлена
        const addedTask = result.current.state.tasks.find(task => task.text === "New Music Task");
        expect(addedTask).toBeDefined();
        expect(addedTask?.category).toBe("music");
    });
});
