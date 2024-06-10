import { render, renderHook, screen } from "@testing-library/react";
import ResetButton from "../ResetButton";
import { setQuizStoreWithTestData } from "@/app/libs/helpers";
import { useQuizStore } from "@/app/store/quiz";
import userEvent from "@testing-library/user-event";

describe("Testing render", () => {
  beforeEach(() => {
    render(<ResetButton />);
  });

  it("Should render a reset button", () => {
    const btn = screen.getByRole("button", { name: /reset/i });

    expect(btn).toBeInTheDocument();
  });
});

describe("Testing functionality", () => {
  beforeAll(() => {
    setQuizStoreWithTestData();
  });

  beforeEach(() => {
    render(<ResetButton />);
  });

  it("Should reset the quiz store", async () => {
    const { result } = renderHook(() => useQuizStore());

    expect(result.current.questions.length).toBe(10);

    const btn = screen.getByRole("button", { name: /reset/i });

    await userEvent.click(btn);

    expect(result.current.questions.length).toBe(0);
  });
});
