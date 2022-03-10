import React from 'react'
import Layout from '../components/Layout'
import Title from '../components/ComeToUs';
import Help from '../components/Help/Help';

function ToStart() {
    return (
        <Layout>
    <div className="container-flued to-start">

<div className="Title">
    <h2>Работаем онлайн <br/>никуда не нужно ехать</h2>
</div>
<div className="container ToStarts-block">
    <div className="row">
        <div className="col-md-6 col-sm-12">
            <img className="w-100" src="https://home-granit.ru/images/kakv/2.png" alt="" />
        </div>
        <div className="col-md-6 col-sm-12 list">
            <h2>
                Этап 1. <br /> Поможем выбрать модель памятника
</h2>
            <hr />
            <ul>
                <li>
                    Не стоит искать фотографии в интернете. Мы сделаем для вас персональную
      подборку или спроектируем индивидуальную модель <span>бесплатно</span>
                </li>
                <li>Пришлем информацию на E-mail, WhatsApp, Viber или Telegram
                    </li>
                <li>
                    Если вы уже выбрали памятник, то мы гарантируем, что выполним заказ{' '}
                    <span> дешевле на 20 - 30%</span>
                </li>
            </ul>
            <div className="mt-5 ">
                <a href="/" className="btn btn-secondary">В КАТАЛОГ</a>
            </div>
        </div>
    </div>
    {/* </div> */}
</div>
<div className="ToStarts-block two">
    <div className="container">
        <div className="row">
            <div className="col-md-6 col-sm-12 list">
                <h2>
                    Этап 2.<br />Цветное 3D - моделирование
                    </h2>
                <hr />
                <ul>
                    <li>
                        Не стоит переживать об этом. Мы визуализируем ваш проект <span>бесплатно</span>
                    </li>
                    <li>
                        По моделям мы составим чертежи и техническое задание для наших художников и
                        резчиков.
    </li>
                    <li>
                        Срок моделирования - <span>2 дня</span>
                    </li>
                </ul>
                <div className="text-center mt-5">
                </div>
            </div>
            <div className="col-md-6 col-sm-12">
                <img className="w-100 pb-3" src="https://home-granit.ru/images/king/kak-vybrat-pamyatnik.png" alt="" />
            </div>
        </div>
    </div>
</div>
<div className="ToStarts-block">
    <div className="container">
        <div className="row">
            <div className="col-md-6 col-sm-12">
                <img className="w-100" src="https://home-granit.ru/images/delivery/mobile.png" alt="" />
            </div>
            <div className="col-md-6 col-sm-12  list">
                <h2>
                    Этап 3.<br />Изготовление</h2>
                <hr />
                <ul>
                    <li>Фото и видео отчёты каждые 5 дней</li>
                    <li>Информируем о состоянии вашего заказа на каждом этапе и присылаем фотографии
      <span> напрямую из цеха</span>
                    </li>
                </ul>
                <div className="text-center mt-5">
                </div>
            </div>
        </div>
    </div>
</div>
<div className="ToStarts-block two">
    <div className="container">
        <div className="row">
            <div className="col-md-6 col-sm-12  list">
                <h2>
                    Этап 4.<br />Доставка</h2>
                <hr />
                <ul>
                    <li>Доставляем по всей России</li>
                    <li>При заказе на сумму от 100 000 руб -
      <span>доставка абсолютно бесплатная</span>
                    </li>
                </ul>
                <div className="mt-5 col-sm-12">
                    <a className="btn btn-secondary" href="/paymentAnd-delivery" >Оплата и Доставка</a>
                </div>
            </div>
            <div className="col-md-6 col-sm-12">
                <img className="w-100" src="https://home-granit.ru/images/delivery/track.png" alt="" />
            </div>
        </div>
    </div>
</div>
 <Help />
<Title /> 
</div>

        </Layout>
       )
}

export default ToStart
