import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
  };

  const images = [
    { id: 1, url: "/SliderImages/Slider01.jpeg" },
    { id: 2, url: "/SliderImages/Slider02.jpeg" },
    { id: 3, url: "/SliderImages/Slider03.jpeg" },
    { id: 4, url: "/SliderImages/Slider04.jpeg" },
  ];

  return (
    <div style={{ overflow: 'hidden', padding: '10px 0' }}>
      <Slider {...settings} style={{ width: '100%' }}>
        {images.map((image) => (
          <div key={image.id} style={{ padding: '5px', boxSizing: 'border-box' }}>
            <img src={image.url} alt="" style={{ width: "100%", height: "600px", objectFit: 'cover' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
