import React, { useRef, useState } from "react";
import Header from "../header/Header";
import { Validate } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { User_LOGO, Netflix_bg_LOGO } from "../utils/constant";

const Login = () => {
  const [isSign, setIsSign] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handlesigninform = () => {
    setIsSign(!isSign);
  };

  const handlebutton = () => {
    // Validate form data
    const message = Validate(email.current.value, password.current.value);
    setError(message);
    if (message) return;

    // Sign In/ Sign Up
    if (!isSign) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: {User_LOGO},
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
            })
            .catch((error) => {
              // An error occurred
              setError(error.message);
            });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " - " + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={Netflix_bg_LOGO}
          alt="Netflix"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-10 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSign ? "Sign In" : "Sign Up"}
        </h1>
        {!isSign && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-600"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-600"
        />
        <p className="text-red-500 font-bold text-lg py-2">{error}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-md"
          onClick={handlebutton}
        >
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
