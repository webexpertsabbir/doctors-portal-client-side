import React from 'react';

const InfoCards = ({ card }) => {
    const { name, description, icon, bgClass } = card;
    return (
        <div className={`card card-side shadow-xl px-5 text-white ${bgClass}`}>
            <figure><img className='w-10' src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCards;