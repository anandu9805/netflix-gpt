import MovieCard from "./MovieCard";

export const MovieList = ({ title, movies }) => {
  return (
    <div className="py-4">
      <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
      <div className="flex overflow-x-scroll space-x-4 scrollbar-hide rounded-lg">
        {movies?.map((movie) => (
          <MovieCard posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};
export default MovieList;
