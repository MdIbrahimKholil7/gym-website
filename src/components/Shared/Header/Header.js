import React, { useState } from 'react';
import { BeakerIcon, MenuIcon, XIcon } from '@heroicons/react/solid'
import { Container, NavLink } from 'react-bootstrap';
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
        { name: 'SignUp', to: '/signup', id: 6 },
    ]
    return (
        <div className='header relative'>
            <Container className='h-100'>
                <header className='d-flex justify-content-between align-items-center h-100'>
                    <div >
                        <img className="logo" src={logo} alt="" />
                    </div>
                    <nav className='h-100 text-white'>
                        <ul className={`list ${open ? 'ul':'close' }`}>
                            {links.map(link => <li
                                key={link.id}
                            ><NavLink
                                className='text-white'
                                to={link.to}>{link.name}</NavLink></li>)}
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
    );
};

export default Header;