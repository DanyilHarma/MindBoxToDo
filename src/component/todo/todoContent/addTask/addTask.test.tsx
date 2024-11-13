import { fireEvent, render, screen } from "@testing-library/react";
import AddTask from "./addTask";

describe("AddTask component", () => {
    it("calls onAddTask with correct arguments when button is clicked", () => {
        const addTaskMock = jest.fn();
        const closePopupMock = jest.fn();

        render(<AddTask onAddTask={addTaskMock} closePopup={closePopupMock} />);

        const input = screen.getByPlaceholderText("Add new task");
        fireEvent.change(input, { target: { value: "New Task" } });

        const categoryRadio = screen.getByLabelText("sport");
        fireEvent.click(categoryRadio);

        const importanceCheckbox = screen.getByLabelText("Is Important");
        fireEvent.click(importanceCheckbox);

        const button = screen.getByText("Add New");
        fireEvent.click(button);

        expect(addTaskMock).toHaveBeenCalledWith("New Task", "sport", true);
        expect(addTaskMock).toHaveBeenCalledTimes(1);
    });
});
