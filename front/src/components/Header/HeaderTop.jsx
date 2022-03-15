import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getHeader } from '../../actions/components/header';

function HeaderTop() {
    const header = useSelector(state => state.header)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getHeader())
    }, [])

    return (
        <div>

            {header.header.length > 0 ?
                header.header.map((header) =>
                    <div key={header._id} className="header">
                        <div className="header-top row gy-5">
                            <div className="col-md-5  text-center">
                                <a href="/" className="navbar-brand my-1">
                                    {header.nameSite}</a>

                            </div>
                            <div className="col-md-2 my-1  text-center">
                                <a href="tel:8-800-85-4" className="bi bi-chat-square-text-fill">
                                    <h3>{header.numberOne}</h3>
                                    <p>{header.descriptionOne}</p>
                                </a>
                            </div>
                            <div className="col-md-2 my-1 text-center">
                                <a href="tel:+79537513915" className="bi bi-chat-square-text-fill">
                                    <h3>{header.numberTwo}</h3>
                                    <p>{header.descriptionTwo}</p>
                                </a>
                            </div>
                            <div className="col-md-2 my-1  text-center">
                                <a href="/home" className="bi bi-chat-square-text-fill">
                                    <h3>{header.mailName}</h3>
                                    <p>{header.mailDescription}</p>
                                </a>
                            </div>

                        </div>
                    </div>
                ) : <div
                    className="header"
                    style={{ display: "none" }}
                >
                </div>}
        </div>
    )
}

export default HeaderTop
