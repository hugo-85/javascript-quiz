import { setQuizStoreWithTestData } from "@/app/libs/helpers";
import { act, render, screen } from "@testing-library/react";
import Pagination from "../Pagination";
import userEvent from "@testing-library/user-event";
import { useQuizStore } from "@/app/store/quiz";

describe("Testing render", () => {
  beforeAll(() => {
    setQuizStoreWithTestData();
  });

  beforeEach(() => {
    render(<Pagination />);
  });

  it("Should render a back button", () => {
    const btn = screen.getByRole("button", { name: "back" });

    expect(btn).toBeInTheDocument();
  });

  it("Should render '1 / 10'", () => {
    const label = screen.getByText("1 / 10");

    expect(label).toBeInTheDocument();
  });

  it("Should render a next button", () => {
    const btn = screen.getByRole("button", { name: "next" });

    expect(btn).toBeInTheDocument();
  });
});

describe("Testing functionality", () => {
  beforeEach(() => {
    render(<Pagination />);
  });

  it("The back button should be disabled on the first page", () => {
    const btn = screen.getByRole("button", { name: "back" });

    expect(btn).toHaveAttribute("disabled");
  });

  it("Should go to the second question when the next button is pressed", async () => {
    const btn = screen.getByRole("button", { name: "next" });

    await userEvent.click(btn);

    const label = screen.getByText("2 / 10");

    expect(label).toBeInTheDocument();
  });

  it("Should go back to the first question when the back button is pressed", async () => {
    const btn = screen.getByRole("button", { name: "back" });

    await userEvent.click(btn);

    const label = screen.getByText("1 / 10");

    expect(label).toBeInTheDocument();
  });

  it("The next button should be disabled on the last page", () => {
    const store = useQuizStore;
    act(() =>
      store.setState({
        currentQuestion: 9,
      })
    );
    const btn = screen.getByRole("button", { name: "next" });

    expect(btn).toHaveAttribute("disabled");
  });
});
