import { NavLink, Outlet } from "react-router-dom";
import useHR from "../hooks/useHR/useHR";
import { FaHome } from "react-icons/fa";
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
                    <li>
                        <NavLink to={'/dashboard/dashboardHome'}>Dashboard Home</NavLink>
                    </li>
                    {
                        isAdmin && 
                        <>
                            <li>
                                <NavLink to={'/dashboard/allEmployeeList'}>
                                    All Employee List
                                </NavLink>
                            </li>
                        </>
                    }
                    {
                        isHR &&
                        <>
                            <li>
                                <NavLink to={'/dashboard/HRHome'}>
                                    Employee List
                                </NavLink>
                            </li>
                        </>
                    }
                    {
                        isEmployee &&
                        <>
                            <li>
                                <NavLink to={'/dashboard/paymentHistory'}>
                                    Payment History
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/workSheet'}>
                                    Word Sheet
                                </NavLink>
                            </li>
                        </>
                    }
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'>
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 lg:p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashoboard;