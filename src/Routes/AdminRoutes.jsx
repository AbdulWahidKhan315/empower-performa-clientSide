import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAdmin from "../hooks/useAdmin/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader/Loader";


const AdminRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <Loader></Loader>
    }

    if(user && isAdmin){
        return children;
    }
    if(user){
        return <Navigate to="/" state={{from: location}} replace></Navigate>
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>

};

export default AdminRoutes;