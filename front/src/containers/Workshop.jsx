import React from 'react'
import Layout from '../components/Layout/index';


function Workshop() {
    return (
        <Layout>
            <div className="container work-shop">
                <div className="row">
                    <div className="col-xs-12">
                        <h1 className="text-center h2">Гранитная мастерская "ALEX_GRANITE"</h1>
                        {/* <div className="row"> */}
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 col-xs-12">
                                    <img className="w-100" src="https://home-granit.ru/images/sotrudniki-dom-granita.jpg" alt="" />
                                </div>
                                <div className="col-sm-6 col-xs-12 margin-top-20">
                                    <p>
                                        Камнеобрабатывающее предприятие «Дом гранита» профессионально занимается изготовлением памятников, гранитных оград, цветников, надгробных плит, столиков и скамеек, а также производством облицовочной плитки и оптовой поставкой изделий по всей территории России.
                                         </p>
                                    <p>
                                        На этом рынке мы активно работаем с 1992 года, и за это время успели сформировать положительную репутацию в кругу заказчиков. Клиенты оценили высокое качество нашей гранитной продукции и привлекательные финансовые условия сотрудничества.
                                        </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-xs-12 margin-top-20">
                                    <h3>Наша основная продукция</h3>
                                    <p>Мы производим следующее:</p>
                                    <ol>
                                        <li>Классические прямоугольные</li>
                                        <li>Фигурные</li>
                                        <li>Со сложной скульптурной резкой по камню</li>
                                        <li>Памятники в виде крестов и полумесяцев</li>
                                        <li>Гранитные комплексы по индивидуальным чертежам</li>
                                    </ol>
                                </div>
                                <div className="col-sm-6 col-xs-12">
                                    <img className="w-100" src="https://home-granit.ru/images/granitnaya-masterskaya-dom-granita-750x422.jpg" alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-xs-12">
                                    <img className="w-100" src="https://home-granit.ru/images/cekh-po-izgotovleniyu-pamyatnikov.jpg" alt="" />
                                </div>
                                <div className="col-sm-6 col-xs-12 margin-top-20">
                                    <h3>Используемые материалы</h3>
                                    <p>Постоянно в наличии следующие материалы::</p>
                                    <ol>
                                        <li>Классический черный габбро-диабаз (республика Карелия)</li>
                                        <li>Благородный зеленый габбро-норит (Урал)</li>
                                        <li>Белый Мансуровский гранит (Урал)</li>
                                        <li>Коричневый Дымовский гранит (республика Карелия)</li>
                                    </ol>
                                    <p>Мы работаем только с натуральными материалами</p>
                                </div>

                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Workshop
