import { render, screen, fireEvent } from "@testing-library/react";
import TodoContent from "./todoContent";
import { categories } from "../../../data/initialTasks";

describe("TodoContent component functionality", () => {
    it("applies selected category to a new task", () => {
        render(<TodoContent />);

        const addTaskButton = screen.getByText("Add Task");
        fireEvent.click(addTaskButton);

        const categoryToSelect = categories[0];
        const categoryRadioButton = screen.getByLabelText(categoryToSelect);
        fireEvent.click(categoryRadioButton);

        const taskInput = screen.getByPlaceholderText("Add new task");
        fireEvent.change(taskInput, { target: { value: "Test Task" } });

        const submitButton = screen.getByText("Add New");
        fireEvent.click(submitButton);

        const newTask = screen.getByText("Test Task");
        expect(newTask).toBeInTheDocument();
    });
});
