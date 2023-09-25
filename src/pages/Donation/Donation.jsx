import React, { useEffect, useState } from 'react';
import DonationCart from '../../components/DonationCart/DonationCart';

const Donation = () => {
    const [addDonate, setAddDonate] = useState({});

    useEffect(() => {
        const donationItem = JSON.parse(localStorage.getItem('cart'));
        if (donationItem) {
            setAddDonate(donationItem);
            console.log(donationItem);
        } else {
            console.log('No data  found');
        }


    }, [])

    return (
        <div className='grid md:grid-cols-2 gap-6 max-w-6xl mx-auto my-20'>

            {
                addDonate.map(cartDonate => <DonationCart key={cartDonate.id} cartDonate={cartDonate}></DonationCart>)
            }
        </div>
    );
};

export default Donation;