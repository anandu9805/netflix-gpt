import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils.js/constant";
import { addUpcommingMovies } from "../utils.js/appStore/moviesSlice";
import { useEffect } from "react";

const useUpcommingMovies = () => {
  const dispatch = useDispatch();

  const getUpcommingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const resData = await data.json();
    dispatch(addUpcommingMovies(resData.results));
  };

  useEffect(() => {
    getUpcommingMovies();
  }, []);
};
export default useUpcommingMovies;
