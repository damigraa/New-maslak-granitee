import React from 'react'
import { Breed } from '../../../components/MaterialUI'
import { IoIosArrowForward } from 'react-icons/io';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



const Container = (props) => {
    return (
        <>
            <div className="container-fluid CC">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="containerRi">
                            <Breed
                                breed={[
                                    { name: "Главная", href: "/" },
                                    // { name: "Памятники", href: "/a" },
                                    // { name: "Вертикальные", href: "/account/orders" },
                                ]}
                                breedIcon={<IoIosArrowForward />}
                            />
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Container