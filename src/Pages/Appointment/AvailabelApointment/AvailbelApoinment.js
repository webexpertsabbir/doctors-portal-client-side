import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';

const AvailbelApoinment = ({selectedDAte}) => {
    const [appointmentOption, setAppointmentOption] = useState([]);

    useEffect(() => {
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOption(data))


    },[])
    return (
        <section>
            <h2 className='text-center text-primary text-lg font-bold'>Available Appointments on {format(selectedDAte, 'PP')}</h2>
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    appointmentOption.map(option => <AppointmentOption
                    key={option._id}
                    option={option}
                    ></AppointmentOption>)
                }
            </div>
        </section>
    );
};

export default AvailbelApoinment;