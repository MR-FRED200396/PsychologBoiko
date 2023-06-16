import style from "./sliderAbout.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export default function SliderAbout() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <img className={style.dyplom} src="dyplom.jpeg" alt="dyplom_img" />
        </div>
        <div>
          <img
            className={style.dyplom}
            src="certificate_of_participation.jpeg"
            alt="certificate_of_participation.jpeg"
          />
        </div>
        <div>
          <img
            className={style.dyplom}
            src="certificate_panic_atac.jpeg"
            alt="certificate_panic_atac.jpeg"
          />
        </div>
        <div>
          <img
            className={style.dyplom}
            src="certificate_rhp.jpeg"
            alt="certificate_rhp.jpeg"
          />
        </div>
      </Slider>
      <div className={style.slide_elem}>1</div>
    </>
  );
}
