import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailbelApoinment = ({ selectedDAte }) => {
    // const [appointmentOption, setAppointmentOption] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDAte, 'PP')

    // const {data:appointmentOptions = []} = useQuery({
    //     queryKey: ['appointmentOptions'],
    //     queryFn: () => fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    // })
    const {data:appointmentOptions = []} = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data
        }
    })


    return (
        <section>
            <h2 className='text-center text-primary text-lg font-bold'>Available Appointments on {format(selectedDAte, 'PP')}</h2>
            <div className='grid md:grid-cols-3 gap-10'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDAte={selectedDAte}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailbelApoinment;