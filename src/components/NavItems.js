import React, {Component} from 'react'

export class NavItems extends React.Component {
    render () {
        return (
            <div className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><a href="#">Home</a></li>
                    <li className="nav__item"><a href="#">About</a></li>
                    <li className="nav__item"><a href="#">Contact</a></li>
                    <li className="nav__item"><a href="#">Sign-In</a></li>
                    <li className="nav__item active"><a href="#">Sign-Up</a></li>
                </ul>
            </div>
        )
    }
};