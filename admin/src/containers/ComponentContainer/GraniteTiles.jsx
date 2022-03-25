
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getGraniteTiles } from '../../actions/components/graniteTiles';
import { MainContainer } from '../MainContainer';
import BackButton from '../../siteSetting/components/BackButton';
import { RenderGraniteTiles } from './../render/RenderGraniteTiles';
import { AddGraniteTiles } from './../create/AddGraniteTiles';


const GraniteTiles = (props) => {

  const [show, setShow] = useState(false);
  const [graniteTilesDetailModal, setGraniteTilesDetailModal] = useState(false);
  const [graniteTilesDetails, setGraniteTilesDetails] = useState(null);
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch();

  const graniteTiles = useSelector((state) => state.graniteTiles.graniteTiles)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  useEffect(() => {
    dispatch(getGraniteTiles())
  }, [])



  const showGraniteTilesModal = (graniteTiles) => {
    setGraniteTilesDetails(graniteTiles);
    setGraniteTilesDetailModal(true);
  };
  return (
    <MainContainer
      // productSort
      fullFunctional
      get={getGraniteTiles}
      handleShow={handleShow}
    >
      <BackButton
        text="Назад"
        href="containerProductPage"
      />
      <Container>
        <Row>
          <Col>
            <RenderGraniteTiles
              showGraniteTilesModal={showGraniteTilesModal}
              setShow={setShow}
              setCurrentId={setCurrentId}
              graniteTiles={graniteTiles}
            />
          </Col>
        </Row>
      </Container>
      <AddGraniteTiles
        show={show}
        handleClose={handleClose}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
      {/* <DetailsTombstoneCurb
        graniteTilesDetailModal={graniteTilesDetailModal}
        graniteTilesDetails={graniteTilesDetails}
        setGraniteTilesDetailModal={setGraniteTilesDetailModal}
      /> */}
    </MainContainer >
  );
};

export default GraniteTiles;
