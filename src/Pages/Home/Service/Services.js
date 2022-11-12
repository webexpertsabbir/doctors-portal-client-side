import React from 'react';
import fluride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const serviceData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluride,
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity,
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: whitening,
        }
    ]
    return (
        <div className='py-24'>
            <div>
                <h2 className='text-primary uppercase text-lg font-semibold text-center py-5'>Our Services</h2>
                <h1 className='uppercase text-3xl font-bold text-center'>Service On Provide</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 py-10'>
                {
                    serviceData.map(service => <Service
                    key={service.id}
                    service={service}

                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;