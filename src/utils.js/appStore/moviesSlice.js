import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    tailerVedio: null,
    popularMovies: null,
    topRatedMovies: null,
    upcommingMovies: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcommingMovies: (state, action) => {
      state.upcommingMovies = action.payload;
    },
    addTailer: (state, action) => {
      state.tailerVedio = action.payload;
    },
  },
});
export const {
  addMovies,
  addTailer,
  addPopularMovies,
  addTopRatedMovies,
  addUpcommingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
