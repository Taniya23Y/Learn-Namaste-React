import { render, screen } from "@testing-library/react";
import RestaurantCart from "../RestaurantCart";
import MOCK_DATA from "../../components/mocksData/resCartMock.json";
import "@testing-library/jest-dom";

test("Should render restaurantCard component", () => {
  render(<RestaurantCart resData={MOCK_DATA} />);

  //Query
  const name = screen.getByText("Da Pizzeria");

  //Assertion
  expect(name).toBeInTheDocument();
});

// describe("IsOpenLabel", () => {
//   it('should render the "Open" label when restaurant is open', () => {
//     // Render the IsOpenLabel component with the mock props
//     render(<IsOpenLabel RestaurantCard resData={MOCK_DATA} />);

//     //Query
//     const OpenLabel = screen.getByText("Open");

//     // Expectation: Ensure that the "Open" label is rendered
//     expect(OpenLabel).toBeInTheDocument();
//   });
// });
