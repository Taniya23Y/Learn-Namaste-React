import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// test case - 1
test("Should render Header component with a login button", () => {
  // render, find | query something, asserts somethings

  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Query
  //   const loginButton = screen.getByRole("button");
  //   const loginButton = screen.getByRole("button", { name: "Login" });
  const cartItems = screen.getByText("Cart");
  //   const loginButton = screen.getByText("Login");

  //assertion
  expect(cartItems).toBeInTheDocument();
});

// test case - 2
test("Should render Header component with a login button", () => {
  // render, find | query something, asserts somethings

  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/);

  //assertion
  expect(cartItems).toBeInTheDocument();
});

// test case - 3
test("Should Change Login button to Logout in Header component", () => {
  // render, find | query something, asserts somethings

  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  //assertion
  expect(logoutButton).toBeInTheDocument();
});
