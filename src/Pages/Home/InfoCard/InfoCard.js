import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCards from './InfoCards/InfoCards';

const InfoCard = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00am to 5.00pm',
            icon: clock,
            bgClass: 'bg-primary bg-gradient-to-r from-primary to-secondary',
        },
        {
            id: 2,
            name: 'Our Location',
            description: 'Open 9.00am to 5.00pm',
            icon: marker,
            bgClass: 'bg-accent',
        },
        {
            id: 3,
            name: 'Contact Us',
            description: '+8801885261824',
            icon: phone,
            bgClass: 'bg-primary bg-gradient-to-r from-primary to-secondary',
        }
    ];
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
            {
                cardData.map(card => <InfoCards
                key={card.id}
                card={card}
                ></InfoCards>)
            }
        </div>
    );
};

export default InfoCard;