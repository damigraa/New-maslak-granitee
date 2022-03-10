import React from 'react'
import { NavLink } from 'react-router-dom';

export default function BackButton() {
    return (
        <div>
            <button className="btn btn-secondary">
                <NavLink to="/siteSetting" style={{ color: "white", textDecoration: "none" }}>Вернеться в главное меню</NavLink>
            </button>
        </div>
    )
}
