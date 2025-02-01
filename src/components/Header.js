import { signOut } from "firebase/auth";
import { auth } from "../utils.js/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils.js/appStore/userSlice";
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
  return (
    <div className="items-center absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex flex-row justify-between">
      <img alt="netflix-logo" className="w-44" src={netflixLogo} />
      <div>
        <button className="text-white" onClick={handleSignOut}>
          Sign out
        </button>
      </div>
    </div>
  );
};
export default Header;
