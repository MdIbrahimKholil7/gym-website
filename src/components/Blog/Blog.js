import React from 'react';
import { Container } from 'react-bootstrap';
import './Blog.css'
const Blog = () => {
    return (
        <div className='blog-container pt-5'>
            <Container>
                <h1 className='text-center my-5 fw-bold'>Qusetions</h1>
                <section>
                    <div className='w-75 mx-auto task-container'>
                        <h3 className='text-center my-3 fs-1 fw-bold'>Difference Between Authorization and Authentication</h3>
                        <article>
                            <p>
                                <strong>Authentication:</strong>
                                Authentication is about validating your credentials username and your email and password to verify your identity.The system determines whether you are accessing or not.When you are try to accessing anything the server wants to know who is accessing.Authentication store your all information.In public and private network,the system authenticated a user his email and login password. 
                            </p>

                        </article>
                        <article>
                            <p>
                                <strong>Authorization:</strong> On the other hand Authorization system checked you have permission or not.If you successfully login then its gives to you full power to access anything.In simple terms authorize determine your ability do access the system or not.Once your verification is success then its gives you almost full power to access anything.Authorize comes after authentication.In simple terms, its like gives permission to do anything. 

                            </p>
                        </article>
                    </div>
                    <div className='w-75 mx-auto task-container'>
                        <h1 className='text-center my-3 fs-1 fw-bold'>Why are you using firebase?</h1>
                        <article>
                            <p>
                                <strong>Why are we using firebase:</strong>
                                Its very simple to implement.Firebase provides backend services and ready made ui libraries.
                                Firebase authentication make it easer to get user signed in information.Without understand the behind complexity.
                            </p>
                        </article>
                        <article>
                            <h1>What are the other method to implement authentication:</h1>
                            <h3>There are 5 common ways to authenticate</h3>
                            <ul>
                                <ol>Password and Email based authentication</ol>
                                <ol>Multi Factor Authentication</ol>
                                <ol>Bio Metric Authentication</ol>
                                <ol>Finger Print Authentication</ol>
                                <ol>Token Based Authentication</ol>
                                <ol>Certificate-based authentication. .</ol>
                            </ul>
                        </article>
                    </div>
                    <div className="task-container w-75 mx-auto ">
                        <h1 className='text-center my-3 fs-1 fw-bold'>What other services does firebase provide other than authentication</h1>
                        <article>
                            <h3>There are many services provide firebase.Some list below</h3>
                            <ul>
                                <ol>Google Analytics</ol>
                                <ol>Cloud Firestore</ol>
                                <ol>Cloud Function</ol>
                                <ol>Authentication</ol>
                                <ol>Hoisting</ol>
                                <ol>Cloud Storage</ol>
                                <ol>Predictions</ol>
                                <ol>Cloud Messaging</ol>
                            </ul>
                        </article>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default Blog;