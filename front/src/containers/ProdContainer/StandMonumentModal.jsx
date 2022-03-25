import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStandMonument } from '../../actions/components/standMonument';
import ContainerList from '../ProductListPage/ContainerList';


const RenderStandMonumentModal = ({ setSizeCurb, SizeCurb }) => {

  const standMonument = useSelector((state) => state.standMonument.standMonument)
  const dispatch = useDispatch();

  const onChangeCurb = e => {
    setSizeCurb(e.target.value)
  }



  useEffect(() => {
    dispatch(getStandMonument())
  }, [])

  return (
    <ContainerList
      title="Выбор цветника"
      product={standMonument}
      onChange={onChangeCurb}
      checked={SizeCurb}
    />

  )
}

export default RenderStandMonumentModal



// <div className="order-info Mem" >
// <h4 className="text-center  section-title"></h4>
// <hr />
// {
//   standMonument.length > 0 ?
//     standMonument.map((item, index) =>

//       <>
//         <div>
//           <label className="checkbox-item">
//             <input
//               onChange={onChangeCurb} name="sizeCurb" component="input" type="radio" value="0" checked={SizeCurb === "0"} />{' '}
//             <span className="val">{item.size}</span>
//             <span className="lev"> ({item.price} руб.)</span>
//           </label>
//         </div>
//       </>

//     ) : "нет данных"
// }
// </div>

