import React from 'react';
import {Logo} from './Logo';
import {NavItems} from './NavItems'


function Header() {
    return (
        <div className="main-nav ">
            <div className="container row">
                <Logo />
                <NavItems />
            </div>
        </div>
    )
}


export default Header;