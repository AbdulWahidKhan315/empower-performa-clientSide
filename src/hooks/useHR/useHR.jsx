import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useHR = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data: isHR, isLoading: isHRLoading}=useQuery({
        queryKey: [user?.email, 'isHR'],
        enabled: !!user,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/HR/${user?.email}`);
            return res.data?.hr;
        }
    })
    return [isHR, isHRLoading]
};

export default useHR;