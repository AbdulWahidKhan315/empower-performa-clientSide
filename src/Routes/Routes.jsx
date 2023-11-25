import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AbutUs from "../pages/AboutUs/AbutUs";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'aboutUs',
                element: <AbutUs></AbutUs>
            },
            {
                path: 'signUp',
                element: <Register></Register>
            }
        ]
    }
])