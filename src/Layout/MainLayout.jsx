import React from 'react';
import NavBer from '../pages/shared/NavBer/NavBer';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shared/footer/Footer';

const MainLayout = () => {
    const location = useLocation();
    const isLogin = location.pathname.includes('register')
    return (
        <div>
            {isLogin || <NavBer></NavBer>}
            <Outlet></Outlet>
            {isLogin || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;