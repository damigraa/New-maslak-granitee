import React from "react";
import { NavLink } from 'react-router-dom';
import Layout from './../components/Layout/index';
import BackButton from './../siteSetting/components/BackButton';

const ContainerProductPage = () => {
    return (
        <Layout sidebar>
            <div>
                <BackButton 
                text="На главную"
                href="/"
                />
            </div>
            <li><NavLink to={"/products"}>Памятники</NavLink></li>
            <li><NavLink to={"/standMonument"}>Подставки</NavLink></li>
            <li><NavLink to={"/gravestonesAndCurbs"}>Надгробия и Цветники</NavLink></li>
        </Layout>
    )
}

export default ContainerProductPage