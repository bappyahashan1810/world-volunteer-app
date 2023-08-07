import React from 'react';
import RightSideAddEventNavbar from '../RightSideAddEventNavbar/RightSideAddEventNavbar';
import AddEventForm from '../AddEventForm/AddEventForm';

const AddEvent = () => {
    return (
        <div className='grid grid-cols-4'>
            <div>
                <RightSideAddEventNavbar></RightSideAddEventNavbar>
            </div>
            <div className='col-span-3'>
                <AddEventForm></AddEventForm>
            </div>
        </div>
    );
};

export default AddEvent;