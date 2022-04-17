import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner1.jpg'
import banner2 from '../../../images/banner2.png'
import banner3 from '../../../images/banner3.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner'>
            <Carousel fade>
                <Carousel.Item>
                    <div className='banner-container'>
                        <img
                            className=" d-block w-100 img"
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption className='banner-details1'>
                            <div>
                                <div>
                                    <h1>Where Amazing  </h1>
                                    <h1>Fitness Are Made</h1>
                                </div>
                                <p>I am a personal trainer.I will help you to gain fit body</p>
                            </div>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="banner-container">
                        <img
                            className="d-block w-100 img"
                            src={banner2}
                            alt="Second slide"
                        />

                        <Carousel.Caption className='banner-details2'>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="banner-section">
                        <img
                            className="d-block w-100 img"
                            src={banner3}
                            alt="Third slide"
                        />

                        <Carousel.Caption className='banner-details3'>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;