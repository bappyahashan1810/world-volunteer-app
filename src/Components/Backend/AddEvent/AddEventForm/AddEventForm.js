import React from 'react';
import Swal from 'sweetalert2'

const AddEventForm = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const date = form.date.value;
        const description = form.description.value;
        const banner = form.banner.value;
        console.log(title, date, description, banner);
        const addevent = { title, date, description, banner };
        fetch('http://localhost:5000/events', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addevent)
        })
            .then(res => res.json())
            .then(date => {
                console.log(date);
                if (date.insertedId) {
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
        <div className='ml-[31px]'>
            <div>
                <h3 className='font-bold mt-[34px]'>Add Event</h3>
            </div>
            <form onSubmit={handleSubmit}>

                <div className='mt-[71px] relative'>
                    <div className='flex justify-between items-center'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Event Title</span>

                            </label>
                            <input type="text" name='title' placeholder="event title" className="input input-bordered w-full " />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Event date</span>

                            </label>
                            <input type="date" name='date' placeholder="event date" className="input input-bordered w-full " />

                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-[50px]'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Description</span>

                            </label>
                            <textarea className="textarea textarea-accent" name='description' placeholder="Description"></textarea>

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Event Banner</span>

                            </label>
                            <input type="text" name='banner' placeholder="event banner" className="input input-bordered w-full " />

                        </div>
                    </div>
                    <input className='btn btn-sm absolute right-0 top-full bg-[#0084FF] mt-[30px] bottom-0' type="submit" value="Submit" />
                </div>

            </form>
        </div>
    );
};

export default AddEventForm;