import React from 'react';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';

const AppointmentOption = ({ option }) => {
    const { name, slots } = option;
    return (
        <div>
            <div className="card shadow-xl">
                <div className="card-body text-center">
                    <h2 className="text-2xl text-primary">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                    <p>{slots.length} {slots.length > 1 ? "spaces" : 'space'} avilabel</p>
                    <div className="card-actions justify-center">
                        <PrimaryButton>Book Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;