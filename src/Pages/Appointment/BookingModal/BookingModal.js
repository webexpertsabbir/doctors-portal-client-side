import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, selectedDAte }) => {
    const { name, slots } = treatment;
    const date = format(selectedDAte, 'PP');
    const handelBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appointment: date,
            treatment: name,
            patint: name,
            slot,
            email,
            phone
        }
        console.log(booking)
        setTreatment(null)
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handelBooking} className='grid grid-cols-1 gap-5'>
                        <input type="text" disabled value={date} placeholder="Type here" className="input w-full input-bordered" />
                        <select name="slot" className="select select-bordered w-full">
                            {
                                slots.map((slot, ids) => <option key={ids} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input w-full input-bordered" />
                        <input name='email' type="email" placeholder="Email Address" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input type="submit" className='btn btn-primary w-full' value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;