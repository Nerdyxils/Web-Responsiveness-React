import React, {Component} from 'react'
import {About} from './About'
import {Link} from './Link'

export class Footer extends React.Component {
    render () {
        return (
            <footer className="footer">
                <div className="container footer_items">
                    <h1 className="footer-header">just scratching the surface</h1>
                    <div className="row footer__content">
                        <About />
                        <Link />
                        <Link />
                        <Link />
                    </div>
                </div>
            </footer>
        )
    }
};