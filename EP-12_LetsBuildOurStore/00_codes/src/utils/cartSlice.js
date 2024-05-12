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
      // mutating the state over here and here we have to mutate the state
      state.items.push(action.payload);

      // In vanilla (older) redux => DON'T Mutated the State and returning was mandatory
      // first make a copy of state and then mutated it.
      //   const newState = [...state];
      //   newState.items.push(action.payload);
      //   return newState;
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // RTK - either Mutate the existing state or return a new state
      // state.items.length = 0;

      return { items: [] }; // this new [] will be replaced inside originalSate = []
    },
  },
});

// now export actions and export reducers
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
