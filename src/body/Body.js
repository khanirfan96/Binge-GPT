import React from "react";
import Login from "../login/Login";
import Browse from "../browse/Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

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
