import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    const date=new Date()
    const getYear=date.getFullYear()
    return (
        <div className='bg-dark py-5 d-flex justify-content-center align-items-center'>
            <Container>
                <p className='text-white fs-3 text-center mb-0'>&copy; Copyright {getYear} All Right Reserved Fitner</p>
            </Container>
        </div>
    );
};

export default Footer;