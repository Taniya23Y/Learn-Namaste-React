import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../../components/mocksData/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { SearchSource } from "jest";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render the Body Component", async () => {
  // render
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  //Query
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getAllByTestId("searchInput");
  console.log(searchInput);
  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);

  //Assertion => screen should load 4 cards
  expect(searchInput).ToBeInTheDocument();
});
