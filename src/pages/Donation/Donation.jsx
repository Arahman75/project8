import React, { useEffect, useState } from 'react';
import DonationCart from '../../components/DonationCart/DonationCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Donation = () => {
    const [addDonate, setAddDonate] = useState([]);

    useEffect(() => {
        const donationItem = JSON.parse(localStorage.getItem('cart'));
        if (donationItem) {
            setAddDonate(donationItem);
            console.log(donationItem);
        } else {
            toast('Not pound your donation, please try again');
        }

    }, [])

    return (
        <div className='grid md:grid-cols-2 gap-6 max-w-6xl mx-auto my-20'>
            {
                addDonate?.map(cartDonate => <DonationCart key={cartDonate.id} cartDonate={cartDonate}></DonationCart>)
            }
            <ToastContainer />
        </div>
    );
};

export default Donation;