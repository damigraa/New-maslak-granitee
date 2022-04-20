import React, { useState } from 'react'
import ProductImgSliderModal from './ProductImgSliderModal';
import { Col, Row, Carousel } from 'react-bootstrap';
import Container from './../ProductListPage/ClothingAndAccessories/Container';
import { generatePublicUrl } from '../../urlConfig';
import BtnSlider from './BtnSlider';
import Slider from './Components/Slider/Slider';

const ProductModalContainer = ({ show, handleClose, item }) => {

    return (
        <ProductImgSliderModal
            size="xl"
            modalTitle="Просмотр фотографий"
            show={show}
            handleClose={handleClose}>
            <div>
                <Slider
                    item={item.productPictures}
                    onClick
                />
            </div>
        </ProductImgSliderModal >
    )
}

export default ProductModalContainer
