import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useEmployee = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data: isEmployee, isLoading: isEmployeeLoading}=useQuery({
        queryKey: [user?.email, 'isEmployee'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/allusers/employee/${user?.email}`);
            return res.data?.employee;
        }
    })
    return [isEmployee, isEmployeeLoading]
};

export default useEmployee;