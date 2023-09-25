import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Category = ({ category }) => {
    const { id, title, image, category_name, card_bg_color, text_color, category_bg_color } = category;

    return (
        <Link to={`/donationDetails/${id}`} >
            <div className="card shadow-xl rounded-lg" style={{ backgroundColor: card_bg_color }}>
                <figure><img src={image} alt="Shoes" /></figure>
                <div className='p-5'>
                    <button style={{ backgroundColor: category_bg_color, color: text_color }} className="px-4 py-2 rounded font-medium">{category_name}</button>
                    <h2 className="text-xl font-semibold mt-2" style={{ color: text_color }}>
                        {title}

                    </h2>

                </div>
            </div>
        </Link>
    );
};

export default Category;