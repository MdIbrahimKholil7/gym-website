import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Social from '../Social/Social';
import './Register.css'
const Register = () => {
    const emailRef=useRef('')
    const passwordRef=useRef('')
    const confirmPasswordRef=useRef('')
    const [createUserWithEmailAndPassword,user,loading,error]=useCreateUserWithEmailAndPassword(auth)
    if(user){
        console.log(user)
    }
    if(error){
        console.log('Email Already exist')
    }
    const handleForm=event=>{
        event.preventDefault()
        const email=emailRef.current.value
        const password=passwordRef.current.value
        const confirmPassword=confirmPasswordRef.current.value
        if(email && password){
            createUserWithEmailAndPassword(email,password)
        }
        console.log(email)
    }
    return (
        <div className='form-container'>
            <div className='auth-form'>
                <h1 className='text-center'>Please Register</h1>
                <form onSubmit={handleForm}>
                    <div className='input-div'>
                        <label className='fs-4 mb-2' htmlFor="email">Email</label>
                        <input ref={emailRef} type="email" name="email" placeholder='Enter your email' required/>
                    </div>
                    <div className='input-div'>
                        <label className='fs-4 mb-2' htmlFor="Password">Password</label>
                        <input ref={passwordRef} type="password" name="password" placeholder='Enter your password'  required/>
                    </div>
                    <div className='input-div'>
                        <label className='fs-4 mb-2' htmlFor="Confirm Password">Confirm Password</label>
                        <input ref={confirmPasswordRef} type="password" name="confirm-password" placeholder='Confirm password' required/>
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