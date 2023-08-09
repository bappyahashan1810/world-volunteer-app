import React, { useEffect, useState } from 'react';
import DisplayCategory from './DisplayCategory';

const HomeCategory = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCategory(data);
            })
    }, [])





    return (
        <div className='mt-[51px] grid md:grid-cols-4 grid-cols-2 gap-4'>
            {
                category.map(display => <DisplayCategory
                    key={display._id}
                    display={display}
                ></DisplayCategory>)
            }

        </div>
    );
};

export default HomeCategory;