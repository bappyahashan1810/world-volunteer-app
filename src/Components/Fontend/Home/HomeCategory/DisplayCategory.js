import React from 'react';

const DisplayCategory = ({ display }) => {
    const { banner, title } = display;
    return (
        <div className="card w-70  bg-base-100 shadow-xl px-10 mr-5">
            <figure className=" pt-10">
                <img src={banner} alt="" className="rounded-xl h-[200px]" />

            </figure>
            <button className="btn btn-primary">{title}</button>

        </div>
    );
};

export default DisplayCategory;