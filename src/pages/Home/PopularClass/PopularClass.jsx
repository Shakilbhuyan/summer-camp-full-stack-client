import React from 'react';
import { useClasses } from '../../../hooks/useClasses';

const PopularClass = () => {
    const [allclasses] = useClasses();
    const popularClass = allclasses.filter(item => item.seatsAvailable < +10);
    const sixClass = popularClass.slice(0, 6)
    return (
        <div>
            <h1 className='text-center my-10 text-3xl text-blue-700 font-bold'>Popular class</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-10'>
            {
                sixClass.map(item => <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
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
                    </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default PopularClass;