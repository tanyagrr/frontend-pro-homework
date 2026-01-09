import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import userEvent from "@testing-library/user-event";

describe("App component", () => {
  it('renders the h1 header "to do list"', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(
      screen.getByRole("heading", { name: /to do list/i })
    ).toBeInTheDocument();
  });

  it("adds a new task when text is entered and Add is clicked", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const input = screen.getByRole("textbox");
    const addButton = screen.getByRole("button", { name: /add/i });

    await userEvent.type(input, "Buy milk");
    await userEvent.click(addButton);

    expect(screen.getByText("Buy milk")).toBeInTheDocument();
  });

  it("clears all tasks when Clear button is clicked", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const input = screen.getByRole("textbox");
    const addButton = screen.getByRole("button", { name: /add/i });

    await userEvent.type(input, "Task 1");
    await userEvent.click(addButton);

    await userEvent.type(input, "Task 2");
    await userEvent.click(addButton);

    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();

    const clearButton = screen.getByRole("button", { name: /clear/i });
    await userEvent.click(clearButton);

    expect(screen.queryByText("Task 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Task 2")).not.toBeInTheDocument();
  });
});
