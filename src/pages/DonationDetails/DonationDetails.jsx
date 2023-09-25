import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Donate from '../Donation/Donate/Donate';

const DonationDetails = () => {
    const [category, setCategory] = useState({});
    const { id } = useParams();

    const donateCategories = useLoaderData();

    useEffect(() => {
        const findDonate = donateCategories?.find(donate => JSON.stringify(donate.id) === id)

        setCategory(findDonate);
        console.log(findDonate);
    }, [id, donateCategories])

    return (
        <div>
            <Donate category={category}></Donate>
        </div>
    );
};

export default DonationDetails;