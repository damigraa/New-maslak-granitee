import React from 'react';


const ContainerList = (props) => {
    return (
        <div className="containerList__form-item off-js-product-prop" >
            <div className="containerList__form-title">

                <span>{props.title}</span><span className="containerList__form-title-line"></span>
            </div>
            <div className="containerList__form-caption">Вы можете выбрать свой вариант {props.titleTwo}:</div>
            <div className="containerList__form-radio containerList__form-radio--tile">

                {
                    props.product.length > 0 ?
                        props.product.map((item) =>
                            <label key={item._id} className="containerList__form-radio-label checked">
                                <input
                                    className="containerList__form-radio-input"
                                    type="radio"
                                    onChange={props.onChange}
                                    value="0"
                                    name="sizeCurb"
                                    checked={props.checked === "0"}
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

