import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetailsById, getStandMonument } from './../../actions';
import Layout from './../../components/Layout';
import {
  IoIosArrowForward,
  IoIosStar,
  IoMdCart
} from 'react-icons/io';
import { BiRupee } from 'react-icons/bi';
import { AiFillThunderbolt } from 'react-icons/ai';
import { Breed, MaterialButton } from './../../components/MaterialUI';
import './style.css';
import { generatePublicUrl } from './../../urlConfig';
import RenderSection from '../../containers/render/renderSection';
import RenderStandMonumentModal from './../ProdContainer/StandMonumentModal';
import RenderTombstoneCurbModal from './../ProdContainer/TombstoneCurb';
import { addToCart } from './../../actions/cart.action';
import RenderGraniteTilesModal from '../ProdContainer/GraniteTilesModal';
import RenderProductImg from '../render/renderProductImg';
import ModalPrice from './ModalPrice';


const ProductDetailsPage = (props) => {
console.log(props)
  const [SizeMemorials, setSizeMemorials] = useState("")
  const [SizeCurb, setSizeCurb] = useState("0")
  const [tiles, setTiles] = useState("0")

  const [Engraving, setEngraving] = useState("")
  const [Ceramics, setCeramics] = useState("")
  const [Fio, setFio] = useState("")
  const [Gold, setGold] = useState("")
  const [Milling, setMilling] = useState("")
  const [isCheckedRetouch, setIsCheckedRetouch] = useState("")
  const [isCheckedRecovery, setIsCheckedRecovery] = useState("")
  const [checked, setChecked] = useState(true);
  const [checkedTwo, setCheckedTwo] = useState(true);

  const dispatch = useDispatch();
  const product = useSelector(state => state.product)




  useEffect(() => {
    const { productId } = props.match.params;
    console.log(props);
    const payload = {
      params: {
        productId
      }
    }
    dispatch(getProductDetailsById(payload));
  }, []);




  const price = (Number(SizeMemorials) + Number(SizeCurb) + Number(Engraving) + Number(Ceramics) + Number(Fio) + Number(Milling) + Number(Gold)
    + Number(isCheckedRetouch ? "1000" : "0") + Number(isCheckedRecovery ? "3000" : "0")
  )
  var differencePensioners = price / 100 * 2
  var difference = price / 100 * 5
  var tallage = price / 100 * 93;

  // if (!product) {
  //     return <div>
  //         <h1>Загрузка...</h1>
  //     </div>
  // }

  // const onAddMemorial = () => {
  //     const obj = {
  //         id: product.id,
  //         name: product.name,
  //         imageUrl: product.imageUrl,
  //         price: product.price,
  //         tallage: product.tallage,
  //         size: product.size,
  //         vendorCod: product.vendorCod,
  //         setWeight: product.setWeight,
  //         setHeight: product.setHeight,
  //         status: product.status
  //     }
  //     onClickMemorial(obj);
  // }


  const prod = product.productDetails.name
  if (Object.keys(product.productDetails).length === 0) {
    return null;
  }

  return (
    <Layout>
      <form className="container prod">
        <div className="row">
          <div className='row'>
            <h3 className='col-sm text center titleName'>
              {product.productDetails.name}
            </h3>
          </div>
          {/* <Breed
            breed={[
              { name: "Главная", href: "/" },
              { name: "Памятники", href: "/" },
              { name: "Вертикальные", href: "/" },
              { name: prod, href: "" },
            ]}
            breedIcon={<IoIosArrowForward />}
          /> */}
        </div>
        <div className="row">

          <div className="col-md-5">
            <div className="flexRow">
              <div className="productDescContainer">
                <RenderProductImg
                  product={product}
                />
                <RenderSection
                  product={product}
                />
                {/* action buttons */}

                <div className="flexRow">
                  <MaterialButton
                    title="Добавить в корзину"
                    // bgColor="#1E1E1E"
                    textColor="#ffffff"
                    style={{
                      marginTop: '20px',
                      textAlign: "center"

                    }}
                    icon={<IoMdCart />}
                    onClick={() => {
                      const { _id, name, price } = product.productDetails;
                      const img = product.productDetails.productPictures[0].img;
                      dispatch(addToCart({ _id, name, price, img }));
                      props.history.push(`/cart`);
                    }}
                  />
                  <MaterialButton
                    title="Купить сейчас"
                    // bgColor="#1E1E1E"
                    textColor="#ffffff"
                    style={{
                      marginLeft: '5px'
                    }}
                    icon={<AiFillThunderbolt />}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7">

            <ModalPrice
              history={props.history}
              product={product}
              difference={difference}
              differencePensioners={differencePensioners}
            />


            <h2> {product.productDetails.name}</h2>
            {/* <div className="order-info" id="order-info-1">

              <hr />
              <div className="checkbox-item">
                <label>
                  <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
                  <span className="checkbox-custom">
                  </span>
                  <span className="val">
                    Полная оплата (5%)
                  </span>
                  <span className="lev">
                    - {difference} руб
                  </span>
                </label>
              </div>
              <div className="checkbox-item">
                <label>
                  <input type="checkbox" checked={checkedTwo} onChange={() => setCheckedTwo(!checkedTwo)} />
                  <span className="checkbox-custom">
                  </span>
                  <span className="val">
                    Пенсионерам (2%)
                  </span>
                  <span className="lev">
                    - {differencePensioners} руб.
                  </span>
                </label>
              </div>
              <hr />
              <div className="price">
                <div className="head">

                  Цена :
                </div>
                <div className="old">
                  {product.price = price}
                  руб.
                </div>
                <div className="new">
                  <b>{tallage} ₽</b>

                </div>
              </div>
            </div> */}
            <div>
              <RenderTombstoneCurbModal
                SizeMemorials={SizeMemorials}
                setSizeMemorials={setSizeMemorials}
              />

              <div>
                <RenderStandMonumentModal
                  SizeCurb={SizeCurb}
                  setSizeCurb={setSizeCurb}

                />
                <RenderGraniteTilesModal
                  tiles={tiles}
                  setTiles={setTiles}
                />

              </div>
              <div className="order-info" >
                <h4 className="text-center  section-title">Оформление</h4>
                <hr />
                <div>
                  <h6>Гравировка портретов</h6>
                  <select value={Engraving} onChange={(e) => { setEngraving(e.target.value) }}>
                    <option value="0">Выберите количесво</option>
                    <option value="3000">1шт. 3000 (руб.)</option>
                    <option value="5500">2шт. 5500 (руб.)</option>
                    <option value="8500">3шт. 8500 (руб.)</option>
                    <option value="10000">4шт. 10 000 (руб.)</option>
                    <option value="10000">Во весь рост 10 000 (руб.)</option>
                  </select>
                  <br />
                  <h6>Фото (керамика)</h6>
                  <select value={Ceramics} onChange={(e) => { setCeramics(e.target.value) }}>
                    <option value="0">Выберите количесво</option>
                    <option value="3000">1шт. 3000 (руб.)</option>
                    <option value="5500">2шт. 5500 (руб.)</option>
                    <option value="8500">3шт. 8500 (руб.)</option>
                    <option value="10000">4шт. 10 000 (руб.)</option>
                  </select>
                  <br />
                  <h6>Гравировка ФИО + даты</h6>
                  <select value={Fio} onChange={(e) => { setFio(e.target.value) }}>
                    <option value="0">Выберите количесво</option>
                    <option value="3000">1шт. 3000 (руб.)</option>
                    <option value="5500">2шт. 5500 (руб.)</option>
                    <option value="8500">3шт. 8500 (руб.)</option>
                    <option value="10000">4шт. 10 000 (руб.)</option>
                  </select>
                  <br />
                  <h6>ФИО (краска золото)</h6>
                  <select value={Gold} onChange={(e) => { setGold(e.target.value) }}>
                    <option value="0">Выберите материал</option>
                    <option value="3000">Краска 400символ (руб.)</option>
                    <option value="5500">Золото 800символ (руб.)</option>
                  </select>
                  <br />

                  <h6>ФИО (фрезировка)</h6>
                  <select value={Milling} onChange={(e) => { setMilling(e.target.value) }}>
                    <option value="0">Выберите количесво</option>
                    <option value="3000">1шт. 3000 (руб.)</option>
                    <option value="5500">2шт. 5500 (руб.)</option>
                    <option value="8500">3шт. 8500 (руб.)</option>
                    <option value="10000">3шт. 10 000 (руб.)</option>
                    <option value="10000">Во весь рост 10 000 (руб.)</option>
                  </select>
                  <br />

                </div>
              </div>
              <div className="order-info">
                <h4 className="section-title">Доп. Оформление </h4>
                <hr />
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={isCheckedRetouch}
                    onChange={e => { setIsCheckedRetouch(e.target.checked) }} />
                  <span className="val">Ретушь фотографии</span>
                  <span className="lev"> 1000руб</span>
                </label>
                <br />
                <label className="checkbox-item">

                  <input
                    type="checkbox"
                    checked={isCheckedRecovery}
                    onChange={e => { setIsCheckedRecovery(e.target.checked) }} />

                  <span className="val">Востановление фотографии</span>
                  <span className="lev"> (3000руб)</span>
                </label>
                <br />
                {/* <label className="checkbox-item">

                  <input
                    type="checkbox"
                    checked={checked} />

                  <span className="val">Хранение на складе</span>
                  <span className="lev"> (бесплатно)</span>
                </label> */}
                <br />
              </div>
            </div>

          </div>
        </div>
      </form>
    </Layout>
  )

}

export default ProductDetailsPage