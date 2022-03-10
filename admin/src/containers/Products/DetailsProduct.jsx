import React from 'react'
import { Container, Row, Col, Table } from "react-bootstrap";
import Modal from "../../components/UI/Modal";
import { generatePublicUrl } from '../../urlConfig'


export const DetailsProduct = ({ productDetailModal, setProductDetailModal,handleCloseProductDetailsModal, productDetails }) => {
    if (!productDetails) {
        return null;
    }

    return (
        <Modal
            show={productDetailModal}
            handleClose={() => setProductDetailModal(false)}
            modalTitle={"Подробное описание"}
            size="lg"
        >
            <Row>
                <Col md="6">
                    <label className="key">Имя</label>
                    <p className="value">{productDetails.name}</p>
                </Col>
                <Col md="6">
                    <label className="key">Цена</label>
                    <p className="value">От {productDetails.price} руб.</p>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <label className="key">В Наличии</label>
                    <p className="value">{productDetails.quantity}</p>
                </Col>
                <Col md="6">
                    <label className="key">Категория</label>
                    <p className="value">{productDetails.category.name}</p>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <label className="key">Подробное Описание</label>
                    <p className="value">{productDetails.description}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label className="key">Фотографии</label>
                    <div style={{ display: "flex" }}>
                        {productDetails.productPictures.map((picture) => (
                            <div className="productImgContainer">
                                <img src={generatePublicUrl(picture.img)} />
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Modal>
    );
}
