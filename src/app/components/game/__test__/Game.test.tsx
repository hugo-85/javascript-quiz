import { render, screen, waitFor } from "@testing-library/react";
import Game from "../Game";
import { setQuizStoreWithTestData } from "@/app/libs/helpers";
import userEvent from "@testing-library/user-event";

describe("Testing functionality", () => {
  beforeEach(() => {
    render(<Game />);
  });

  it("Should not render the quiz, pagination and footer when there aren't questions", () => {
    const pagination = screen.queryByRole("pagination");
    const quiz = screen.queryByRole("quiz");
    const footer = screen.queryByRole("footer");

    expect(pagination).toBeFalsy();
    expect(quiz).toBeFalsy();
    expect(footer).toBeFalsy();
  });

  it("Should render only the title and the start button", () => {
    const btn = screen.getByRole("button", { name: /start!/i });
    const title = screen.getByText(/javascript quiz/i);

    expect(btn).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  it("Should render the the quiz, pagination and questions when the user press the start button", async () => {
    const btn = screen.getByRole("button", { name: "Start!" });

    await userEvent.click(btn);

    waitFor(() => {
      expect(screen.getByRole("pagination"));
      expect(screen.getByRole("quiz"));
      expect(screen.getByRole("footer"));
    });
  });
});
