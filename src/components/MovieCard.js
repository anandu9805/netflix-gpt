import { movieRecommendationUrl } from "../utils.js/constant";
export const MovieCard = ({ posterPath }) => {
  return (
    <div className="min-w-[150px]">
      <img
        alt="img"
        className="w-40 h-40 object-cover rounded-lg"
        src={`${movieRecommendationUrl}${posterPath}`}
      />
    </div>
  );
};
export default MovieCard;
