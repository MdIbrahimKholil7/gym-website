import React, { useEffect, useState } from 'react';
import './ServiceCard.css'
const ServiceCard = ({service}) => {
    const [newDetails,setNewDetails]=useState('')
    const [open,setOpen]=useState(false)
    const {name,desc,img}=service
    const details=desc.length > 70 ? desc.slice(0,70) :desc
   useEffect(()=>{
    setNewDetails(details)
   },[details])
   const handleDesc=()=>{
       setNewDetails(desc)
       setOpen(true)
   }
   const handleShowLess=()=>{
       setNewDetails(details)
       setOpen(false)
   }
   const btn=<button onClick={handleDesc}>See more...</button>
   const showMoreBtn=details.length > 69 && btn
    console.log(service)
    return (
        <div>
            <div className='card'>
                <div className=''>
                    <img className='card-img' src={img} alt="" />
                </div>
                <div className='mt-4'>
                    <h3 className=''>{name}</h3>
                    <p className='fs-4 my-4'>{newDetails}</p>
                    {
                        open ? <button onClick={handleShowLess}>ShowLess</button>: showMoreBtn
                    }
                   
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;