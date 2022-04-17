import React from 'react';
import './Social.css'
import google from '../../images/social/google.png'
import facebook from '../../images/social/facebook.png'
const Social = () => {
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <div className="left-div"></div>
                <p className='fs-4 mt-2 px-2'>or</p>
                <div className="right-div"></div>
            </div>
            <div className="social-icon">
                <button className='icon-btn'><img className='me-3' src={google} alt="" />Google SignIn</button>
                <button className='icon-btn mt-4' ><img className='fb-icon me-3' src={facebook} alt="" />FaceBook SignIn</button>
            </div>
        </div>
    );
};

export default Social;