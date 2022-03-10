import React from 'react'
import Layout from './../components/Layout/index';
import { Container, Row, Col } from 'react-bootstrap';
import { IoIosAdd, IoIosCloudUpload, IoIosTrash } from 'react-icons/io';
import BackButton from './components/BackButton';
import { ButtonShow } from './ButtonShow';


const ContainerSiteSetting = (props) => {

    return (
        <>
            <Layout sidebar>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h3 style={{ textAlign: "center", marginBottom: "20px" }}>{props.title}</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <BackButton />
                                <div className="actionBtnContainer">
                                    <span>Действие: </span>
                                    <ButtonShow
                                        setShow={props.setShow}
                                        item={props.item}
                                        limitOne={props.limitOne}
                                        noLimit={props.noLimit}
                                    />
                                    <button className="btn btn-secondary" onClick={props.delete}><IoIosTrash /> <span>Удалить</span></button>
                                    <button className="btn btn-secondary" onClick={props.update}><IoIosCloudUpload /> <span>Редактировать</span></button>
                                </div>

                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>

                            {props.children}
                        </Col>
                    </Row>

                </Container>

            </Layout>
        </>
    )
}
export default ContainerSiteSetting;
