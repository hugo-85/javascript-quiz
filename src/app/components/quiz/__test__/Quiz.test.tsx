import { render, renderHook, screen, waitFor } from "@testing-library/react";
import Quiz from "../Quiz";
import { setQuizStoreWithTestData, testQuestions } from "@/app/libs/helpers";
import userEvent from "@testing-library/user-event";
import { useQuizStore } from "@/app/store/quiz";
const question = testQuestions[0];

describe("Testing render", () => {
  beforeAll(() => {
    setQuizStoreWithTestData();
  });

  beforeEach(() => {
    render(<Quiz />);
  });

  it("Should render the first question", () => {
    const span = screen.getByText(question.question);

    expect(span).toBeInTheDocument();
  });

  it("Should render the first question code", () => {
    const code = screen.getByRole("contentinfo", { name: question.code });

    expect(code).toBeInTheDocument();
  });

  it("Should render all the options for the question", () => {
    const { answers } = question;

    answers.forEach((answer) => {
      const label = screen.getByRole("listitem", { name: answer });

      expect(label).toBeInTheDocument();
    });
  });
});

describe("Testing functionality", () => {
  beforeEach(() => {
    setQuizStoreWithTestData();
    render(<Quiz />);
  });

  it("Should color green the option if the user click the correct one", async () => {
    const options = screen.getAllByRole("listitem");
    const correctOption = options[question.correctAnswer];

    await userEvent.click(correctOption);

    expect(correctOption).toHaveStyle("background-color: green");
  });

  it("Should color red the option if the user click an incorrect and color green the correct one", async () => {
    const options = screen.getAllByRole("listitem");
    const correctOption = options[question.correctAnswer];
    const incorrectOption = options[0];

    await userEvent.click(incorrectOption);

    waitFor(() => expect(incorrectOption).toHaveStyle("background-color: red"));

    expect(correctOption).toHaveStyle("background-color: green");
  });

  it("Should change color on hover the option", async () => {
    const options = screen.getAllByRole("listitem");

    await userEvent.hover(options[0]);

    waitFor(() =>
      expect(options[0]).toHaveStyle(
        "background-color: rgba(255, 255, 255, 0.08)"
      )
    );
  });

  it("Should check the option as correct", async () => {
    const { result } = renderHook(() => useQuizStore());
    const options = screen.getAllByRole("listitem");
    const correctOption = options[question.correctAnswer];

    await userEvent.click(correctOption);

    expect(result.current.questions[0].isCorrectUserAnswer).toBeTruthy();
  });

  it("Should check the option as incorrect", async () => {
    const { result } = renderHook(() => useQuizStore());
    const options = screen.getAllByRole("listitem");
    const incorrectOption = options[0];

    await userEvent.click(incorrectOption);

    expect(result.current.questions[0].isCorrectUserAnswer).toBeFalsy();
  });
});
