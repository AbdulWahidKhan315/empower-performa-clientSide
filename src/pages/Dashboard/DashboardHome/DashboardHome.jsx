import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const DashboardHome = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="border flex flex-col justify-center items-center lg:h-screen space-y-4 bg-green-50 p-6">
            <img src={user?.photoURL} className="w-[200px] h-[200px] rounded-full border-8 border-green-700 p-1" alt="" />
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 via-green-600 to-purple-600 text-transparent bg-clip-text">Hey - {user?.displayName}</h2>
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-indigo-400 text-transparent bg-clip-text">Welcome to Empower Performa Dashboard</h2>
        </div>
    );
};

export default DashboardHome;