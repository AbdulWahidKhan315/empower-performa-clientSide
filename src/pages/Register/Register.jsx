import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import loginImg from '../../assets/images/login.jpg'
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, updateUserProfile } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const role = e.target.role.value;
        const bankAccout = e.target.bankAccount.value;
        const salary = e.target.salary.value;
        const designation = e.target.designation.value;
        console.log(role,bankAccout,salary,designation)
        createUser(email, password)
            .then(() => {
                updateUserProfile(name, photo)
                    .then(() => {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
            })
            .catch(err => {
                Swal.fire({
                    title: 'Error!',
                    text: `${err.message}`,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    }

    return (
        <div className="bg-base-200 relative">
            <img src={loginImg} className="h-screen w-screen object-cover" alt="" />
            <div className="hero min-h-screen absolute top-0">
                <div className="flex flex-col lg:flex-row-reverse lg:gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-green-500">Register now!</h1>
                        <p className="py-6 font-semibold">Please register in our website. By completing the registration you will get the premium service from our website.</p>
                    </div>
                    <div className="card md:w-full shadow-2xl bg-green-200 ">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Select A Role*</span>
                                </label>
                                <select defaultValue='default' name="role" className="select select-bordered w-full" required>
                                    <option disabled value='default'>Select a Role..</option>
                                    <option value="employee">Employee</option>
                                    <option value="hr">HR</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                            <div className="flex flex-col md:flex-row gap-2">
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text">Bank Account No.</span>
                                    </label>
                                    <input type="text" name="bankAccount" placeholder="Bank Account No." className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-2">
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text">Salary</span>
                                    </label>
                                    <input type="text" name="salary" placeholder="Salary" className="input input-bordered" required />
                                </div>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text">Designation</span>
                                    </label>
                                    <input type="text" name="designation" placeholder="Designation" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"}
                                    name="password" placeholder="Password" className="input input-bordered" required />
                                <p onClick={() => setShowPassword(!showPassword)} className="absolute right-1 top-12 text-xl">{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                </p>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <button className="btn bg-green-500 hover:bg-orange-700 text-white">Register</button>

                                <p>Already have any accout? please <Link to="/login" className="font-bold text-blue-600">Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;