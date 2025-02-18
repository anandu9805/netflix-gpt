import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useUpcommingMovies from "../customHooks/useUpcommingMovies";
import GptSearchPage from "./GptSearchPage";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcommingMovies();

  const isGptSearchEnabled = useSelector((store) => store.gpt.gptSearchEnabled);

  return (
    <div className="">
      <Header />
      {isGptSearchEnabled && <GptSearchPage />}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};
export default Browse;
