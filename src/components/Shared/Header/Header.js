import React from 'react';
import { Container, NavLink } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import './Header.css'
const Header = () => {

    const links = [
        { name: 'Home', to: '/', id: 1 },
        { name: 'Blog', to: '/blog', id: 2 },
        { name: 'About', to: '/about', id: 3 },
        { name: 'Contact', to: '/contact', id: 4 },
        { name: 'Login', to: '/login', id: 5 },
        { name: 'SignUp', to: '/signup', id: 6 },
    ]
    return (
        <div className='header'>
            <Container className='h-100'>
                <header className='d-flex justify-content-between align-items-center h-100'>
                    <div >
                        <img className="logo" src={logo} alt="" />
                    </div>
                    <nav className='h-100 text-white'>
                        <ul className='ul'>
                            {links.map(link=><li
                             key={link.id}
                            ><NavLink
                            className='text-white'
                            to={link.to}>{link.name}</NavLink></li>)}
                        </ul>
                    </nav>
                </header>
            </Container>
        </div>
    );
};

export default Header;