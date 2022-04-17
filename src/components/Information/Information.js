import React from 'react';

const Information = () => {
    return (
        <div className='form-container'>
        <div className='auth-form'>
            <h1 className='text-center'>Information</h1>
            <form>
                <div className='input-div'>
                    <label className='fs-4 mb-2' htmlFor="email">Name</label>
                    <input type="text" name="name" placeholder='Enter your name' />
                </div>
                <div className='input-div'>
                    <label className='fs-4 mb-2' htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='Enter your email' />
                </div>
                <div className='input-div'>
                    <label className='fs-4 mb-2' htmlFor="address">Address</label>
                    <input type="password" name="confirm-password" placeholder='Your address' />
                </div>
                <button className='submit-btn' type='submit'>Submit</button>
            </form>
        </div>
    </div>
    );
};

export default Information;