import React from 'react';

const HomeHeader = () => {
    return (
        <div className='mt-[89px]  '>
            <h1 className='font-bold text-4xl text-center uppercase'>I grow by helping people in need.</h1>
            <div className=' justify-center flex mt-[26px]'>
                <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                <input className='bg-[#3F90FC] p-3 rounded-md' type="submit" value="Search" />
            </div>

        </div>
    );
};

export default HomeHeader;