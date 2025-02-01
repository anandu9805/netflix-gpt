import { API_OPTIONS } from "../utils.js/constant";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTailer } from "../utils.js/appStore/moviesSlice";
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((item) => item.type === "Trailer");
    const tailer = filterData ? filterData?.[0] : data?.[0];
    dispatch(addTailer(tailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useMovieTrailer;
