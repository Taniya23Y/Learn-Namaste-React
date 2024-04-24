import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

// AppBody
const Body = () => {
  // local state Variable - Super powerful Variable(Hooks = useState)
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  // Normal Javascript variable
  // let listOfRestaurantJS = [
  //   {
  //     data: {
  //       id: "121603",
  //       name: "Kannur Food Point",
  //       cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
  //       cuisines: ["Kerala", "Chinese"],
  //       costForTwo: 30000,
  //       deliveryTime: 24,
  //       locality: "SG Palya",
  //       avgRating: "3.9",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "121602",
  //       name: "Dominos Point",
  //       cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
  //       cuisines: ["Kerala", "Chinese"],
  //       costForTwo: 30000,
  //       deliveryTime: 34,
  //       locality: "SG Palya",
  //       avgRating: "4.5",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "121608",
  //       name: "Dal Hub",
  //       cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
  //       cuisines: ["Kerala", "Chinese"],
  //       costForTwo: 30000,
  //       deliveryTime: 34,
  //       locality: "SG Palya",
  //       avgRating: "4.1",
  //     },
  //   },
  // ];

  return (
    <div className="AppBody">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-Btn"
          onClick={() => {
            // filter logic here

            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="RestaurantConatiner">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

// there are two types of export 1) default export and 2) Named exports
export default Body;
