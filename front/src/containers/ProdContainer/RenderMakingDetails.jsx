import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStandMonument } from '../../actions/components/standMonument';
import ContainerList from '../ProductListPage/ContainerList';


const RenderMakingDetails = () => {

  const items = [
    {
      iconText: "2 дня",
      textOne: "Согласуем проект",
      textTwo: "на бесплатных 3D- моделях"
    },
    {
      iconText: "5 %",
      textOne: "Ваша скидка при",
      textTwo: "оформлении заказа на сайте"
    },
    {
      iconText: " 0 руб",
      textOne: "Бесплатное хранение до дня установки"
    }
  ]


  return (
      <div className="container mt-2">
        <div className="row">
          {items && items.map((item) => (
            <div key={item._id}  className="col-md-4 col-sm-4 col-xs-6 text-center">
              <div className="makingDetails__info">
                <div className="makingDetails__box-icon">
                  <div className="makingDetails__icon icon-default">
                    <i>
                      {item.iconText}
                    </i>
                  </div></div>
                <div className="makingDetails__text text-center"><b>{item.textOne} <br />{item.textTwo || null}</b></div>
              </div>
            </div>
          ))}
        </div>
      </div>


  )
}

export default RenderMakingDetails

