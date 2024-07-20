import React, { useState } from "react";
import Header from "../header/Header";

const Login = () => {
  const [isSign, setIsSign] = useState(true);

  const handlesigninform = () => {
    setIsSign(!isSign);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg"
          alt="Netflix"
        />
      </div>
      <form className="absolute p-10 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75">
        <h1 className="font-bold text-3xl py-4">
          {isSign ? "Sign In" : "Sign Up"}
        </h1>
        {!isSign && (
          <input
            typeof="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-600"
          />
        )}

        <input
          typeof="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-600"
        />
        <input
          typeof="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-600"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-md">
          {isSign ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={handlesigninform}>
          {isSign
            ? "New to Netflix? Sign up now"
            : "Already Binge member Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
