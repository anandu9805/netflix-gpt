import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    tailerVedio: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTailer: (state, action) => {
      state.tailerVedio = action.payload;
    },
  },
});
export const { addMovies, addTailer } = moviesSlice.actions;
export default moviesSlice.reducer;
