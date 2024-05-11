import RestaurantCard, { IsOpenLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, UseContext, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FaSearch } from "react-icons/fa";
import UserContext from "../utils/UserContext";

// AppBody
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [listOfRestaurantForSearch, setListOfRestaurantForSearch] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);

  const RestaurantCardIsOpen = IsOpenLabel(RestaurantCard);

  console.log("body Rendered", listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.25470&lng=77.39370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setListOfRestaurantForSearch(
      json?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection
      </h1>
    );
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  const handleSearch = () => {
    const filteredRestaurant = listOfRestaurantForSearch.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRestaurants(filteredRestaurant);
  };

  const handleTopRatedFilter = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4
    );
    setListOfRestaurants(filteredList);
  };

  return (
    <div className="AppBody">
      <div className="filter bg-gray-200 py-4 px-8 flex flex-col md:flex-row justify-center items-center gap-2">
        <div className="search mb-4 md:mb-0 flex items-center ">
          <input
            type="text"
            className="search-box p-3 border border-gray-300 rounded-lg"
            placeholder="Search restaurant..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded ml-2 flex justify-center items-center"
            onClick={handleSearch}
          >
            <FaSearch className="search-icon mr-2 text-black font-thin" />
            Search
          </button>
        </div>
        <button
          className="filter-Btn bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
          onClick={handleTopRatedFilter}
        >
          Top Rated Restaurants
        </button>
        <div className="search mb-4 md:mb-0 flex items-center">
          <label htmlFor="">userName: </label>
          <input
            type="text"
            className="border-black border"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="RestaurantContainer px-4 py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {listOfRestaurants.map((restaurant, index) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* Write some logic for isOpen. If a restaurant is isOpen add a isOpen label to it.   */}
            {
              /**if the restaurant is opened then add a opened label to it */
              restaurant.info.isOpen ? (
                <RestaurantCardIsOpen resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )
            }
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
