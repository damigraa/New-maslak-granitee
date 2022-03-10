import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MaterialButton, MaterialInput, Modall } from '../../components/MaterialUI';
import { createApplication, getMainImage } from '../../actions';
import { useSelector } from 'react-redux';
import Loader from './../../components/Small/Loader';
import { RenderApplicationModal } from './../../components/Help/RenderApplicationModal';

const HeaderPhoto = (props) => {

  // const application = useSelector(state => state.application)
  const mainImage = useSelector(state => state.mainImage.mainImage)

  const [show, setShow] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMainImage())
  }, [])


  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)


  const renderMainImage = () => {
    if (mainImage.length === 0) {
      return (
        <Loader />
      )
    }
    return (
      <div>
        {mainImage.length > 0 ?
          mainImage.map((m, index) =>
            <div key={index} className="container header-text">
              <div className="container row">
                <div className="col-sm-12 text-center">
                  <h1>{m.header}
                    <br />
                    <span>{m.name}</span>
                  </h1>
                  <h2>
                    {m.description}
                  </h2>
                  <span className="header-subtitle">
                    {m.descriptionButton}
                  </span>
                  <div className="header-buttons text-center">
                    <button className="btn btn-secondary"
                      onClick={handleShow}

                    >
                      {m.buttonText}
                    </button>
                    <RenderApplicationModal
                      handleClose={handleClose}
                      show={show} />


                  </div>
                  <div>

                  </div>


                </div>


              </div>
            </div>
          ) : null}
      </div>
    )
  }
  return (
    <div className="container-fluid header-photo">
      {renderMainImage()}
    </div>
  )
}

export default HeaderPhoto
