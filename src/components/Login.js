import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const onButtonToggle = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="
    https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_small.jpg"
        />
      </div>
      <form className="flex flex-col w-3/12 absolute bg-black my-36 p-12 mx-auto right-0 left-0 opacity-80 rounded-lg">
        <span className="text-white font-bold py-4 text-3xl"> {isSignIn ? "Sign In" : "Sign Up"}</span>
        {!isSignIn&&<input
          className="p-4 my-4 w-full bg-black opacity-80 border rounded text-white"
          type="text"
          placeholder="Email Name"
        />}
        <input
          className="p-4 my-4 w-full bg-black opacity-80 border rounded text-white"
          type="text"
          placeholder="Email or mobile number"
        />
        <input
          className="p-4 my-4 w-full  bg-black opacity-80 border rounded text-white"
          type="password"
          placeholder="Password"
        />
        <button className="bg-[#e50931] p-4 w-full rounded text-white font-medium">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex flex-row space-x-4 mt-4">
          <p className="text-white">{isSignIn ? "New to Netlix?" : "Already a member?"}</p>
          <button type='button' className="text-white" onClick={onButtonToggle}>
            {isSignIn ? "Sign Up Now" : "Sign In"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
