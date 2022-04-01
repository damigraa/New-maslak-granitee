import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MaterialButton, MaterialInput, Modall } from '../../components/MaterialUI';
import { createApplication, getMainImage } from '../../actions';
import { useSelector } from 'react-redux';
import Loader from './../../components/Small/Loader';
import { RenderApplicationModal } from './../../components/Help/RenderApplicationModal';
import { generatePublicUrl } from '../../urlConfig';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

const HeaderPhoto = (props) => {

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
        <div className='mainImage'>
          <Carousel interval="5000">
            {mainImage.length > 0 ?
              mainImage.map((m, index) =>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={generatePublicUrl(m.image)}
                    alt="First slide"
                  />
                  <Carousel.Caption                  >
                    <Container fluid key={index}>
                      <Row>
                        <Col md="12" sm="12">
                          <h3>{m.header}
                            <br />
                            <span>{m.name}</span>
                          </h3>
                          <h4>
                            {m.description}
                          </h4>
                          <span className="header-subtitle">
                            {m.descriptionButton}
                          </span>
                          <div className="header-buttons text-center">
                            <MaterialButton
                              onClick={handleShow}
                              title={m.buttonText}
                              textColor="#ffffff"
                            />
                            {/* <button className="header-buttons__btn btn btn-secondary"
                              onClick={handleShow}

                            >
                              {m.buttonText}
                            </button> */}
                            <RenderApplicationModal
                              handleClose={handleClose}
                              show={show} />


                          </div>
                          <div>

                          </div>


                        </Col>
                        {/* <Col md="8" sm="6">
                          <Row>
                            <Col md="4">
                              <div className="test">
                                Приветик
                              </div>
                            </Col>
                            <Col md="4">
                              <div className="test">
                                Приветик
                              </div>
                            </Col>
                            <Col md="4">
                              <div className="test">
                                Приветик
                              </div>
                            </Col> */}
                          {/* </Row>
                        </Col> */}


                      </Row>
                    </Container>

                  </Carousel.Caption>
                </Carousel.Item>
              ) : null}
          </Carousel>
        </div >




        {/* 
        {mainImage.length > 0 ?
          mainImage.map((m, index) =>
            <div className="container-fluid header-photo"
              style={{
                backgroundImage: `url(${generatePublicUrl(m.image)})`
              }}>
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



            </div>
          ) : null} */}
      </div >
    )
  }
  return (
    <div>

      {renderMainImage()}
    </div>
  )
}

export default HeaderPhoto
