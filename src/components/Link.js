import React, {component} from 'react'
import LinkItem from './LinkItem'
import LinkTitle from './LinkTitle'

export class Link extends React.Component {
    render () {
        return (
            <ul className="footer__links">
                <LinkTitle title="Getting around"/>
                <LinkItem link="Home"/>
                <LinkItem link="About"/>
                <LinkItem link="Contact"/>
            </ul>
        )
    }
};