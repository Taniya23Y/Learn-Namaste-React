import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// describe => grouping all the test cases into a single block
describe("Contact Us page Test Case", () => {
  // test case - 1
  test("Should load contact us components", () => {
    render(<Contact />);

    //   screen is an object
    const heading = screen.getByRole("heading");

    // assertion
    expect(heading).toBeInTheDocument();
  });

  // test case - 2
  test("Should load Button inside contact us components", () => {
    render(<Contact />);

    //   screen is an object
    const button = screen.getByRole("button");

    // assertion
    expect(button).toBeInTheDocument();
  });

  // test case - 3
  test("Should Find Send Message inside contact us components", () => {
    render(<Contact />);

    //   screen is an object
    const button = screen.getByText("Send Message");

    // assertion
    expect(button).toBeInTheDocument();
  });

  // test case - 4
  it("Should Find input inside contact us components", () => {
    render(<Contact />);

    //   screen is an object
    const input = screen.getByPlaceholderText("Your Name");

    // assertion
    expect(input).toBeInTheDocument();
  });

  // test case - 5
  it("Should load 2 input boxes on the contact us component", () => {
    render(<Contact />);

    // Querying
    // const inputBoxes = screen.getAllByTestId("message");

    //Assertion
    // expect(inputBoxes).toBeInTheDocument();
  });
});
