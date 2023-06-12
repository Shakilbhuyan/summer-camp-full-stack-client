import React, { useContext } from 'react';
import { useClasses } from '../../hooks/useClasses';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';


const AllClasses = () => {
  const [allclasses] = useClasses();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [ ,refetch] = useCart();

  const handleAddToCart = (item) => {
    const cartItem = { cartId: item._id, name: item.language, price: item.price, img: item.image, email: user?.email }
    if (user && user?.email) {
      fetch('https://summer-camp-school-server-one.vercel.app/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cartItem)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            refetch();      // refetch cart for update the number of cart
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Added Cart Successfully',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Aren`t You Login?',
        text: 'Please Login!'
      });
      navigate('/login', { state: { from: location } })
    }
  }
  return (
    <>
      <h1 className='text-center my-4 text-3xl text-blue-700 font-bold'>Our Coures</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-10'>
        {
          allclasses.map(item => <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={item.image} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                {item.language}
              </h2>
              <p className='font-semibold'>Instructor: {item.instructor}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Price: ${item.price}</div>
                <div className="badge badge-outline">Avilable sets : {item.seatsAvailable}</div>
              </div>
              <button onClick={() => handleAddToCart(item)} className='btn btn-success'>Enroll Class</button>
            </div>
          </div>)
        }
      </div>
    </>
  );
};

export default AllClasses;