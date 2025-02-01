import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils.js/constant";
import { addTopRatedMovies } from "../utils.js/appStore/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const resData = await data.json();
    dispatch(addTopRatedMovies(resData.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};
export default useTopRatedMovies;
