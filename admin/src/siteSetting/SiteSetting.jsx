import React from 'react'
import Layout from './../components/Layout/index';
import { NavLink } from 'react-router-dom';

const SiteSetting = () => {
    return (
        <Layout sidebar>
            <h2>Выберите что нужжо изменить</h2>
            <ul>
                <li><NavLink to={"/headerSetting"}>Изменить шапку</NavLink></li>
                <li><NavLink to={"/promotionsSetting"}>Добавить Акции</NavLink></li>
                <li><NavLink to={"/mainImageSetting"}>Изображение главной страницы </NavLink></li>
                <li><NavLink to={"/manufactureSetting"}>Мы производители </NavLink></li>
                <li><NavLink to={"/comeToUsSetting"}>Приходи к нам </NavLink></li>
                <li><NavLink to={"/weWorkOnline"}>Работаем онлайн</NavLink></li>
                <li><NavLink to={"/chooseMemorialPhotos"}>Как выбрать памятник Изображения</NavLink></li>
                <li><NavLink to={"/engraving"}>Гравировка</NavLink></li>
                <li><NavLink to={"/contact"}>Контакты</NavLink></li>
                <li><NavLink to={"/warranty"}>Гарантии</NavLink></li>
                <li><NavLink to={"/paymentLI"}>Инструкции оплаты</NavLink></li>
                <li><NavLink to={"/granite-material"}>Материалы</NavLink></li>
                <li><NavLink to={"/catalog-title"}>Заголовок Каталога</NavLink></li>

            </ul>
        </Layout>
    )
}

export default SiteSetting
