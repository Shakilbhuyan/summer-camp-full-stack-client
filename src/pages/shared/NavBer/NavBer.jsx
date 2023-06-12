import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/12logo.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import {FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../../hooks/useCart';

const NavBer = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
        .then()
}

  const listOptions = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/allinstructors">Instructors</Link></li>
    <li><Link to="/allclasses">Classes</Link></li>
    <li>
            <Link to="/dashboard/mycart">
                <button className="btn ">
                   <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary">{cart?.length || 0}</div>
                </button></Link>
        </li>

    {
      user ? <div className='flex items-center gap-2'>
          <li><Link t="/">Dashboard</Link></li>
        <img className='h-[40px] w-[40px] rounded-[20px] ' src={user?.photoURL} alt="" />
        <button onClick={handleLogOut} className="btn btn-error">LogOut</button>
      </div> : <><li><Link to="/login">Login</Link></li></>
    }
  </>
  return (
    <div className="navbar  z-10 bg-opacity-30 max-w-screen-xl bg-blue-400 text-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {listOptions}
          </ul>
        </div>
        <img src={logo} className='w-[100px] rounded-lg' alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {listOptions}
        </ul>
      </div>
    </div>
  );
};

export default NavBer;