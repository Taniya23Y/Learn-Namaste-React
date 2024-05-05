import { CDN_URL } from "../utils/constants";

// RestaurantCards components and props
const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    locality,
    costForTwo,
    // deliveryTime,
    sla,
  } = resData?.info;

  return (
    <div className="flex">
      <div className="w-full sm:w-72 md:w-96 lg:w-80 xl:w-96 bg-white rounded-md shadow-md overflow-hidden mb-8 mx-auto ">
        <img
          className="w-full h-52 sm:h-48 md:h-52 lg:h-64 xl:h-52 object-cover"
          alt="restaurant-logo"
          src={CDN_URL + cloudinaryImageId}
        />

        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <p className="text-gray-600 mb-2">{cuisines.join(", ")}</p>
          <p className="text-gray-600 mb-2">{locality}</p>
          <div className="flex items-center mb-1">
            <span className="text-yellow-500">{avgRating} stars</span>
            <span className="mx-2">•</span>
            <span className="text-gray-600">Cost for 2: {costForTwo}</span>
          </div>
          {sla && (
            <p className="text-sm text-gray-500">
              Delivery Time: {sla.slaString}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
