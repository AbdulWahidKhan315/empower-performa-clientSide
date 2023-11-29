import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useEmployee from "../hooks/useEmployee/useEmployee";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const EmployeeRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isEmployee, isEmployeeLoading]=useEmployee();
    const location = useLocation();

    if(loading || isEmployeeLoading){
        return <Loader></Loader>
    }

    if(user && isEmployee){
        return children;
    }
    if(user){
        return <Navigate to="/" state={{from: location}} replace></Navigate>
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>

};

export default EmployeeRoutes;