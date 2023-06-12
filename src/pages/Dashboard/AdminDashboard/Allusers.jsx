import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const Allusers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')

        return res.data;
    });

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`,{
         method: 'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
         if(data.modifiedCount){
             refetch()
             Swal.fire({
                 position: 'top-end',
                 icon: 'success',
                 title: 'User is Admin now',
                 showConfirmButton: false,
                 timer: 1500
               })
         }
        })
 };

 const handleMakeIntructors = id => {
    fetch(`http://localhost:5000/users/instructor/${id}`,{
     method: 'PATCH'
    })
    .then(res => res.json())
    .then(data =>{
     if(data.modifiedCount){
         refetch()
         Swal.fire({
             position: 'top-end',
             icon: 'success',
             title: 'User is Instructor now',
             showConfirmButton: false,
             timer: 1500
           })
     }
    })
}
    return (
        <div className='w-3/4 my-8 '>
            <h3 className="text-3xl font-semibold my-4"> Total User :{users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id} >
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{
                                    user.role === 'admin' ? 'Admin' :
                                        <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-ghost btn-lg text-orange-600 ">Make Admin</button>


                                }</td>
                                <td> {   user.role === 'instructor' ? 'Instructor' :<button onClick={()=>handleMakeIntructors(user._id)} className="btn btn-ghost  text-red-600">Make Instructors</button>} </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;