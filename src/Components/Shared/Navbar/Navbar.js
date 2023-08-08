import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assests/logos/Group 1329.png';


const Navbar = () => {
    const items = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link>Donation</Link></li>
        <li><Link to='/addevent'>Event</Link></li>
        <li><Link>Blog</Link></li>


    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {items}

                        </ul>
                    </div>
                    <img className='w-[200px] h-[60px]' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {items}
                    </ul>
                </div>
                <div className="navbar-end text-white">
                    <a className="btn mr-[12px] bg-[#3F90FC] btn-sm">Register</a>
                    <a className="btn bg-[#434141] btn-sm text-white">Admin</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;