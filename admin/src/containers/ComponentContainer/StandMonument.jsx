
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getStandMonument } from './../../actions/components/standMonument';
import { MainContainer } from './../MainContainer';
import { AddStandMonument } from './../create/AddStandMonument';
import BackButton from './../../siteSetting/components/BackButton';
import { RenderStandMonument } from "../render/RenderStandMonument";
import { DetailsStandMonument } from './../render/DetailsStandMonument';


const StandMonument = (props) => {

  const [show, setShow] = useState(false);
  const [standMonumentDetailModal, setStandMonumentDetailModal] = useState(false);
  const [standMonumentDetails, setStandMonumentDetails] = useState(null);
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch();

  const standMonument = useSelector((state) => state.standMonument.standMonument)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  useEffect(() => {
    dispatch(getStandMonument())
  }, [])



  const showStandMonumentModal = (standMonument) => {
    setStandMonumentDetails(standMonument);
    setStandMonumentDetailModal(true);
  };
  return (
    <MainContainer
      // productSort
      fullFunctional
      get={getStandMonument}
      handleShow={handleShow}
    >
      <BackButton
        text="Назад"
        href="containerProductPage"
      />
      <Container>
        <Row>
          <Col>
            <RenderStandMonument
              showStandMonumentModal={showStandMonumentModal}
              setShow={setShow}
              setCurrentId={setCurrentId}
              standMonument={standMonument}
            />
          </Col>
        </Row>
      </Container>
      <AddStandMonument
        show={show}
        handleClose={handleClose}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
      <DetailsStandMonument
        standMonumentDetailModal={standMonumentDetailModal}
        standMonumentDetails={standMonumentDetails}
        setStandMonumentDetailModal={setStandMonumentDetailModal}
      />
    </MainContainer >
  );
};

export default StandMonument;
