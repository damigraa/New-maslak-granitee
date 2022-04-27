import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel, FormGroup } from '@material-ui/core';
import RenderEngravingModal from './EngravingModalContainer/RenderEngravingModal';
import { getGallery } from './../../actions/components/gallery';
import { Button } from '@material-ui/core';
import { generatePublicUrl } from '../../urlConfig';
import Slider from './../ProductDetailsPage/Components/Slider/Slider';
import ProductModalContainer from './../ProductDetailsPage/ProductModalContainer';




const EngravingOnGranite = ({ setSizeCurb, SizeCurb }) => {
  const [epitaph, setEpitaph] = useState(false)
  const [showEpitaph, setShowEpitaph] = useState(false)
  const [showImgFull, setShowImgFull] = useState(false)
  const [miniImg, setMiniImg] = useState(false)
  const [test, setTest] = useState(null)


  console.log(test)

  const gallery = useSelector(state => state.gallery.galleries)
  // const [clicked, setClicked] = useState({
  //   epitaph: false,
  //   crosse: false,
  //   candle: false,
  //   flowers: false,
  //   bagImages: false,
  //   natureImages: false,
  // })


  const dispatch = useDispatch()
  const getValueEpitaph = (e) => {
    setEpitaph(e.target.checked)
  }

  const handleShow = (e) => {
    e.preventDefault()
    console.log("test")
    setShowEpitaph(true)

  }


  useEffect(() => {
    dispatch(getGallery(gallery))
  }, [])
  // const rootEl = useRef(null);
  // console.log(rootEl)

  // useEffect(() => {
  //   const onClick = e => rootEl.current.contains(e.target) || setShowEpitaph(false);
  //   document.addEventListener('click', onClick);
  //   return () => document.removeEventListener('click', onClick);
  // }, [])
  const deleteMiniImg = () => {
    setMiniImg(false)
    setTest(null)
  }



  console.log(gallery[0])
  return (
    <div className="engravingOnGranite"
    >
      <ProductModalContainer
        show={showImgFull}
        handleClose={() => setShowImgFull(false)}
        item={gallery[0]}
      />
      <div className="row" >
        <div className="col-sm-6">
          <img className="engravingOnGranite__mainImg" src="https://home-granit.ru/images/portret-granit.jpg" alt="" />
        </div>
        <div className="col-sm-6">
          <h4>Добавить гравировку на граните?</h4>
          <div className="row">
            <div className="col-12" >
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={epitaph}
                      value="epitaph"
                      onChange={(e) => getValueEpitaph(e)}
                    />}
                  label="Эпитафия"
                />
                {epitaph === true ?
                  <div>
                    <div>
                      {miniImg === true && <div className="engravingOnGranite__miniImg-container" >

                        <img
                          style={{
                            margin: "5px",
                            width: "50px",
                            height: "50px"
                          }} src={generatePublicUrl(test.img)} alt="" />

                        <Button variant="outlined" onClick={deleteMiniImg}>
                          Delete
                        </Button>
                      </div>}
                      <Button onClick={handleShow} variant="contained">{miniImg === true ? "Изменить" : "Выбрать макет"}</Button>
                    </div>
                    <RenderEngravingModal
                      setShowImgFull={setShowImgFull}
                      showEpitaph={showEpitaph}
                      setMiniImg={setMiniImg}
                      setShowEpitaph={setShowEpitaph}
                      handleShow={handleShow}
                      gallery={gallery}
                      setTest={setTest}
                    />
                  </div> : null}
              </FormGroup>
            </div>
          </div>
        </div>
      </div >
    </div >


  )
}

export default EngravingOnGranite

