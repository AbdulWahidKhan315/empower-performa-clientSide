import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AbutUs from "../pages/AboutUs/AbutUs";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Dashoboard from "../Layout/Dashoboard";
import HRHome from "../pages/Dashboard/HRHome/HRHome";
import Payment from "../pages/Dashboard/Payment/Payment";
import DetailsForHR from "../pages/Dashboard/DetailsForHR/DetailsForHR";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import WorkSheet from "../pages/Dashboard/WorkSheet/WorkSheet";
import AllEmployeeList from "../pages/Dashboard/AllEmployeeList/AllEmployeeList";
import Progress from "../pages/Dashboard/Progress/Progress";
import PrivateRoutes from "./PrivateRoutes"
import AdminRoutes from "./AdminRoutes";
import EmployeeRoutes from "./EmployeeRoutes";
import HRRoutes from "./HRRoutes";

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
        element: <PrivateRoutes><Dashoboard></Dashoboard></PrivateRoutes>,
        children: [
            {
                path: '/dashboard/dashboardHome',
                element: <DashboardHome></DashboardHome>
            },
            {
                path: '/dashboard/HRhome',
                element: <HRRoutes><HRHome></HRHome></HRRoutes>
            },
            {
                path: '/dashboard/payment/:id',
                element: <HRRoutes><Payment></Payment></HRRoutes>
            },
            {
                path: '/dashboard/userDetailsForHR/:id',
                element: <HRRoutes><DetailsForHR></DetailsForHR></HRRoutes>
            },
            {
                path: '/dashboard/progress',
                element: <HRRoutes><Progress></Progress></HRRoutes>
            },
            {
                path: '/dashboard/paymentHistory',
                element: <EmployeeRoutes><PaymentHistory></PaymentHistory></EmployeeRoutes>
            },
            {
                path: '/dashboard/workSheet',
                element: <EmployeeRoutes><WorkSheet></WorkSheet></EmployeeRoutes>
            },
            {
                path: '/dashboard/allEmployeeList',
                element: <AdminRoutes><AllEmployeeList></AllEmployeeList></AdminRoutes>
            }
        ]
    }
])