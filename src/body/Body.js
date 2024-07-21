import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "../browse/Browse";
import Login from "../login/Login";
import { auth } from "../utils/Firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
      } else {
        // User is signed out
        dispatch(removeUser());
        // navigate("/");
      }
    });
  }, [dispatch]);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    // {
    //     path:'/',
    //     element: <Body />
    // },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
      {/* <Login />
      <Browse /> */}
    </div>
  );
};

export default Body;
