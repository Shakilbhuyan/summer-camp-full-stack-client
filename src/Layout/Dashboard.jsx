import React from 'react';
import { Link,  Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useInstructor from '../hooks/useInstructor';

const Dashboard = () => {
   
    const [isAdmin] = useAdmin();
    const { user} = useContext(AuthContext);
    const [isInstructor] = useInstructor();

    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* Page content here */}
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-blue-400 text-black">

             {isAdmin && <li><Link to="/dashboard/manageuser">Manage User</Link></li>}
             {user && <li><Link to="/dashboard/mycart">My classes</Link></li> }
             {isInstructor && <li><Link to="/dashboard/addclass">Add Class</Link></li>}

          <div className="divider"></div>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/allclasses">All Classes</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;