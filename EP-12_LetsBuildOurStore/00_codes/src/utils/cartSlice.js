import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  // name of the cart slice
  name: "cart",
  // initial value of redux store
  initialState: {
    items: [],
  },
  // reducer function
  reducers: {
    addItem: (state, action) => {
      // mutating the state over here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

// now export actions and export reducers
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
