import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils.js/constant";
import { addMovies } from "../utils.js/appStore/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies=()=>{
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const resData = await data.json();
      dispatch(addMovies(resData.results));
    };
    
    useEffect(() => {
      getNowPlayingMovies();
    }, []);
}
export default useNowPlayingMovies;