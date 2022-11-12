import React from 'react';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero py-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg w-1/2 shadow-2xl" alt='banner' />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;