import React from 'react';
import { Container } from 'react-bootstrap';
import './Review.css'
import banner from '../../../images/review-banner.jpg'
import img1 from '../../../images/review1.jpg'
import img2 from '../../../images/review2.jpg'
import img3 from '../../../images/review3.jpg'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const Review = () => {
    const reviews = [
        {
            name: 'Hemsworth',
            review: 'This is awesome trainer.His all technique are unique.Ans he is very strong.He takes care his every client properly.',
            id: 1,
            img: img1
        },
        {
            name: 'Robert Phillips',
            review: 'This is awesome trainer.His all technique are unique.Ans he is very strong.He takes care his every client properly.',
            id: 2,
            img: img2
        },
        {
            name: 'Tom Holland',
            review: 'This is awesome trainer.His all technique are unique.Ans he is very strong.He takes care his every client properly.',
            id: 3,
            img: img3
        },
    ]
    return (
        <div className='review-container mb-5'>
            <Container>
                <section>
                    <div className='review'>
                        <div>
                            <Swiper
                                pagination={{
                                    dynamicBullets: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                {
                                    reviews.map(review => <SwiperSlide key={review.id}>
                                        <div className='review-details-container'>
                                            <div>
                                                <img src={review.img} alt="" />
                                            </div>
                                            <div className="review-details">
                                                <h2 >{review.name}</h2>
                                                <p className='fs-4'>{review.review}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>)
                                }
                            </Swiper>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default Review;