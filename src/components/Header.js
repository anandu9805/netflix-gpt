import { signOut } from "firebase/auth";
import { auth } from "../utils.js/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils.js/appStore/userSlice";
import { toggleGptSearch } from "../utils.js/appStore/gptSlice";
import { netflixLogo } from "../utils.js/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const onExploreMoviesClick = () => {
    dispatch(toggleGptSearch());
  };

  return (
    <div className="items-center absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex flex-row justify-between">
      <img alt="netflix-logo" className="w-44" src={netflixLogo} />
      <button className="text-white" onClick={onExploreMoviesClick}>
        Explore Movies
      </button>
      <div>
        <button className="text-white" onClick={handleSignOut}>
          Sign out
        </button>
      </div>
    </div>
  );
};
export default Header;
