import React, { useState, useEffect, useRef } from 'react'
import { IoMdClose } from 'react-icons/io';
import { generatePublicUrl } from '../../../urlConfig';
import { Button } from '@material-ui/core';

const RenderEngravingModal = ({ showEpitaph, setShowEpitaph, gallery, setMiniImg, setTest, setShowImgFull }) => {

    const chooseLayout = (item) => {
        setShowEpitaph(false)
        setMiniImg(true)
        setTest(item)
    }

    const Edit = (e) => {
        console.log("Open")
        e.preventDefault()
        setShowImgFull(true)
    }
    return (
        <div>
            <div
                className={showEpitaph ? "engravingModal__dropdown active" : "engravingModal__dropdown"}
                onClick={e => e.stopPropagation()}
            >
                <div className={showEpitaph ? "engravingModal__backdrop active" : "engravingModal__backdrop"} ></div>
                <div className="engravingModal__content " >
                    <div className="engravingModal__header-container">
                        <div className="engravingModal__title">
                            Выберите макет
                        </div>
                        <div className="engravingModal__close-icon-container">
                            <div className="engravingModal__close-icon" onClick={() => setShowEpitaph(false)}>
                                <IoMdClose />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {gallery.length > 0 ? gallery[0].galleryPictures.map((item, index) => (
                            <div key={index} className="col-lg-6 col-md-6 col-sm-6 col-xs-6" >
                                <div className="engravingModal__container" >
                                    <div className="engravingModal__block-img">
                                        <img
                                            onClick={Edit}
                                            src={generatePublicUrl(item.img)} alt="" />
                                    </div>
                                    <div className="text-center mt-1">
                                        {index + 1}
                                    </div>
                                    <div className="text-center mt-1">
                                        <Button onClick={() => chooseLayout(item)} variant="contained">Выбрать</Button>
                                    </div>
                                </div>
                            </div>
                        )) : "Пусто"}
                    </div>
                </div>
            </div >
        </div>
    )
}

export default RenderEngravingModal
