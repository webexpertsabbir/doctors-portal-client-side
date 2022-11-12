import React from 'react';
import baby from '../../../assets/images/treatment.png';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';

const Terms = () => {
    return (
        <div className="hero py-12">
            <div className="hero-content flex-col lg:flex-row">
                <img src={baby} className="rounded-lg w-4/12 shadow-2xl" alt='banner'/>
                <div className='pl-12'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, <br /> on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Terms;