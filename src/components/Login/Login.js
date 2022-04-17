import React from 'react';
import { Link } from 'react-router-dom';
import Social from '../Social/Social';
import './Login.css'
const Login = () => {
    return (
        <div className='form-container'>
            <div className='auth-form'>
                <h1 className='text-center'>Please Login</h1>
                <form>
                    <div className='input-div'>
                        <label className='fs-4 mb-2' htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder='Enter your email' />
                    </div>
                    <div className='input-div'>
                        <label className='fs-4 mb-2' htmlFor="Password">Password</label>
                        <input type="password" name="password" placeholder='Enter your password' />
                    </div>
                    <button className='submit-btn' type='submit'>Login</button>
                    <p className='fs-4 text-center my-5'>Create a new account ? <Link to='/register'>Register</Link></p>
                    <Social />
                </form>
            </div>
        </div>
    );
};

export default Login;