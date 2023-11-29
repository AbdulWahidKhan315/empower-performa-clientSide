import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useHR from "../hooks/useHR/useHR";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader/Loader";


const HRRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isHR, isHRLoading]=useHR();
    const location = useLocation();
    console.log({isHR,user,loading,isHRLoading})

    if(loading || isHRLoading){
        return <Loader></Loader>
    }

    if(user && isHR){
        return children;
    }
    if(user){
        return <Navigate to="/" state={{from: location}} replace></Navigate>
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default HRRoutes;