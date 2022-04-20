import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductPage } from '../../../actions';
import getParams from '../../../utils/getParams';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from '../../../components/UI/Card';
import { generatePublicUrl } from '../../../urlConfig';


const ProductPage = (props) => {

    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    const { page } = product;

    useEffect(() => {
        const params = getParams(props.location.search);
        // console.log({params});
        const payload = {
            params
        }
        dispatch(getProductPage(payload));
    }, []);


    return (
        <div style={{ margin: "10px" }} className="productPage">
            <h2 style={{ margin: "0 auto", textAlign: "center" }}>{page.title}</h2>
            <div
                style={{ height: "300px", maxWidth: "1300px", margin: "0 auto" }}
            >
                <Carousel
                    renderThumbs={() => { }}
                >
                    {
                        page.banners && page.banners.map((banner, index) =>

                            <a
                                style={{ display: "block" }}
                                key={index}
                                href={banner.navigateTo}
                            >
                                <img
                                    style={{ height: "300px", maxWidth: "1300px" }}
                                    className="productPage__a-img"
                                    src={generatePublicUrl(banner.img)} alt="" />
                            </a>
                        )
                    }
                </Carousel>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                margin: '10px 0'
            }}>
                {
                    page.products && page.products.map((product, index) =>
                        <Card
                            key={index}
                            style={{
                                width: '300px',
                                height: '200px',
                                margin: '5px'
                            }}
                        >
                            <a style={{
                                width: '100%',
                                height: '100%',
                                display: "block"
                            }}
                                href={product.navigateTo}
                                key={index}

                            >
                                <img style={{
                                    width: '100%',
                                    height: '100%',
                                    display: "block"

                                }}
                                    src={product.img} alt="" />
                            </a>
                        </Card>
                    )
                }
            </div>
        </div>
    )

}

export default ProductPage