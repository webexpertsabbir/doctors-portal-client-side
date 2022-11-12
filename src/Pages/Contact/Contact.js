import React from 'react';
import image from '../../assets/images/appointment.png'

const Contact = () => {
    return (
        <div className="hero min-h-screen mt-20" style={{background: `url(${image})`}}>
            <div className="hero-content flex-col lg:flex">
                <div className="text-center lg:text-left">
                    <h2 className='text-primary uppercase text-lg font-semibold py-5 text-center'>Contact Us</h2>
                    <h1 className="text-4xl font-bold text-white">Stay connected with us</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Subject</span>
                            </label>
                            <input type="text" placeholder="Subject" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Massage</span>
                            </label>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Massage" className="input input-bordered"></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;