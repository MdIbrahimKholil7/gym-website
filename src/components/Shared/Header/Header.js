import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BeakerIcon, MenuIcon, XIcon } from '@heroicons/react/solid'
import { Container, } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user]=useAuthState(auth)
    const [open, setOpen] = useState(false)
    // links 
    const links = [
        { name: 'Home', to: '/', id: 1 },
        { name: 'Blog', to: '/blog', id: 2 },
        { name: 'About', to: '/about', id: 3 },
        { name: 'Contact', to: '/contactus', id: 4 },
        
    ]

    const handleSignOut=()=>{
        signOut(auth)
    }
    return (
        <div>
            <div className='header sticky-header'>
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
                                            className={({isActive})=> isActive?'active':'active-none text-decoration-none '}
                                            to={link.to}
                                        >{link.name}</NavLink>
                                    </li>
                                    )

                                }

                               {
                                   user?<button className='log-btn' onClick={handleSignOut}>Log Out</button>: <div className='d-flex'>
                                   <li><NavLink  className='text-white text-decoration-none' to='/login'>LogIn</NavLink></li>
                                   <li><NavLink className='text-white text-decoration-none' to='/register'>Register</NavLink></li>
                               </div>
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