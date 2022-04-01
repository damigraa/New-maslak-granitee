import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MaterialButton, MaterialInput, Modall } from '../../components/MaterialUI';
import { createApplication, getMainImage } from '../../actions';
import { useSelector } from 'react-redux';
import Loader from './../../components/Small/Loader';
import { RenderApplicationModal } from './../../components/Help/RenderApplicationModal';
import { generatePublicUrl } from '../../urlConfig';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = (props) => {
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(props.get())
  }, [])

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)


  const renderMainImage = () => {
    if (props.items.length === 0) {
      return (
        <Loader />
      )
    }
    return (
          <Carousel interval="5000">
            {props.items.length > 0 ?
              props.items.map((item) =>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={generatePublicUrl(item.image)}
                    alt="First slide"
                  />
                  <Carousel.Caption >
                    <div key={item._id} className="container header-text">
                      <div className="container row">
                        <div className="col-sm-12 text-center">
                          <h2>{item.header}
                            <br />
                            <span>{item.name}</span>
                          </h2>
                          <h2>
                            {item.description}
                          </h2>
                          <span className="header-subtitle">
                            {item.descriptionButton}
                          </span>
                          <div className="header-buttons text-center">
                            <MaterialButton
                              onClick={handleShow}
                              title={item.buttonText}

                              textColor="#ffffff"
                              style={{
                                marginLeft: '5px',
                              }}
                            />
                            <button className="header-buttons__btn btn btn-secondary"
                              onClick={handleShow}

                            >
                              {item.buttonText}
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
                  </Carousel.Caption>
                </Carousel.Item>
              ) : null}
          </Carousel>
    )
  }
  return (
    <div>
      {renderMainImage()}
    </div>
  )
}

export default CarouselComponent
