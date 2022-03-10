import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function ContainerPage(props) {
    return (
        <>
            <Container>
                <Row>
                    <Col md={12}>
                        <h2 className="cont-title" style={{ textAlign: "center", marginBottom: "20px" }}>{props.title}</h2>
                    </Col>
                    <Row>
                        <Col>
                            <div
                                className="col-sm-12 col-xs-12 text-center"
                                style={{
                                    fontSize: "1.3em",
                                }}>
                                {props.description}
                                <br />
                                {props.descriptionTwo}
                            </div>  
                        </Col>
                    </Row>
                </Row>
                {props.children}
            </Container>
        </>
    )
}

export default ContainerPage
