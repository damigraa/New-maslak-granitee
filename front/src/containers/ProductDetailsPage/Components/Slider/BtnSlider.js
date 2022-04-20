import React from "react";
import "./Slider.css";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
  
  const replaceImg = (e) => {
    e.preventDefault()
    moveSlide()
  }
  return (
    <button
      onClick={(e) => { replaceImg(e) }}
      className={direction === "next" ? "btn-slide1 next" : "btn-slide1 prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}
