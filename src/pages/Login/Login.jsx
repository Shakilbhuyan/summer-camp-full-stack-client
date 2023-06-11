import React, { useContext } from 'react';
import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Providers/AuthProvider';
import SocialLogin from '../shared/SocailLogin/SocialLogin';
import Swal from 'sweetalert2';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const from =location.state?.from?.pathname || '/';


    const handleShowPass = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    };
    const onSubmit = data => {
        signIn(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            reset();
            Swal.fire({
                title: 'Login Sucessfully',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              });
              navigate(from, {replace : true});
        })
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-1/2 flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card  w-full  shadow-2xl  bg-base-200">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} {...register("password", { required: true })} placeholder="password" className="input input-bordered focus:outline-none " />
                            <div className="text-end text-2xl">
                              <button onClick={handleShowPass}><FaEye></FaEye></button>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <span className='ml-4 mb-4'>New to School? <Link to="/register">Sign Up</Link>
                    </span>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;