import React, { useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Social from '../Social/Social';
import './Login.css'
const Login = () => {
    const navigate = useNavigate()
    const [emailError, setEmailError] = useState({})
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth)
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth)
    const location=useLocation()
    const from=location?.state?.from?.pathname || '/'
    let errorElement;
    if (user) {
        navigate(from, {replace:true})
    }
    if (error) {
        errorElement = error.message
        console.log(error?.message)
    }
    const emailRef = useRef('')
    const passwordRef = useRef('')

    // reset password 
    const handleResetPassword = async (event) => {
        const email = emailRef.current.value
        await sendPasswordResetEmail(email)
        toast(<p className='fs-4'>Reset password link sent in your email</p>)
    }

    const handleForm = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
        if (!regex) {
            return setEmailError({ passwword: '', email: 'please provide a valid email' })
        }
        if(password === ''){
            return setEmailError({ email: '', password: 'Please Input your password' })
        }
        if (password.length < 6) {
        return setEmailError({ email: '', password: 'Password should be greater than 6' })
        }

        if (regex && password.length > 6) {
            setEmailError('')
            signInWithEmailAndPassword(email, password)
        }
    }
    return (
        <div className='form-container'>
            <div className='auth-form'>
                <h1 className='text-center'>Please Login</h1>
                <form onSubmit={handleForm}>
                    <div className='input-div'>
                        <label className='fs-4 mb-2' htmlFor="email">Email</label>
                        <input type="email" ref={emailRef} name="email" placeholder='Enter your email' />
                        {emailError?.email && <p className='text-danger my-2 fs-4'>{emailError?.email}</p>}
                    </div>
                    <div className='input-div'>
                        <label className='fs-4 mb-2' htmlFor="Password">Password</label>
                        <input type="password" ref={passwordRef} name="password" placeholder='Enter your password' />
                        {emailError?.password && <p className='text-danger my-2 fs-4'>{emailError?.password}</p>}
                    </div>
                    <button className='submit-btn' type='submit'>Login</button>
                    <p className='text-danger my-2 fs-4'>{error && errorElement}</p>
                    <p onClick={handleResetPassword} className='forget'>Forget password</p>
                    <p className='fs-4 text-center my-5'>Create a new account ? <Link to='/register'>Register</Link></p>
                    <Social />
                    <ToastContainer/>
                </form>
            </div>
        </div>
    );
};

export default Login;