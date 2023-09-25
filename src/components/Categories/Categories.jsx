import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';


const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='grid md:grid-cols-4 gap-5'>
            {
                categories.map(category => <Category key={category.id} category={category}></Category>)
            }
        </div>
    );
};

export default Categories;