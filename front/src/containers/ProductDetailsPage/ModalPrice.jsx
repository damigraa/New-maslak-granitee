
import React, { useState, useEffect } from 'react'
import { MaterialButton } from '../../components/MaterialUI'
import { AiFillThunderbolt } from 'react-icons/ai';
import { addToCart } from './../../actions';
import { useDispatch } from 'react-redux';
import { IoMdCart } from 'react-icons/io';

const ModalPrice = ({ product, history, SizeMemorials, SizeCurb, tiles }) => {
    const dispatch = useDispatch();
    const prod = product.productDetails

    const totalPrices = Number(prod.price) + Number(SizeMemorials) + Number(SizeCurb) + Number(tiles)


    const handleChange = () => {
        const { _id, name, price } = prod;
        const img = prod.productPictures[0].img;
        dispatch(addToCart({ _id, name, price, img }));
        history.push(`/cart`);
    }

    const showQuantityProduct = () => {
        if (prod.quantity > 0) {
            return (
                <div className="miniCart__properties-item">
                    Наличие товара: {prod.quantity || "Нет в наличии"} шт.
                </div>
            )
        } else {
            return (
                <div>
                    <div className="miniCart__properties-item not-available">
                        Нет в наличии
                    </div>
                </div>
            )

        }
    }
    return (
        <div className='row'>
            <div className="col-12 productCard__content-right js-product-right">
                <div className="col-sm-12 col-md-12  miniCart js-miniCart">

                    <div className="miniCart__title">Памятник
                        &nbsp;
                        {prod.name}
                        &nbsp;
                        {prod.size ? `(${prod.size})` : null}
                    </div>
                    <div className="miniCart__price-list">

                        <div className="miniCart__price-list-item">
                            <div className="miniCart__price-title">Стела</div>
                            <div className="miniCart__price-count"> {prod.price}&nbsp;руб.</div>
                            <div className="miniCart__price-caption">(800 x 400 x 50&nbsp;мм)</div>
                        </div>
                        <div className="miniCart__price-list-item">
                            <div className="miniCart__price-title">Подставка</div>
                            <div className="miniCart__price-count">8&nbsp;870&nbsp;руб.</div>
                            <div className="miniCart__price-caption">(550 x 160 x 120&nbsp;мм)</div>
                        </div>
                        <div className="miniCart__price-list-item">
                            <div className="miniCart__price-title">Цветник</div>
                            <div className="miniCart__price-count">7&nbsp;500&nbsp;руб.</div>
                            <div className="miniCart__price-caption">(1000 x 550 x 70/50&nbsp;мм)</div>
                        </div>
                    </div>
                    <div className="miniCart__price-total">
                        <div className="miniCart__price-total-title">Сумма</div>
                        <div className="miniCart__price-total-count js-tooltip-btn">
                            {totalPrices}&nbsp;руб.
                            <span className="tooltip-btn">

                            </span>
                        </div>
                    </div>
                    <div className="miniCart__properties">
                        {/* <div className="miniCart__properties-item">
                            Наличие товара: {prod.quantity || "Нет в наличии"} шт.
                        </div> */}
                        {showQuantityProduct()}
                        <div className="miniCart__properties-item">Вес: {prod.weight} кг</div>


                    </div>
                    <div className='row'>
                        <div className="col-sm-5">
                            <MaterialButton

                                title="Купить сейчас"
                                style={{
                                    marginLeft: '5px'
                                }}
                                icon={<IoMdCart />}
                                onClick={() => { handleChange() }}
                            />
                        </div>
                        {/* <div className="col-sm-7">
                        <MaterialButton
                            className="col-sm-6"
                            title="Добавить в корзину"
                            style={{
                                marginLeft: '5px'
                            }}
                            icon={<AiFillThunderbolt />}
                        />
                    </div> */}

                    </div>
                </div>
            </div>
        </div>

    )
}

export default ModalPrice