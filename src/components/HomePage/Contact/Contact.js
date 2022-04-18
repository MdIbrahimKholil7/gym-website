import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Contact.css'
const Contact = () => {
    const navigate=useNavigate()
    return (
        <div className='contact-container'>
            <Container className='d-flex justify-content-center align-items-center h-100'>
                <section className='h-100 w-100 contact'>
                    <div className="contact-details" >
                        <h1 className='display-4 text-white fw-bold'>APRIL MEMBERSHIP OFFER</h1>
                        <p className='fs-3 text-white'>Up To 2 Months Free <span className='text-danger'>$39.95/</span> Month Family Membership
                        </p>
                    </div>
                    <div className='contact-btn'>
                        <button onClick={()=>navigate('/contactus')} className='d-block'>Contact Me</button>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default Contact;