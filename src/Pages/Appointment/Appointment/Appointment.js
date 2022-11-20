import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailbelApoinment from '../AvailabelApointment/AvailbelApoinment';

const Appointment = () => {
    const [selectedDAte, setSlectedDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner
                selectedDAte={selectedDAte}
                setSlectedDate={setSlectedDate}

            ></AppointmentBanner>
            <AvailbelApoinment
                selectedDAte={selectedDAte}
            ></AvailbelApoinment>
        </div>
    );
};

export default Appointment;