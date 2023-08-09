import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Login = () => {
    const { authLogIn } = useContext(AuthContext);


    const handleSignin = () => {
        authLogIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='mt-[235px] text-center'>
            <div>
                <h1 className='font-bold text-2xl '>Login With</h1>
            </div>
            <div>
                <button onClick={handleSignin} className="btn btn-wide mt-[50px]">
                    <FcGoogle className='text-3xl'></FcGoogle>
                    <p>Continue with Google</p>
                </button>
            </div>
            <div className='mt-[20px]'>
                <p>Don’t have an account? Create <Link to='/signin' className='text-blue-500'>an account</Link></p>
            </div>

        </div>
    );
};

export default Login;