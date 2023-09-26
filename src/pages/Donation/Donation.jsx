import React, { useEffect, useState } from 'react';
import DonationCart from '../../components/DonationCart/DonationCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Donation = () => {
    const [addDonate, setAddDonate] = useState([]);
    const [dataLength, setDataLength] = useState(4);


    useEffect(() => {
        const donationItem = JSON.parse(localStorage.getItem('cart'));

        if (donationItem) {
            setAddDonate(donationItem);

            const total = donationItem.reduce((preValue, currentItem) => preValue + (currentItem.price), 0);
            console.log(total);

        } else {
            toast('Not pound your donation, please try again');
        }

    }, [])

    return (

        <div>

            <div className='grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-20 mb-4'>
                {
                    addDonate?.slice(0, dataLength).map(cartDonate => <DonationCart
                        key={cartDonate.id}
                        cartDonate={cartDonate}>

                    </DonationCart>)
                }

            </div>
            <div className={addDonate === dataLength.length ? 'hidden' : ''}>
                <div className='flex items-center justify-center mb-7'>
                    <button onClick={() => setDataLength(addDonate.length)} className="px-4 py-2  bg-[#009444]  text-white mt-3 rounded font-medium">
                        See All
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div >
    );
};

export default Donation;