import React from 'react';
import NavBer from '../pages/shared/NavBer/NavBer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <NavBer></NavBer>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;