import React from 'react';
import { useClasses } from '../../hooks/useClasses';

const AllInstructors = () => {
    const [allclasses] = useClasses();
    return (
        <div>
          <h1 className='text-center my-4 text-3xl text-blue-700 font-bold'>Our Instructors</h1>
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
      allclasses.map((item , index) => <tr key={item._id}>
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

export default AllInstructors;