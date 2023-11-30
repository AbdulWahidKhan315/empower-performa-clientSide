import { useContext, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaListUl } from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";


const Progress = () => {
    const { user } = useContext(AuthContext);
    const [display, setDisplay] = useState(false);
    const axiosSecure = useAxiosSecure();
    let names = [];
    const [allWorks, setAllWorks] = useState([]);

    const { data: allWorkSheets = [] } = useQuery({
        queryKey: ['allWorkSheets', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/workSheets/HR`);
            setAllWorks(res.data);
            return res.data;
        }
    })

    for (let item of allWorkSheets) {
        if (names.includes(item.name)) {
            continue;
        }
        names.push(item.name);
    }
    const handleNameFilter = (e) => {
        const value = (e.target.value);
        if (value === 'all') {
            setAllWorks(allWorkSheets);
            return;
        }
        const filteredNames = allWorkSheets.filter(work => work.name === value);
        setAllWorks(filteredNames);
    }

    const handleDateFilter = (e) => {
        const value = e.target.value;
        if (value === 'all') {
            setAllWorks(allWorkSheets);
            return;
        }
        const filterDate = allWorkSheets.filter(date => date.date.split('/')[1] == value)
        setAllWorks(filterDate)
    }

    return (
        <div>
            <h1 className="text-5xl text-center text-green-500 font-bold italic">Progress of all users</h1>
            <div className="flex items-center gap-4">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Filter By Name:</span>
                    </label>
                    <select name="role" onChange={handleNameFilter} className="select select-bordered w-full" required>
                        <option value="all">All</option>
                        {
                            names?.map((name, index) => <option key={index} value={name}>{name}</option>)
                        }
                        {/* <option value="sales">Sales</option>
                        <option value="support">Support</option>
                        <option value="content">Content</option>
                        <option value="paperWork">Paper Work</option> */}
                    </select>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Select Month:</span>
                    </label>
                    <select name="role" onChange={handleDateFilter} className="select select-bordered w-full" required>
                        <option value="all">All</option>
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>
            </div>
            <div className="flex justify-end mb-2 mt-10"  >
                {
                    display ? <h3 onClick={() => setDisplay(!display)} className="border-2 border-green-500 rounded-lg p-2"><FaListUl className="font-bold text-xl "></FaListUl></h3> :
                        <h3 onClick={() => setDisplay(!display)} className="border-2 border-green-500 rounded-lg p-2"><BsGrid3X3GapFill className="font-bold text-xl "></BsGrid3X3GapFill></h3>
                }
            </div>
            {
                display ? <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            allWorks.map(single => <div key={single._id} className="card bg-green-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Name: {single.name}</h2>
                                    <p><span className="font-bold">Email:</span> {single.email}</p>
                                    <div className="card-actions">
                                        <p>Date: {single.date}</p>
                                        <p>Date: {single.hours}</p>
                                        <p>Date: {single.task}</p>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </> : <>
                    <div className="">
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr className="bg-green-300">
                                        <th>No.</th>
                                        <th>Name</th>
                                        <th>Date</th>
                                        <th>Email</th>
                                        <th>Hours</th>
                                        <th>Task</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        allWorks?.map((work, index) =>
                                            <tr key={work._id} className="bg-green-100">
                                                <th>{index + 1}</th>
                                                <th>{work.name}</th>
                                                <td>{work?.date}</td>
                                                <td>{work?.email}</td>
                                                <td>{work.hours}</td>
                                                <td>{work.task}</td>
                                            </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            }


        </div>
    );
};

export default Progress;