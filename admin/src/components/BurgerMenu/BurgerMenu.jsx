import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoMdClose } from 'react-icons/io';

const BurgerMenu = ({ title, items }) => {
    const [show, setShow] = useState(false);
    const user = useSelector((state) => state.auth.user);
    console.log(user)

    const rootEl = useRef(null);

    useEffect(() => {
        const onClick = e => rootEl.current.contains(e.target) || setShow(false);
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);
    return (
        <div className="burgerMenu" ref={rootEl}>

            <button onClick={() => setShow(!show)}>Open</button>


            <div
                className={show ? "burgerMenu__dropdown active" : "burgerMenu__dropdown"}
                onClick={e => e.stopPropagation()}
            >
                <div className="burgerMenu__header-container">
                    <div className="burgerMenu__close-icon-container">
                        <div className="burgerMenu__close-icon" onClick={() => { setShow(false) }}>
                            <IoMdClose />
                        </div>
                    </div>
                    <div className="burgerMenu__title">
                        {title}
                    </div>
                    <div className="burgerMenu__user">
                        <div className="burgerMenu__user-content">
                            <div className="burgerMenu__user-icon">
                                {user.firstName.charAt(0)}
                            </div>
                            <div>
                                <div >{user.firstName} {user.lastName}</div>
                                <span>{user.email}</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="burgerMenu__container">
                    <div className="burgerMenu__blur" />
                    <div className="burgerMenu__body">
                    </div>

                    <div>
                        {items.map((item) =>
                            <li className="burgerMenu__content">
                                <div className="burgerMenu__icon">
                                    {item.icon}
                                </div>
                                <NavLink to={item.href}>{item.text}</NavLink>
                            </li>
                        )}
                    </div>
                </div>

            </div >
        </div >
    )
}

export default BurgerMenu
