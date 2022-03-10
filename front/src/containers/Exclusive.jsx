import React from 'react'
import Layout from '../components/Layout'




function ExclusiveMemorial({ imageUrl }) {

    return (
        <div className="align-self-center col-md-6 col-sm-6 col-sx-12 text-center">
            <div className="block">
                <img className=" col-md-12  imageMemorial col-sm-12" src={imageUrl} alt="" />
                <a href="" className="btn btn-outline-secondary my-3">Рассчитать</a>
            </div>
        </div>
    )
}
function Exclusive() {
    const memorialData = [
        {
            id: 1,
            imageUrl: "https://home-granit.ru/assets/thumbnails/7b/7b31b4826260d8daaf60b7cdd45d8272.png"
        },
        {
            id: 2,
            imageUrl: "https://home-granit.ru/assets/thumbnails/d4/d4556215625682e0a5bd1767de3b2829.png"
        },
        {
            id: 3,
            imageUrl: "https://home-granit.ru/assets/thumbnails/4a/4a154cf82b1e1c8d16a2a3346de90cae.png"
        },
        {
            id: 4,
            imageUrl: "https://home-granit.ru/assets/thumbnails/e2/e24d6c60d628be7bb70be6f372cca35c.png"
        },
        {
            id: 5,
            imageUrl: "https://home-granit.ru/assets/thumbnails/8d/8dda87fc86a41e3a3134891d98832e43.png"
        },
        {
            id: 6,
            imageUrl: "https://home-granit.ru/assets/thumbnails/77/772a3a16c87d3b2f14b30b216cb105ab.png"
        },
        {
            id: 7,
            imageUrl: "https://home-granit.ru/assets/thumbnails/15/15ad44c3b9d7153f9af5ef5afe58dca2.png"
        },
        {
            id: 8,
            imageUrl: "https://home-granit.ru/assets/thumbnails/c9/c9eadbffb5180bf785a4c7912dda18aa.png"
        },
    ]
    let exclusiveElement = memorialData.map((m) => (
        <ExclusiveMemorial imageUrl={m.imageUrl} />
    ))
    return (
        <Layout>
        <div className="container-fluid">
            <div className="container text-center">
                <h1 className="h1-title">Комплексы из гранита на могилу</h1>
                <p className="text-center lead">Выберите из каталога</p>
                <div className="row text-center my-5">
                    {exclusiveElement}
                </div>
            </div>
            <div className="container">
                <div className="row align-items-center ">
                    <div className="col-sm-6 col-lg-6 col-xs-12">
                        <h3>
                            Выберите красивое Благоутройство участка от 15000 руб
                                    </h3>
                        <a href="/improvement" className="btn btn-outline-secondary">
                            Выбрать с каталога
                                    </a>
                    </div>

                    <div className="col-sm-6 col-lg-6 col-xs-12">
                        <img className="col-md-12 Image" src="https://home-granit.ru/images/excl.png" alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-lg-6 col-xs-12"></div>
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default Exclusive
