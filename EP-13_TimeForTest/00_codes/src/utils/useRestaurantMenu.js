import { useState, useEffect } from "react";
import { Menu_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  // fetch the data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Menu_API + resId);
    const json = await data.json();
    // console.log(json);
    setResInfo(json);
  };

  return resInfo;
};

export default useRestaurantMenu;
