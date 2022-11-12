import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='mb-24 mt-44' style={{background: `url(${appointment})`}}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row p-0">
                    <img src={doctor} className="lg:w-1/2 rounded-lg -mt-36 mb-0 hidden md:block" alt='' />
                    <div className='p-5'>
                        <h2 className='text-primary uppercase text-lg font-semibold py-5'>Appointment</h2>
                        <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;