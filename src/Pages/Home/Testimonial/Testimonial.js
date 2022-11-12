import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';


const Testimonial = () => {

    const testimonial = [
        {
            id: 1,
            name: 'Winson Herry',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            id: 2,
            name: 'Winson Herry',
            img: people2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            id: 3,
            name: 'Winson Herry',
            img: people3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },

    ];

    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-primary uppercase text-lg font-semibold py-5'>Testimonial</h2>
                    <h1 className='uppercase text-3xl font-bold'>What Our Patients Says</h1>
                </div>
                <figure>
                    <img src={quote} className='w-28' alt="" />
                </figure>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 py-10'>
                {
                    testimonial.map(reviews => <Review
                    key={reviews.id}
                    reviews={reviews}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonial;