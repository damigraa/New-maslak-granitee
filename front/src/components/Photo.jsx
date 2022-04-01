import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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


  let photos = [
    {
      id: 1,
      photo: 'https://home-granit.ru/images/zavod/1.jpg',
    },
    {
      id: 2,
      photo: 'https://home-granit.ru/images/zavod/2.jpg',
    },
    {
      id: 3,
      photo: 'https://home-granit.ru/images/zavod/3.jpg',
    },
    {
      id: 4,
      photo: 'https://home-granit.ru/images/zavod/4.jpg',
    },
    {
      id: 5,
      photo: 'https://home-granit.ru/images/zavod/1.jpg',
    },
    {
      id: 6,
      photo: 'https://home-granit.ru/images/zavod/2.jpg',
    },
    {
      id: 7,
      photo: 'https://home-granit.ru/images/zavod/3.jpg',
    },
    {
      id: 8,
      photo: 'https://home-granit.ru/images/zavod/4.jpg',
    },
  ];


  return (
    <div className="slider">
      <h2>Фотогалерия мастерской</h2>
      <Slider {...settings}>
        {photos.map((p) => (
          <div className="Photo" key={p.id}>
            <img height="250px" src={p.photo} />
          </div>
        ))}
      </Slider>
    </div>
  );
}