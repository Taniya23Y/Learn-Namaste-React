import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div className="flex  flex-col justify-between items-center p-4 my-2 rounded-md bg-gray-50 select-none">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between relative"
        >
          <div className="w-9/12 space-y-2">
            <div className="text-base font-semibold">
              <span className="text-lg font-semibold">
                {item.card.info.name}
              </span>
            </div>
            <p className="text-xs hidden md:block">
              {item.card.info.description}
            </p>
            <button className="bg-yellow-500 text-white rounded-lg border-white px-4">
              <span className="text-xs font-semibold">
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </button>
          </div>
          <div className="w-3/12 relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt="image"
              className="w-full h-32 object-cover rounded-md"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 flex justify-center items-center">
              <button className="bg-orange-500 text-white font-bold p-2 rounded-md shadow-md hover:bg-orange-600 cursor-pointer">
                ADD +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
