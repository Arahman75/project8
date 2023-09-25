import React, { useEffect, useState } from 'react';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h1>This is categories : {categories.length}</h1>
        </div>
    );
};

export default Categories;