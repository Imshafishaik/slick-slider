import React from "react";
import Slider from "react-slick";
import "./App.css";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";


export default function SimpleSlider() {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="right_btn" onClick={onClick}><IoIosArrowDropright /> </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div  className="left_btn" onClick={onClick}><IoIosArrowDropleft /></div>
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <Slider {...settings}>
      <div className="hello">
        <h3>1</h3>
      </div>
      <div className="hello">
        <h3>2</h3>
      </div>
      <div className="hello">
        <h3>3</h3>
      </div>
      <div className="hello">
        <h3>4</h3>
      </div>
      <div className="hello">
        <h3>5</h3>
      </div>
      <div className="hello">
        <h3>6</h3>
      </div>
    </Slider>
  );
}