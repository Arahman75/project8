import React from 'react';
import { Link } from 'react-router-dom';

const DonationCart = ({ cartDonate }) => {
    const { id, title, image, category_name, button_bg_color, price, card_bg_color, text_color, category_bg_color } = cartDonate;


    return (

        <div className="card shadow-xl rounded-lg" style={{ backgroundColor: card_bg_color }}>
            <div className='flex'>
                <div>
                    <figure><img className='rounded-l-lg rounded-none' src={image} alt="Shoes" /></figure>
                </div>
                <div className='p-3'>
                    <button style={{ backgroundColor: category_bg_color, color: text_color }} className="px-4 py-2 rounded font-medium">{category_name}</button>
                    <h2 className="text-xl font-semibold mt-2">
                        {title}
                    </h2>
                    <h3 className="font-semibold text-[#0B0B0B] text-xl" style={{ color: button_bg_color }}>{price}</h3>
                    <Link to={`/donationDetails/${id}`}>
                        <button style={{ backgroundColor: button_bg_color }} className="px-4 py-2   text-white mt-3 rounded font-medium">View Details </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default DonationCart;