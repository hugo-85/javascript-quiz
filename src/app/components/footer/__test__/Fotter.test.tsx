import { act, render, renderHook, screen } from "@testing-library/react";
import Footer from "../Footer";
import { setQuizStoreWithTestData } from "@/app/libs/helpers";
import { useQuizStore } from "@/app/store/quiz";

describe("Testing render", () => {
  beforeAll(() => {
    setQuizStoreWithTestData();
  });

  beforeEach(() => {
    render(<Footer />);
  });

  it("Should render 'right: 0'", () => {
    const label = screen.getByText(/right: 0/i);

    expect(label).toBeInTheDocument();
  });

  it("Should render 'wrong: 0", () => {
    const label = screen.getByText(/wrong: 0/i);

    expect(label).toBeInTheDocument();
  });

  it("Should render 'unanswered: 10", () => {
    const label = screen.getByText(/unanswered: 10/i);

    expect(label).toBeInTheDocument();
  });
});

describe("Testing render with answered questions", () => {
  beforeEach(() => {
    const { result } = renderHook(() => useQuizStore());

    act(() => result.current.selectAnswer(1, 3));
    act(() => result.current.selectAnswer(2, 2));
    act(() => result.current.selectAnswer(3, 1));

    render(<Footer />);
  });

  it("Should render 'right: 2", () => {
    const label = screen.getByText(/right: 2/i);

    expect(label).toBeInTheDocument();
  });

  it("Should render 'wrong: 1", () => {
    const label = screen.getByText(/wrong: 1/i);

    expect(label).toBeInTheDocument();
  });

  it("Should render 'unanswered: 8", () => {
    const label = screen.getByText(/unanswered: 7/i);
    expect(label).toBeInTheDocument();
  });
});
