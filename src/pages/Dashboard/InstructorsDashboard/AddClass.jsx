import React from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AddClass = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const onSubmit = event => {
        event.preventDefault();
         const form = event.target;
         const name = form.name.value;
         const classimg = form.classimg.value;
         const seats = form.seats.value;
         const price = form.price.value;
         

        const newItem = {
            language: name,
            image: classimg,
            seatsAvailable: seats,
            price: price,
            email: user?.email,
            instructor: user?.displayName,
            instructorImg: user?.photoURL
        };
    //  console.log(newItem)
        axiosSecure.post('/newclass', newItem)
            .then(res => {
                if (res.data.insertedId) {
                    // reset()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'New Class Added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

   
    return (
        <>
            <h1 className='text-center my-4 text-3xl text-blue-700 font-bold'>Add class</h1>
            <div className="hero  bg-base-200">
                <div className="card w-3/4 shadow-2xl bg-base-100">
                    <form onSubmit={onSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <input type="text" placeholder="Name"  name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Image</span>
                            </label>
                            <input type="text"  name='classimg' placeholder="ImageURL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instuctor Name</span>
                            </label>
                            <input type="text"   disabled defaultValue={user?.displayName} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text"  disabled defaultValue={user?.email} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seats</span>
                            </label>
                            <input type="number" name='seats' placeholder="seats" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name='price' placeholder="price" className="input input-bordered" />
                        </div>
                        <input className='btn btn-primary' type="submit" value="Add Class" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddClass;