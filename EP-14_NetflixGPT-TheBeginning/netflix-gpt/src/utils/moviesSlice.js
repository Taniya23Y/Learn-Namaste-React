import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPayingMovies: null,
  },
  reducers: {
    addNowPayingMovies: (state, action) => {
      state.nowPayingMovies = action.payload;
    },
  },
});

export const { addNowPayingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
