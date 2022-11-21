import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectedDAte }) => {
    const { name: treatmentName, slots } = treatment;
    const date = format(selectedDAte, 'PP');

    const { user } = useContext(AuthContext);
    // console.log(user)

    const handelBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appointment: date,
            treatment: treatmentName,
            patint: name,
            slot,
            email,
            phone
        }
        // console.log(booking)
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTreatment(null);
                toast.success('Booking confirmed');
            })

        // setTreatment(null)
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handelBooking} className='grid grid-cols-1 gap-5'>
                        <input type="text" disabled value={date} placeholder="Type here" className="input w-full input-bordered" />
                        <select name="slot" className="select select-bordered w-full">
                            {
                                slots.map((slot, ids) => <option key={ids} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" disabled defaultValue={user?.displayName} placeholder="Name" className="input w-full input-bordered" />
                        <input name='email' type="email" disabled defaultValue={user?.email} placeholder="Email Address" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input type="submit" className='btn btn-primary w-full' value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;