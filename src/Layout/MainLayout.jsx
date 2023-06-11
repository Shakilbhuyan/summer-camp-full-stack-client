import React from 'react';
import NavBer from '../pages/shared/NavBer/NavBer';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBer></NavBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;