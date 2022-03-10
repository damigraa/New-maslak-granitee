import React from 'react'
import Layout from '../components/Layout'

function Memorial({ imageUrl }) {
    return (
        <div className="col-md-6 col-sm-6 col-sx-12 text-center">
            <div className="block">
                <img className=" col-md-12 imageMemorial col-sm-12" src={imageUrl} alt="" />
                <a href="" className="btn btn-outline-secondary">
                    Рассчитать
                </a>
            </div>
        </div>
    )
}


function Improv({ imageUrl, types, transition, }) {
    return (
        <div className="col-sm-4 col-lg-4 col-xs-12">
            <a href={transition} className="notunder">
                <div className="bg-grey">
                    <div className="under-top">
                        <img className="imageImprov" src={imageUrl} alt="" />
                    </div>
                    <div className="col-xs-12 text-center">
                        <h3 className="noborder">{types}</h3>
                    </div>
                </div>
            </a>
        </div>
    )
}
function Improvement() {

    const memorialData = [
        {
            id: 1,
            imageUrl: "https://home-granit.ru/assets/thumbnails/c6/c67fa23998657ac1b251214f5803fe85.png"
        },
        {
            id: 2,
            imageUrl: "https://home-granit.ru/assets/thumbnails/13/1309a24a7e9f3768f2b1e8f8eb99da7e.png"
        },
        {
            id: 3,
            imageUrl: "https://home-granit.ru/assets/thumbnails/4f/4f5abdffb1c90fa8fa7ce90a45d4f381.png"
        },
        {
            id: 4,
            imageUrl: "https://home-granit.ru/assets/thumbnails/10/1019c94451d97604088ecf94ec1db953.png"
        },
    ]
    const improvementData = [
        {
            id: 1,

            transition: "#nedor",
            types: "Недорогие",
            imageUrl: "https://home-granit.ru/images/blago/01.png"
        },
        {
            id: 2,
            transition: "#cent",
            types: "Стандартные",
            imageUrl: "https://home-granit.ru/images/blago/02.png"
        },
        {
            id: 3,
            transition: "/exclusive",
            types: "Эксклюзивные",
            imageUrl: "https://home-granit.ru/images/blago/03.png"
        }]
    let improvementElement = improvementData.map((i) => (
        <Improv types={i.types} imageUrl={i.imageUrl} transition={i.transition} />
    ));

    let memorialElement = memorialData.map((m) => (
        <Memorial imageUrl={m.imageUrl} />
    ))
    return (
        <Layout>
            <div className="container-fluid">
                {/* <div className="row body-item"> */}

                <div className="container text-center">
                    <h1 className="h1-title">Благоутройство могилы</h1>
                    <p className="text-center lead">Выберите вариант оформления</p>
                    <div className="row text-center my-5">
                        {improvementElement}
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center ">
                        <div className="col-sm-6 col-lg-6 col-xs-12">
                            <h3>
                                3Д-модель участка - бесплатно
                            </h3>
                            <p>
                                Подберем памятник и красивое оформление
                            </p>
                            <a href="" className="btn btn-secondary btn-large">
                                Получить модель бесплатно
                            </a>
                        </div>

                        <div className="col-sm-6 col-lg-6 col-xs-12">
                            <img className="Image" src="https://home-granit.ru/images/compleks/project.png" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-lg-6 col-xs-12"></div>
                    </div>
                </div>


                <div className="container text-center">
                    <div className="row my-5">
                        <div className="col-sm-12 col-md-12">
                            <div id="nedor"></div>
                            <h3 className="H3">
                                Недорогие Варианты
                       </h3>
                            <p>Цветник или надгробная плита</p>
                        </div>
                        {memorialElement}
                    </div>
                    <div className="row my-5">
                        <div id="cent"></div>
                        <div className="col-sm-12 col-md-12">
                            <h3 className="H3">Засыпка мраморной крошкой, столик и лавочка</h3>
                        </div>
                        {memorialElement}
                    </div>
                    <div className="row my-5">
                        <div className="col-sm-12 col-md-12">
                            <h3 className="H3">Металлические ограды</h3>
                        </div>
                        {memorialElement}
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center ">
                        <div className="col-sm-6 col-lg-6 col-xs-12">
                            <h3>
                                Мемориальные комплексы
                            </h3>
                            <p>
                                красивые композиции из гранита
                            </p>
                            <a href="/exclusive" className="btn btn-secondary btn-large">
                                ВЫБРАТЬ КОМПЛЕКС
                            </a>
                        </div>

                        <div className="col-sm-6 col-lg-6 col-xs-12">
                            <img className="Image" src="https://home-granit.ru/images/excluziv.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
         </Layout >
    )
}

export default Improvement
