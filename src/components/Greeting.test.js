import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders Hello World! as a text", () => {
    render(<Greeting />); //ARRANGE
    //ACT [nothing in this test]
    const helloWorldElement = screen.getByText("Hello World!", {
      exact: true,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("Checking if button is not clicked", () => {
    render(<Greeting />);

    const buttonClick = screen.getByText("It's a good day!", { exact: true });

    expect(buttonClick).toBeInTheDocument();
  });

  test("Checking if button is clicked", () => {
    //ARRANGE
    render(<Greeting />);

    //ACT
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //ASSERT
    const outputText = screen.getByText("Text is changed!", { exact: true });
    expect(outputText).toBeInTheDocument();
  });

  test('Checking if first para is removed after button click', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputText = screen.queryByText("It's a good day!", { exact: true });
    expect(outputText).toBeNull();
  })

});;