import React from 'react';


const ContainerList = (props) => {
    return (
        <div className="order-info Mem" >
            <h4 className="text-center  section-title">{props.title}</h4>
            <hr />
            {
                props.product.length > 0 ?
                    props.product.map((item) =>
                        <div key={item._id}>
                            <label className="checkbox-item">
                                <input
                                    onChange={props.onChange} name="sizeCurb" component="input" type="radio" value="0" checked={props.checked === "0"} />{' '}
                                <span className="val">{item.size}</span>
                                <span className="lev"> ({item.price} руб.)</span>
                            </label>
                        </div>
                    ) : "нет данных"
            }
        </div>
    )
}

export default ContainerList

