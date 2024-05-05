import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// AppBody
const Body = () => {
  // local state Variable - Super powerful Variable(Hooks = useState)
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [listOfRestaurantForSearch, setListOfRestaurantForSearch] = useState(
    []
  );

  // Never create useState outside of your components. It will not work.
  // And never create a State variables inside a if-else, for loop and function- this will create inconsistency in project.
  const [searchText, setSearchText] = useState("");

  // Whenever state variable updates, react triggers a reconciliation cycle(re-renders the components).
  console.log("Body Rendered");

  // useEffect takes two args: (1) arrow function-callback func (2) dependency args
  // when will this useEffect callback func called: answer is this callback function will be called after your components renders!
  useEffect(() => {
    fetchData();
    // console.log("useEffect called");
  }, []);

  // console.log("Body Rendered");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.25470&lng=77.39370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    setListOfRestaurants(
      json?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestaurantForSearch(
      json?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline!! please check your internet connection
      </h1>
    );
  }

  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="AppBody">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // filter the restaurant cards and update the UI
              // searchText
              // console.log(searchText);

              const filteredRestaurant = listOfRestaurantForSearch.filter(
                (res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setListOfRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-Btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="RestaurantConatiner">
        {listOfRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
