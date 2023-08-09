import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const SignIn = () => {
    const { authLogIn } = useContext(AuthContext);
    const handleSignUp = () => {
        authLogIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    }
    return (
        <div>
            <div className='mt-[235px] text-center'>
                <div>
                    <h1 className='font-bold text-2xl '>Sign In With</h1>
                </div>
                <div>
                    <button onClick={handleSignUp} className="btn btn-wide mt-[50px]">
                        <FcGoogle className='text-3xl'></FcGoogle>
                        <p>Continue with Google</p>
                    </button>
                </div>
                <div className='mt-[20px]'>
                    <p>Already have an account? Please <Link to='/login' className='text-blue-500'>Login</Link></p>
                </div>

            </div>
        </div>
    );
};

export default SignIn;