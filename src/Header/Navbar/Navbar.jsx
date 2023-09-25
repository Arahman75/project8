import React from 'react';
import logo from '../../assets/Logo.png'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='md:flex items-center justify-between py-4 px-4'>
                <img className='w-[250px] h-10' src={logo} alt="logo" />
                <div>
                    <ul className='flex flex-col md:flex-row'>
                        <NavLink to='/' className='mr-11 text-lg font-medium text-[#0B0B0B]'>Home</NavLink>
                        <NavLink to='/donation' className='mr-11 text-lg font-medium text-[#0B0B0B]'>Donation</NavLink>
                        <NavLink to='/statistics' className='text-lg font-medium text-[#0B0B0B]'>Statistics</NavLink>


                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;