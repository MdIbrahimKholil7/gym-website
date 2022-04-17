import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import useService from '../../hooks/useService';
import './ServiceBook.css'
const ServiceBook = () => {
    const [product, setProduct] = useState({})
    const { name, desc, img, price, id } = product
    const [data] = useService()
    const { bookId } = useParams()
    const navigate=useNavigate()
    useEffect(() => {
        const findprod = data.find(prod => prod.id === +bookId)
        if (findprod) {
            setProduct(findprod)
        }
        console.log(findprod)
    }, [data])

    return (
        <div className='book-container'>
            <h1 className='text-center fw-bold mb-5 pb-5 '>Service Details</h1>
            <Container>
                <section className=''>
                    <div className="row gx-5 flex">
                        <div className='col-md-6 d-flex justify-content-center align-items-start flex-column'>
                            <h1>{name}</h1>
                            <p className='fs-4 lh-lg'>{desc} It's easy to get confused when it comes to health and nutrition. Even qualified experts often seem to hold opposing opinions, which can make it difficult to figure out what you should actually be doing to optimize your health.</p>
                            <h4 className='fw-bold'>Price: <span className='price'>${price}</span><span className='fs-5'>/Month</span></h4>
                            <div className='contact-btn mt-5 '>
                                <button onClick={ ()=>navigate('/information')} className='d-block fs-4'>Proceed Checkout</button>
                            </div>
                        </div>
                        <div className='col-md-6 order-sm-1'>
                            <img className='img-details' src={img} alt="" />
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default ServiceBook;