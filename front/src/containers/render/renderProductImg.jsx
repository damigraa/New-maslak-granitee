import React from 'react';
import { generatePublicUrl } from '../../urlConfig';



const RenderProductImg = ({ product }) => {
    if (!product.productDetails) {
        return null
    }
    return (
        <div>
            <div className="productDescImgContainer">
                <img className="productImgC" src={generatePublicUrl(product.productDetails.productPictures[0].img) || null} alt={`${product.productDetails.productPictures[0].img}`} />
            </div>
            <div className="images-view-wrap">
                <div className="images-view-list" >
                    <div className="images-view-item" style={{ display: "flex" }}>
                        {product.productDetails.productPictures.map((picture) => (
                            <div key={picture._id}>
                                <img src={generatePublicUrl(picture.img)} />
                            </div>
                        ))}
                    </div>
                    {/* <div className="images-view-item">
                        {
                            product.productDetails.productPictures.map((thumb, index) =>
                                <div key={thumb._id} >
                                    <img src={generatePublicUrl(thumb.img)} alt={thumb.img} />
                                </div>
                            )

                        }
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default RenderProductImg



