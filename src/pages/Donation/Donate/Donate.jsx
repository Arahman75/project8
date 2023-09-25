import React from 'react';
import '/Donate.css'

const Donate = ({ category }) => {
    const { id, price, title, image, description, button_bg_color, } = category;

    const handleDonateCard = () => {
        const addDonationArray = [];

        const donationItems = JSON.parse(localStorage.getItem('cart'));

        if (!donationItems) {
            addDonationArray.push(category);
            localStorage.setItem('cart', JSON.stringify(addDonationArray));
            alert('product added');
        } else {
            const isExist = donationItems.find(item => item.id === id);
            console.log(isExist);
            if (!isExist) {
                addDonationArray.push(...donationItems, category);
                localStorage.setItem('cart', JSON.stringify(addDonationArray))
                alert('product added');
            }
            console.log('already added');
            alert('already added');

        }

        // localStorage.setItem('cart', JSON.stringify([{ name: 'rahman' }, { name: 'kamal' }]))
    }

    return (
        <div>
            <div className='relative'>
                <img className='w-full rounded' src={image} alt="" />
                <div className='absolute h-24 w-full bg-[#0B0B0B80] bottom-0'>
                    <button onClick={handleDonateCard} style={{ backgroundColor: button_bg_color }} className="px-4 py-2 ml-5 my-8 text-white rounded font-medium">Donate {price}</button>
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