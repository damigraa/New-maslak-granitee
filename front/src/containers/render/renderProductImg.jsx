import React from 'react';
import { generatePublicUrl } from '../../urlConfig';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider from '../ProductDetailsPage/Components/Slider/Slider';

const RenderProductImg = ({ product, setShow }) => {
    if (!product.productDetails) {
        return null
    }


    const Edit = (e) => {
        e.preventDefault()
        setShow(true)
    }
    return (

        <div className="carousel-wrapper">
            <Slider
                item={product.productDetails.productPictures}
                onClick={(e) => Edit(e)}
                miniImg
            />
            {/* 
            <Carousel

            >
                {product.productDetails.productPictures.map((picture) => (

                    <div
                        onClick={(e) => Edit(e)}
                        className="productDetailsContainerImg" key={picture._id}>
                        <img
                            src={generatePublicUrl(picture.img) || null} alt={`${product.productDetails.productPictures[0].img}`} />
                    </div>
                ))}
            </Carousel> */}
        </div>
    )
}

export default RenderProductImg




