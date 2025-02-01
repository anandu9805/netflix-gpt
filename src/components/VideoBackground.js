import useMovieTrailer from "../customHooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const tailerVedio = useSelector((store) => store.movies?.tailerVedio);

  return (
    <div className="w-screen bg-black">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${tailerVedio?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};
export default VideoBackground;
