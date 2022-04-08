import React from 'react';
import { generatePublicUrl } from '../../urlConfig';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const RenderProductImg = ({ product }) => {
    if (!product.productDetails) {
        return null
    }
    return (

        <div className="carousel-wrapper">
            <Carousel

            >
                {product.productDetails.productPictures.map((picture) => (

                    <div className="productDetailsContainerImg" key={picture._id}>
                        <img src={generatePublicUrl(picture.img) || null} alt={`${product.productDetails.productPictures[0].img}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default RenderProductImg




