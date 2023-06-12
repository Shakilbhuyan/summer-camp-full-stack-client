import React from 'react';
import { useClasses } from '../../../hooks/useClasses';

const PopularInstructors = () => {
    const [allclasses] = useClasses();
    const popularClass = allclasses.filter(item => item.seatsAvailable <= +10);
    const sixClass = popularClass.slice(0, 6)
    return (
        <div>
<h1 className='text-center my-10 text-3xl text-blue-700 font-bold'>Popular Instructors</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
     {
      sixClass.map((item , index) => <tr key={item._id}>
        <td>
          {index + 1}
        </td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.instructorImg} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
         {item.instructor}

        </td>
        <td>{item.email}</td>
      </tr>)
     }
      

    </tbody>
  </table>
</div>
        </div>
    );
};

export default PopularInstructors;