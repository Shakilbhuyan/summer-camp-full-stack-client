import React from 'react';
import { useCart } from '../../../hooks/useCart';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyCart = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0).toFixed(2);

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-camp-school-server-one.vercel.app/carts/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0){
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })}
    return (
        <div className='w-3/4 my-8 '>

            <div className='uppercase font-bold flex justify-center items-center  gap-8 '>
                <h3 className="text-3xl">Total Classes : {cart.length}</h3>
                <h3 className="text-3xl">Total price : ${total}</h3>
                <Link to="/dashboard/payment"><button className="btn btn-warning btn-sm">Payment</button></Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => <tr
                            key={item._id}
                        >
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item.img} />
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td className='text-end'>${item.price}</td>
                            <td>
                                <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg text-red-600"><FaTrash></FaTrash></button>
                            </td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;