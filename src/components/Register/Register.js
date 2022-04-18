import React, { useEffect, useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Social from '../Social/Social';
import './Register.css'
const Register = () => {
    const [emailError,setEmailError]=useState({})
    const navigate=useNavigate()
    const emailRef=useRef('')
    const passwordRef=useRef('')
    const confirmPasswordRef=useRef('')
    const [createUserWithEmailAndPassword,user,loading,error]=useCreateUserWithEmailAndPassword(auth)
   useEffect(()=>{
    if(user){
        setEmailError('')
        navigate('/')
        console.log(user)
    }
    if(error){
        return setEmailError({password:'',email:'',confirmPassword:'',error:'Email already exist'})
    }
   },[user,error])
    const handleForm=event=>{
        event.preventDefault()
        const email=emailRef.current.value
        const password=passwordRef.current.value
        const confirmPassword=confirmPasswordRef.current.value

        const regex=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
        console.log(regex)
        if(!regex){
            return setEmailError({password:'',email:'Please provide a valid email',confirmPassword:''})
        }
        if(password.length <= 6){
            return setEmailError({password:'Password should be greater than 6',email:'',confirmPassword:''})
        }
        if(password !== confirmPassword){
           return setEmailError({password:'',email:'',confirmPassword:'Password not match'})
        }
       
        if(regex && password.length>6){
            setEmailError('')
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
                        <p className={`error ${emailError?'block':'closes'}`}>{emailError.email}</p>
                    </div>
                    <div className='input-div'>
                        <label className='fs-4 mb-2' htmlFor="Password">Password</label>
                        <input ref={passwordRef} type="password" name="password" placeholder='Enter your password'  required/>
                        <p className={`error ${emailError?'block':'closes'}`}>{emailError.password}</p>
                    </div>
                    <div className='input-div'>
                        <label className='fs-4 mb-2' htmlFor="Confirm Password">Confirm Password</label>
                        <input ref={confirmPasswordRef} type="password" name="confirm-password" placeholder='Confirm password' required/>
                        <p className={`error ${emailError?'block':'closes'}`}>{emailError.confirmPassword}</p>
                    </div>
                    <p className={`error ${emailError?'block':'closes'}`}>{emailError.error}</p>
                    <button className='submit-btn' type='submit'>Register</button>
                    <p className='fs-4 text-center my-5'>Already have an account ? <Link to='/login'>Login</Link></p>
                    <Social/>
                </form>
            </div>
        </div>
    );
};

export default Register;