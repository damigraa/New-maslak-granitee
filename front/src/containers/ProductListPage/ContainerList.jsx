import React, { useState } from 'react';


const ContainerList = (props) => {

    const { stateProduct, setStateProduct } = props


    return (
        <div className="containerList__form-item off-js-product-prop" >
            <div>
                Radio is {stateProduct}
            </div>
            <div className="containerList__form-title">

                <span>{props.title}</span><span className="containerList__form-title-line"></span>
            </div>
            <div className="containerList__form-caption">Вы можете выбрать свой вариант {props.titleTwo}:</div>
            <div className="containerList__form-radio containerList__form-radio--tile">
                {
                    props.product.length > 0 ?
                        props.product.map((item, index) =>
                            <label
                            onClick={console.log(item)}
                                key={index + 1}
                                // className="containerList__form-radio-label"
                                className={stateProduct == item.price ? "containerList__form-radio-label active" : "containerList__form-radio-label"}
                            >
                                <input
                                    className="containerList__form-radio-input"
                                    type="radio"
                                    checked={stateProduct === item.price}
                                    onChange={(e) => { setStateProduct(e.target.value) }}
                                    value={item.price}
                                    name={stateProduct}
                                />
                                <span className="containerList__form-radio-title">{item.price}&nbsp;руб.</span>
                                <span className="containerList__form-radio-caption">{item.size}&nbsp;мм</span>
                            </label>
                        ) : "нет данных"
                }
            </div>
        </div >
    )
}

export default ContainerList

