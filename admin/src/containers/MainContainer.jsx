import React from 'react'
import Layout from "../components/Layout";
import { useDispatch } from "react-redux";
import { Search, Sort } from './Component';
import { Container, Row, Col } from "react-bootstrap";
import { setFileView } from "../reducers/product.reducer";


export const MainContainer = (props) => {
    const dispatch = useDispatch();

    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col md={12}>
                        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>{props.title}</h3>
                    </Col>
                </Row>
                {props.fullFunctional ? <Row>
                    <Col md={12}>
                        <div className="disk">
                            <button className="disk__upload-label" onClick={props.handleShow}>
                                Добавить
              </button>
                            <Search
                                search={props.search}
                                get={props.get}
                            />
                            <Sort
                                productSort={props.productSort}
                                get={props.get}
                            />
                            <button
                                className="disk__plate"
                                onClick={() => dispatch(setFileView('plate'))}
                            />
                            <button
                                className="disk__list"
                                onClick={() => dispatch(setFileView('list'))}
                            />
                        </div>

                    </Col>
                </Row> :
                    <Row>
                        <Col md={12}>
                            <div className="disk">
                                <Search
                                    search={props.search}
                                    get={props.get}
                                />
                                <Sort
                                    productSort={props.productSort}
                                    get={props.get}
                                />
                            </div>

                        </Col>
                    </Row>
                }
                {props.children}
            </Container>
        </Layout>
    )
}
