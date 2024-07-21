import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "../browse/Browse";
import Login from "../login/Login";

const Body = () => {
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
