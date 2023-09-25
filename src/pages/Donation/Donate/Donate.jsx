import React from 'react';
import '/Donate.css'

const Donate = ({ category }) => {
    const { id, price, title, image, category_name, description, card_bg_color, text_color, button_bg_color, category_bg_color } = category;
    return (
        <div id=''>
            <div className='relative'>
                <img className='w-full rounded' src={image} alt="" />
                <div className='absolute h-24 w-full bg-[#0B0B0B80] bottom-0'>
                    <button style={{ backgroundColor: button_bg_color }} className="px-4 py-2 ml-5 my-8 text-white rounded font-medium">Donate {price}</button>
                </div>
            </div>
            <div className='mt-12'>
                <h2 className="text-4xl text-[#0B0B0B] font-bold mb-5">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Donate;