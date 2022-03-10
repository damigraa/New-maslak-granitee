import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function EngravingSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
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


  let photos = [
    {
      id: 1,
      photo: 'https://home-granit.ru/images//gravkontent/vertikal/14.jpg',
    },
    {
      id: 2,
      photo: 'https://home-granit.ru/images//gravkontent/vertikal/15.jpg',
    },
    {
      id: 3,
      photo: 'https://home-granit.ru/images//gravkontent/vertikal/16.jpg'
    },
    {
      id: 4,
      photo: 'https://home-granit.ru/images//gravkontent/vertikal/17.jpg',
    },
    {
      id: 5,
      photo: 'https://home-granit.ru/images//gravkontent/vertikal/18.jpg',
    },
    {
      id: 6,
      photo: 'https://home-granit.ru/images//gravkontent/vertikal/19.jpg',
    },
    {
      id: 7,
      photo: 'https://home-granit.ru/images//gravkontent/vertikal/20.jpg',
    },
    {
      id: 8,
      photo: 'https://home-granit.ru/images//gravkontent/vertikal/21.jpg',
    },
    {
      id: 9,
      photo: 'https://home-granit.ru/images//gravkontent/vertikal/22.jpg',
    },
    {
      id: 10,
      photo: 'https://home-granit.ru/images//gravkontent/vertikal/23.jpg',
    },
    {
      id: 11,
      photo: 'https://home-granit.ru/images//gravkontent/vertikal/24.jpg'
    },
    {
      id: 12,
      photo: 'https://home-granit.ru/images//gravkontent/vertikal/25.jpg',
    },
    {
      id: 13,
      photo: 'https://home-granit.ru/images//gravkontent/vertikal/26.jpg',
    },
    {
      id: 14,
      photo: 'https://home-granit.ru/images//gravkontent/vertikal/27.jpg',
    },
    {
      id: 15,
      photo: 'https://home-granit.ru/images//gravkontent/vertikal/28.jpg',
    },
    {
      id: 16,
      photo: 'https://home-granit.ru/images//gravkontent/vertikal/29.jpg',
    },
  ];
  return (
    <div className="slider">
      <Slider {...settings}>
        {photos.map((p) => (
          <div className="Photo">
            <img style={{height: "300px", width: "190px"}} src={p.photo} alt={p.id}/>
            <br />
          </div>
        ))}
      </Slider>
    </div>
  );
}