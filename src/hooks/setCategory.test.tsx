import { renderHook, act } from "@testing-library/react";
import { useTodoState } from "./todoState";

describe("useTodoState hook", () => {
    it("sets the selected category correctly", () => {
        const { result } = renderHook(() => useTodoState());

        act(() => {
            result.current.setCategory("sport");
        });

        expect(result.current.state.category).toBe("sport");
    });
});