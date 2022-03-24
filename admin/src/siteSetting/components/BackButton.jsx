import React from 'react'
import { NavLink } from 'react-router-dom';

export default function BackButton(props) {

    return (
        <div>
            <button className="btn btn-secondary">
                <NavLink to={`${props.href}`} style={{ color: "white", textDecoration: "none" }}>{props.text}</NavLink>
            </button>
        </div>
    )
}
