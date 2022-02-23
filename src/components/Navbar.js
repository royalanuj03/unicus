import React, { useState } from 'react';
import { Button } from "./Button";
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from "./Dropdown";
import image from '../Image/unicus.jpg'

function Navbar() {
    const [click, setclick] = useState(false);
    const [dropdown, setdropdown] = useState(false);

    const handleClick = () => setclick(!click)
    const closeMobileMenu = () => setclick(false);

    const onMouseEnter = ()=>{
        if(window.innerWidth<960)
        {
            setdropdown(false);
        }
        else 
        {
            setdropdown(true);
        }
    };
    const onMouseLeave = ()=>{
        if(window.innerWidth<960)
        {
            setdropdown(false);
        }
        else 
        {
            setdropdown(false);
        }
    };
    return (
        <>
            <nav className='navbar'>
                    <img src={image} height={40} width={100} alt=""/>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    UNICUS
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>

                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave = {onMouseLeave}>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services <i className='fas fa-caret-down'></i>
                        </Link>
                        {dropdown && <Dropdown></Dropdown>}
                    </li>
                    <li className='nav-item'>
                        <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                            Projects
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contactus' className='nav-links' onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                <Button></Button>
            </nav>
        </>
    )
}
export default Navbar;