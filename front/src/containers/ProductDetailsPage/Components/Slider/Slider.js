import React, { useState } from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import { generatePublicUrl } from '../../../../urlConfig'

export default function Slider(props) {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== props.item.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === props.item.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(props.item.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div>
            <div className="container-slider">
                {
                    props.item.map((obj, index) => {
                        return (
                            <div
                                onClick={props.onClick}
                                key={obj.id}
                                className={slideIndex === index + 1 ? "slide1 active-anim" : "slide1"}
                            >
                                <img
                                    src={generatePublicUrl(obj.img)}
                                />
                            </div>
                        )
                    })}
                <BtnSlider moveSlide={nextSlide} direction={"next"} />
                <BtnSlider moveSlide={prevSlide} direction={"prev"} />


                <div className="container-dots">
                    {Array.from({ length: props.item.length }).map((item, index) => (
                        <div
                            onClick={() => moveDot(index + 1)}
                            className={slideIndex === index + 1 ? "dot active" : "dot"}
                        ></div>
                    ))}
                </div>
            </div>
            {props.miniImg && <div className='containerMiniImg'>
                {
                    props.item.map((obj, index) => {
                        return (
                            <div
                                key={obj.id}
                                onClick={() => moveDot(index + 1)}

                                className={slideIndex === index + 1 ? "miniImg active-mini" : "miniImg"}
                            >
                                <img
                                    src={generatePublicUrl(obj.img)}
                                />
                            </div>
                        )
                    })}
            </div>}
        </div>
    )
}
