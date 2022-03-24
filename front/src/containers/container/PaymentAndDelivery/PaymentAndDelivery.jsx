import React from 'react';
import Layout from '../../../components/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPaymentLi, getCostDelivery } from '../../../actions';
import RenderPaymentLi from '../../render/renderPaymentLi';
import RenderCostDelivery from '../../render/renderCostDelivery';


const PaymentAndDelivery = () => {

    const paymentLI = useSelector((state) => state.paymentLI.paymentLI)
    const costDelivery = useSelector((state) => state.costDelivery.costDelivery)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPaymentLi())
    }, [])

    useEffect(() => {
        dispatch(getCostDelivery())
    }, [])

    return (
        <Layout>
            <div className=" w-100 container PaymentAndDelivery">
                <h2>ОПЛАТА И ДОСТАВКА</h2>

                <div className="row PaymentAndDelivery-content">
                    <div className="col-md-6 col-sm-6 col-xs-12 PaymentAndDelivery-total">
                        <RenderPaymentLi paymentLI={paymentLI} />

                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 PaymentAndDelivery-delivery">
                        <div className="PaymentAndDelivery-delivery_title">
                            ОРИЕНТИРОВОЧНАЯ СТОИМОСТЬ ДОСТАВКИ ПО НЕКОТОРЫМ НАПРАВЛЕНИЯМ СТАНДАРТНОГО КОМПЛЕКТА
                            (СТЕЛА, ПОДСТАВКА, ЦВЕТНИКИ)
                            <ul>
                                <li>стела: 80х40х8</li>
                                <li>подставка: 50х15х15</li>
                                <li>цветники: 80х8х8 — 2 шт., 50х8х8 — 1 шт.</li>
                                <li>общий вес: 140 кг.</li>
                            </ul>
                            <div className="PaymentAndDelivery-delivery_title-two">Горот отправления: Мурманск</div>
                        </div>
                        <table class="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Номер</th>
                                    <th scope="col">Город</th>
                                    <th scope="col">Стоимость</th>
                                    <th scope="col">Сроки доставки</th>
                
                                </tr>
                            </thead>
                            <tbody>
                                <RenderCostDelivery costDelivery={costDelivery} />
                            </tbody>
                        </table>
                        <div>
                            *Стоимость доставки уточняйте у менеджера. Доставка зависит от габаритов и веса
                            изделий.
                        </div>
                    </div>
                    {/* <div className="PaymentAndDelivery-addition">
                    *Оплата осуществляется на расчетный счет фирмы, указанный в договоре, а также банковским
                    переводом.
        </div> */}
                    <div className=" container PaymentAndDelivery_delivery">
                        <h1>Доставка транспортными компаниями:</h1>
                        <div className=" row PaymentAndDelivery_delivery-img">
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <img className="w-100"
                                    src="data:image/png;base64,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"
                                    alt=""
                                />
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <img className="w-100"
                                    src="data:image/png;base64,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"
                                    alt=""
                                />
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <img className="w-100" src="https://prime-granit.ru/wp-content/uploads/2017/11/01-3.jpg" alt="" />
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <img className="w-100" src="https://prime-granit.ru/wp-content/uploads/2017/11/01-4.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Catalogs /> */}
                {/* <Title /> */}
            </div>

        </Layout>
    );
};



export default PaymentAndDelivery;
