import React from 'react';

const MyEventDisplay = ({ booking, handleDelete }) => {
    const { banner, library, date, _id } = booking;
    return (
        <div className='mt-[90px] flex relative bg-[#FFF]'>
            <div className='mr-[23px]'>
                <img className='h-[173px] w-[190px]' src={banner} alt="" />
            </div>
            <div>
                <h1 className='font-bold'>{library}</h1>
                <p>{date}</p>
            </div>
            <div>
                <button onClick={() => handleDelete(_id)} className='btn btn-sm absolute right-0 bottom-0'>Cancel</button>
            </div>
        </div>
    );
};

export default MyEventDisplay;