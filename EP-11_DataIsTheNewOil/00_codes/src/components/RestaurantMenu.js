import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = new useState(0);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card
      ?.card;

  console.log(
    resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  const categories =
    resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="flex justify-center items-center h-full my-4">
      <div>
        <h1 className="menu font-bold my-10 text-2xl">{name}</h1>
        <p className="text-lg font-bold">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <h2>
          {/* Categories accordions */}
          {categories.map((category) => (
            <RestaurantCategory
              key={category.card.card.title}
              data={category?.card?.card}
            />
          ))}
        </h2>
      </div>
    </div>
  );
};

export default RestaurantMenu;
