import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
const Information = () => {

    const [user]=useAuthState(auth)
    const emailRef=useRef('')
    const nameRef=useRef('')
    const addressRef=useRef('')
    const phoneRef=useRef('')
    const [information,setInformation]=useState({})
    console.log(user.email)
    const handleForm=event=>{
        event.preventDefault()
        const name=nameRef.current.value
        const address=addressRef.current.value
        const phone=phoneRef.current.value

        if(name.length< 8){
         return   setInformation({
                address:'',
                phone:'',
                name:'Your name must be 8 character'
            })
        }
        
        if(address === ''){
           return setInformation({
                address:'Please input your address',
                phone:'',
                name:''
            })
        }
        
        if(!(/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/).test(phone)){
          return  setInformation({
                address:'',
                phone:'Please input a valid phone number',
                name:''
            })
        }
        if(name && phone && address){
            setInformation('')
            toast(<p className='fs-4'>Thank you for booking</p>)
        }
    }
    return (
        <div className='form-container'>
        <div className='auth-form'>
            <h1 className='text-center'>Information</h1>
            <form onSubmit={handleForm}>
                <div className='input-div'>
                    <label className='fs-4 mb-2' htmlFor="email">Name</label>
                    <input ref={nameRef} type="text" name="name" placeholder='Enter your name' />
                    <p className='fs-4 text-danger'>{information.name}</p>
                </div>
                <div className='input-div'>
                    <label className='fs-4 mb-2' htmlFor="email" >Email</label>
                    <input type="email" name="email" readOnly value={user && user.email}  placeholder='Enter your email' />
                    
                </div>
                <div className='input-div'>
                    <label  className='fs-4 mb-2' htmlFor="address">Address</label>
                    <input ref={addressRef} type="text" name="address" placeholder='Your address' />
                    <p className='fs-4 text-danger'>{information.address}</p>
                </div>
                <div className='input-div'>
                    <label className='fs-4 mb-2' htmlFor="phone">Phone</label>
                    <input ref={phoneRef} type="number" name="confirm-password" placeholder='Phone' />
                    <p className='fs-4 text-danger'>{information.phone}</p>
                </div>
                <button className='submit-btn' type='submit'>Submit</button>
                <ToastContainer/>
            </form>
        </div>
    </div>
    );
};

export default Information;