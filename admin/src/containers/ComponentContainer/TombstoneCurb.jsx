
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getTombstoneCurb } from '../../actions/components/tombstoneCurb';
import { MainContainer } from '../MainContainer';
import BackButton from '../../siteSetting/components/BackButton';
import { AddTombstoneCurb } from '../create/AddTombstoneCurb';
import { RenderTombstoneCurb } from './../render/RenderTombstoneCurb';


const TombstoneCurb = (props) => {

  const [show, setShow] = useState(false);
  const [tombstoneCurbDetailModal, setTombstoneCurbDetailModal] = useState(false);
  const [tombstoneCurbDetails, setTombstoneCurbDetails] = useState(null);
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch();

  const tombstoneCurb = useSelector((state) => state.tombstoneCurb.tombstoneCurb)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  useEffect(() => {
    dispatch(getTombstoneCurb())
  }, [])



  const showTombstoneCurbModal = (tombstoneCurb) => { 
    setTombstoneCurbDetails(tombstoneCurb);
    setTombstoneCurbDetailModal(true);
  };
  return (
    <MainContainer
      // productSort
      fullFunctional
      get={getTombstoneCurb}
      handleShow={handleShow}
    >
      <BackButton
        text="Назад"
        href="containerProductPage"
      />
      <Container>
        <Row>
          <Col>
            <RenderTombstoneCurb
              showTombstoneCurbModal={showTombstoneCurbModal}
              setShow={setShow}
              setCurrentId={setCurrentId}
              tombstoneCurb={tombstoneCurb}
            />
          </Col>
        </Row>
      </Container>
      <AddTombstoneCurb
        show={show}
        handleClose={handleClose}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
      {/* <DetailsTombstoneCurb
        tombstoneCurbDetailModal={tombstoneCurbDetailModal}
        tombstoneCurbDetails={tombstoneCurbDetails}
        setTombstoneCurbDetailModal={setTombstoneCurbDetailModal}
      /> */}
    </MainContainer >
  );
};

export default TombstoneCurb;