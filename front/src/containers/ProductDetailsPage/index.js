import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetailsById } from '../../actions';
import Layout from '../../components/Layout';
import {
  IoIosArrowForward,
  IoIosStar,
  IoMdCart
} from 'react-icons/io';
import { BiRupee } from 'react-icons/bi';
import { AiFillThunderbolt } from 'react-icons/ai';
import { Breed, MaterialButton } from '../../components/MaterialUI';
import './style.css';
import { generatePublicUrl } from '../../urlConfig';
import { addToCart } from '../../actions';
import { Link } from 'react-router-dom';


const ProductDetailsPage = (props) => {
  const [SizeMemorials, setSizeMemorials] = React.useState("")
  const [SizeCurb, setSizeCurb] = React.useState("0")
  const [Engraving, setEngraving] = React.useState("")
  const [Ceramics, setCeramics] = React.useState("")
  const [Fio, setFio] = React.useState("")
  const [Gold, setGold] = React.useState("")
  const [Milling, setMilling] = React.useState("")
  const [isCheckedRetouch, setIsCheckedRetouch] = React.useState("")
  const [isCheckedRecovery, setIsCheckedRecovery] = React.useState("")
  const [checked, setChecked] = React.useState(true);
  const [checkedTwo, setCheckedTwo] = React.useState(true);

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
  const onChange = e => {
    setSizeMemorials(e.target.value)
  }
  const onChangeCurb = e => {
    setSizeCurb(e.target.value)
  }

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




  var money = product.productDetails.price; // у нас есть деньги;
  var tallage = money / 100 * 110;
  var tallage2 = money / 100 * 120;
  var tallage3 = money / 100 * 130;
  var tallage4 = money / 100 * 140;
  var tallage5 = money / 100 * 150;
  var tallage6 = money / 100 * 150;
  var tallage7 = money / 100 * 150;


  return (
    <Layout>
      <form className="container prod">
        <div className="row">
          <div className="col-sm-6">
            <div className="flexRow">
              <div className="verticalImageStack">
                {
                  product.productDetails.productPictures.map((thumb, index) =>
                    <div className="thumbnail">
                      <img src={generatePublicUrl(thumb.img)} alt={thumb.img} />
                    </div>
                  )
                }
              </div>
              <div className="productDescContainer">
                <div className="productDescImgContainer">
                  <img src={generatePublicUrl(product.productDetails.productPictures[0].img)} alt={`${product.productDetails.productPictures[0].img}`} />
                </div>

                {/* action buttons */}
                <div className="flexRow">
                  <MaterialButton
                    title="Добавить в корзину"
                    bgColor="#ff9f00"
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
                  {/* <MaterialButton
                    title="Купить сейчас"
                    bgColor="#fb641b"
                    textColor="#ffffff"
                    style={{
                      marginLeft: '5px'
                    }}
                    icon={<AiFillThunderbolt />}
                  /> */}
                </div>
              </div>
            </div>
            <div className="section">
              <div className="section-title">
                О памятнике
</div>
              <div className="parameters-list">
                <div className="parameter-item">
                  <div>



                    <span className="lev">
                      Артикул
                            </span>
                    <span className="val">
                      {product.vendorCod}
                    </span>
                  </div>
                  <hr />
                  <div>
                    <span className="lev">
                      Статус
                            </span>
                    <span className="val">
                      {product.status}
                    </span>
                  </div>
                  <hr />

                  <div>
                    <span className="lev">
                      Гарандия - материал
                            </span>
                    <span className="val">
                      10 лет
                            </span>
                  </div>
                  <hr />

                  <div>
                    <span className="lev">
                      Фаска
                            </span>
                    <span className="val">
                      Техническая(1-4см.)
                            </span>
                  </div>
                  <hr />

                  <div>
                    <span className="lev">
                      Полировка
                            </span>
                    <span className="val">
                      Все стороны
                                </span>
                  </div>
                  <hr />

                  <div>
                    <span className="lev">
                      Вес комплекта
                            </span>
                    <span className="val">
                      {product.setWeight} кг.
                                </span>
                  </div>
                  <hr />

                  <div>
                    <span className="lev">
                      Высота с тумбой
                                </span>
                    <span className="val">
                      {product.setHeight} см.
                                </span>
                  </div>
                  <hr />

                </div>
              </div>
            </div>

          </div>
          <div className="col-sm-6">
            <Breed
              breed={[
                { name: "Главная", href: "/" },
                { name: "Памятники", href: "/account" },
                { name: "Вертикальные", href: "/account/orders" },
                { name: prod, href: "" },
              ]}
              breedIcon={<IoIosArrowForward />}
            />

            <h2> {product.productDetails.name}</h2>
            <div className="order-info" id="order-info-1">

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
            </div>
            <div>
              <div>
                <div className="order-info" >
                  <h4 className="text-center  section-title">Размер стелы и тумбы</h4>
                  <hr />
                  <div>
                    <label className="checkbox-item">
                      <input
                        onChange={onChange} type="radio" value={tallage} checked={SizeMemorials === tallage} />{' '}
                      <span className="val">  80 x 40 x 5 см.</span>
                      <span className="lev">{tallage}</span>
                    </label>
                  </div>
                  <div>
                    <label className="checkbox-item">
                      <input
                        onChange={onChange} type="radio" value={tallage2} checked={SizeMemorials === tallage2} />{' '}
                      <span className="val"> 100 x 50 x 6 см.</span>
                      <span className="lev"> ({tallage2} руб.)</span>
                    </label>
                  </div>
                  <div>
                    <label className="checkbox-item">
                      <input
                        onChange={onChange} type="radio" value={tallage3} checked={SizeMemorials === tallage3} />{' '}
                      <span className="val"> 100 x 50 x 8 см.</span>
                      <span className="lev"> ({tallage3} руб.)</span>
                    </label>
                  </div>
                  <div>
                    <label className="checkbox-item">
                      <input
                        onChange={onChange} type="radio" value={tallage4} checked={SizeMemorials === tallage4} />{' '}
                      <span className="val"> 110 x 60 x 6 см.</span>
                      <span className="lev"> ({tallage4} руб.)</span>
                    </label>
                  </div>
                  <div>
                    <label className="checkbox-item">
                      <input
                        onChange={onChange} type="radio" value={tallage5} checked={SizeMemorials === tallage5} />{' '}
                      <span className="val"> 110 x 60 x 8 см.</span>
                      <span className="lev"> ({tallage6} руб.)</span>
                    </label>
                  </div>
                  <div>
                    <label className="checkbox-item">
                      <input
                        onChange={onChange} type="radio" value={tallage6} checked={SizeMemorials === tallage6} />{' '}
                      <span className="val"> 120 x 60 x 8 см.</span>
                      <span className="lev"> ({tallage7} руб.)</span>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <div className="order-info Mem" >
                  <h4 className="text-center  section-title">Выбор цветника</h4>
                  <hr />
                  <div>
                    <label className="checkbox-item">
                      <input
                        onChange={onChangeCurb} name="sizeCurb" component="input" type="radio" value="0" checked={SizeCurb === "0"} />{' '}
                      <span className="val"> Без Цветника</span>
                      <span className="lev"> (0 руб.)</span>
                    </label>
                  </div>
                  <div>
                    <label className="checkbox-item">
                      <input
                        onChange={onChangeCurb} name="sizeCurb" component="input" type="radio" value="3000" checked={SizeCurb === "3000"} />{' '}
                      <span className="val"> 100 x 8 x 6 см.</span>
                      <span className="lev"> (3 000 руб.)</span>
                    </label>
                  </div>
                  <div>
                    <label className="checkbox-item">
                      <input
                        onChange={onChangeCurb} name="sizeCurb" component="input" type="radio" value="5000" checked={SizeCurb === "5000"} />{' '}
                      <span className="val"> 100 x 8 x 8 см.</span>
                      <span className="lev"> (5 000 руб.)</span>
                    </label>
                  </div>

                </div>
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
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={checked} />
                  <span className="val">Хранение на складе</span>
                  <span className="lev"> (бесплатно)</span>
                </label>
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