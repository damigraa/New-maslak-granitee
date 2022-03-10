import React from 'react'
import Image from '../assets/1.svg';
import ImageOne from '../assets/2.svg';
import ImageTwo from '../assets/3.svg';
import Layout from './../components/Layout/index';

function Warranty() {
    return (
        <Layout>

            <div className="container warranty">
                <div className="row">
                    <div className="col-xs-12">
                        <h1 className="h2 text-center">Наши гарантии</h1>
                        <div className="row padding-40 text-center">
                            <div className="container">
                                <div className="row flex-grid middle">
                                    <div className="col-sm-12 col-xs-12 text-center">
                                        <p className="lead text-center">
                                            На нашем заводе за 3 года не было зафиксировано ни одного гарантийного случая.
                                    <br />
                                        Тем не менее, вы получаете гарантии от производителя по договору:
                                    </p>
                                    </div>
                                    <div className="col-sm-4 col-xs-12 text-center">
                                        <div className="box-icon">
                                            <img src={Image} alt="" />
                                        </div>
                                        <p className="center-padding">
                                            На гранитные
                                        <br />
                                         изделия -
                                         <b>20 лет</b>
                                        </p>
                                    </div>
                                    <div className="col-sm-4 col-xs-12  text-center">
                                        <div className="box-icon">
                                            <img src={ImageOne} alt="" />
                                        </div>
                                        <p className="center-padding">
                                            На художественные
                                        <br />
                                        граверные работы -
                                         <b>20 лет</b>
                                        </p>
                                    </div>
                                    <div className="col-sm-4 col-xs-12  text-center">

                                        <div className="box-icon">
                                            <img src={ImageTwo} alt="" />
                                        </div>
                                        <p className="center-padding">
                                            На установку -
                                         <b> до 5 лет</b>
                                        </p>
                                    </div>
                                    <div className="col-sm-12 col-xs-12 text-center">
                                        <h4 className="small-case">Мы гарантируем сроки</h4>
                                    </div>
                                    <div className="col-sm-4 col-xs-12  text-center">
                                        <div className="box-icon">
                                            <p>
                                                от
                                        <span>7</span>
                                                <br />
                                        дней
                                    </p>
                                        </div>
                                        <p className="center-padding">
                                            Изготовление памятника
                                        <br />
                                        с подставкой, цветником и гравировкой
                                    </p>
                                    </div>
                                    <div className="col-sm-4 col-xs-12  text-center">
                                        <div className="box-icon">
                                            <p>
                                                до
                                        <span>40</span>
                                                <br />
                                        дней
                                    </p>
                                        </div>
                                        <p className="center-padding">
                                            Изготовление комплекса
                                        <br />
                                        гранитных изделий
                                    </p>
                                    </div>
                                    <div className="col-sm-4 col-xs-12  text-center">

                                        <div className="box-icon">
                                            <p>
                                                от
                                        <span>5</span>
                                                <br />
                                        дней
                                    </p>

                                        </div>
                                        <p className="center-padding">
                                            Доставка
                                     <br />
                                     в ваш город
                                    </p>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Warranty





// import React from 'react'
// import Image from '../assets/1.svg';
// import ImageOne from '../assets/2.svg';
// import ImageTwo from '../assets/3.svg';
// import ContainerPage from '../components/ContainerPage/ContainerPage';
// import Layout from './../components/Layout/index';

// function Warranty() {
//     return (
//         <Layout>
//             <ContainerPage
//                 title={"Наши гарантии"}
//                 // description={" На нашем заводе за 3 года не было зафиксировано ни одного гарантийного случая."}
//                 // descriptionTwo={"Тем не менее, вы получаете гарантии от производителя по договору:"}
//             >
//                 <div className="row">
//                     <div className="col-xs-12">
//                         <div className="row padding-40 text-center">
//                             <div className="container">
//                                 <div className="row flex-grid middle">
//                                     <div className="col-sm-12 col-xs-12 text-center">
//                                         <p className="lead text-center">
//                                             На нашем заводе за 3 года не было зафиксировано ни одного гарантийного случая.
//                                     <br />
//                                         Тем не менее, вы получаете гарантии от производителя по договору:
//                                     </p>
//                                     </div>
//                                     <div className="col-sm-4 col-xs-12">
//                                         <div className="box-icon">
//                                             <img src={Image} alt="" />
//                                         </div>
//                                         <p className="center-padding">
//                                             На гранитные
//                                         <br />
//                                          изделия -
//                                          <b>20 лет</b>
//                                         </p>
//                                     </div>
//                                     <div className="col-sm-4 col-xs-12">
//                                         <div className="box-icon">
//                                             <img src={ImageOne} alt="" />
//                                         </div>
//                                         <p className="center-padding">
//                                             На художественные
//                                         <br />
//                                         граверные работы -
//                                          <b>20 лет</b>
//                                         </p>
//                                     </div>
//                                     <div className="col-sm-4 col-xs-12">

//                                         <div className="box-icon">
//                                             <img src={ImageTwo} alt="" />
//                                         </div>
//                                         <p className="center-padding">
//                                             На установку -
//                                          <b> до 5 лет</b>
//                                         </p>
//                                     </div>
//                                     <div className="col-sm-12 col-xs-12 text-center">
//                                         <h4 className="small-case">Мы гарантируем сроки</h4>
//                                     </div>
//                                     <div className="col-sm-4 col-xs-12">
//                                         <div className="box-icon">
//                                             <p>
//                                                 от
//                                         <span>7</span>
//                                                 <br />
//                                         дней
//                                     </p>
//                                         </div>
//                                         <p className="center-padding">
//                                             Изготовление памятника
//                                         <br />
//                                         с подставкой, цветником и гравировкой
//                                     </p>
//                                     </div>
//                                     <div className="col-sm-4 col-xs-12">
//                                         <div className="box-icon">
//                                             <p>
//                                                 до
//                                         <span>40</span>
//                                                 <br />
//                                         дней
//                                     </p>
//                                         </div>
//                                         <p className="center-padding">
//                                             Изготовление комплекса
//                                         <br />
//                                         гранитных изделий
//                                     </p>
//                                     </div>
//                                     <div className="col-sm-4 col-xs-12">

//                                         <div className="box-icon">
//                                             <p>
//                                                 от
//                                         <span>5</span>
//                                                 <br />
//                                         дней
//                                     </p>

//                                         </div>
//                                         <p className="center-padding">
//                                             Доставка
//                                      <br />
//                                      в ваш город
//                                     </p>
//                                     </div>


//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             {/* </ContainerPage> */}
//         </Layout>
//     )
// }

// export default Warranty
