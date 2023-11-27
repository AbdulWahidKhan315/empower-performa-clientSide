import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AbutUs from "../pages/AboutUs/AbutUs";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Dashoboard from "../Layout/Dashoboard";
import HRHome from "../pages/Dashboard/HRHome/HRHome";
import Payment from "../pages/Dashboard/Payment/Payment";

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
            },
            {
                path: 'login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashoboard></Dashoboard>,
        children: [
            {
                path: '/dashboard/HRhome',
                element: <HRHome></HRHome>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>
            }
        ]
    }
])