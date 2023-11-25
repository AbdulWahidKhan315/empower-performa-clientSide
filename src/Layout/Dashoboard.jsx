import { NavLink, Outlet } from "react-router-dom";
import useHR from "../hooks/useHR/useHR";
import { FaHome } from "react-icons/fa";


const Dashoboard = () => {
    const [isHR] = useHR();
    return (
        <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-64 lg:h-full lg:min-h-screen bg-green-300">
                <ul className="menu">
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