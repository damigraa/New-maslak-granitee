import React from 'react';



const RenderSection = ({ product }) => {
    if (!product.productDetails) {
        return null
    }
    return (
        <div className=" w-100 PaymentAndDelivery-block">
            <div className="section">
                <div className="section-title">
                    О памятнике
                </div>
                <div className="parameters-list">
                    <div className="parameter-item">
                        <div>



                            <span className="lev">
                                Артикул
                            </span>
                            <span className="val">
                                {product.productDetails.name}
                            </span>
                        </div>
                        <hr />
                        <div>
                            <span className="lev">
                            Габариты
                            </span>
                            <span className="val">
                                {product.productDetails.size}мм.
                            </span>
                        </div>
                        <hr />

                        <div>
                            <span className="lev">
                                Цвет
                            </span>
                            <span className="val">
                                Черный
                            </span>
                        </div>
                        <hr />

                        <div>
                            <span className="lev">
                                Фаска
                            </span>
                            <span className="val">
                                Техническая(1-4см.)
                            </span>
                        </div>
                        <hr />

                        <div>
                            <span className="lev">
                                Полировка
                            </span>
                            <span className="val">
                                Все стороны
                            </span>
                        </div>
                        <hr />

                        <div>
                            <span className="lev">
                                Вес комплекта
                            </span>
                            <span className="val">
                                {product.productDetails.weight} кг.
                            </span>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RenderSection



