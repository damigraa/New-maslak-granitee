import React from 'react';



const RenderSection = ({ paymentLI, product }) => {
console.log(product)

    return (
        <div className=" w-100 PaymentAndDelivery-block">
            {
                // paymentLI.length > 0 ?
                //     paymentLI.map((item) =>
                //         <>
                //             <div key={item._id} className="Img PaymentAndDelivery-img"></div>
                //             <div className="my-3 w-100 PaymentAndDelivery-text">
                //                 {item.text}
                //             </div>
                //         </>
                //     ) : null
            }


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
                                {product.vendorCod}
                            </span>
                        </div>
                        <hr />
                        <div>
                            <span className="lev">
                                Статус
                            </span>
                            <span className="val">
                                {product.status}
                            </span>
                        </div>
                        <hr />

                        <div>
                            <span className="lev">
                                Гарандия - материал
                            </span>
                            <span className="val">
                                10 лет
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
                                {product.setWeight} кг.
                            </span>
                        </div>
                        <hr />

                        <div>
                            <span className="lev">
                                Высота с тумбой
                            </span>
                            <span className="val">
                                {product.setHeight} см.
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