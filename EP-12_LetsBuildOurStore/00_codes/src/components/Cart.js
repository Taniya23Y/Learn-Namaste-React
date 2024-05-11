import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import React from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  // how we read the info from cart -by subscribing
  // the performance is much high(always subscribe to a small portion of store)
  const cartItems = useSelector((store) => store.cart.items);

  // by doing this performance is very low in redux
  // const cartItems = useSelector((store) => store);
  // const cartItems = store.cart.items;
  return (
    <div className="Cart text-center m-3 p-3 ">
      <h1 className="text-2xl font-bold">cart</h1>
      <div className="w-6/12 m-auto ">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1 className="text-pink-700">
            Cart Empty! Add something to your Cart.
          </h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
