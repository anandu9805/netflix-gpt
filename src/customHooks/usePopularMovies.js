import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils.js/constant";
import { addPopularMovies } from "../utils.js/appStore/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const resData = await data.json();
    dispatch(addPopularMovies(resData.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};
export default usePopularMovies;
