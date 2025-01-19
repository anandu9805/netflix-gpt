import { useRef, useState } from "react";
import Header from "./Header";
import { loginValidation } from "../utils.js/LoginValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils.js/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const onButtonToggle = () => {
    setIsSignIn(!isSignIn);
  };
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const onSubmit = () => {
    const emailValue = email?.current.value || "";
    const passwordValue = password?.current.value || "";
    const nameValue = name?.current?.value || "";
    const error = loginValidation(
      emailValue,
      passwordValue,
      nameValue,
      isSignIn
    );
    if (error !== null) {
      setErrorMessage(error);
      return;
    }
    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("sign up done", user);
          setErrorMessage("");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
    if (isSignIn) {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("sign in done", user);
          setErrorMessage("");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="netflix-logo"
          src="
    https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_small.jpg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col w-3/12 absolute bg-black my-36 p-12 mx-auto right-0 left-0 opacity-80 rounded-lg"
      >
        <span className="text-white font-bold py-4 text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </span>
        {!isSignIn && (
          <input
            ref={name}
            className="p-4 my-4 w-full bg-gray-800 opacity-80 border rounded text-white"
            type="text"
            placeholder="Email Name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-4 w-full bg-gray-800 opacity-80 border rounded text-white"
          type="text"
          placeholder="Email or mobile number"
        />
        <input
          ref={password}
          className="p-4 my-4 w-full  bg-gray-800 opacity-80 border rounded text-white"
          type="password"
          placeholder="Password"
        />
        {errorMessage && <p className="text-red-900 my-4 ">{errorMessage}</p>}
        <button
          type="submit"
          className="bg-[#e50931] p-4 w-full rounded text-white font-medium opacity-100"
          onClick={onSubmit}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex flex-row space-x-4 mt-4 opacity-100">
          <p className="text-white">
            {isSignIn ? "New to Netlix ?" : "Already a member ?"}
          </p>
          <button
            type="button"
            className="text-white "
            onClick={onButtonToggle}
          >
            {isSignIn ? "Sign Up Now" : "Sign In"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
