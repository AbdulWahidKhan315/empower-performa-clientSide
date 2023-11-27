import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const DashboardHome = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="border flex flex-col justify-center items-center">
            <h2 className="text-5xl">Hey - {user.displayName}</h2>
            <h2 className="text-5xl">Welcome to Empower Performa</h2>
            <img src={user.photoURL} className="w-[300px] h-[300px] rounded-full" alt="" />
        </div>
    );
};

export default DashboardHome;