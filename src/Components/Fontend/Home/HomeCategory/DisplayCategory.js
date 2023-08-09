import React from 'react';
import { Link } from 'react-router-dom';

const DisplayCategory = ({ display }) => {
    const { banner, title, _id } = display;
    return (
        <div className="card w-70  bg-base-100 shadow-xl px-10 mr-5">
            <figure className=" pt-10">
                <img src={banner} alt="" className="rounded-xl h-[200px]" />

            </figure>

            <Link to={`/register/${_id}`}><button className="btn btn-primary">{title}</button></Link>
        </div>
    );
};

export default DisplayCategory;