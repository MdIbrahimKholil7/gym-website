import React from 'react';
import './Social.css'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../../images/social/google.png'
import facebook from '../../images/social/facebook.png'
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
const Social = () => {
    const navigate=useNavigate()
    const [signInWithGoogle,user]=useSignInWithGoogle(auth)
    const handleGoogle=()=>{
        signInWithGoogle()
        .then(()=>{
            console.log('create')
        }).catch(error=>{
            console.log(error)
        })
    }
    if(user){
        navigate('/')
    }
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <div className="left-div"></div>
                <p className='fs-4 mt-2 px-2'>or</p>
                <div className="right-div"></div>
            </div>
            <div className="social-icon">
                <button type='submit' onClick={handleGoogle} className='icon-btn'><img className='me-3' src={google} alt="" />Google SignIn</button>
                <button type='submit' className='icon-btn mt-4' ><img className='fb-icon me-3' src={facebook} alt="" />FaceBook SignIn</button>
            </div>
        </div>
    );
};

export default Social;