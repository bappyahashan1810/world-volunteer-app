import React from 'react';
import logo from '../../../../assests/logos/Group 1329.png';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';

const RightSideAddEventNavbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <img src={logo} alt="" />
            </div>
            <div className='flex items-center mt-[60px]'>
                <AiOutlineUsergroupAdd className='text-xl mr-2'></AiOutlineUsergroupAdd>
                <p>Volunteer register list</p>
            </div>
            <div>
                <p className='mt-[30px] text-[#207FEE]'>+ Add Event</p>
            </div>
        </div>
    );
};

export default RightSideAddEventNavbar;