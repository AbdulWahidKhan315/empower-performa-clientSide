import { NavLink, Outlet } from "react-router-dom";
import useHR from "../hooks/useHR/useHR";
import { FaHistory, FaHome, FaList } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { GiProgression } from "react-icons/gi";
import { SiGooglesheets } from "react-icons/si";
import useEmployee from "../hooks/useEmployee/useEmployee";
import useAdmin from "../hooks/useAdmin/useAdmin";


const Dashoboard = () => {
    const [isHR] = useHR();
    const [isEmployee] = useEmployee();
    const [isAdmin] = useAdmin();
    return (
        <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-64 lg:h-full lg:min-h-screen bg-green-300">
                <ul className="menu">
                    <li className="text-gray-950 font-semibold text-base">
                        <NavLink to={'/dashboard/dashboardHome'}><RxDashboard className="text-green-500 text-lg font-bold"></RxDashboard> Dashboard Home</NavLink>
                    </li>
                    {
                        isAdmin && 
                        <>
                            <li className="text-gray-950 font-semibold text-base">
                                <NavLink to={'/dashboard/allEmployeeList'}>
                                    <FaList className="text-green-500 text-lg font-bold"></FaList> All Employee List
                                </NavLink>
                            </li>
                        </>
                    }
                    {
                        isHR &&
                        <>
                            <li className="text-gray-950 font-semibold text-base">
                                <NavLink to={'/dashboard/HRHome'}>
                                    <FaList className="text-green-500 text-lg font-bold"></FaList> Employee List
                                </NavLink>
                            </li>
                            <li className="text-gray-950 font-semibold text-base">
                                <NavLink to={'/dashboard/progress'}>
                                    <GiProgression className="text-green-500 text-lg font-bold"></GiProgression> Progress
                                </NavLink>
                            </li>
                        </>
                    }
                    {
                        isEmployee &&
                        <>
                            <li className="text-gray-950 font-semibold text-base">
                                <NavLink to={'/dashboard/paymentHistory'}>
                                    <FaHistory className="text-green-500 text-lg font-bold"></FaHistory> Payment History
                                </NavLink>
                            </li>
                            <li className="text-gray-950 font-semibold text-base">
                                <NavLink to={'/dashboard/workSheet'}>
                                    <SiGooglesheets className="text-green-500 text-lg font-bold"></SiGooglesheets> Word Sheet
                                </NavLink>
                            </li>
                        </>
                    }
                    <div className="divider"></div>
                    <li className="text-gray-950 font-semibold text-base">
                        <NavLink to='/'>
                            <FaHome className="text-green-500 text-lg font-bold"></FaHome>
                            Home</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 lg:px-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashoboard;