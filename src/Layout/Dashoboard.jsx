import { NavLink, Outlet } from "react-router-dom";


const Dashoboard = () => {
    return (
        <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-64 lg:h-full lg:min-h-screen bg-green-300">
                <ul className="menu">
                    <li>
                        <NavLink to={'/dashboard/HRHome'}>
                            HR Home
                        </NavLink>
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