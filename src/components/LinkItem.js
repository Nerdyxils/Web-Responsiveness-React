import React from 'react'

function LinkItem (props) {
    return (
        <li className="link__items">
            <a href="#">
                {props.link}
            </a>
        </li>
    )
}

export default LinkItem