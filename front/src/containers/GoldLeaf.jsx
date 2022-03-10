import React from 'react'
import Layout from '../components/Layout';
import Help from '../components/Help/Help';
import Title from '../components/ComeToUs';

function GoldLeaf() {
    return (
        <Layout>
            <div className=" to-start container">
                <div className="row">
                    <h1 className="text-center">
                        Сусальное золото
  </h1>
                </div>
                <div className="container-flued my-5 goldLeaf">
                    <div className="row my-5">
                        <div className="col-md-6 col-sm-12">
                            <img className="w-100" src="https://prime-granit.ru/wp-content/uploads/2018/04/zoloto-na-pamyatnik.jpg" alt="" />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <p className="goldLeaf-text">Для того, чтобы дополнить выбранный вами гранитный монумент, воспользуйтесь услугой нанесения сусального золота.
                             </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <h5>Сусальное золото — это тончайшие листы золота, которые наносятся по специальной методике на различные детали памятника. Золотом можно украсить даты, буквы и отдельные элементы надгробного камня.
                            <br />
                            Особая методика нанесения позолоты, позволит покрытию из золота держаться не одно десятилетие.
                        </h5>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-md-6 col-sm-12">
                            <p className="goldLeaf-text">Для нанесения золотого покрытия, специалистами, вручную выдалбливается рабочая область и уже после этого наносится листовое золото с покрытием.
                            <br />
                            Так как нанесение сусального золота — это кропотливая ручная работа, стоимость услуги рассчитывается индивидуально.
                        </p>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <img className="w-100" src="https://prime-granit.ru/wp-content/uploads/2018/04/zoloto-na-pamyatnik.jpg" alt="" />

                        </div>

                    </div>
                </div>
                <Help />
                <Title />
            </div>
        </Layout>
    )

}

export default GoldLeaf;
