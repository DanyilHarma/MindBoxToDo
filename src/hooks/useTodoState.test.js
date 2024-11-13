import { renderHook, act } from '@testing-library/react';
import { useTodoState } from "./todoState";
jest.mock("../data/initialTasks.ts", () => ({
    initialTasks: [],
}));
describe("useTodoState hook", () => {
    beforeEach(() => {
        jest.useFakeTimers();
        sessionStorage.clear();
    });
    afterEach(() => {
        jest.useRealTimers();
    });
    it("adds a task with the specified category and importance", () => {
        const { result } = renderHook(() => useTodoState());
        // Добавляем задачу напрямую через addTask
        act(() => {
            result.current.addTask("New Music Task", "music", true);
        });
        // Проверяем, что задача была добавлена
        const addedTask = result.current.tasks.find(task => task.text === "New Music Task");
        expect(addedTask).toBeDefined();
        expect(addedTask?.category).toBe("music");
        expect(addedTask?.importance).toBe(true);
    });
    it("adds important tasks to the top of the list", () => {
        const { result } = renderHook(() => useTodoState());
        // Добавляем обычную задачу
        act(() => {
            result.current.addTask("Regular Task", "general", false);
        });
        // Добавляем важную задачу
        act(() => {
            result.current.addTask("Important Task", "urgent", true);
        });
        // Проверяем порядок задач
        expect(result.current.tasks[0].text).toBe("Important Task");
        expect(result.current.tasks[0].importance).toBe(true);
        expect(result.current.tasks[1].text).toBe("Regular Task");
        expect(result.current.tasks[1].importance).toBe(false);
    });
    it("toggles the completion status of a task", () => {
        const { result } = renderHook(() => useTodoState());
        // Добавляем задачу
        act(() => {
            result.current.addTask("Test Task", "testing", false);
        });
        // Получаем ID добавленной задачи
        const addedTaskId = result.current.tasks.find(task => task.text === "Test Task")?.id;
        expect(addedTaskId).toBeDefined();
        // Проверяем, что задача не завершена
        expect(result.current.tasks.find(task => task.id === addedTaskId)?.completed).toBe(false);
        // Переключаем статус завершённости
        act(() => {
            result.current.toggleCompleted(addedTaskId);
        });
        // Симулируем истечение времени
        act(() => {
            jest.advanceTimersByTime(1000); // Предполагая, что задержка 1 секунда
        });
        // Проверяем, что задача теперь завершена
        expect(result.current.tasks.find(task => task.id === addedTaskId)?.completed).toBe(true);
    });
    it('cancels moving a task to completed if the user cancels the action before the timer expires', () => {
        const { result } = renderHook(() => useTodoState());
        act(() => {
            result.current.addTask('Test Task', 'testing', false);
        });
        const addedTaskId = result.current.tasks.find(task => task.text === 'Test Task')?.id;
        expect(addedTaskId).toBeDefined();
        // Отмечаем задачу как выполненную (начинается ожидание)
        act(() => {
            result.current.toggleCompleted(addedTaskId);
        });
        // Проверяем, что задача в состоянии ожидания
        let task = result.current.tasks.find(task => task.id === addedTaskId);
        expect(task?.isPending).toBe(true);
        expect(task?.completed).toBe(false);
        // Отменяем действие до истечения таймера
        act(() => {
            result.current.toggleCompleted(addedTaskId);
        });
        // Проверяем, что задача не в состоянии ожидания и не выполнена
        task = result.current.tasks.find(task => task.id === addedTaskId);
        expect(task?.isPending).toBe(false);
        expect(task?.completed).toBe(false);
        // Продвигаем таймер вперёд на 1 секунду
        act(() => {
            jest.advanceTimersByTime(1000);
        });
        // Убеждаемся, что задача не стала выполненной после истечения времени
        task = result.current.tasks.find(task => task.id === addedTaskId);
        expect(task?.completed).toBe(false);
    });
});
