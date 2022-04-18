import React from 'react';
import Fade from 'react-reveal/Fade';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner1.jpg'
import banner2 from '../../../images/banner4.jpg'
import banner3 from '../../../images/banner5.jpg'
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
                        <Carousel.Caption className='banner-details1 banner-details'>
                            <div className=''>
                                <Fade right>
                                    <div>
                                        <h1>Where Amazing  </h1>
                                        <h1>Fitness Are Made</h1>
                                    </div>
                                </Fade>
                                <Fade left>
                                    <h3>I am a personal trainer.I will help you to gain fit body</h3>
                                </Fade>
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

                        <Carousel.Caption className='banner-details2 banner-details'>
                            <div>
                                <Fade left>
                                    <div>
                                        <h1>Where Amazing  </h1>
                                        <h1>Fitness Are Made</h1>
                                    </div>
                                </Fade>
                                <Fade right>
                                    <div className=''>
                                        <h3 className=''>I am a personal trainer.I will help you to gain fit body</h3>
                                    </div>
                                </Fade>
                            </div>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="banner-container">
                        <img
                            className="d-block w-100 img"
                            src={banner3}
                            alt="Third slide"
                        />

                        <Carousel.Caption className='banner-details3 banner-details'>
                            <div>
                                <Fade top>
                                    <div className='text-center'>
                                        <h1>Where Amazing  </h1>
                                        <h1>Fitness Are Made</h1>
                                    </div>
                                </Fade>
                                <Fade bottom>
                                    <h3 className='text-center'>I am a personal trainer.I will help you to gain fit body</h3>
                                </Fade>
                            </div>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;