import React from 'react';
import { Link } from 'react-router-dom';
import Social from '../Social/Social';
import './Register.css'
const Register = () => {
    return (
        <div className='form-container'>
            <div className='auth-form'>
                <h1 className='text-center'>Please Register</h1>
                <form>
                    <div className='input-div'>
                        <label className='fs-4 mb-2' htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder='Enter your email' />
                    </div>
                    <div className='input-div'>
                        <label className='fs-4 mb-2' htmlFor="Password">Password</label>
                        <input type="password" name="password" placeholder='Enter your password' />
                    </div>
                    <div className='input-div'>
                        <label className='fs-4 mb-2' htmlFor="Confirm Password">Confirm Password</label>
                        <input type="password" name="confirm-password" placeholder='Confirm password' />
                    </div>
                    <button className='submit-btn' type='submit'>Register</button>
                    <p className='fs-4 text-center my-5'>Already have an account ? <Link to='/login'>Login</Link></p>
                    <Social/>
                </form>
            </div>
        </div>
    );
};

export default Register;