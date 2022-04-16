import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useService from '../../../hooks/useService';
import ServiceCard from './ServiceCard/ServiceCard';
import './Services.css'
const Services = () => {
    const [data, setData] = useService()
    // console.log(data)
    return (
        <div>
            <Container>
                <section className='container'>
                    <h1 className='text-center my-5 py-5 fw-bold display-5'>Services</h1>
                    <div>
                        <Row className='gy-5'>
                            {
                                data.map(service => <Col xs={12} sm={6} md={4} key={service.id}>
                                    <ServiceCard
                                        service={service}
                                    />
                                </Col>
                                )
                            }
                        </Row>
                    </div>
                </section>
            </Container>

        </div>
    );
};

export default Services;