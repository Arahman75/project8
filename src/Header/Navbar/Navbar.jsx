import React from 'react';
import logo from '../../assets/Logo.png'
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

    return (
        <div className='max-w-6xl mx-auto'>
            <div className='md:flex items-center justify-between py-4 px-4'>
                <img className='w-[250px] h-10' src={logo} alt="logo" />
                <div >
                    <ul className='flex flex-col md:flex-row'>
                        <li className='mr-11 text-lg font-medium text-[#0B0B0B]'> <NavLink to='/' >Home</NavLink>
                        </li>
                        <li className='mr-11 text-lg font-medium text-[#0B0B0B]'>  <NavLink to='/donation' >Donation</NavLink></li>

                        <li className='text-lg font-medium text-[#0B0B0B]'>      <NavLink to='/statistics' >Statistics</NavLink></li>

                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Navbar;