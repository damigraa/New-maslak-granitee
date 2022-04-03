import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from 'react-redux';
import { getGallery } from './../actions/components/gallery';
import { generatePublicUrl } from "../urlConfig";

export default function Photo() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1400,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  // const gallery = useSelector(state => state.gallery)
  const dispatch = useDispatch()

  const gallery = useSelector((state) => state.gallery.galleries.filter((item) => item.name === "foto"))

  console.log(gallery)
  useEffect(() => {
    dispatch(getGallery())
  }, [])

  const renderGallery = () => {

    return (
      <>
        {
          gallery.map((item) => (

            <Slider {...settings}>
              {item.galleryPictures.map((i, index) =>
                <div className="foto">
                  <img
                    height="250px"
                    key={index}
                    src={generatePublicUrl(i.img)}
                    alt={gallery.name}
                  />

                </div>
              )}
            </Slider>
          ))
        }
      </>
    )
  }


  return (
    <div className="slider">
      <h2>Фотогалерия мастерской</h2>
      {renderGallery()}
    </div>
  );
}