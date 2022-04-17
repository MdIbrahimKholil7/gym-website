import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useService from '../../hooks/useService';

const ServiceBook = () => {
    const [product,setProduc]=useState({})
    const [data]=useService()
    console.log(data)
    const {bookId}=useParams()
    console.log(typeof bookId)
    useEffect(()=>{
        const findprod=data.find(prod=> prod.id === +bookId)
        console.log(findprod)
    },[data])
    



    return (
        <div>
            <h1>This is service book</h1>
        </div>
    );
};

export default ServiceBook;