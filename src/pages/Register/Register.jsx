import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useState } from 'react';
import SocialLogin from '../shared/SocailLogin/SocialLogin';

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const [error, setError] = useState('')
    const navigate = useNavigate();
  
    const onSubmit = data => {
        if(data.password !== data.confirmPassword){
            setError('Password not Match')
            return ;
        }
        createUser(data.email, data.password)
        .then(result =>{
          const loggedUser = result.user;
          updateUserProfile(data.name, data.photoURL)
          .then(()=>{
                     const savedUser = {name: data.name, email : data.email, image: data.photoURL};
                      fetch('http://localhost:5000/users', {
                        method: 'POST',
                        headers:{
                          'content-type' : 'application/json'
                        },
                        body : JSON.stringify(savedUser)
                      })
                      .then(res => res.json())
                      .then(data =>{
                        if(data.insertedId){
                          reset();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Profile Updated',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/')
                        }
                      })
    
                  
          })
          .catch(error => console.log(error))
        })
      };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-1/2 flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Sign Up</h1>
                </div>
                <div className="card  w-full  shadow-2xl  bg-base-200">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className='text-red-600'>Please input Name</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"  {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-red-600'>Please input Email</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" {...register("photoURL", { required: true })} placeholder="PhotoURL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === "required" && <span className='text-red-600'>Please input Password</span>}
                            {errors.password?.type === "minLength" && <span className='text-red-600'>Password Must Be 6 Character</span>}
                            {errors.password?.type === "maxLength" && <span className='text-red-600'>Password Must Under 20 Character</span>}
                            {errors.password?.type === "pattern" && <span className='text-red-600'>Password Must Have One uppercase, One Lowercase, one Number and One Spacial Character</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" {...register("confirmPassword", { required: true })} placeholder="Confirm password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    {error && <p className='text-red-500'>{error}</p>}
                    <span className='ml-4 mb-4'>Already Registered? <Link to="/login">Login</Link>
                    </span>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;