import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function MonumentSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1800,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }, {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
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
      photo: 'https://home-granit.ru/images/f6/f69374f7390098ef786403b3c3c9996e.jpg',
      price: 15000
    },
    {
      id: 2,
      photo: 'https://home-granit.ru/images//d1/d1c605364a7052e54fd761e48f008a47.jpg',
      price: 25000
    },
    {
      id: 3,
      photo: 'https://home-granit.ru/images/fe/fee8d80f50891e4ec81e937cc1c9cc34.jpg',
      price: 27000
    },
    {
      id: 4,
      photo: 'https://home-granit.ru/images/dd/dd6fb91e1475d5f15977452aed267c9b.jpg',
      price: 27000
    },
    {
      id: 5,
      photo: 'https://home-granit.ru/images/aa/aa1cd7102d48628ff8eb97fe7092cb19.jpg',
      price: 29000
    },
    {
      id: 6,
      photo: 'https://home-granit.ru/images/27/27129683619de1efa954875191117ffe.jpg',
      price: 35000
    },
    {
      id: 7,
      photo: 'https://home-granit.ru/images/90/90ac81084cf2b567ab98a4c1bbe5b557.jpg',
      price: 45000
    },
    {
      id: 8,
      photo: 'https://home-granit.ru/images/82/8235c71b477d5e82021a834df279b5f4.jpg',
      price: 50000
    },
  ];


  return (
    <div className="slider">
      <Slider {...settings}>
        {photos.map((p) => (
          <div className="Photo">
            <img height="300px" width="200px" src={p.photo} />
            <span> От {p.price} руб.</span>
            <br />
            <a href="/product/9" className="btn btn-secondary " >Калькулятор под ключ</a>
          </div>
        ))}
      </Slider>
      <div className="pt-5"
        style={{ textAlign: 'center', margin: "0 auto" }}
      >
        <a href="/app-home" className="btn-default btn btn-large">
          Посмотреть другие модели
        </a>
      </div>
    </div>
  );
}