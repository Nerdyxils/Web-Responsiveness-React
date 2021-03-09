import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from "react-icons/lib";
import './Nav.css'



function Nav() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <> 
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="main-nav ">
                <div className="container row">
                    <div className="logo">
                        <h1>CRL</h1>
                    </div>

                    <div className="nav navbar-container">
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars/> }
                        </div>
                            <li className='nav-item'>
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                    About
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                    Contact
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                    Sign-In
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                    Sign-Up
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </IconContext.Provider>
        </>
    )
}


export default Nav;