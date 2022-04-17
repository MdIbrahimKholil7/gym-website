import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BeakerIcon, MenuIcon, XIcon } from '@heroicons/react/solid'
import { Container, } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import './Header.css'
const Header = () => {
    const [open, setOpen] = useState(false)
    const links = [
        { name: 'Home', to: '/', id: 1 },
        { name: 'Blog', to: '/blog', id: 2 },
        { name: 'About', to: '/about', id: 3 },
        { name: 'Contact', to: '/contact', id: 4 },
        { name: 'Login', to: '/login', id: 5 },
        { name: 'Register', to: '/register', id: 6 },
    ]
    return (
        <div className='sticky-header'>
            <div className='header relative'>
                <Container className='h-100'>
                    <header className='d-flex justify-content-between align-items-center h-100'>
                        <div >
                            <Link to='/'><img className="logo" src={logo} alt="logo" /></Link>
                        </div>
                        <nav className='h-100 text-white'>
                            <ul className={`list ${open ? 'ul' : 'close'}`}>
                                {
                                    links.map(link => <li key={link.id}>
                                        <NavLink
                                            className='text-white text-decoration-none'
                                            to={link.to}
                                        >{link.name}</NavLink>
                                    </li>
                                    )

                                }
                            </ul>


                        </nav>
                        <div onClick={() => setOpen(!open)} className='icon'>
                            {
                                open ? <XIcon className='menu-icon' /> : <MenuIcon className='menu-icon' />
                            }

                        </div>
                    </header>

                </Container>
            </div>
        </div>
    );
};

export default Header;