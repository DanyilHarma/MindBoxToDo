import { fireEvent, render, screen } from "@testing-library/react"
import AddTask from "./addTask"



describe("AddTask component", () => {

    it("calls addTask function when button is clicked", () => {
        const addTaskMock = jest.fn();
        render(<AddTask addTask={addTaskMock} setTaskInput={() => { }} value="" />);

        const input = screen.getByPlaceholderText("Add new task");
        const button = screen.getByText("Add New");


        fireEvent.change(input, { target: { value: "New Task" } });


        fireEvent.click(button);


        expect(addTaskMock).toHaveBeenCalledTimes(1);
    });
})