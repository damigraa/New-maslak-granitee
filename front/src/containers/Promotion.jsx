import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getPromotions, getPromotionsDetailsById } from '../actions';
import ContainerPage from '../components/ContainerPage/ContainerPage';
import Help from '../components/Help/Help';
import Layout from '../components/Layout';
import Loader from '../components/Small/Loader';
import WeAreManufacturers from '../components/WeAreManufacturers';

function Discounts() {
  const promotion = useSelector(state => state.promotion.promotion)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getPromotions())
  }, [])

  const renderPromotions = () => {
    if (promotion.length === 0) {
      return (
        <div>
          <h2>Загрузка данных...</h2>
        </div>
      )

    }
    return (
      <>
        <div className="row">
          {promotion.length > 0 ?
            promotion.map((promotion) =>
              <div key={promotion.id} className="col-sm-4 max-accordeon-line text-center">
                <img
                  style={{ height: "40px", width: "40px", marginBottom: "10px" }}
                  src={promotion.iconImg}
                />
                <h4
                  className="max-accordeon-title  text-center ">
                  {promotion.title}

                </h4>
                <div className="text-center">{promotion.description}</div>

              </div>
            ) : null}
        </div>

      </>
    )
  }
  return (
    <Layout>
      <ContainerPage
        title={"Акции"}
      >
        <div className="text-center">
          {renderPromotions()}
        </div>
        <div className="col-sm-12 p-5 text-center">
          <a href="/" className="btn btn-outline-secondary text-center">Перейти на главную</a>
        </div>
      </ContainerPage>
      <WeAreManufacturers />
      <Help />
    </Layout>
  )
}

export default Discounts
