import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const WorkSheet = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext);
    // const [count,setCount]=useState(0);
    const [task,setTask]=useState('')
    const axiosSecure = useAxiosSecure();

    const { data: workSheets = [], refetch } = useQuery({
        queryKey: ['workSheets', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/works/${user?.email}`);
            return res.data;
        }
    })

    const handleSelectTask=(e)=>{
        setTask(e.target.value)
    }

    // const newCount = workSheets?.sort((a,b)=>{
    //     const num1 = a.count;
    //     const num2 = b.count;
    //     if(num1 < num2) return 1;
    //     else if(num1>num2) return -1;
    //     return 0
    // })
    // const finalCount = newCount[0]?.count;
    // useEffect(()=>{
    //     setCount(finalCount ? finalCount : 0);
    // },[finalCount])
    

    const customSort = (a, b) => {
        const [day,month,year]=a.date.split('/');
        const dateAA = new Date(`${year}-${month}-${day}`)
        const [day1,month1,year1]=b.date.split('/');
        const dateBB = new Date(`${year1}-${month1}-${day1}`)
        const countA = dateAA;
        const countB = dateBB;
        if (countA < countB) return 1;
        else if (countA > countB) return -1;
        return 0;
    }


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = data => {
        const works = {
            ...data, date: startDate.toLocaleDateString("fr-FR"),
            email: user?.email,
            name: user?.displayName,
            task: task
        }
        // console.log(works)
        axiosSecure.post('/works', works)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    reset();
                    refetch();
                }
            })
    }



    return (
        <div>
            <h3 className="text-4xl text-center font-bold text-green-500 my-10">Work sheet</h3>
            <div>
                <div className="my-10">
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr className="bg-green-300">
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Hours</th>
                                    <th>Task</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    workSheets.sort(customSort).map((work,index) =>
                                        <tr key={work._id} className="bg-green-100">
                                            <th>{index + 1}</th>
                                            <th>{work.name}</th>
                                            <td>{work?.date}</td>
                                            <td>{work.hours}</td>
                                            <td>{work.task}</td>
                                        </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-4xl text-center font-bold text-green-500 my-10">Add a Work</h3>
                <div className="flex justify-center items-center">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-green-100">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Select A Task*</span>
                                </label>
                                <select onChange={handleSelectTask}  name="role" className="select select-bordered w-full" required>
                                    <option value="sales">Sales</option>
                                    <option value="support">Support</option>
                                    <option value="content">Content</option>
                                    <option value="paperWork">Paper Work</option>
                                </select>
                                {errors.task && <span className="text-red-600">You must select a task</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Hours</span>
                                </label>
                                <input type="number" placeholder="Hours" {...register("hours", { required: true })} name="hours" className="input input-bordered" />
                                {errors.hours && <span className="text-red-600">Hours field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Select Date</span>
                                </label>
                                <DatePicker className="w-full p-4 outline outline-1 rounded-lg"
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    dateFormat="dd/MM/yyyy" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkSheet;