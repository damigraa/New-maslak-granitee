// import React from 'react'
// import { Link } from 'react-router-dom';
// import Layout from './Layout';

// function MemorialInfo({ product, onClickMemorial }) {
//     const [SizeMemorials, setSizeMemorials] = React.useState("25000")
//     const [SizeCurb, setSizeCurb] = React.useState("0")
//     const [Engraving, setEngraving] = React.useState("")
//     const [Ceramics, setCeramics] = React.useState("")
//     const [Fio, setFio] = React.useState("")
//     const [Gold, setGold] = React.useState("")
//     const [Milling, setMilling] = React.useState("")
//     const [isCheckedRetouch, setIsCheckedRetouch] = React.useState("")
//     const [isCheckedRecovery, setIsCheckedRecovery] = React.useState("")
//     const [checked, setChecked] = React.useState(true);
//     const [checkedTwo, setCheckedTwo] = React.useState(true);


//     const price = (Number(SizeMemorials) + Number(SizeCurb) + Number(Engraving) + Number(Ceramics) + Number(Fio) + Number(Milling) + Number(Gold)
//         + Number(isCheckedRetouch ? "1000" : "0") + Number(isCheckedRecovery ? "3000" : "0")
//     )
//     var differencePensioners = price / 100 * 2
//     var difference = price / 100 * 5
//     var tallage = price / 100 * 93;
//     const onChange = e => {
//         setSizeMemorials(e.target.value)
//     }
//     const onChangeCurb = e => {
//         setSizeCurb(e.target.value)
//     }

//     // if (!product) {
//     //     return <div>
//     //         <h1>Загрузка...</h1>
//     //     </div>
//     // }

//     const onAddMemorial = () => {
//         const obj = {
//             id: product.id,
//             name: product.name,
//             imageUrl: product.imageUrl,
//             price: product.price,
//             tallage: product.tallage,
//             size: product.size,
//             vendorCod: product.vendorCod,
//             setWeight: product.setWeight,
//             setHeight: product.setHeight,
//             status: product.status
//         }
//         onClickMemorial(obj);
//     }
//     return (
//         <Layout>
//             <form className="container prod">
//         <div className="row">
//             <div className="col-sm-7">
//                 {/* <h2>{product.name}</h2> */}
//                 <div className="text-center">
//                     {/* <img className="w-75 main-image" src={product.imageUrl} alt="" /> */}
//                     {/* <h4>{product.price} ₽</h4> */}
//                 </div>
//                 <div className="section">
//                     <div className="section-title">
//                         О памятнике
// </div>
//                     <div className="parameters-list">
//                         <div className="parameter-item">
//                             <div>
//                                 <span className="lev">
//                                     Артикул
//                             </span>
//                                 <span className="val">
//                                     {/* {product.vendorCod} */}
//                                 </span>
//                             </div>
//                             <hr />
//                             <div>
//                                 <span className="lev">
//                                     Статус
//                             </span>
//                                 <span className="val">
//                                     {/* {product.status} */}
//                                 </span>
//                             </div>
//                             <hr />

//                             <div>
//                                 <span className="lev">
//                                     Гарандия - материал
//                             </span>
//                                 <span className="val">
//                                     10 лет
//                             </span>
//                             </div>
//                             <hr />

//                             <div>
//                                 <span className="lev">
//                                     Фаска
//                             </span>
//                                 <span className="val">
//                                     Техническая(1-4см.)
//                             </span>
//                             </div>
//                             <hr />

//                             <div>
//                                 <span className="lev">
//                                     Полировка
//                             </span>
//                                 <span className="val">
//                                     Все стороны
//                                 </span>
//                             </div>
//                             <hr />

//                             <div>
//                                 <span className="lev">
//                                     Вес комплекта
//                             </span>
//                                 <span className="val">
//                                     {/* {product.setWeight} кг. */}
//                                 </span>
//                             </div>
//                             <hr />

//                             <div>
//                                 <span className="lev">
//                                     Высота с тумбой
//                                 </span>
//                                 <span className="val">
//                                     {/* {product.setHeight} см. */}
//                                 </span>
//                             </div>
//                             <hr />

//                         </div>
//                     </div>
//                 </div>
//                 <div className="section">
//                     <div className="section-title">
//                         Описание
// </div>
//                     <div>
//                         <p className="desc">
//                             Данная модель обладает небольшими размерами и относится к классу стандартных мемориальных изделий, с помощью которых возможно достойно обозначить захоронение. Боковые края выполнены в виде классических ровных граней. Отличительной особенностью, придающей конструкции элегантность и восхитительность является верхушка. Она состоит из трех ровных граней, которые соединяясь друг с другом напоминают очертания бриллианта. Представленное оформление надгробия символизирует вечную любовь родных к усопшему, а также отображает искренние чувства боли и скорби.
// </p>
//                     </div>

//                 </div>
//             </div>


//             <div className="col-sm-5">
//                 <div className="order-info" id="order-info-1">
//                     <hr />
//                     <div className="checkbox-item">
//                         <label>
//                             <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
//                             <span className="checkbox-custom">
//                             </span>
//                             <span className="val">
//                                 Полная оплата (5%)
//                         </span>
//                             <span className="lev">
//                                 - {difference} руб
//                         </span>
//                         </label>
//                     </div>
//                     <div className="checkbox-item">
//                         <label>
//                             <input type="checkbox" checked={checkedTwo} onChange={() => setCheckedTwo(!checkedTwo)} />
//                             <span className="checkbox-custom">
//                             </span>
//                             <span className="val">
//                                 Пенсионерам (2%)
//                         </span>
//                             <span className="lev">
//                                 - {differencePensioners} руб.
//                         </span>
//                         </label>
//                     </div>
//                     <hr />
//                     <div className="price">
//                         <div className="head">

//                             Цена :
//                       </div>
//                         <div className="old">
//                             {/* {product.price = price} */}
//                                  руб.
//                      </div>
//                         <div className="new">
//                             <b>{tallage} ₽</b>

//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <Link onClick={onAddMemorial} to="/cart" className="to-cart btn btn-outline-secondary">
//                         <span>В один клик</span>
//                     </Link>

//                     <a className="to-cart btn btn-outline-secondary " href="">
//                         <span>
//                             <svg width="15px" height="15px" viewBox="0 0 16 16" className="bi bi-cart-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                                 <path fill-rule="evenodd" d="M11.354 5.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708 0z" />
//                                 <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
//                             </svg>
//                         </span>
//                         <span>В корзину</span>
//                     </a>
//                 </div>

//                 <div>
//                     <div>
//                         <div className="order-info" >
//                             <h4 className="text-center  section-title">Размер стелы и тумбы</h4>

//                             <hr />
//                             <label className="checkbox-item">
//                                 <input
//                                     onChange={onChange} type="radio" value="25000" checked={SizeMemorials === "25000"} />{' '}
//                                 <span className="val">  80 x 40 x 5 см.</span>
//                                 <span className="lev"> (25 000 руб.)</span>
//                             </label>

//                             <label className="checkbox-item">
//                                 <input
//                                     onChange={onChange} type="radio" value="28000" checked={SizeMemorials === "28000"} />{' '}
//                                 <span className="val"> 100 x 50 x 6 см.</span>
//                                 <span className="lev"> (28 000 руб.)</span>
//                             </label>
//                             <label className="checkbox-item">
//                                 <input
//                                     onChange={onChange} type="radio" value="30000" checked={SizeMemorials === "30000"} />{' '}
//                                 <span className="val"> 100 x 50 x 8 см.</span>
//                                 <span className="lev"> (30 000 руб.)</span>
//                             </label>
//                             <label className="checkbox-item">
//                                 <input
//                                     onChange={onChange} type="radio" value="35000" checked={SizeMemorials === "35000"} />{' '}
//                                 <span className="val"> 110 x 60 x 6 см.</span>
//                                 <span className="lev"> (35 000 руб.)</span>
//                             </label>
//                             <label className="checkbox-item">
//                                 <input
//                                     onChange={onChange} type="radio" value="40000" checked={SizeMemorials === "40000"} />{' '}
//                                 <span className="val"> 110 x 60 x 8 см.</span>
//                                 <span className="lev"> (40 000руб.)</span>
//                             </label>
//                             <label className="checkbox-item">
//                                 <input
//                                     onChange={onChange} type="radio" value="45000" checked={SizeMemorials === "45000"} />{' '}
//                                 <span className="val"> 120 x 60 x 8 см.</span>
//                                 <span className="lev"> (45 000 руб.)</span>
//                             </label>
//                         </div>
//                     </div>
//                     <div>
//                         <div className="order-info Mem" >
//                             <h4 className="text-center  section-title">Выбор цветника</h4>
//                             <hr />
//                             <label className="checkbox-item">
//                                 <input
//                                     onChange={onChangeCurb} name="sizeCurb" component="input" type="radio" value="0" checked={SizeCurb === "0"} />{' '}
//                                 <span className="val"> Без Цветника</span>
//                                 <span className="lev"> (0 руб.)</span>
//                             </label>

//                             <label className="checkbox-item">
//                                 <input
//                                     onChange={onChangeCurb} name="sizeCurb" component="input" type="radio" value="3000" checked={SizeCurb === "3000"} />{' '}
//                                 <span className="val"> 100 x 8 x 6 см.</span>
//                                 <span className="lev"> (3 000 руб.)</span>
//                             </label>
//                             <label className="checkbox-item">
//                                 <input
//                                     onChange={onChangeCurb} name="sizeCurb" component="input" type="radio" value="5000" checked={SizeCurb === "5000"} />{' '}
//                                 <span className="val"> 100 x 8 x 8 см.</span>
//                                 <span className="lev"> (5 000 руб.)</span>
//                             </label>
//                         </div>
//                     </div>
//                     <div className="order-info" >
//                         <h4 className="text-center  section-title">Оформление</h4>
//                         <hr />
//                         <div>
//                             <h6>Гравировка портретов</h6>
//                             <select value={Engraving} onChange={(e) => { setEngraving(e.target.value) }}>
//                                 <option value="0">Выберите количесво</option>
//                                 <option value="3000">1шт. 3000 (руб.)</option>
//                                 <option value="5500">2шт. 5500 (руб.)</option>
//                                 <option value="8500">3шт. 8500 (руб.)</option>
//                                 <option value="10000">4шт. 10 000 (руб.)</option>
//                                 <option value="10000">Во весь рост 10 000 (руб.)</option>
//                             </select>
//                             <br />
//                             <h6>Фото (керамика)</h6>
//                             <select value={Ceramics} onChange={(e) => { setCeramics(e.target.value) }}>
//                                 <option value="0">Выберите количесво</option>
//                                 <option value="3000">1шт. 3000 (руб.)</option>
//                                 <option value="5500">2шт. 5500 (руб.)</option>
//                                 <option value="8500">3шт. 8500 (руб.)</option>
//                                 <option value="10000">4шт. 10 000 (руб.)</option>
//                             </select>
//                             <br />
//                             <h6>Гравировка ФИО + даты</h6>
//                             <select value={Fio} onChange={(e) => { setFio(e.target.value) }}>
//                                 <option value="0">Выберите количесво</option>
//                                 <option value="3000">1шт. 3000 (руб.)</option>
//                                 <option value="5500">2шт. 5500 (руб.)</option>
//                                 <option value="8500">3шт. 8500 (руб.)</option>
//                                 <option value="10000">4шт. 10 000 (руб.)</option>
//                             </select>
//                             <br />
//                             <h6>ФИО (краска золото)</h6>
//                             <select value={Gold} onChange={(e) => { setGold(e.target.value) }}>
//                                 <option value="0">Выберите материал</option>
//                                 <option value="3000">Краска 400символ (руб.)</option>
//                                 <option value="5500">Золото 800символ (руб.)</option>
//                             </select>
//                             <br />
//                             <h6>ФИО (фрезировка)</h6>
//                             <select value={Milling} onChange={(e) => { setMilling(e.target.value) }}>
//                                 <option value="0">Выберите количесво</option>
//                                 <option value="3000">1шт. 3000 (руб.)</option>
//                                 <option value="5500">2шт. 5500 (руб.)</option>
//                                 <option value="8500">3шт. 8500 (руб.)</option>
//                                 <option value="10000">3шт. 10 000 (руб.)</option>
//                                 <option value="10000">Во весь рост 10 000 (руб.)</option>
//                             </select>
//                             <br />
//                         </div>
//                     </div>
//                     <div className="order-info">
//                         <h4 className="section-title">Доп. Оформление </h4>
//                         <hr />
//                         <label className="checkbox-item">
//                             <input
//                                 type="checkbox"
//                                 checked={isCheckedRetouch}
//                                 onChange={e => { setIsCheckedRetouch(e.target.checked) }} />
//                             <span className="val">Ретушь фотографии</span>
//                             <span className="lev"> 1000руб</span>
//                         </label>
//                         <br />
//                         <label className="checkbox-item">
//                             <input
//                                 type="checkbox"
//                                 checked={isCheckedRecovery}
//                                 onChange={e => { setIsCheckedRecovery(e.target.checked) }} />
//                             <span className="val">Востановление фотографии</span>
//                             <span className="lev"> (3000руб)</span>
//                         </label>
//                         <br />
//                         <label className="checkbox-item">
//                             <input
//                                 type="checkbox"
//                                 checked={checked} />
//                             <span className="val">Хранение на складе</span>
//                             <span className="lev"> (бесплатно)</span>
//                         </label>
//                         <br />
//                     </div>
//                 </div>

//             </div>
//         </div>
//         </form>
//         </Layout>
//     )
// }

// export default MemorialInfo
