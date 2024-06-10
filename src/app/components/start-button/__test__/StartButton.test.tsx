import { render, renderHook, screen } from "@testing-library/react";
import StartButton from "../StartButton";
import userEvent from "@testing-library/user-event";
import "../../../../../testServer";
import { useQuizStore } from "@/app/store/quiz";

describe("Testing render", () => {
  it("should render a button with the text 'Start!'", () => {
    render(<StartButton />);

    const btn = screen.getByRole("button", { name: "Start!" });

    expect(btn).toBeInTheDocument();
  });
});

// describe("Testing functionality", () => {
//   it("Should fill the quiz store with 10 questions when the button is pressed", async () => {
//     const { result } = renderHook(() => useQuizStore());

//     expect(result.current.questions.length).toBe(0);

//     render(<StartButton />);

//     const btn = screen.getByRole("button", { name: "Start!" });

//     await userEvent.click(btn);

//     // await waitFor(() => expect(result.current.questions.length).toBe(10));
//     // await act(() => result.current.fetchQuestions(10));

//     expect(result.current.questions.length).toBe(10);
//   });
// });
