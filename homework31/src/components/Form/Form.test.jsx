import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";
import { Provider } from "react-redux";
import { store } from "../../store/store";

describe("Form Component", () => {
  it("allows typing letters and numbers into the input", async () => {
    render(
      <Provider store={store}>
        <Form addTask={vi.fn()} />
      </Provider>
    );

    const input = screen.getByRole("textbox");

    await userEvent.type(input, "Task 123");

    expect(input).toHaveValue("Task 123");
  });

  it("does not add a task if input is empty", async () => {
    const addTask = vi.fn();

    render(
      <Provider store={store}>
        <Form addTask={addTask} />
      </Provider>
    );

    const button = screen.getByRole("button", { name: /add/i });

    await userEvent.click(button);

    expect(addTask).not.toHaveBeenCalled();
  });

  it("does not add a task if input contains only spaces", async () => {
    const addTask = vi.fn();

    render(
      <Provider store={store}>
        <Form addTask={addTask} />
      </Provider>
    );

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /add/i });

    await userEvent.type(input, "   ");
    await userEvent.click(button);

    expect(addTask).not.toHaveBeenCalled();
  });

  it("clears the input after submitting a task", async () => {
    const addTask = vi.fn();

    render(
      <Provider store={store}>
        <Form addTask={addTask} />
      </Provider>
    );

    const input = screen.getByRole("textbox");
    const addButton = screen.getByRole("button", { name: /add/i });

    await userEvent.type(input, "New task");
    await userEvent.click(addButton);

    expect(input).toHaveValue("");
  });
});
