import React from "react";
import {useRoutes} from "react-router-dom";
import Signup from "./pages/auth/Signup";
import Home from "./pages/home/Home";

export const Routes = () => {
    const routes = [
        {path: "/signup", element : <Signup/>},
        {path: "/", element: <Home/>}
    ];
    return useRoutes(routes);
};
