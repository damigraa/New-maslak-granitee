import React from 'react'
import Layout from '../components/Layout'
import WeAreManufacturers from './../components/WeAreManufacturers';

function WholesaleBuyers() {
    return (
        <Layout>
            <>
                <div className="WholesaleBuyers">

                    <div className="row text-center">
                        <div className="WholesaleBuyers__container">
                            <h1>
                                Памятники оптом
                    </h1>
                            <div className="WholesaleBuyers__description">
                                <p>Наша компания Маслак — Гранит, готова предложить памятники оптом, заключить с Вами договор, на поставку гранитных памятников с художественным оформлением под ключ. Наши цены на памятники и аксессуары к ним на порядок ниже, чем в мастерских вашего города. Доставка, готового комплекта памятника осуществляется в любую точку РФ. Оказываем помощь при заключении договоров с клиентом. Расчет комплексов и памятников по нестандартным размерам, рассчитаем в течении рабочего дня</p>
                                <h3>Преимущества работы с нашей компанией:</h3>
                                <ul>
                                    <li>минимальные затраты</li>
                                    <li>нет необходимости арендовать склад, продукция может хранится у нас на производстве бесплатно.</li>
                                    <li>помощь в создании макетов и заключении договоров.</li>
                                    <li> в зимнее время действует система скидок.</li>
                                </ul>
                                <p>по вопросам сотрудничества пишите на эл адрес:
                                        <b> Maslak@mail.ru</b>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <WeAreManufacturers />
            </>
        </Layout>
    )
}

export default WholesaleBuyers
