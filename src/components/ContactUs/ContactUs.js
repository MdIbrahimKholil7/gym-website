import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/banner2.png'
import './ContactUs.css'
const ContactUs = () => {
    return (
        <div>

            <div className='contact-banner'>
                <p className='contact-header'>Contact With <span className='alone'>Me</span></p>
            </div>
            <div className='form-container'>
                <div className='auth-form'>
                    <h1 className='text-center'>Please Contact <span className='alone'>Me</span></h1>
                    <form>
                        <div className='input-div'>
                            <label className='fs-4 mb-2' htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder='Enter your email' />
                        </div>
                        <div className='input-div'>
                            <label className='fs-4 mb-2' htmlFor="name">Name</label>
                            <input type="text" name="name" placeholder='Enter your name' />
                        </div>
                        <div className='input-div'>
                            <label className='fs-4 mb-2' htmlFor="address">Address</label>
                            <input type="text" name="address" placeholder='Your Address' />
                        </div>
                        <div className='input-div'>
                            <label className='fs-4 mb-2' htmlFor="phone">Phone</label>
                            <input type="text" name="phone" placeholder='Your Phone No' />
                        </div>
                        <button className='submit-btn' type='submit'>Submit</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;