import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black pl-12">
      <div className="-mt-60 relative z-10">
        <MovieList title={"Now playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular movies"} movies={movies?.popularMovies} />
        <MovieList title={"Top rated movies"} movies={movies?.topRatedMovies} />
        <MovieList
          title={"Upcomming movies"}
          movies={movies?.upcommingMovies}
        />
      </div>
    </div>
  );
};
export default SecondaryContainer;
