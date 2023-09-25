import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Navbar from '../Header/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            <Outlet></Outlet>

        </div>
    );
};

export default MainLayout;