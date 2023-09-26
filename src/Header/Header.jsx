import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <h2 className='text-[#0B0B0B] font-bold text-5xl'>  I Grow By Helping People In Need</h2>
            <div className='mt-6'>
                <input className="px-5 py-3 w-[400px] text-white mt-3 rounded-l-lg font-medium" type="search" placeholder='Search here' />
                <input className="px-5 py-3  bg-[#FF444A]  text-white mt-3 font-medium rounded-r-lg" type="submit" value="Search" />
            </div>
        </div>
    );
};

export default Header;