import React from 'react'

function Footer() {
    return (

        <div className="container-fluid  footer" >
            <div className="container f">
                <div className="row text-center">
                    <div className="col-md-4 text-center">
                        <h4 className="title">О Компании</h4>
                        <p><a href="/workshop" className="text-white">
                            О компании
            </a></p>
                        <p> <a href="/wholesale-buyers" className="text-white">
                            Оптовые покупатели
            </a></p>
                        <p> <a href="/contacts" className="text-white">
                            Обратная связь
            </a></p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h4 className="title">Услуги и сервис</h4>
                        <p><a href="/gold-leaf" className="text-white">
                            Сусальное золото
            </a></p>
                        <p><a href="/engraving" className="text-white">
                            Гравировка Портрета
            </a></p>
                        <p><a href="/paymentAnd-delivery" className="text-white">
                            Оплата и Доставка
            </a></p>
                        <p> <a href="/choice-of-monument" className="text-white">
                            Как выбрать памятник
            </a></p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h4 className="title   text-center">Свяжитесь с нами</h4>
                        <p><a href="" className="text-white">
                            8-800-301-58-58
                                            </a></p>
                        <p><a href="" className="text-white">
                            WhatsApp +7 953 751 58 45
            </a></p>
                        <p><a href="" className="text-white">
                            admin@mail.ru
            </a></p>

                        <hr />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
