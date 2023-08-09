import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import MyEventDisplay from './MyEventDisplay';
import Swal from 'sweetalert2'

const MyEvent = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBOokings] = useState([]);
    const url = `http://localhost:5000/registers?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBOokings(data);
                console.log(data);
            })
    }, [url])

    const handleDelete = id => {


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })



        fetch(`http://localhost:5000/registers/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    const remaning = bookings.map(booking => booking._id !== id);
                    setBOokings(remaning);
                }
            })
    }
    return (
        <div className='grid grid-cols-3 gap-5'>
            {
                bookings.map(booking => <MyEventDisplay
                    key={booking._id}
                    booking={booking}
                    handleDelete={handleDelete}
                ></MyEventDisplay>)
            }
        </div>
    );
};

export default MyEvent;