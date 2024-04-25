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
    deliveryTime,
  } = resData?.data;

  return (
    <div className="resCards" style={{ background: "#f0f0f0" }}>
      <img
        className="img-resCard"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{locality}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
