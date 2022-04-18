import React from 'react';
import './About.css'
import trainer from '../../images/trainer.jpg'
import { Container } from 'react-bootstrap';
const About = () => {
    return (
        <div className='about-container'>
            <section>
                <div className='contact-banner'>
                    <p className='contact-header'>Fitner <span className='alone'>Trainer</span></p>
                </div>
                <Container>
                    <div className='row g-5 my-5 py-5 '>
                        <div className='col-md-5'>
                            <img className='trainer-img' src={trainer} alt="" />
                        </div>
                        <div className="trainer-details col-md-7 d-flex justify-content-center align-items-start flex-column">
                            <div>
                                <h1 className='name'>ARIAL HEDGER</h1>
                                <h3 className='title'>Fitness & Body</h3>
                            </div>
                            <div className='lh-base fs-4'>
                                Over 50 group training sessions per week There is no one type or way in our diverse community Alienum phaedrum torquatos nec eu. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum
                            </div>
                            <div className='mt-5'>
                                <p className='fs-4'><strong>Experince:</strong> 5 Years</p>
                                <p className='fs-4'><strong>Age:</strong> 35 Years</p>
                                <p className='fs-4'><strong>Weight:</strong> 60 KG</p>
                                <p className='fs-4'><strong>Phone:</strong> +1 234 45456 654</p>
                            </div>
                        </div>
                    </div>
                   
                </Container>
            </section>
        </div>
    );
};

export default About;