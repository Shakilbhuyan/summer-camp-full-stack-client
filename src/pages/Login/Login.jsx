import React from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleShowPass = (event) => {
        event.preventDefault();
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-1/2 flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card  w-full  shadow-2xl  bg-base-200">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered focus:outline-none " />
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
                </div>
            </div>
        </div>
    );
};

export default Login;