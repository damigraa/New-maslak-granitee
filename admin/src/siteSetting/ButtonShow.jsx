import React from 'react'
import { IoIosAdd } from 'react-icons/io';

export const ButtonShow = (props) => {

    const handleShowLimited = () => {
        if (props.limitOne) {

            if (props.item.length === 0) {
                props.setShow(true)
            } else {
                alert("Максимальное допустимое количество равно 1")
            }
        }
        if (props.noLimit) {
            props.setShow(true)
        }
    }

    return (
        <>
            <button className="btn btn-secondary" onClick={handleShowLimited}><IoIosAdd /> <span>Добавить</span></button>
        </>
    )
}
