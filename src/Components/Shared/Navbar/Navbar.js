import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assests/logos/Group 1329.png';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { BiUserCircle } from 'react-icons/bi';


const Navbar = () => {
    const { authlogOut, user } = useContext(AuthContext);
    const items = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link>Donation</Link></li>
        <li><Link to='/addevent'>Event</Link></li>
        <li><Link>Blog</Link></li>
        <li><Link to='/myevent'>My Event</Link></li>



    </>


    const handleLogOut = () => {
        authlogOut()
            .then(() => [])
            .catch(error => console.error(error));
    }
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
                <div className="navbar-center hidden lg:flex mr-3">
                    <ul className="menu menu-horizontal px-1">
                        {items}
                    </ul>
                </div>
                <div className="navbar-end text-white">
                    {
                        user ? <button onClick={handleLogOut} className="btn mr-[12px] bg-[#3F90FC] btn-sm">Logout</button>
                            : <Link to='/login'><button className="btn mr-[12px] bg-[#3F90FC] btn-sm">Login</button></Link>}

                    <a className="btn bg-[#434141] btn-sm text-white mr-3">Admin</a>
                    {
                        user && user.photoURL ? <img className='rounded-full w-[32px] h-[32px]' src={user.photoURL}></img>
                            :
                            <BiUserCircle className='text-2xl'></BiUserCircle>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;