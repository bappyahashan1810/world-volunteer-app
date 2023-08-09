import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'

const Register = () => {
    const selectedCategory = useLoaderData();
    const { title, banner, _id, description } = selectedCategory;
    const { user } = useContext(AuthContext);

    const handleSubmit = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const description = form.description.value;
        const library = form.library.value;
        const newRegister = { name, email, date, description, library, banner };
        console.log(newRegister);
        fetch('http://localhost:5000/registers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newRegister)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })

                    form.reset();
                }
            })
    }
    return (
        <div className='mt-[40px]'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">

                    <div className="card flex-shrink-0 w-full border border-[#ABABAB] shadow-2xl bg-base-100 p-5">
                        <h1 className="text-3xl font-bold">Register as a Volunteer</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name='name' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">User Name or Email</span>
                                    </label>
                                    <input type="email" placeholder="email" defaultValue={user?.email} name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input type="date" placeholder="date" name='date' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input type="text" placeholder="description" defaultValue={description} name='description' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Organize books at the library.</span>
                                    </label>
                                    <input type="text" defaultValue={title} placeholder="organize book at the library" name='library' className="input input-bordered" />
                                </div>

                                <div className="form-control mt-6">

                                    <input className="btn btn-primary" type="submit" value="Register" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;